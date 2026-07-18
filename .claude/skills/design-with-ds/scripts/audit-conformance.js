// =============================================================================
// AUDIT DE CONFORMITÉ — à lancer avant de conclure un écran / une maquette
// À coller dans un appel use_figma. Renseigne ROOT_ID (id du nœud racine de la
// zone à auditer : section ou frame). Renvoie les violations aux règles du DS :
//   - texte sans style (textStyleId vide)
//   - fill SOLID visible non lié à une variable
//   - espacement/padding en dur (auto-layout non lié à un token)
//   - clipsContent activé hors cas légitimes (viewport d'écran, masque de média)
//   - fill présent mais masqué (visible: false) — état ambigu : soit le fill
//     est supprimé (conteneur transparent), soit il est visible et lié
//   - instance du DS atténuée à la main (opacity < 1) — un état (disabled,
//     inactif…) doit venir du variant du composant, jamais d'une opacité posée
//     par-dessus
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

const issues = { unstyledText: [], unboundFills: [], unboundSpacing: [], clippedContainers: [], hiddenFills: [], dimmedInstances: [] };

for (const n of nodes) {
  // 6. Instance du DS atténuée à la main — l'état doit venir du variant
  if (n.type === 'INSTANCE' && n.opacity !== 1) {
    issues.dimmedInstances.push({ id: n.id, name: n.name, opacity: n.opacity });
  }
  if (n.type === 'INSTANCE') continue; // ni fills ni spacing internes à auditer

  // 1. Texte sans style
  if (n.type === 'TEXT' && n.textStyleId === '') {
    issues.unstyledText.push({ id: n.id, name: n.name, sample: String(n.characters).slice(0, 24) });
  }

  // 2. Fill SOLID visible non lié à une variable
  // 5. Fill présent mais masqué — un conteneur transparent n'a AUCUN fill ;
  //    un fill `visible: false` (même lié) est un état ambigu qui fait
  //    disparaître silencieusement un fond attendu
  if ('fills' in n && Array.isArray(n.fills)) {
    const bound = (n.boundVariables && n.boundVariables.fills) || [];
    n.fills.forEach((p, i) => {
      if (p.type === 'SOLID' && p.visible !== false && !bound[i]) {
        issues.unboundFills.push({ id: n.id, name: n.name, index: i });
      }
      if (p.visible === false) {
        issues.hiddenFills.push({ id: n.id, name: n.name, index: i, type: p.type });
      }
    });
  }

  // 4. clipsContent activé hors cas légitimes. Exemptés : la racine auditée si
  //    c'est un frame (viewport d'écran), les enfants directs d'une SECTION
  //    racine (frames d'écran / composants plein écran), et les nœuds portant
  //    un fill IMAGE visible (masque de média). Même exemptés, le clip doit
  //    être une intention (page, média, zone scrollable) — jamais un défaut.
  if ('clipsContent' in n && n.clipsContent === true) {
    const isRootViewport = n === root && n.type !== 'SECTION';
    const isScreenChild = root.type === 'SECTION' && n.parent === root;
    const hasImageFill = 'fills' in n && Array.isArray(n.fills) &&
      n.fills.some(p => p.type === 'IMAGE' && p.visible !== false);
    if (!isRootViewport && !isScreenChild && !hasImageFill) {
      issues.clippedContainers.push({ id: n.id, name: n.name, type: n.type });
    }
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
  clippedContainers: issues.clippedContainers.length,
  hiddenFills: issues.hiddenFills.length,
  dimmedInstances: issues.dimmedInstances.length,
};

return {
  ok: Object.values(counts).every(c => c === 0),
  audited: nodes.length,
  counts,
  issues, // détail par nœud pour corriger de façon ciblée
};
