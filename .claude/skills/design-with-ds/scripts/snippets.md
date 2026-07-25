# Snippets documentés — opérations DS dans `use_figma`

Blocs **autonomes** (sans le prelude), à copier-coller pour comprendre ou déboguer une opération. Pour le travail quotidien, préfère [`_prelude.js`](./_prelude.js) qui encapsule ces séquences en helpers.

Toutes les `key` viennent de la knowledge (voir [../references/knowledge-cache.md](../references/knowledge-cache.md)) : chaque ressource porte sa clé d'import, résolue par rôle sémantique. Rappels `use_figma` : couleurs en 0–1, fills = tableaux read-only (cloner + réassigner), charger la font avant toute mutation de texte, tout Promise `await`é, `return` les IDs.

## Lier une couleur sémantique à un fill

```js
// colorKey : clé d'un token de couleur du DS (résolue dans la knowledge)
const variable = await figma.variables.importVariableByKeyAsync(colorKey);
const fills = node.fills.slice();                       // clone (read-only)
fills[0] = figma.variables.setBoundVariableForPaint(    // renvoie un NOUVEAU paint
  fills[0], 'color', variable
);
node.fills = fills;                                     // réassignation obligatoire
```

> Pour un `stroke`, remplace `fills` par `strokes`. Si le nœud n'a aucun paint, initialise `fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]` avant de lier.

## Appliquer un style de texte

```js
// styleKey : clé d'un style de texte du DS (résolue dans la knowledge)
const style = await figma.importStyleByKeyAsync(styleKey);
await figma.loadFontAsync(style.fontName);   // sinon "Cannot write to node with unloaded font"
await node.setTextStyleIdAsync(style.id);
// node.characters = '…';                     // toute mutation APRÈS le load de font
```

## Lier un token d'espacement / rayon

```js
// spacingKey : clé d'un token d'espacement du DS (résolue dans la knowledge)
const variable = await figma.variables.importVariableByKeyAsync(spacingKey);
node.setBoundVariable('itemSpacing', variable);
// props valides : itemSpacing | paddingLeft | paddingRight | paddingTop |
//                 paddingBottom | topLeftRadius | topRightRadius |
//                 bottomLeftRadius | bottomRightRadius
```

## Instancier un composant du DS

```js
// 1) Résous la clé d'import du composant par son rôle (voir la knowledge)
// 2) Résous son type d'instanciation, son variant par défaut et ses properties
const componentKey = 'CLE_COMPOSANT_CHAMP';  // clé d'import du composant

const set = await figma.importComponentSetByKeyAsync(componentKey); // si type === 'componentSet'
const input = set.defaultVariant.createInstance();
// composant simple : (await figma.importComponentByKeyAsync(key)).createInstance()

figma.currentPage.appendChild(input);        // parenter AVANT de régler HUG/FILL
input.setProperties({                          // clés exactes déclarées par la knowledge
  'Label#9341:8': 'Email',
  'Placeholder#9341:3': 'name@example.com',
  '[State]': 'Default',                        // VARIANT : une des options
});
return { createdNodeIds: [input.id] };
```

## Écrire dans un nœud texte existant (override d'instance)

```js
// Charger les fontes COURANTES du nœud, pas une fonte par défaut : le nœud porte
// déjà un style du DS (ou est imbriqué dans une instance), sa fonte n'est pas Inter.
for (const s of node.getStyledTextSegments(['fontName'])) await figma.loadFontAsync(s.fontName);
node.characters = 'Nouveau texte';
```

> Cas typique : personnaliser une instance (label d'un badge, titre d'un gabarit
> local) **sans** propriété de composant déclarée — les overrides de texte
> fonctionnent nativement sur n'importe quel nœud TEXT d'une instance.
> Pour atteindre un texte imbriqué : `inst.findOne(n => n.type === 'TEXT' && n.name === 'Titre')`.

## Conteneur auto-layout lié aux tokens

```js
const card = figma.createAutoLayout('VERTICAL', { name: 'Card' }); // hug/hug prêt
figma.currentPage.appendChild(card);
// ⚠️ createAutoLayout pose un fill blanc opaque ET clipsContent = true
card.clipsContent = false;                              // clip désactivé par défaut
// fond lié à une variable (ou `card.fills = []` si le conteneur est transparent)
const bg = await figma.variables.importVariableByKeyAsync(bgKey);
card.fills = [figma.variables.setBoundVariableForPaint(
  { type: 'SOLID', color: { r: 1, g: 1, b: 1 } }, 'color', bg
)];
// gap + padding liés à des tokens d'espacement du DS
card.setBoundVariable('itemSpacing', await figma.variables.importVariableByKeyAsync(gapKey));
card.setBoundVariable('paddingTop', await figma.variables.importVariableByKeyAsync(padKey));
```

> Sans ces deux corrections, **chaque** conteneur créé produit deux violations
> (`unboundFills` + `clippedContainers`) à rattraper en fin de maquette. Le helper
> `autoLayout()` du prelude les neutralise à la création — préfère-le.

## Appliquer un mode d'une collection non locale (breakpoint, thème)

```js
// L'id de la collection DIFFÈRE entre le fichier du DS et le fichier consommateur :
// on le résout à l'exécution depuis n'importe quelle variable importée de cette
// collection. Seuls les modeIds sont stables et se lisent dans la knowledge.
const v = await figma.variables.importVariableByKeyAsync(anyVariableKey);
const collection = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId);
screenFrame.setExplicitVariableModeForCollection(collection, modeId);
```

## Remplir un slot de composant dont la hauteur est figée

Un slot (`type: 'SLOT'`) de composant de bibliothèque n'est **pas** un conteneur
auto-layout et sa hauteur vient de la définition du composant : le contenu qu'on y
ajoute déborde et se fait rogner. Trois conséquences, dans l'ordre où elles piègent :

```js
const slot = instance.children.find(c => c.type === 'SLOT');

// 1. FILL est refusé sur un enfant de slot (le slot n'est pas auto-layout)
//    → dimensionner en FIXED sur la largeur du slot
content.layoutSizingHorizontal = 'FIXED';
content.resize(slot.width, content.height);
slot.appendChild(content);

// 2. slot.resize(...) et slot.layoutSizingVertical = 'HUG' n'ont AUCUN effet
//    → faire absorber la hauteur au slot, puis piloter par l'instance parente
slot.layoutGrow = 1;
instance.layoutSizingVertical = 'FIXED';
instance.resize(instance.width, content.height + CHROME); // CHROME = header + paddings

// 3. le slot rogne par défaut — le désactiver comme tout autre conteneur
slot.clipsContent = false;
```

> `CHROME` se mesure une fois : `instance.height - slot.height` avant de toucher
> à quoi que ce soit.

## Ordre des opérations de sizing (piège classique)

```js
// ❌ resize() REMET les modes de sizing à FIXED — le hug est perdu silencieusement
frame.primaryAxisSizingMode = 'AUTO';
frame.resize(1440, 1000);          // la hauteur reste bloquée à 1000

// ✅ dimensionner d'abord, régler le sizing ENSUITE
frame.resize(1440, 1000);
frame.primaryAxisSizingMode = 'AUTO';   // hauteur = hug content
```
