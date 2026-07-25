// =============================================================================
// CRÉER LE CONTENEUR D'ITÉRATION SUIVANT — Daily UI
// À coller dans un appel use_figma.
//
// Une itération = un conteneur nommé `#X - iteration Y`, sans fond, ≥ MIN×MIN.
// Le TYPE de conteneur (section | frame) et l'AXE d'empilement entre itérations
// (vertical | horizontal) ne sont PAS décidés ici : ils viennent des préférences
// de l'utilisateur (`.claude/knowledge/preferences.json`, clé `layout`), que
// l'orchestrateur injecte dans les constantes ci-dessous — exactement comme PAGE_ID.
//
// On ne lit que positions/dimensions des itérations précédentes — jamais leur contenu.
//
// La page cible est passée par son ID (résolu en amont : cf. /shot:iterate étape 3a,
// énumérer figma.root.children et matcher le nom "#X - Name"). On ne code JAMAIS un
// nom de challenge en dur ici — le script est générique, le contexte fournit l'id.
// Le numéro de challenge pour le nommage est lu sur la page elle-même.
// =============================================================================

const PAGE_ID = 'PASTE_PAGE_ID'; // ← id de la page du challenge en cours (ex. "0:1")
const CONTAINER = 'section';     // ← layout.container : 'section' | 'frame'
const BETWEEN = 'vertical';      // ← layout.between   : 'vertical' | 'horizontal'
const GAP = 200;                 // ← layout.gap       : espace entre itérations
const MIN = 3000;                // ← layout.minSize   : dimension minimale (largeur = hauteur)

if (CONTAINER !== 'section' && CONTAINER !== 'frame') {
  throw new Error(`layout.container invalide: "${CONTAINER}" (attendu: 'section' | 'frame')`);
}
if (BETWEEN !== 'vertical' && BETWEEN !== 'horizontal') {
  throw new Error(`layout.between invalide: "${BETWEEN}" (attendu: 'vertical' | 'horizontal')`);
}

const page = await figma.getNodeByIdAsync(PAGE_ID);
if (!page || page.type !== 'PAGE') throw new Error(`Page introuvable pour l'id: ${PAGE_ID}`);
await figma.setCurrentPageAsync(page); // charge le contenu de la page

// Numéro de challenge lu sur la page ("#1 - Sign Up" -> "1"), jamais codé en dur
const challenge = (page.name.match(/#(\d+)/) || [])[1] || 'X';

// Itérations existantes repérées par leur NOM, pas par leur type : le type de
// conteneur peut avoir changé entre deux itérations (préférence modifiée).
const ITER_RE = /iteration\s*[-]?\s*(\d+)/i;
const iterations = page.children.filter((n) => ITER_RE.test(n.name));

// Numéro d'itération = (max des "iteration N" existants) + 1
const nums = iterations.map((n) => parseInt(n.name.match(ITER_RE)[1], 10));
const next = (nums.length ? Math.max(...nums) : 0) + 1;

// Placement : page vide -> (0,0). Sinon on s'aligne sur la colonne / la ligne des
// itérations existantes, et on se pose après le nœud le plus avancé sur l'axe
// d'empilement — bornes calculées sur TOUS les enfants, pour ne rien chevaucher.
let x = 0;
let y = 0;
if (page.children.length) {
  if (BETWEEN === 'vertical') {
    x = iterations.length ? Math.min(...iterations.map((n) => n.x)) : 100;
    let bottom = 0;
    for (const n of page.children) bottom = Math.max(bottom, n.y + n.height);
    y = bottom + GAP;
  } else {
    y = iterations.length ? Math.min(...iterations.map((n) => n.y)) : 100;
    let right = 0;
    for (const n of page.children) right = Math.max(right, n.x + n.width);
    x = right + GAP;
  }
}

const container = CONTAINER === 'section' ? figma.createSection() : figma.createFrame();
page.appendChild(container);
container.name = `#${challenge} - iteration ${next}`;
container.x = x;
container.y = y;
container.fills = []; // sans fond (Figma pose un fill blanc opaque à la création)
if (CONTAINER === 'frame') container.clipsContent = false; // un frame rogne par défaut, pas une section
// Slot vide dimensionné ici. NB : une section hug son contenu — après avoir ajouté
// le contenu de l'itération, réappliquer container.resizeWithoutConstraints(3200, 3200)
// EN DERNIER pour garantir ≥ MIN (cf. /shot:iterate étape 5).
container.resizeWithoutConstraints(MIN, MIN);

return {
  createdNodeIds: [container.id],
  sectionId: container.id, // nom conservé : c'est la clé attendue dans les briefs
  containerType: CONTAINER,
  between: BETWEEN,
  name: container.name,
  x: container.x,
  y: container.y,
  width: container.width,
  height: container.height,
};
