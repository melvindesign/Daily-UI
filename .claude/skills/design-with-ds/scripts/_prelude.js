// =============================================================================
// PRELUDE — mécaniques DS génériques à COLLER EN TÊTE d'un appel use_figma,
// puis appeler les helpers dans ton code. use_figma est isolé : rien ne persiste
// entre appels, donc ce bloc doit être présent dans CHAQUE script qui les utilise.
//
// Les `key` viennent de la knowledge (voir ../references/knowledge-cache.md) :
// chaque token de couleur / d'espacement, chaque style de texte et chaque
// composant y porte sa propre clé d'import. Résous-la par rôle sémantique.
//
// Rappels use_figma : couleurs en 0–1, fills = tableaux read-only (cloner),
// charger la font avant toute mutation de texte, tout Promise `await`é,
// et `return` les IDs créés/mutés.
// =============================================================================

// Lie une couleur sémantique (clé d'un token de couleur du DS) au fill (défaut)
// ou au stroke d'un nœud. field: 'fills' | 'strokes'. Renvoie l'id de la variable.
async function applyColor(node, colorKey, field = 'fills') {
  const variable = await figma.variables.importVariableByKeyAsync(colorKey);
  const current = Array.isArray(node[field]) ? node[field] : [];
  const base = current.length
    ? current
    : [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]; // paint support si le nœud n'en a pas
  const next = base.slice();
  next[0] = figma.variables.setBoundVariableForPaint(next[0], 'color', variable); // renvoie un NOUVEAU paint
  node[field] = next; // réassignation obligatoire (tableau read-only)
  return variable.id;
}

// Applique un style de texte du DS (clé d'un style de texte de la knowledge) à un
// nœud TEXT. Charge la font du style avant application. Renvoie l'id du style.
async function applyText(node, styleKey) {
  const style = await figma.importStyleByKeyAsync(styleKey);
  await figma.loadFontAsync(style.fontName); // évite "Cannot write to node with unloaded font"
  await node.setTextStyleIdAsync(style.id);
  return style.id;
}

// Lie un token d'espacement/rayon (clé d'un token d'espacement du DS) à une
// propriété d'un nœud.
// prop: 'itemSpacing' | 'paddingLeft' | 'paddingRight' | 'paddingTop'
//     | 'paddingBottom' | 'topLeftRadius' | 'topRightRadius'
//     | 'bottomLeftRadius' | 'bottomRightRadius' | … . Renvoie l'id de la variable.
async function bindSpacing(node, prop, spacingKey) {
  const variable = await figma.variables.importVariableByKeyAsync(spacingKey);
  node.setBoundVariable(prop, variable);
  return variable.id;
}

// Instancie un composant du DS depuis la knowledge.
//   componentKey : clé d'import du composant (résolue dans la knowledge)
//   kind         : type d'instanciation ('componentSet' | 'component')
//   properties   : objet passé à setProperties (clés déclarées par la knowledge)
// Renvoie l'instance (pense à l'appendChild puis à return son id).
async function instantiate({ componentKey, kind = 'componentSet', properties }) {
  let inst;
  if (kind === 'componentSet') {
    const set = await figma.importComponentSetByKeyAsync(componentKey);
    inst = set.defaultVariant.createInstance();
  } else {
    const comp = await figma.importComponentByKeyAsync(componentKey);
    inst = comp.createInstance();
  }
  if (properties) inst.setProperties(properties);
  return inst;
}

// -----------------------------------------------------------------------------
// EXEMPLE d'usage (à adapter, puis à coller sous le prelude) :
//
// const card = figma.createAutoLayout('VERTICAL', { name: 'Card' });
// figma.currentPage.appendChild(card);
// await applyColor(card, 'CLE_COULEUR_FOND');                 // fond de carte
// await bindSpacing(card, 'itemSpacing', 'CLE_ESPACEMENT_GAP');   // gap vertical
// await bindSpacing(card, 'paddingTop', 'CLE_ESPACEMENT_PADDING'); // padding
//
// const title = figma.createText();
// card.appendChild(title);
// await applyText(title, 'CLE_STYLE_TITRE');
// title.characters = 'Titre de la carte';
//
// const input = await instantiate({
//   componentKey: 'CLE_COMPOSANT_CHAMP',
//   kind: 'componentSet',
//   properties: { 'Label#9341:8': 'Email', '[State]': 'Default' },
// });
// card.appendChild(input);
//
// return { createdNodeIds: [card.id, title.id, input.id] };
// -----------------------------------------------------------------------------
