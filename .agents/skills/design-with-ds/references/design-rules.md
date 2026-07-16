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

### Patterns répétés dans la maquette → composant local (source de vérité unique)

Dès que tu conçois un **parcours** plutôt qu'un écran isolé, un même assemblage se répète : le même bloc réapparaît à plusieurs endroits de la maquette. Les cas typiques :

- **Entre breakpoints** — la version desktop et la version mobile d'un écran partagent le même formulaire / la même carte / le même en-tête.
- **Entre étapes d'un flow** — un panneau, un bandeau latéral, un pied d'action, un gabarit d'étape identiques d'un écran à l'autre du parcours.
- **Répétition dans un même écran** — une ligne de liste, une cellule, un item récurrents.

Règle : **chaque assemblage réutilisé doit être un composant local** (`createComponent` / `createComponentSet` dans le fichier), instancié à chaque occurrence — **jamais** copié-collé en calques indépendants. L'assemblage n'existe alors **qu'une seule fois** dans la maquette : c'est la source de vérité unique. Une correction se propage à toutes les instances ; deux instances ne peuvent pas diverger par accident.

- **Un composant par pattern, ou un composant à variantes** — au choix selon le cas. Si les occurrences ne diffèrent que par un état ou un contenu discret (étape du flow, breakpoint, état de validation), préfère **un seul composant à variantes** (`createComponentSet`) piloté par des propriétés, plutôt que N composants séparés. L'objectif est toujours le même : une seule définition à maintenir.
- **Ce que tu factorises**, c'est le pattern propre à cette maquette — l'assemblage de composants du DS, pas un composant du DS lui-même. Les briques atomiques restent instanciées depuis la bibliothèque à l'intérieur du composant local (cette règle ne remplace pas « toujours instancier depuis la bibliothèque », elle s'applique au **niveau au-dessus**).
- **N'anticipe pas à l'excès** : un assemblage vu une seule fois n'a pas besoin d'être un composant. Le déclencheur est la **répétition réelle** (≥ 2 occurrences) ou la certitude qu'elle arrive (un flow multi-écrans / multi-breakpoints décidé dès le départ).
- **Distingue le pattern de son application** : le composant local porte le pattern (la structure, les propriétés) ; chaque instance porte son application dans le contexte (position, breakpoint, contenu de l'étape). Ne fige pas dans le composant ce qui relève de l'instance, et inversement.

## Typographie

- Ne crée jamais de style typographique custom — applique toujours un style du DS via `setTextStyleIdAsync`.
- Choisis le style selon le **rôle sémantique** du texte (titre de page/héros, titre de section, label, corps…). Les styles, leur nomenclature et leur usage sont dans la **foundation typographique** déclarée par le manifeste : réfère-t'y avant de choisir.
- Après avoir créé un nœud texte, vérifie que `textStyleId` est bien appliqué (non vide) — un texte sans style est hors design system.

## Couleurs

- **Jamais de valeur de couleur en dur** (hex, `#FFFFFF`, `#000000`…) — lie toujours chaque couleur à un **token de couleur sémantique**. La palette et ses conventions sont dans la **foundation couleur** déclarée par le manifeste.
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

### Clip content (rognage) — désactivé par défaut

`clipsContent` **doit rester `false` par défaut**. Ne l'active jamais par réflexe : sur un conteneur en `hug-content` bien construit, le contenu tient dans ses bornes et le rognage est inutile ; activé à tort, il masque silencieusement des débordements (ombres, focus rings, contenu qui dépasse) et provoque de petites erreurs difficiles à diagnostiquer.

- Laisse `clipsContent = false` sur la quasi-totalité des conteneurs et sections.
- **Ne l'active que si le rognage est réellement nécessaire**, quand c'est l'intention : cadre de page / viewport qui borne la maquette, image ou média à recadrer, carrousel / zone scrollable, masque à coins arrondis sur un visuel. Dans ces cas, le clip fait partie du design.
- Si tu constates un débordement, corrige d'abord le **sizing / l'auto-layout** (le vrai problème) plutôt que de le cacher avec un clip.

## Spacing & Layout

- **Jamais de valeur d'espacement en dur** (gap, padding, rayon, tailles fixes) — lie chaque valeur à un **token d'espacement/dimension**. L'échelle, ses valeurs et ses conventions sont dans la **foundation d'espacement** déclarée par le manifeste : choisis le token par **magnitude relative** (degré d'espace voulu), jamais par une valeur px visée.
- Pour structurer, instancie les composants prévus (séparateur, carte, feuille, dialogue…) plutôt que des formes dessinées — ne jamais dessiner un trait ou un rectangle pour séparer deux sections, toujours instancier le composant séparateur.

### Proximité & rythme vertical

L'espace encode l'appartenance : plus deux éléments sont liés, plus ils sont proches. Garde un rythme cohérent sur trois niveaux, du plus serré au plus large, selon le degré d'appartenance — **appartenance directe** (label→champ, champ→message d'erreur, icône→texte) < **même famille** (champ→champ, bouton→bouton) < **bascule de contexte** (titre→bloc, séparateur, changement de section).

- Un même niveau d'appartenance = un même espace (rythme régulier entre éléments de même niveau).
- **Un message d'erreur doit être plus proche de son champ que les champs ne le sont entre eux** — sinon il flotte et perd son rattachement. La même logique vaut pour tout élément « collé » à son parent (label, aide inline, icône).

### Coins concentriques

Quand un élément arrondi est imbriqué dans un conteneur arrondi, les rayons doivent être **concentriques** (coins parallèles) : **rayon externe = rayon interne + padding** qui les sépare. Inversement, **rayon interne = rayon externe − padding** ; si le résultat est ≤ 0, l'enfant reste à angles droits.

## États

- Toujours montrer au minimum l'état **Default** du composant.
- Formulaires : prévoir `Default` + `Invalid` + `Disabled`.
