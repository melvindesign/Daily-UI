// =============================================================================
// CRÉER LA SECTION D'ITÉRATION SUIVANTE — Daily UI
// À coller dans un appel use_figma.
//
// Convention projet (cf. mémoire) : une itération = une SECTION (figma.createSection),
// jamais un Frame. Nommée `#X - iteration Y`, ≥ 3000×3000, sans fond. Les
// itérations sont EMPILÉES VERTICALEMENT (colonne à x constant, y croissant),
// la nouvelle passant SOUS le contenu existant sans le chevaucher. On ne lit que
// positions/dimensions des itérations précédentes — jamais leur contenu.
//
// La page cible est passée par son ID (résolu en amont : cf. /shot:iterate étape 3a,
// énumérer figma.root.children et matcher le nom "#X - Name"). On ne code JAMAIS un
// nom de challenge en dur ici — le script est générique, le contexte fournit l'id.
// Le numéro de challenge pour le nommage est lu sur la page elle-même.
// =============================================================================

const PAGE_ID = 'PASTE_PAGE_ID'; // ← id de la page du challenge en cours (ex. "0:1")
const GAP = 200;                 // espace vertical entre itérations
const MIN = 3000;                // dimension minimale (largeur = hauteur)

const page = await figma.getNodeByIdAsync(PAGE_ID);
if (!page || page.type !== 'PAGE') throw new Error(`Page introuvable pour l'id: ${PAGE_ID}`);
await figma.setCurrentPageAsync(page); // charge le contenu de la page

// Numéro de challenge lu sur la page ("#1 - Sign Up" -> "1"), jamais codé en dur
const challenge = (page.name.match(/#(\d+)/) || [])[1] || 'X';

// Numéro d'itération = (max des "iteration N" existants) + 1
const sections = page.children.filter((n) => n.type === 'SECTION');
const nums = sections.map((s) => {
  const m = s.name.match(/iteration\s*[-]?\s*(\d+)/i);
  return m ? parseInt(m[1], 10) : 0;
});
const next = (nums.length ? Math.max(...nums) : 0) + 1;

// Placement : page vide -> (0,0) ; sinon colonne des sections, sous le nœud le plus bas
let x = 0;
let y = 0;
if (page.children.length) {
  x = sections.length ? Math.min(...sections.map((s) => s.x)) : 100;
  let bottom = 0;
  for (const n of page.children) bottom = Math.max(bottom, n.y + n.height);
  y = bottom + GAP;
}

const section = figma.createSection();
page.appendChild(section);
section.name = `#${challenge} - iteration ${next}`;
section.x = x;
section.y = y;
section.fills = []; // sans fond
// Slot vide dimensionné ici. NB : une section hug son contenu — après avoir ajouté
// le contenu de l'itération, réappliquer section.resizeWithoutConstraints(3200, 3200)
// EN DERNIER pour garantir ≥ 3000 (cf. /shot:iterate étape 5).
section.resizeWithoutConstraints(MIN, MIN);

return {
  createdNodeIds: [section.id],
  sectionId: section.id,
  name: section.name,
  x: section.x,
  y: section.y,
  width: section.width,
  height: section.height,
};
