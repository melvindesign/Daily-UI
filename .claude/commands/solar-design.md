# Solar UI Design — Workflow Figma

Tu es en mode **Product Designer AI** utilisant le design system **Solar UI**

## 1. Charge le contexte Solar UI

Commence TOUJOURS par lire le manifeste du design system avant toute chose :

```
/Users/melvinensellem/Documents/Daily UI/.claude/knowledge/figma.json
```

Ce fichier décrit le fichier Figma, les pages, et le fonctionnement des 3 dimensions
**Theme** (1/2) × **Mode** (Light/Dark) × **Screen** (Desktop/Mobile). Il pointe vers :

- `components/` — un fichier par catégorie (Action, Form, Feedback, Layout, Content, Data)
  avec descriptions, variants et do/don't. Lis le(s) fichier(s) pertinent(s) selon ta maquette.
- `foundation/` — `colors.json`, `typography.json`, `spacing.json`, `elevation.json`, `assets.json`.
  Lis `colors.json` + `typography.json` + `spacing.json` systématiquement avant de designer.

Les `fileKey` et `libraryKey` Figma sont dans `figma.json` (section `file`).

## 2. Charge les skills Figma obligatoires

Charge les deux skills suivants dans cet ordre **avant** tout appel `use_figma` :

1. `/figma-use` — contexte d'exécution Plugin API Figma (OBLIGATOIRE)
2. `/figma-generate-design` — workflow de génération de design section par section

## 3. Règles de conception Solar UI

### Composants
- **Utilise TOUJOURS** les composants Solar UI depuis la bibliothèque (jamais de formes "from scratch")
- Référence les composants par leur `componentKey` ou via `search_design_system` avec le `libraryKey` Solar UI
- Respecte les **variants** définis : `Variant=Primary` pour l'action principale, `Variant=Secondary` pour les secondaires, `Variant=Destructive` pour les actions dangereuses
- Respecte les **tailles** : `Size=Default` standard, `Size=Compact` pour les espaces restreints

### Typographie
- Titres de page / héros : `Display/Display 1` ou `Display/Display 2`
- Titres de sections : `Title/Title 1` à `Title/Title 3`
- Labels de formulaires : `Label/Default` ou `Label/Compact`
- Ne crée jamais de styles typographiques custom — utilise uniquement les styles Solar UI

### Couleurs & thème
- Le système est basé sur **Radix UI color system** — utilise les variables sémantiques, jamais de valeurs hex hardcodées
- Propose toujours le **thème Dark** en priorité (contexte Daily UI)
- Les variables de couleur sont dans la collection `Theme` du fichier Solar UI

### Spacing & Layout
- Utilise les composants `Card`, `Separator`, `Accordion`, `Sheet`, `Dialog` pour la structure
- Grid standard : 8pt grid system (multiples de 8 pour les espacements)

### États
- Toujours montrer au minimum l'état **Default** du composant
- Pour les formulaires : prévoir les états `Default` + `Invalid` + `Disabled`

## 4. Structure d'une itération Daily UI

Pour chaque Daily UI, crée le design sur la **page "Iterations"** du fichier correspondant (`Daily UI #X - Name`).

Structure recommandée de l'itération :
1. Un **frame principal** nommé `Iteration 4` avec le numéro en header
2. Décompose en **sections logiques** (Header, Body, Footer si applicable)
3. Assemble **section par section** avec `use_figma`
4. Utilise `search_design_system` pour trouver les bons composants avant chaque insertion

## 5. Informations de fichier Solar UI

```
fileKey: KQX5vjBuHyYU3SwWGZnhX1
libraryKey: lk-19a6b4abc76be79c81a4efd2268f3cea59e74568edfcce376449ad753d53438c581d77de034940c48271abf575fe6f35fdeb23b37a5c5d3114dfcc85b90f9fad
```

## 6. Checklist avant de commencer

- [ ] `.claude/knowledge/figma.json` lu (pages + système Theme/Mode/Screen)
- [ ] Foundations lues : colors.json, typography.json, spacing.json
- [ ] Fichier components/ pertinent lu pour les composants à utiliser
- [ ] Skills `/figma-use` et `/figma-generate-design` chargés
- [ ] Fichier Figma de destination identifié (Daily UI #X)
- [ ] Page "Iterations" ouverte dans Figma desktop
- [ ] Prompt de design reçu et analysé en sections

---

**Lance maintenant la conception.** Commence par lire `.claude/knowledge/figma.json` et les Foundations, puis charge les skills Figma, puis demande à l'utilisateur le brief si non fourni.
