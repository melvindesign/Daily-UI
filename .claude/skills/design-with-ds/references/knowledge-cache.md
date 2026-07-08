# Charger et exploiter la knowledge du design system

## 1. Le manifeste d'abord

Commence **TOUJOURS** par lire le manifeste avant toute chose :

```
.claude/knowledge/figma.json
```

Il décrit le fichier Figma du design system, sa structure, ses conventions de thématisation/variables, et les clés d'accès (`fileKey`, `libraryKey`). **C'est lui qui déclare comment la knowledge est organisée** — l'architecture varie d'un DS à l'autre. Ne présume d'aucune structure : suis les chemins qu'il liste.

À partir du manifeste :

- **Fondations** — lis les fichiers de fondation déclarés ; au minimum couleurs, typographie et espacement avant de designer.
- **Spécifications de composants** — si le manifeste en déclare (descriptions, variants, règles do/don't), lis celle(s) pertinente(s) pour l'écran à produire.

La knowledge est la **seule source de vérité** pour valeurs, noms de tokens, styles, variants et conventions. Ne présume jamais d'un nom ou d'une valeur : va le vérifier dans les fichiers pointés par le manifeste.

## 2. Cache de clés local — à consulter AVANT tout appel MCP

La knowledge contient un **snapshot des clés de bibliothèque** (stables) pour éviter les allers-retours `search_design_system` / import-pour-inspection. Emplacements exacts (Solar UI) :

| Ressource | Fichier | Où trouver la clé |
|---|---|---|
| Variable couleur | `foundation/colors.json` | `tokens['Palette/…']` → `key` (string) |
| Variable d'espacement / rayon | `foundation/spacing.json` | `tokens['Sizes/…']` → `key` (string) |
| Style typo | `foundation/typography.json` | `textStyles[Famille].items[i].key` |
| Composant (clé d'import) | `components/*.json` | `components[]` → objet avec `componentKey`, `name`, `variants` |
| Schéma d'instanciation | `components/*.json` | `instanceSchemas[name]` → `instantiate` (`componentSet`\|`component`), `defaultVariant`, `properties` |

> Les objets `tokens` contiennent une clé `_note` (rappel d'usage) en plus des tokens réels — ignore-la lors de l'itération.

**Pour instancier un composant, il faut croiser les deux objets** : `components[]` donne la `componentKey` à importer, `instanceSchemas[name]` donne le type d'import, le `defaultVariant` et les clés de `properties` à passer à `setProperties`.

## 3. Procédure d'import direct par clé

Une fois la clé lue dans le cache, importe directement (pas de MCP) :

- **Variable** : `await figma.variables.importVariableByKeyAsync(key)` puis
  - couleur → `figma.variables.setBoundVariableForPaint(paint, 'color', variable)` (renvoie un **nouveau** paint à réassigner)
  - espacement/rayon → `node.setBoundVariable('itemSpacing' | 'paddingLeft' | 'topLeftRadius' | …, variable)`
- **Style** : `await figma.importStyleByKeyAsync(key)`, charger `style.fontName` via `loadFontAsync`, puis `node.setTextStyleIdAsync(style.id)`.
- **Composant** :
  - `componentSet` → `(await figma.importComponentSetByKeyAsync(componentKey)).defaultVariant.createInstance()`
  - `component` → `(await figma.importComponentByKeyAsync(componentKey)).createInstance()`

Ces séquences sont déjà encapsulées dans [`../scripts/_prelude.js`](../scripts/_prelude.js) — préfère les helpers.

## 4. Quand repasser par le MCP

Ne repasse par le MCP (`search_design_system`, `get_libraries`, import-pour-lire-les-props) **que si** :

- la clé n'est pas dans le cache, **ou**
- un import / `setProperties` échoue (le DS a pu changer depuis le snapshot).

Dans ce cas, récupère la valeur à jour via MCP **et mets à jour le fichier de cache** pour la fois suivante.
