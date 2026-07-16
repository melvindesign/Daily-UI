# Charger et exploiter la knowledge du design system

## 1. Le manifeste d'abord

Commence **TOUJOURS** par lire le manifeste avant toute chose :

```
.claude/knowledge/figma.json
```

Il décrit le fichier Figma du design system, sa structure, ses conventions de thématisation/variables, et les clés d'accès (`fileKey`, `libraryKey`). **C'est lui qui déclare comment la knowledge est organisée** — l'architecture varie d'un DS à l'autre. Ne présume d'aucune structure : suis les chemins qu'il liste.

À partir du manifeste :

- **Fondations** — la section qui mappe chaque rôle de fondation à son fichier (couleur, typographie, espacement, élévation…). Lis les fondations déclarées ; au minimum couleurs, typographie et espacement avant de designer.
- **Spécifications de composants** — si le manifeste déclare des specs (descriptions, variants, règles do/don't), lis celle(s) pertinente(s) pour l'écran à produire.

La knowledge est la **seule source de vérité** pour valeurs, noms de tokens, styles, variants et conventions. Ne présume jamais d'un nom ou d'une valeur : va le vérifier dans les fichiers pointés par le manifeste.

## 2. Résoudre une clé d'import — la knowledge est auto-descriptive

La knowledge contient un **snapshot des clés de bibliothèque** (stables) pour éviter les allers-retours `search_design_system` / import-pour-inspection. **Tu n'as pas à connaître d'avance où vivent les clés** : le manifeste te mène au bon fichier, et **chaque token / style / composant y porte sa propre clé d'import**.

Procédure générique :

1. Depuis le manifeste, ouvre la fondation ou la spec pertinente (couleur, espacement, typo, composant).
2. Dans ce fichier, repère la ressource par son **rôle sémantique** (le rôle du texte, l'intention de couleur, la magnitude d'espace, le composant recherché).
3. Lis la **clé d'import** portée par cette ressource. La forme exacte est propre au DS : chaque fichier documente sa convention dans son champ `_note` (et, le cas échéant, sa `description`). Réfère-t'y plutôt que de deviner.

> Certains objets contiennent une clé `_note` (rappel d'usage / convention de clés) en plus des ressources réelles — ignore-la lors du parcours des entrées.

## 3. Procédure d'import direct par clé

Une fois la clé lue dans la knowledge, importe directement (pas de MCP) :

- **Variable** : `await figma.variables.importVariableByKeyAsync(key)` puis
  - couleur → `figma.variables.setBoundVariableForPaint(paint, 'color', variable)` (renvoie un **nouveau** paint à réassigner)
  - espacement/rayon → `node.setBoundVariable('itemSpacing' | 'paddingLeft' | 'topLeftRadius' | …, variable)`
- **Style** : `await figma.importStyleByKeyAsync(key)`, charger `style.fontName` via `loadFontAsync`, puis `node.setTextStyleIdAsync(style.id)`.
- **Composant** :
  - set de variants → `(await figma.importComponentSetByKeyAsync(key)).defaultVariant.createInstance()`
  - composant simple → `(await figma.importComponentByKeyAsync(key)).createInstance()`

Ces séquences sont déjà encapsulées dans [`../scripts/_prelude.js`](../scripts/_prelude.js) — préfère les helpers.

## 4. Quand repasser par le MCP

Ne repasse par le MCP (`search_design_system`, `get_libraries`, import-pour-lire-les-props) **que si** :

- la clé n'est pas dans la knowledge, **ou**
- un import / `setProperties` échoue (le DS a pu changer depuis le snapshot).

Dans ce cas, récupère la valeur à jour via MCP **et mets à jour le fichier de knowledge** pour la fois suivante.
