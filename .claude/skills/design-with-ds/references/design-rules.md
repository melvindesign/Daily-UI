# Règles de conception

## Composants

- **Utilise TOUJOURS** les composants du design system depuis la bibliothèque. Jamais de formes « from scratch », jamais redessiner un composant qui existe déjà.
- Référence-les par leur `componentKey` (cache `components[]`) ou via `search_design_system` avec le `libraryKey`.
- Choisis le bon composant, le bon variant et la bonne taille selon le **rôle et le contexte d'usage**. Quand le manifeste déclare des specs de composants (variants, do/don't), lis la spec pertinente et réfère-t'y pour arbitrer (quel variant pour l'action principale, quel composant pour un lien selon son contexte).

### Procédure obligatoire avant tout élément custom

Un composant custom est un **dernier recours**, jamais un raccourci. Avant d'en créer un, sois **certain à 100 %** que le composant n'existe pas.

1. **Recherche exhaustive.** Pour chaque brique de l'écran, cherche le composant via `search_design_system` (`libraryKey`) et croise avec les specs déclarées. Essaie plusieurs formulations / synonymes avant de conclure à une absence.
2. **Si le composant existe** → utilise-le. Interdit de le redessiner.
3. **Si tu conclus qu'il n'existe pas** et que tu penses devoir ajouter du custom → **NE le crée pas de ta propre initiative**. Demande à l'utilisateur : indique le composant introuvable et demande l'autorisation.
   - **Oui** → réalise-le en custom en t'appuyant sur **toutes les variables et styles des fondations** et en respectant au maximum les conventions du DS (mêmes tokens, mêmes patterns d'auto-layout, mêmes états).
   - **L'utilisateur indique qu'un composant existe** → **relance une recherche** ciblée pour le retrouver. Ne pars pas en custom.

## Typographie

- Ne crée jamais de style typographique custom — applique toujours un style du DS via `setTextStyleIdAsync`.
- Choisis le style selon le **rôle sémantique** du texte (titre de page/héros, titre de section, label, corps…). Les styles, leur nomenclature et leur usage sont dans `typography.json` : réfère-t'y avant de choisir.
- Après avoir créé un nœud texte, vérifie que `textStyleId` est bien appliqué (non vide) — un texte sans style est hors design system.

## Couleurs

- **Jamais de valeur de couleur en dur** (hex, `#FFFFFF`, `#000000`…) — lie toujours chaque couleur à une variable sémantique. La palette et ses conventions sont dans `colors.json`.
- S'applique à **TOUS les nœuds avec un fill** : frame racine, frames enfants, conteneurs de sections, backgrounds internes.
- **Piège `createFrame`** : Figma applique un fill blanc opaque par défaut. Ne le laisse jamais tel quel — soit le frame est transparent (aucun fill), soit son fill est lié à une variable de fond sémantique.
- Après avoir créé un frame, **vérifie son fill** : aucun, ou une variable sémantique. Un fill blanc/noir non lié casse le rendu dès qu'on change de thème/mode.

### Exception : couleur en valeur fixe (cas extrêmement rare)

Dernier recours, réservé à une intention **très particulière** qu'aucun token ne porte — typiquement une couleur de marque tierce à représenter fidèlement (ex. le bleu LinkedIn dans un graphe). Jamais un raccourci.

1. Sois **certain à 100 %** qu'aucune variable du DS ne convient.
2. Si tu penses avoir besoin d'une couleur fixe → **NE l'applique pas de ta propre initiative**. Demande à l'utilisateur : indique l'intention et la valeur, confirme qu'aucun token ne convient.
   - **Oui** → applique la valeur fixe uniquement sur ce nœud, garde **tout le reste** (fonds, textes, bordures alentour) lié aux variables.
   - **L'utilisateur indique qu'un token existe** → **relance une recherche** ciblée. Ne pars pas en valeur fixe.

## Sizing & Auto-layout

- **Dans la très grande majorité des cas**, les frames et conteneurs utilisent `fill-container` (`layoutGrow = 1`), `hug-content` (`primaryAxisSizingMode / counterAxisSizingMode = "AUTO"`) ou une grille, avec du padding — comportement par défaut à privilégier.
- Les `width`/`height` fixes restent **rares** : frame racine, composants à taille imposée (boutons), contrainte de dimension explicite. Ne les emploie pas par facilité.
- Nœuds texte multi-lignes : `textAutoResize = "HEIGHT"` (largeur fill-container, hauteur hug).
- Signal d'alerte : `node.resize(w, h)` sur un conteneur intermédiaire est probablement une erreur — vérifie qu'un sizing auto-layout ne conviendrait pas mieux.

## Spacing & Layout

- **Jamais de valeur d'espacement en dur** (gap, padding, rayon, tailles fixes) — lie chaque valeur à un token `Sizes/*`. L'échelle et ses conventions (ex. rayons concentriques) sont dans `spacing.json`.
- Pour structurer, instancie les composants prévus (séparateur, carte, feuille, dialogue…) plutôt que des formes dessinées — ne jamais dessiner un trait ou un rectangle pour séparer deux sections, toujours instancier le composant séparateur.

## États

- Toujours montrer au minimum l'état **Default** du composant.
- Formulaires : prévoir `Default` + `Invalid` + `Disabled`.
