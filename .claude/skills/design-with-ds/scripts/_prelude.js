// =============================================================================
// PRELUDE — mécaniques DS génériques à COLLER EN TÊTE d'un appel use_figma,
// puis appeler les helpers dans ton code. use_figma est isolé : rien ne persiste
// entre appels, donc ce bloc doit être présent dans CHAQUE script qui les utilise.
//
// Deux blocs, à coller SÉPARÉMENT selon le besoin de l'appel — le prelude est
// repayé à chaque appel, ne colle pas ce que tu n'utilises pas :
//   1. NOYAU — couleur, texte, espacement, conteneur, mode, instanciation,
//      préchargement des fontes. Présent dans la quasi-totalité des appels.
//   2. TEXTE LONG & OVERRIDES D'INSTANCE — à ajouter quand l'appel pose un
//      paragraphe ou personnalise le contenu d'une instance.
//
// Les `key` viennent de la knowledge (voir ../references/knowledge-cache.md) :
// chaque token de couleur / d'espacement, chaque style de texte et chaque
// composant y porte sa propre clé d'import. Résous-la par rôle sémantique.
//
// Rappels use_figma : couleurs en 0–1, fills = tableaux read-only (cloner),
// charger la font avant toute mutation de texte, tout Promise `await`é,
// et `return` les IDs créés/mutés.
// =============================================================================

// -----------------------------------------------------------------------------
// 1. NOYAU
// -----------------------------------------------------------------------------

// Précharge TOUS les styles des familles de police du DS. À appeler en PREMIÈRE
// instruction de tout appel qui instancie un composant ou écrit du texte.
// Pourquoi ce helper existe : applyText/setText chargent la fonte du nœud qu'on
// manipule, mais une fonte arrive AUSSI avec une instance importée — et
// `parent.appendChild(instance)` lève alors « unloaded font "<famille> <style>" »
// avant tout accès au texte. Le cas se produit dès le premier composant posé.
// Les familles se lisent dans la foundation typographique de la knowledge (jamais
// codées ici) ; les styles inexistants sont ignorés sans faire échouer l'appel.
async function preloadFonts(families, styles = ['Regular', 'Medium', 'SemiBold', 'Bold']) {
  const loaded = [];
  for (const family of families) {
    for (const style of styles) {
      try { await figma.loadFontAsync({ family, style }); loaded.push(`${family} ${style}`); }
      catch (e) { /* style absent de cette famille : sans conséquence */ }
    }
  }
  return loaded;
}

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

// Écrit des caractères dans un nœud TEXT existant en chargeant ses fontes
// COURANTES (pas une fonte par défaut). C'est le cas d'usage quotidien dès qu'on
// consomme un DS : override de texte sur une instance, texte imbriqué dans une
// instance de composant local, nœud déjà stylé par un style du DS. Écrire
// `node.characters = …` sans ce load lève « Cannot write to node with unloaded
// font ». Utilise applyText() d'abord si le nœud doit AUSSI recevoir un style.
async function setText(node, chars) {
  const segments = node.getStyledTextSegments(['fontName']);
  for (const s of segments) await figma.loadFontAsync(s.fontName);
  if (!segments.length) await figma.loadFontAsync(node.fontName); // nœud vide
  node.characters = chars;
  return node.id;
}

// Crée un conteneur auto-layout PROPRE. `figma.createAutoLayout()` pose un fill
// blanc opaque ET `clipsContent = true` : deux violations des règles du skill
// (aucun fill par défaut, clip désactivé par défaut) à corriger après coup sur
// chaque conteneur créé. Ce wrapper les neutralise à la création. Passe un
// `bgKey` seulement si le conteneur porte réellement un fond sémantique.
async function autoLayout(parent, direction = 'VERTICAL', { name, bgKey } = {}) {
  const frame = figma.createAutoLayout(direction, name ? { name } : undefined);
  if (parent) parent.appendChild(frame); // parenter AVANT tout HUG/FILL
  frame.clipsContent = false;
  if (bgKey) await applyColor(frame, bgKey);
  else frame.fills = []; // transparent, jamais le blanc par défaut
  return frame;
}

// Applique explicitement un mode d'une collection de variables NON LOCALE
// (breakpoint, thème…) sur un nœud. Dans un fichier consommateur, l'id de la
// collection diffère de celui du fichier du DS : on la résout donc à l'exécution
// depuis n'importe quelle variable importée de cette collection, au lieu de coder
// l'id en dur. `anyVariableKey` = la clé d'un token quelconque de la collection
// visée ; `modeId` = l'id du mode, lu dans la knowledge (les modeIds, eux, sont
// stables entre fichiers).
async function applyMode(node, anyVariableKey, modeId) {
  const variable = await figma.variables.importVariableByKeyAsync(anyVariableKey);
  const collection = await figma.variables.getVariableCollectionByIdAsync(variable.variableCollectionId);
  node.setExplicitVariableModeForCollection(collection, modeId);
  return collection.id;
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
// 2. TEXTE LONG & OVERRIDES D'INSTANCE
// À ajouter au noyau quand l'appel pose un paragraphe ou personnalise le contenu
// d'une instance.
// -----------------------------------------------------------------------------

// Crée un nœud texte qui RETOURNE À LA LIGNE (titre sur deux lignes, chapô,
// paragraphe) dans un conteneur auto-layout.
// L'ordre des opérations est le piège : un nœud texte naît en
// textAutoResize = 'WIDTH_AND_HEIGHT', qui IGNORE le sizing FILL — poser FILL
// avant d'écrire réduit le nœud à une colonne d'une lettre par ligne, et le bug
// ne se voit qu'à la capture. Il faut donc écrire, figer une largeur, passer en
// 'HEIGHT', et seulement ensuite laisser le parent piloter la largeur.
// `fill = true` : la largeur suit le conteneur ; `false` : elle reste à `width`.
async function wrapText(parent, styleKey, chars, colorKey, width, { fill = false } = {}) {
  const t = figma.createText();
  parent.appendChild(t);
  await applyText(t, styleKey);
  await setText(t, chars);
  if (colorKey) await applyColor(t, colorKey);
  t.textAutoResize = 'NONE';
  t.resize(width, 24);          // hauteur provisoire, reprise juste après
  t.textAutoResize = 'HEIGHT';  // largeur figée, hauteur = contenu
  if (fill) t.layoutSizingHorizontal = 'FILL';
  return t;
}

// Récupère les nœuds TEXT d'une instance, en profondeur, pour les overrides.
// Pourquoi pas findAll / query / findOne : sous les SLOT d'une instance, ces
// méthodes renvoient des handles INVALIDES — `Node with id "I…;…;…" not found`
// dès qu'on lit `characters` ou qu'on appelle getStyledTextSegments. Seule la
// descente explicite par `.children` donne des nœuds manipulables.
// Limite connue : si le slot appartient à une instance IMBRIQUÉE dans l'instance
// (composant fait de sous-composants), son contenu n'est éditable par AUCUNE
// méthode. Ce n'est pas un bug d'accès mais un composant fermé : compose une
// surface liée aux tokens plutôt que de forcer l'override.
function instanceTexts(node, acc = []) {
  for (const c of node.children || []) {
    if (c.type === 'TEXT') acc.push(c);
    else if ('children' in c) instanceTexts(c, acc);
  }
  return acc;
}

// Enfant direct d'une instance répondant à un prédicat (même raison que
// ci-dessus : pas de query/findOne sur l'intérieur d'une instance).
// Ex. instanceChild(row, c => c.type === 'INSTANCE' && c.name === 'Badge')
function instanceChild(node, pred) {
  return (node.children || []).find(pred);
}

// -----------------------------------------------------------------------------
// EXEMPLE d'usage (à adapter, puis à coller sous le prelude) :
//
// await preloadFonts(['FAMILLE_CORPS', 'FAMILLE_MONO']);  // TOUJOURS en premier
//
// const card = await autoLayout(figma.currentPage, 'VERTICAL', {
//   name: 'Card', bgKey: 'CLE_COULEUR_FOND',                  // fond de carte
// });
// await bindSpacing(card, 'itemSpacing', 'CLE_ESPACEMENT_GAP');   // gap vertical
// await bindSpacing(card, 'paddingTop', 'CLE_ESPACEMENT_PADDING'); // padding
// await applyMode(card, 'CLE_TOKEN_DE_LA_COLLECTION', 'MODE_ID');  // breakpoint / thème
//
// const title = figma.createText();
// card.appendChild(title);
// await applyText(title, 'CLE_STYLE_TITRE');   // style du DS (charge sa fonte)
// await setText(title, 'Titre de la carte');   // écriture sûre (fontes courantes)
//
// const input = await instantiate({
//   componentKey: 'CLE_COMPOSANT_CHAMP',
//   kind: 'componentSet',
//   properties: { 'Label#9341:8': 'Email', '[State]': 'Default' },
// });
// card.appendChild(input);
//
// // bloc 2 : paragraphe + personnalisation du contenu d'une instance
// const chapo = await wrapText(card, 'CLE_STYLE_CORPS', 'Deux lignes de contexte…',
//                             'CLE_COULEUR_TEXTE_SECONDAIRE', 480, { fill: true });
// const badge = await instantiate({ componentKey: 'CLE_COMPOSANT_BADGE' });
// card.appendChild(badge);
// await setText(instanceTexts(badge)[0], 'Nouveau libellé');
//
// return { createdNodeIds: [card.id, title.id, input.id, chapo.id, badge.id] };
// -----------------------------------------------------------------------------
