# Exemple de bout en bout — composer une maquette avec le DS

Déroulé type d'une maquette, du cadrage à l'audit. Il montre **où** chaque script s'insère. Adapte les clés (`CLE_…`) en les résolvant dans la knowledge (voir [../references/knowledge-cache.md](../references/knowledge-cache.md)).

## 0. Contexte

- Charger la knowledge : le manifeste (`figma.json`) → les foundations qu'il déclare (couleur, typographie, espacement) → la (les) spec(s) de composants pertinente(s) pour l'écran.
- Charger `/figma-use` et `/figma-generate-design`.

## 1. Cadre de travail

Crée (ou récupère) le nœud racine où tu composes — frame ou section — et note son id. Fond lié à un token de couleur (jamais le blanc par défaut de `createFrame`), ou transparent.

→ récupère `rootId`.

## 2. Bâtir le squelette (placeholders)

Dans un `use_figma` : poser les grandes zones (header, contenu, footer) en auto-layout avec `placeholder = true`, chaque fond lié à une variable. Travailler top-down, ≤ 10 opérations par appel (cf. `/figma-use`).

## 3. Remplir une zone avec le prelude

Coller [`../scripts/_prelude.js`](../scripts/_prelude.js) en tête, puis composer. Exemple (un bloc de formulaire) :

```js
// … prelude collé au-dessus …
const block = await figma.getNodeByIdAsync('ID_ZONE');
await bindSpacing(block, 'itemSpacing', 'CLE_ESPACEMENT_CHAMP_CHAMP'); // rythme entre champs

// Titre
const title = figma.createText();
block.appendChild(title);
await applyText(title, 'CLE_STYLE_TITRE');
title.characters = "Titre de l'écran";
await applyColor(title, 'CLE_COULEUR_TEXTE');

// Champ (composant DS, état Default)
const field = await instantiate({
  componentKey: 'CLE_COMPOSANT_CHAMP',
  kind: 'componentSet',
  properties: { 'Label#9341:8': 'Email', 'Placeholder#9341:3': 'name@example.com', '[State]': 'Default' },
});
block.appendChild(field);

// Action principale (bouton, variant action principale)
const cta = await instantiate({
  componentKey: 'CLE_COMPOSANT_BOUTON',
  kind: 'componentSet',
  properties: { 'Label#…': 'Continuer' },
});
block.appendChild(cta);

block.placeholder = false;
return { createdNodeIds: [title.id, field.id, cta.id] };
```

## 4. Couvrir les états

Prévoir au minimum `Default`, et pour un formulaire `Default` + `Invalid` + `Disabled` sur les champs et l'action — soit en dupliquant l'écran, soit en montrant les variants côte à côte. Les états d'un composant viennent de son variant dédié (ex. `[State]`) — voir la spec du composant dans la knowledge.

## 5. Auditer

Coller [`../scripts/audit-conformance.js`](../scripts/audit-conformance.js) avec `ROOT_ID = rootId`. Corriger jusqu'à `ok: true` :

- `unstyledText` → appliquer un style via `applyText`.
- `unboundFills` → lier via `applyColor` (ou rendre le frame transparent).
- `unboundSpacing` → lier via `bindSpacing`.

## 6. Vérifier visuellement

`await node.screenshot()` inline ou `get_screenshot` sur le nœud racine : repérer texte tronqué, chevauchements, contrastes. Corriger de façon ciblée, ne pas tout recréer.
