// =============================================================================
// AUDIT DE CONFORMITÉ — à lancer avant de conclure une itération
// À coller dans un appel use_figma. Renseigne ROOT_ID (id de la section ou du
// frame racine de l'itération). Renvoie les violations aux règles du DS :
//   - texte sans style (textStyleId vide)
//   - fill SOLID visible non lié à une variable
//   - espacement/padding en dur (auto-layout non lié à un token)
//
// On NE descend PAS dans les INSTANCE : leur intérieur est géré par la
// bibliothèque et produirait des faux positifs. On audite donc uniquement le
// custom et la composition.
// =============================================================================

const ROOT_ID = 'PASTE_SECTION_ID';
const root = await figma.getNodeByIdAsync(ROOT_ID);
if (!root) throw new Error(`Nœud racine introuvable: ${ROOT_ID}`);

// Traversée qui n'entre pas dans les instances
const nodes = [];
(function walk(node) {
  nodes.push(node);
  if (node.type === 'INSTANCE') return; // black box DS
  if ('children' in node) for (const c of node.children) walk(c);
})(root);

const issues = { unstyledText: [], unboundFills: [], unboundSpacing: [] };

for (const n of nodes) {
  if (n.type === 'INSTANCE') continue; // ni fills ni spacing internes à auditer

  // 1. Texte sans style
  if (n.type === 'TEXT' && n.textStyleId === '') {
    issues.unstyledText.push({ id: n.id, name: n.name, sample: String(n.characters).slice(0, 24) });
  }

  // 2. Fill SOLID visible non lié à une variable
  if ('fills' in n && Array.isArray(n.fills)) {
    const bound = (n.boundVariables && n.boundVariables.fills) || [];
    n.fills.forEach((p, i) => {
      if (p.type === 'SOLID' && p.visible !== false && !bound[i]) {
        issues.unboundFills.push({ id: n.id, name: n.name, index: i });
      }
    });
  }

  // 3. Espacement / padding en dur sur auto-layout
  if ('layoutMode' in n && n.layoutMode !== 'NONE') {
    const bv = n.boundVariables || {};
    for (const prop of ['itemSpacing', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom']) {
      if (n[prop] > 0 && !bv[prop]) {
        issues.unboundSpacing.push({ id: n.id, name: n.name, prop, value: n[prop] });
      }
    }
  }
}

const counts = {
  unstyledText: issues.unstyledText.length,
  unboundFills: issues.unboundFills.length,
  unboundSpacing: issues.unboundSpacing.length,
};

return {
  ok: counts.unstyledText === 0 && counts.unboundFills === 0 && counts.unboundSpacing === 0,
  audited: nodes.length,
  counts,
  issues, // détail par nœud pour corriger de façon ciblée
};
