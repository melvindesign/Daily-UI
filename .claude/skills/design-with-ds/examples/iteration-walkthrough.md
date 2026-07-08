# Exemple de bout en bout — une itération Sign Up

Déroulé type d'une itération, du cadrage à l'audit. Il montre **où** chaque script s'insère. Adapte les clés (`CLE_…`) en les lisant dans le cache `.claude/knowledge/`.

## 0. Contexte

- Charger la knowledge : `figma.json` → foundations (colors, typography, spacing) → spec composants pertinente (ici `components/form.json`, `components/action.json`).
- Lire le PRD du challenge (`shots/#1-sign-up/PRD.md`) et le brief d'itération.
- Charger `/figma-use` et `/figma-generate-design`.

## 1. Créer la section d'itération

D'abord résoudre l'**id** de la page du challenge (cf. `/shot:iterate` étape 3a : énumérer `figma.root.children`, matcher le nom `#X - Name`). Puis coller [`../scripts/new-iteration-section.js`](../scripts/new-iteration-section.js) dans un `use_figma`, avec `PAGE_ID` = cet id. Le script lit le numéro de challenge sur la page, calcule le numéro d'itération et empile la nouvelle section sous le contenu existant — sans lire le contenu des itérations précédentes.

→ récupère `sectionId` dans le `return`.

## 2. Bâtir le squelette (placeholders)

Dans un `use_figma` séparé : créer le frame racine de l'écran dans la section, poser les grandes zones (header, formulaire, footer) en auto-layout avec `placeholder = true`, fond lié à une variable. Travailler top-down, ≤ 10 opérations par appel (cf. `/figma-use`).

## 3. Remplir une section avec le prelude

Coller [`../scripts/_prelude.js`](../scripts/_prelude.js) en tête, puis composer. Exemple (formulaire) :

```js
// … prelude collé au-dessus …
const form = await figma.getNodeByIdAsync('ID_ZONE_FORM');
await bindSpacing(form, 'itemSpacing', 'CLE_SIZES_CHAMP_CHAMP'); // rythme entre champs

// Titre
const title = figma.createText();
form.appendChild(title);
await applyText(title, 'CLE_TITLE_1');
title.characters = 'Create your account';
await applyColor(title, 'CLE_PALETTE_TEXT');

// Champ email (composant DS, état Default)
const email = await instantiate({
  componentKey: 'CLE_INPUT_TEXT',
  kind: 'componentSet',
  properties: { 'Label#9341:8': 'Email', 'Placeholder#9341:3': 'name@example.com', '[State]': 'Default' },
});
form.appendChild(email);

// CTA principal (Button, variant action principale)
const cta = await instantiate({
  componentKey: 'CLE_BUTTON',
  kind: 'componentSet',
  properties: { 'Label#…': 'Sign up' },
});
form.appendChild(cta);

form.placeholder = false;
return { createdNodeIds: [title.id, email.id, cta.id] };
```

## 4. Couvrir les états (formulaire)

Prévoir au minimum `Default` + `Invalid` + `Disabled` sur les champs et le CTA — soit en dupliquant l'écran, soit en montrant les variants côte à côte. Les états d'un champ viennent du variant `[State]` (`Default`, `Focus`, `Disabled`, `Invalid`) — voir `components/form.json`.

## 5. Auditer

Coller [`../scripts/audit-conformance.js`](../scripts/audit-conformance.js) avec `ROOT_ID = sectionId`. Corriger jusqu'à `ok: true` :

- `unstyledText` → appliquer un style via `applyText`.
- `unboundFills` → lier via `applyColor` (ou rendre le frame transparent).
- `unboundSpacing` → lier via `bindSpacing`.

## 6. Vérifier visuellement

`await node.screenshot()` inline ou `get_screenshot` sur la section : repérer texte tronqué, chevauchements, contrastes. Corriger de façon ciblée, ne pas tout recréer.
