// =============================================================================
// CORRIGER LES CONTENEURS LAISSÉS PAR DÉFAUT — pendant de `audit-conformance.js`
// À coller dans un appel use_figma. Renseigne ROOT_IDS (mêmes racines que l'audit).
//
// Corrige les deux réglages que Figma pose à la création d'un conteneur et qui
// violent les règles du skill :
//   - `clipsContent = true`  (createFrame ET createAutoLayout) → repassé à false
//   - fill blanc opaque non lié → retiré (conteneur transparent)
// C'est la correction canonique des `clippedContainers` et d'une partie des
// `unboundFills` remontés par l'audit.
//
// ⚠️ Ce script est un FILET, pas une méthode : le bon réflexe est de créer des
// conteneurs propres d'emblée (helper `autoLayout()` du prelude). Lancé en fin de
// maquette, il rattrape ce qui a échappé.
//
// On n'entre PAS dans les INSTANCE (intérieur géré par la bibliothèque).
// =============================================================================

const ROOT_IDS = ['PASTE_ROOT_ID'];

// Nœuds dont le rognage est une INTENTION et doit être préservé : cadre de page /
// viewport, masque de média, zone scrollable, carrousel. Renseigne leurs ids —
// tout le reste sera dé-rogné.
const KEEP_CLIP_IDS = [];

// Retirer un fill blanc non lié suppose que le conteneur est censé être
// transparent. Passe à false si tu préfères seulement LISTER les fills à traiter
// (certains devront être liés à un token de fond plutôt que supprimés).
const STRIP_UNBOUND_FILLS = true;

const keep = new Set(KEEP_CLIP_IDS);
const unclipped = [];
const stripped = [];
const toBind = []; // fills non liés NON blancs : à lier à un token, pas à supprimer

for (const rootId of ROOT_IDS) {
  const root = await figma.getNodeByIdAsync(rootId);
  if (!root) throw new Error(`Nœud racine introuvable: ${rootId}`);

  (function walk(node) {
    if (node.type === 'INSTANCE') return; // black box DS

    if ('clipsContent' in node && node.clipsContent === true && !keep.has(node.id)) {
      node.clipsContent = false;
      unclipped.push({ id: node.id, name: node.name, type: node.type });
    }

    if ('fills' in node && Array.isArray(node.fills) && node.type !== 'TEXT') {
      const bound = (node.boundVariables && node.boundVariables.fills) || [];
      const unbound = node.fills
        .map((p, i) => ({ p, i }))
        .filter(({ p, i }) => p.type === 'SOLID' && p.visible !== false && !bound[i]);
      if (unbound.length) {
        // blanc/quasi-blanc opaque = fill par défaut de Figma, jamais une intention
        const isDefaultWhite = unbound.every(({ p }) =>
          p.opacity !== 0 && p.color.r > 0.98 && p.color.g > 0.98 && p.color.b > 0.98);
        if (isDefaultWhite && STRIP_UNBOUND_FILLS) {
          node.fills = [];
          stripped.push({ id: node.id, name: node.name, type: node.type });
        } else {
          toBind.push({ id: node.id, name: node.name, type: node.type, count: unbound.length });
        }
      }
    }

    if ('children' in node) for (const c of node.children) walk(c);
  })(root);
}

return {
  mutatedNodeIds: [...new Set([...unclipped, ...stripped].map(n => n.id))],
  counts: { unclipped: unclipped.length, stripped: stripped.length, toBind: toBind.length },
  unclipped,
  stripped,
  // À TRAITER À LA MAIN : ces fills portent une couleur choisie, pas un défaut.
  // Chacun doit être lié à un token de couleur sémantique (helper `applyColor`).
  toBind,
};
