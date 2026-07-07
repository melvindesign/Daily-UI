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
- **Utilise TOUJOURS** les composants du design system depuis la bibliothèque (jamais de formes "from scratch", ne jamais redessiner un composant existant)
- Référence les composants par leur `componentKey` ou via `search_design_system` avec le `libraryKey`
- Choisis le bon composant, le bon variant et la bonne taille selon le **rôle et le contexte d'usage**. Les composants disponibles, leurs variants et leurs règles do/don't sont documentés dans `components/*.json` : lis le(s) fichier(s) pertinent(s) et réfère-t'y pour arbitrer (ex. quel variant pour l'action principale, quel composant utiliser pour un lien selon son contexte)

### Typographie
- Ne crée jamais de style typographique custom — applique toujours un style du design system via `setTextStyleIdAsync`
- Choisis le style selon le **rôle sémantique** du texte (titre de page/héros, titre de section, label, corps…). Les styles disponibles, leur nomenclature et leur usage sont dans `typography.json` : réfère-t'y avant de choisir
- Après avoir créé un nœud texte, vérifie que `textStyleId` est bien appliqué (non vide) — un texte sans style est hors DS

### Couleurs & thème
- **Jamais de valeur de couleur en dur** (hex, `#FFFFFF`, `#000000`…) — lie toujours chaque couleur à une variable sémantique du design system. La palette, ses conventions et la collection de variables sont décrites dans `colors.json` : réfère-t'y
- Cette règle s'applique à **TOUS les nœuds avec un fill** : frame racine, frames enfants, conteneurs de sections, backgrounds internes
- **Piège `createFrame`** : Figma applique un fill blanc opaque par défaut à chaque frame créé. Ne le laisse jamais tel quel — soit le frame est transparent (aucun fill), soit son fill est lié à une variable de fond sémantique (cf. `colors.json`)
- Après avoir créé un frame, **vérifie son fill** : aucun, ou une variable sémantique. Un fill blanc/noir non lié à une variable = hors DS (casse notamment le thème Dark)
- Propose toujours le **thème Dark** en priorité (contexte Daily UI)

### Sizing & Auto-layout
- Les frames et conteneurs utilisent **toujours** `hug-content` (`primaryAxisSizingMode / counterAxisSizingMode = "AUTO"`) ou `fill-container` (`layoutGrow = 1`) avec du padding — jamais de `width`/`height` fixes (sauf le frame racine de l'itération et les composants à taille imposée comme les boutons)
- Les nœuds texte multi-lignes : `textAutoResize = "HEIGHT"` (largeur fill-container, hauteur hug)
- Règle de vérification : si tu te retrouves à écrire `node.resize(w, h)` sur un conteneur intermédiaire, c'est un signal d'erreur — utilise auto-layout à la place

### Spacing & Layout
- **Jamais de valeur d'espacement en dur** (gap, padding, rayon de coin, tailles fixes) — lie chaque valeur à un token d'espacement du design system. L'échelle, ses conventions et les règles associées (ex. rayons concentriques) sont dans `spacing.json` : réfère-t'y. Les valeurs réelles se résolvent automatiquement selon le Screen (desktop/mobile)
- Pour structurer, instancie les composants prévus à cet effet (séparateur, carte, feuille, dialogue…) plutôt que des formes dessinées — ne jamais dessiner un trait ou un rectangle pour séparer deux sections, toujours instancier le composant séparateur correspondant (cf. `components/*.json`)

### États
- Toujours montrer au minimum l'état **Default** du composant
- Pour les formulaires : prévoir les états `Default` + `Invalid` + `Disabled`

## 4. Checklist avant de commencer

- [ ] `.claude/knowledge/figma.json` lu (pages + système Theme/Mode/Screen)
- [ ] Foundations lues : colors.json, typography.json, spacing.json
- [ ] Fichier components/ pertinent lu pour les composants à utiliser
- [ ] Skills `/figma-use` et `/figma-generate-design` chargés
- [ ] Fichier Figma de destination identifié (Daily UI #X)
- [ ] Page "Iterations" ouverte dans Figma desktop
- [ ] Prompt de design reçu et analysé en sections

**Contrôles de conformité pendant la conception :**
- [ ] Aucun fill par défaut laissé : chaque frame est transparent ou lié à une variable de fond (cf. `colors.json`)
- [ ] Aucune valeur en dur : couleurs, typographies et espacements liés à des variables / styles / tokens (cf. `colors.json`, `typography.json`, `spacing.json`)

---

**Lance maintenant la conception.** Commence par lire `.claude/knowledge/figma.json` et les Foundations, puis charge les skills Figma, puis demande à l'utilisateur le brief si non fourni.
