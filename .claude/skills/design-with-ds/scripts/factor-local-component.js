// =============================================================================
// FACTORISER UN ASSEMBLAGE RÉPÉTÉ EN COMPOSANT LOCAL
// À coller dans un appel use_figma.
//
// Quand un même assemblage apparaît plusieurs fois dans la maquette (version
// desktop et mobile d'un formulaire, étapes successives d'un flow, carte
// répétée), il ne doit exister qu'UNE fois : un composant local, instancié à
// chaque occurrence. Ce script fait la conversion :
//   1. transforme l'occurrence de référence en COMPONENT,
//   2. range ce composant hors du flux de la maquette (zone de définition),
//   3. remplace chaque autre occurrence par une instance, à la même place
//      (même parent, même index, même position, même comportement de sizing).
//
// C'est la correction canonique des violations `repeatedAssemblies` remontées
// par audit-conformance.js. Après passage, relancer l'audit.
//
// ⚠️ Les occurrences doivent être structurellement identiques. Si elles
// diffèrent par un état ou un contenu discret (étape du flow, breakpoint, état
// de validation), factorise d'abord puis ajoute des VARIANTES au composant
// (voir la section « variantes » en bas) plutôt que de créer N composants.
// =============================================================================

const SOURCE_ID = 'PASTE_REFERENCE_NODE_ID';   // l'occurrence qui sert de modèle
const DUPLICATE_IDS = ['PASTE_ID', 'PASTE_ID']; // les autres occurrences à remplacer
const COMPONENT_NAME = 'PASTE_NAME';            // ex. 'Form / Step'

const source = await figma.getNodeByIdAsync(SOURCE_ID);
if (!source) throw new Error(`Nœud de référence introuvable: ${SOURCE_ID}`);

// --- 1. Mémoriser l'ancrage de la référence AVANT conversion -----------------
// createComponentFromNode remplace le nœud : on relit sa place pour y reposer
// une instance à l'identique.
function anchor(node) {
  const parent = node.parent;
  return {
    parent,
    index: parent ? parent.children.indexOf(node) : -1,
    x: node.x, y: node.y,
    // en auto-layout, c'est le sizing qui compte, pas x/y
    inAutoLayout: !!(parent && 'layoutMode' in parent && parent.layoutMode !== 'NONE'),
    layoutSizingHorizontal: 'layoutSizingHorizontal' in node ? node.layoutSizingHorizontal : null,
    layoutSizingVertical: 'layoutSizingVertical' in node ? node.layoutSizingVertical : null,
    layoutGrow: 'layoutGrow' in node ? node.layoutGrow : null,
    width: node.width, height: node.height,
  };
}

// Repose un nœud (instance) exactement là où se trouvait l'occurrence d'origine.
function place(node, a) {
  if (a.parent && a.index >= 0) a.parent.insertChild(a.index, node);
  if (!a.inAutoLayout) { node.x = a.x; node.y = a.y; }
  // Le sizing doit être réappliqué APRÈS l'insertion : hors auto-layout, les
  // propriétés layoutSizing* n'existent pas / sont ignorées.
  if (a.inAutoLayout) {
    if (a.layoutSizingHorizontal) node.layoutSizingHorizontal = a.layoutSizingHorizontal;
    if (a.layoutSizingVertical) node.layoutSizingVertical = a.layoutSizingVertical;
    if (a.layoutGrow !== null) node.layoutGrow = a.layoutGrow;
  }
}

const sourceAnchor = anchor(source);

// --- 2. Convertir la référence en composant local ---------------------------
const component = figma.createComponentFromNode(source);
component.name = COMPONENT_NAME;

// --- 3. Ranger la définition hors du flux -----------------------------------
// La définition ne doit pas rester dans la maquette : elle vit à côté, et la
// place qu'elle occupait est reprise par une instance.
const page = figma.currentPage;
const bounds = page.children.reduce(
  (b, n) => ({ maxX: Math.max(b.maxX, n.x + n.width), minY: Math.min(b.minY, n.y) }),
  { maxX: -Infinity, minY: Infinity },
);
page.appendChild(component);
component.x = (bounds.maxX === -Infinity ? 0 : bounds.maxX) + 200;
component.y = bounds.minY === Infinity ? 0 : bounds.minY;

// --- 4. Reposer une instance à l'emplacement de la référence ----------------
const created = [];
const first = component.createInstance();
place(first, sourceAnchor);
created.push(first.id);

// --- 5. Remplacer chaque autre occurrence par une instance ------------------
const replaced = [];
const skipped = [];
for (const id of DUPLICATE_IDS) {
  const dup = await figma.getNodeByIdAsync(id);
  if (!dup) { skipped.push({ id, reason: 'introuvable' }); continue; }
  const a = anchor(dup);
  const inst = component.createInstance();
  place(inst, a);
  dup.remove(); // l'assemblage dupliqué disparaît : une seule source de vérité
  replaced.push({ was: id, now: inst.id });
  created.push(inst.id);
}

return {
  componentId: component.id,
  componentName: component.name,
  instances: created,
  replaced,
  skipped, // à vérifier si non vide : ces occurrences sont restées dupliquées
};

// -----------------------------------------------------------------------------
// AJOUTER DES VARIANTES (quand les occurrences diffèrent par un état/contenu)
//
// Après factorisation, si une occurrence doit différer (breakpoint, étape,
// état de validation), ne duplique PAS le composant : ajoute une dimension de
// variante, puis choisis à l'instance.
//
//   const variant = component.clone();
//   component.name = 'State=Default';
//   variant.name   = 'State=Invalid';
//   // …ajuster `variant` pour cet état…
//   const set = figma.combineAsVariants([component, variant], component.parent);
//   set.name = COMPONENT_NAME;
//   // puis, sur chaque instance : inst.setProperties({ State: 'Invalid' });
//
// Ce qui varie d'une occurrence à l'autre doit être exposé en PROPRIÉTÉ
// (texte, booléen, instance-swap), jamais figé dans la définition :
//
//   const propId = component.addComponentProperty('Label', 'TEXT', 'Email');
//   textNode.componentPropertyReferences = { characters: propId };
// -----------------------------------------------------------------------------
