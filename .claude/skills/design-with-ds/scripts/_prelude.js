// =============================================================================
// PRELUDE Solar UI — à COLLER EN TÊTE d'un appel use_figma, puis appeler les
// helpers dans ton code. use_figma est isolé : rien ne persiste entre appels,
// donc ce bloc doit être présent dans CHAQUE script qui utilise les helpers.
//
// Les `key` viennent du cache .claude/knowledge/ :
//   couleur  -> foundation/colors.json     -> tokens['Palette/…'].key
//   spacing  -> foundation/spacing.json    -> tokens['Sizes/…'].key
//   typo     -> foundation/typography.json -> textStyles[Famille].items[i].key
//   composant-> components/*.json          -> components[].componentKey
//                                          + instanceSchemas[name] (type/props)
//
// Rappels use_figma : couleurs en 0–1, fills = tableaux read-only (cloner),
// charger la font avant toute mutation de texte, tout Promise `await`é,
// et `return` les IDs créés/mutés.
// =============================================================================

// Lie une couleur sémantique (clé Palette/*) au fill (défaut) ou au stroke d'un nœud.
// field: 'fills' | 'strokes'. Renvoie l'id de la variable liée.
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

// Applique un style de texte du DS (clé textStyles[*].items[*].key) à un nœud TEXT.
// Charge la font du style avant application. Renvoie l'id du style.
async function applyText(node, styleKey) {
  const style = await figma.importStyleByKeyAsync(styleKey);
  await figma.loadFontAsync(style.fontName); // évite "Cannot write to node with unloaded font"
  await node.setTextStyleIdAsync(style.id);
  return style.id;
}

// Lie un token d'espacement/rayon (clé Sizes/*) à une propriété d'un nœud.
// prop: 'itemSpacing' | 'paddingLeft' | 'paddingRight' | 'paddingTop'
//     | 'paddingBottom' | 'topLeftRadius' | 'topRightRadius'
//     | 'bottomLeftRadius' | 'bottomRightRadius' | … . Renvoie l'id de la variable.
async function bindSpacing(node, prop, spacingKey) {
  const variable = await figma.variables.importVariableByKeyAsync(spacingKey);
  node.setBoundVariable(prop, variable);
  return variable.id;
}

// Instancie un composant du DS depuis le cache.
//   componentKey : components[].componentKey
//   kind         : instanceSchemas[name].instantiate ('componentSet' | 'component')
//   properties   : objet passé à setProperties (clés de instanceSchemas[name].properties)
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
// const card = figma.createAutoLayout('VERTICAL', { name: 'Sign up card' });
// figma.currentPage.appendChild(card);
// await applyColor(card, 'CLE_PALETTE_BACKGROUND');            // fond de carte
// await bindSpacing(card, 'itemSpacing', 'CLE_SIZES_GAP');     // gap vertical
// await bindSpacing(card, 'paddingTop', 'CLE_SIZES_PADDING');  // padding
//
// const title = figma.createText();
// card.appendChild(title);
// await applyText(title, 'CLE_TITLE_1');
// title.characters = 'Create your account';
//
// const input = await instantiate({
//   componentKey: 'CLE_INPUT_TEXT',
//   kind: 'componentSet',
//   properties: { 'Label#9341:8': 'Email', '[State]': 'Default' },
// });
// card.appendChild(input);
//
// return { createdNodeIds: [card.id, title.id, input.id] };
// -----------------------------------------------------------------------------
