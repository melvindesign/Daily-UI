// =============================================================================
// AUDIT DE CONFORMITÉ — à lancer avant de conclure un écran / une maquette
// À coller dans un appel use_figma. Renseigne ROOT_IDS : la liste des racines à
// auditer. Une maquette livrée, ce n'est pas seulement la zone de travail — c'est
// AUSSI les définitions des composants locaux, rangées hors du flux. Les oublier
// laisse la moitié du custom hors du contrôle : mets-les toutes dans ROOT_IDS.
// Renvoie les violations aux règles du DS :
//   - texte sans style (textStyleId vide)
//   - fill SOLID visible non lié à une variable
//   - espacement/padding en dur (auto-layout non lié à un token)
//   - clipsContent activé hors cas légitimes (viewport d'écran, masque de média)
//   - fill présent mais masqué (visible: false) — état ambigu : soit le fill
//     est supprimé (conteneur transparent), soit il est visible et lié
//   - instance du DS atténuée à la main (opacity < 1) — un état (disabled,
//     inactif…) doit venir du variant du composant, jamais d'une opacité posée
//     par-dessus
//   - assemblage répété non factorisé — deux sous-arbres de structure identique
//     dessinés en calques indépendants au lieu d'être deux instances d'un même
//     composant local (source de vérité unique)
//   - rôle du DS redessiné à la main — un assemblage custom qui porte le nom d'un
//     composant existant de la bibliothèque (renseigner DS_COMPONENT_NAMES)
//
// On NE descend PAS dans les INSTANCE : leur intérieur est géré par la
// bibliothèque et produirait des faux positifs. On audite donc uniquement le
// custom et la composition.
// =============================================================================

// Zone de travail + définitions des composants locaux rangées hors du flux.
const ROOT_IDS = ['PASTE_SECTION_ID' /* , 'ID_COMPOSANT_LOCAL_1', … */];

// Noms des composants de la bibliothèque, relevés dans la knowledge (specs de
// composants déclarées par le manifeste). Sert à détecter un rôle du DS redessiné
// à la main. Renseigne-la avec l'inventaire COMPLET — parcours CHAQUE spec
// déclarée par le manifeste et concatène tous les `name`, pas seulement les
// familles que tu as utilisées : c'est précisément le composant auquel tu n'as
// pas pensé qui se retrouve redessiné.
const DS_COMPONENT_NAMES = [/* 'Button', 'Input', 'Stepper Horizontal', … */];

const roots = [];
for (const id of ROOT_IDS) {
  const r = await figma.getNodeByIdAsync(id);
  if (!r) throw new Error(`Nœud racine introuvable: ${id}`);
  roots.push(r);
}

// Traversée qui n'entre pas dans les instances
const nodes = [];
const rootSet = new Set(roots.map(r => r.id));
for (const root of roots) {
  (function walk(node) {
    nodes.push(node);
    if (node.type === 'INSTANCE') return; // black box DS
    if ('children' in node) for (const c of node.children) walk(c);
  })(root);
}

const issues = { unstyledText: [], unboundFills: [], unboundSpacing: [], clippedContainers: [], hiddenFills: [], dimmedInstances: [], repeatedAssemblies: [], redrawnDsRoles: [] };

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

  // 4. clipsContent activé hors cas légitimes. Exemptés : une racine auditée si
  //    c'est un frame (viewport d'écran), les enfants directs d'une SECTION
  //    racine (frames d'écran / composants plein écran), et les nœuds portant
  //    un fill IMAGE visible (masque de média). Même exemptés, le clip doit
  //    être une intention (page, média, zone scrollable) — jamais un défaut.
  if ('clipsContent' in n && n.clipsContent === true) {
    const isRootViewport = rootSet.has(n.id) && n.type !== 'SECTION';
    const isScreenChild = n.parent && rootSet.has(n.parent.id) && n.parent.type === 'SECTION';
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

// -----------------------------------------------------------------------------
// 7. Assemblage répété non factorisé
// Signature STRUCTURELLE d'un sous-arbre : on ignore le contenu (texte, couleurs,
// position) et on ne garde que la forme — type des conteneurs, briques du DS
// utilisées, imbrication. Deux occurrences d'un même pattern (desktop/mobile,
// étapes d'un flow, cartes d'une liste) produisent donc la même signature même si
// leurs textes diffèrent, ce qui est précisément le cas à détecter.
//
// Une instance est une FEUILLE (taille 1) : un assemblage correctement factorisé
// se réduit à N instances du même composant local et passe donc sous le seuil —
// il n'est jamais remonté. Seuls les calques dupliqués à la main le sont.
// -----------------------------------------------------------------------------
const SIZE_THRESHOLD = 4; // en deçà, un assemblage est trop trivial pour mériter un composant

const sigCache = new Map(); // node.id -> { sig, size }
function signature(node) {
  const hit = sigCache.get(node.id);
  if (hit) return hit;
  let out;
  if (node.type === 'INSTANCE') {
    out = { sig: `I:${node.name}`, size: 1 }; // brique du DS : feuille, non auditée
  } else if (node.type === 'TEXT') {
    out = { sig: 'T', size: 1 }; // le contenu varie légitimement d'une occurrence à l'autre
  } else if ('children' in node) {
    const parts = node.children.map(signature);
    out = {
      sig: `${node.type}(${parts.map(p => p.sig).join(',')})`,
      size: 1 + parts.reduce((s, p) => s + p.size, 0),
    };
  } else {
    out = { sig: node.type, size: 1 };
  }
  sigCache.set(node.id, out);
  return out;
}

// Un COMPONENT_SET contient par nature des variants de structure identique : c'est
// la factorisation elle-même, pas une duplication. On n'audite pas son intérieur.
const inComponentSet = new Set();
for (const n of nodes) {
  if (n.type === 'COMPONENT_SET' && 'children' in n) {
    (function mark(p) {
      for (const c of p.children || []) { inComponentSet.add(c.id); if ('children' in c) mark(c); }
    })(n);
  }
}

const bySig = new Map();
for (const n of nodes) {
  if (rootSet.has(n.id) || n.type === 'INSTANCE' || inComponentSet.has(n.id)) continue;
  const { sig, size } = signature(n);
  if (size < SIZE_THRESHOLD) continue;
  if (!bySig.has(sig)) bySig.set(sig, []);
  bySig.get(sig).push(n);
}

// On ne remonte que l'assemblage répété le PLUS GRAND : si un pattern dupliqué
// contient lui-même un sous-pattern dupliqué, factoriser le parent règle les deux.
// Signaler les deux noierait le rapport sous des doublons dérivés.
const reportedIds = new Set();
const groups = [...bySig.values()]
  .filter(g => g.length >= 2)
  .sort((a, b) => signature(b[0]).size - signature(a[0]).size);

for (const group of groups) {
  const isNested = group.some(n => {
    for (let p = n.parent; p; p = p.parent) {
      if (reportedIds.has(p.id)) return true;
      if (rootSet.has(p.id)) break; // on ne remonte pas au-delà de la racine auditée
    }
    return false;
  });
  if (isNested) continue;
  group.forEach(n => reportedIds.add(n.id));
  issues.repeatedAssemblies.push({
    occurrences: group.length,
    nodeSize: signature(group[0]).size,
    nodes: group.map(n => ({ id: n.id, name: n.name })),
  });
}

// -----------------------------------------------------------------------------
// 8. Rôle du DS redessiné à la main
// Un assemblage custom (frame / composant local) qui porte le nom d'un composant
// de la bibliothèque signale presque toujours un composant existant qu'on n'a
// pas trouvé et qu'on a refait. On compare sur un nom normalisé, en ignorant la
// ponctuation, les préfixes de chemin ('Form / Stepper') et les qualificatifs de
// variante, pour attraper 'Stepper', 'stepper-horizontal' ou 'Step Indicator'
// (via ses mots) aussi bien que le nom exact.
// -----------------------------------------------------------------------------
const norm = s => String(s).toLowerCase().replace(/[_\-/]+/g, ' ').replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
const dsIndex = DS_COMPONENT_NAMES.map(n => ({ name: n, words: norm(n).split(' ').filter(w => w.length > 2) }))
  .filter(e => e.words.length);

if (dsIndex.length) {
  for (const n of nodes) {
    if (rootSet.has(n.id) || n.type === 'INSTANCE') continue;
    if (!['FRAME', 'GROUP', 'COMPONENT', 'COMPONENT_SET'].includes(n.type)) continue;
    // Un nœud qui ne contient que des instances du DS assemble légitimement des
    // briques : c'est de la composition, pas un composant redessiné.
    const drawsPrimitives = 'children' in n && n.children.some(c => ['VECTOR', 'ELLIPSE', 'RECTANGLE', 'LINE', 'POLYGON', 'STAR'].includes(c.type));
    // Correspondance dans les DEUX sens : le nœud peut porter le nom complet
    // ('Stepper Horizontal') comme une abréviation ('Stepper') — c'est même le
    // cas le plus courant, on abrège en redessinant.
    const nodeWords = norm(n.name).split(' ').filter(w => w.length > 2);
    if (!nodeWords.length) continue;
    const set = new Set(nodeWords);
    const hit = dsIndex.find(e =>
      e.words.every(w => set.has(w)) || nodeWords.every(w => e.words.includes(w)));
    if (hit && (drawsPrimitives || n.type === 'COMPONENT' || n.type === 'COMPONENT_SET')) {
      issues.redrawnDsRoles.push({ id: n.id, name: n.name, type: n.type, matchesDsComponent: hit.name });
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
  repeatedAssemblies: issues.repeatedAssemblies.length,
  redrawnDsRoles: issues.redrawnDsRoles.length,
};

return {
  ok: Object.values(counts).every(c => c === 0),
  roots: roots.map(r => ({ id: r.id, name: r.name })),
  audited: nodes.length,
  counts,
  issues, // détail par nœud pour corriger de façon ciblée
};
