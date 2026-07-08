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

## Conteneur auto-layout lié aux tokens

```js
const card = figma.createAutoLayout('VERTICAL', { name: 'Card' }); // hug/hug prêt
figma.currentPage.appendChild(card);
// fond lié à une variable (jamais le blanc par défaut de createFrame)
const bg = await figma.variables.importVariableByKeyAsync(bgKey);
card.fills = [figma.variables.setBoundVariableForPaint(
  { type: 'SOLID', color: { r: 1, g: 1, b: 1 } }, 'color', bg
)];
// gap + padding liés à des tokens d'espacement du DS
card.setBoundVariable('itemSpacing', await figma.variables.importVariableByKeyAsync(gapKey));
card.setBoundVariable('paddingTop', await figma.variables.importVariableByKeyAsync(padKey));
```
