---
name: stellar-figma-use
description: Designer dans Figma en s'appuyant sur la knowledge d'un design system. À charger avant tout travail de design dans Figma : explique comment lire l'architecture de knowledge (manifeste + foundations + composants) et les règles de conception à respecter, quel que soit le design system.
---

# Design avec le design system dans Figma

Tu es en mode **Product Designer AI**. Ce skill décrit **comment exploiter la knowledge du design system** (dossier `.claude/knowledge/`) pour concevoir correctement dans Figma.

## 1. Charge le contexte du design system

Commence **TOUJOURS** par lire le manifeste avant toute chose :

```
.claude/knowledge/figma.json
```

Ce manifeste décrit le fichier Figma du design system, sa structure, ses conventions de thématisation/variables, et les clés d'accès (`fileKey`, `libraryKey`). **C'est lui qui déclare comment la knowledge est organisée** — l'architecture des fichiers varie d'un design system à l'autre (certains n'ont pas de spécifications de composants, d'autres les regroupent différemment). Ne présume d'aucune structure : suis les chemins que le manifeste liste.

À partir du manifeste :

- **Fondations** — lis les fichiers de fondation déclarés par le manifeste ; au minimum ceux couvrant couleurs, typographie et espacement avant de designer.
- **Spécifications de composants** — si le manifeste en déclare (descriptions, variants, règles do/don't), lis celle(s) pertinente(s) pour l'écran à produire.

La knowledge est la **seule source de vérité** pour les valeurs, noms de tokens, styles, variants et conventions. Ne présume jamais d'un nom ou d'une valeur : va le vérifier dans les fichiers pointés par le manifeste.

## 2. Charge les skills Figma d'exécution

Assure-toi que ces skills sont chargés **avant** tout appel `use_figma`, dans cet ordre :

1. `/figma-use` — contexte d'exécution Plugin API Figma (OBLIGATOIRE)
2. `/figma-generate-design` — workflow de génération de design section par section

## 3. Règles de conception

### Composants
- **Utilise TOUJOURS** les composants du design system depuis la bibliothèque. Jamais de formes "from scratch", jamais redessiner un composant qui existe déjà.
- Référence les composants par leur `componentKey` ou via `search_design_system` avec le `libraryKey`
- Choisis le bon composant, le bon variant et la bonne taille selon le **rôle et le contexte d'usage**. Quand le manifeste déclare des spécifications de composants (variants, règles do/don't), lis la (les) spec(s) pertinente(s) et réfère-t'y pour arbitrer (ex. quel variant pour l'action principale, quel composant utiliser pour un lien selon son contexte)

#### Procédure obligatoire avant tout élément custom

Un composant custom est un **dernier recours**, jamais un raccourci. Avant d'en créer un, tu dois être **certain à 100 %** que le composant n'existe pas dans la bibliothèque.

1. **Recherche exhaustive.** Pour chaque brique de l'écran, cherche le composant correspondant via `search_design_system` (`libraryKey`) et croise avec les specs de composants déclarées par le manifeste. Essaie plusieurs formulations / synonymes avant de conclure à une absence.
2. **Si le composant existe** → utilise-le. Interdit de le redessiner.
3. **Si tu conclus qu'il n'existe pas** et que tu penses devoir ajouter un élément custom → **NE le crée pas de ta propre initiative**. Demande à l'utilisateur : indique le composant que tu n'as pas trouvé et demande si tu peux le réaliser en custom.
   - **Si l'utilisateur dit oui** → réalise-le en custom en t'appuyant sur **toutes les variables et styles des fondations** (couleurs, typographie, espacement…) et en respectant au maximum les conventions du design system (mêmes tokens, mêmes patterns d'auto-layout, mêmes états).
   - **Si l'utilisateur indique qu'un composant existe** (ou te suggère un/des composant(s) à utiliser) → **relance une recherche** ciblée pour le retrouver et l'utiliser. Ne pars pas en custom.

### Typographie
- Ne crée jamais de style typographique custom — applique toujours un style du design system via `setTextStyleIdAsync`
- Choisis le style selon le **rôle sémantique** du texte (titre de page/héros, titre de section, label, corps…). Les styles disponibles, leur nomenclature et leur usage sont dans `typography.json` : réfère-t'y avant de choisir
- Après avoir créé un nœud texte, vérifie que `textStyleId` est bien appliqué (non vide) — un texte sans style est hors design system

### Couleurs
- **Jamais de valeur de couleur en dur** (hex, `#FFFFFF`, `#000000`…) — lie toujours chaque couleur à une variable sémantique du design system. La palette, ses conventions et la collection de variables sont décrites dans `colors.json` : réfère-t'y
- Cette règle s'applique à **TOUS les nœuds avec un fill** : frame racine, frames enfants, conteneurs de sections, backgrounds internes
- **Piège `createFrame`** : Figma applique un fill blanc opaque par défaut à chaque frame créé. Ne le laisse jamais tel quel — soit le frame est transparent (aucun fill), soit son fill est lié à une variable de fond sémantique (cf. `colors.json`)
- Après avoir créé un frame, **vérifie son fill** : aucun, ou une variable sémantique. Un fill blanc/noir non lié à une variable est hors design system et casse le rendu dès qu'on change de thème/mode

#### Exception : couleur en valeur fixe (cas extrêmement rare)

Une couleur en dur est un **dernier recours**, réservé à une intention **très particulière** qu'aucun token sémantique ne peut porter — typiquement une couleur de marque tierce à représenter fidèlement (ex. le bleu LinkedIn dans un graphe). Ce n'est jamais un raccourci pour aller plus vite.

1. Sois **certain à 100 %** qu'aucune variable du design system ne convient : cherche dans les tokens sémantiques déclarés par le manifeste avant de conclure à une absence.
2. Si tu penses avoir besoin d'une couleur fixe → **NE l'applique pas de ta propre initiative**. Demande à l'utilisateur : indique l'intention et la valeur envisagée, et confirme qu'aucun token ne convient.
   - **Si l'utilisateur dit oui** → applique la valeur fixe uniquement sur ce nœud précis, et garde **tout le reste** (fonds, textes, bordures alentour) lié aux variables du design system.
   - **Si l'utilisateur indique qu'un token existe** → **relance une recherche** ciblée pour le retrouver et l'utiliser. Ne pars pas en valeur fixe.

### Sizing & Auto-layout
- **Dans la très grande majorité des cas**, les frames et conteneurs utilisent `fill-container` (`layoutGrow = 1`), `hug-content` (`primaryAxisSizingMode / counterAxisSizingMode = "AUTO"`) ou une grille, avec du padding — c'est le comportement par défaut à privilégier
- Les valeurs de `width`/`height` fixes restent **rares** et réservées aux cas qui l'exigent vraiment (frame racine, composants à taille imposée comme les boutons, contrainte de dimension explicite). Ne les emploie pas par facilité
- Les nœuds texte multi-lignes : `textAutoResize = "HEIGHT"` (largeur fill-container, hauteur hug)
- Signal d'alerte : si tu écris `node.resize(w, h)` sur un conteneur intermédiaire, c'est probablement une erreur — vérifie qu'un sizing auto-layout ne conviendrait pas mieux avant de le garder

### Spacing & Layout
- **Jamais de valeur d'espacement en dur** (gap, padding, rayon de coin, tailles fixes) — lie chaque valeur à un token d'espacement du design system. L'échelle, ses conventions et les règles associées (ex. rayons concentriques) sont dans `spacing.json` : réfère-t'y
- Pour structurer, instancie les composants prévus à cet effet (séparateur, carte, feuille, dialogue…) plutôt que des formes dessinées — ne jamais dessiner un trait ou un rectangle pour séparer deux sections, toujours instancier le composant séparateur correspondant (cf. les specs de composants déclarées par le manifeste)

### États
- Toujours montrer au minimum l'état **Default** du composant
- Pour les formulaires : prévoir les états `Default` + `Invalid` + `Disabled`

## 4. Checklist avant de commencer

- [ ] `.claude/knowledge/figma.json` lu (structure du DS + conventions de variables)
- [ ] Fondations pertinentes lues (chemins déclarés par le manifeste) : au minimum couleurs, typographie, espacement
- [ ] Spec(s) de composants pertinente(s) lue(s), si le manifeste en déclare
- [ ] Skills `/figma-use` et `/figma-generate-design` chargés
- [ ] Fichier Figma de destination identifié

**Contrôles de conformité pendant la conception :**
- [ ] Aucun fill par défaut laissé : chaque frame est transparent ou lié à une variable de fond (cf. `colors.json`)
- [ ] Aucune valeur en dur : couleurs, typographies et espacements liés à des variables / styles / tokens (cf. `colors.json`, `typography.json`, `spacing.json`)
