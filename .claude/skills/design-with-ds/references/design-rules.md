# Règles de conception

## Composants

- **Utilise TOUJOURS** les composants du design system depuis la bibliothèque. Jamais de formes « from scratch », jamais redessiner un composant qui existe déjà.
- Référence-les par leur `componentKey` (cache `components[]`) ou via `search_design_system` avec le `libraryKey`.
- Choisis le bon composant, le bon variant et la bonne taille selon le **rôle et le contexte d'usage**. Quand le manifeste déclare des specs de composants (variants, do/don't), lis la spec pertinente et réfère-t'y pour arbitrer (quel variant pour l'action principale, quel composant pour un lien selon son contexte).

### Passe obligatoire d'inventaire des rôles (AVANT de dessiner quoi que ce soit)

Le custom ne s'introduit presque jamais par une décision consciente de partir en
custom — il s'introduit parce qu'un besoin n'a **jamais été formulé comme une
recherche de composant**. On ne se dit pas « il me faut un indicateur de
progression, existe-t-il ? », on se dit « je dessine des ronds numérotés reliés
par un trait ». Le garde-fou doit donc se déclencher **au cadrage de l'écran**,
pas au moment de dessiner.

Avant toute création de nœud, une fois l'architecture de l'écran arrêtée :

1. **Liste les rôles UI de l'écran** — un rôle = une fonction pour l'utilisateur,
   formulée en langage de besoin, pas en langage de forme : « saisir un email »,
   « valider le formulaire », « **indiquer où j'en suis dans un parcours en N
   étapes** », « signaler une erreur de validation », « regrouper visuellement le
   formulaire ».
2. **Mappe chaque rôle sur un composant du DS.** Un rôle ne « ressemble » pas à
   une famille du DS : les familles sont une taxonomie de bibliothèque, pas une
   table des besoins. **Ne présume jamais qu'une famille est hors-sujet pour ton
   écran** — un composant de progression peut être rangé en navigation, un
   séparateur en layout, un compteur en données. Balaye l'inventaire **complet**
   des composants déclarés par le manifeste, pas seulement les familles qui
   paraissent liées au type d'écran.
3. **Rôle non couvert ?** Élargis d'abord la recherche : reformule le besoin avec
   d'autres mots (synonymes, terme anglais, nom générique du pattern) et croise
   avec `search_design_system` (`libraryKey`). Un composant existant mais nommé
   autrement est le cas le plus fréquent — de loin plus fréquent qu'un vrai trou.
4. **Trou confirmé → tu t'arrêtes.** Un composant custom est un dernier recours
   qui ne se prend **jamais** de ta propre initiative : voir la procédure
   ci-dessous.

> Un rôle dessiné à la main alors que le DS le couvre est la régression la plus
> coûteuse du skill : elle est invisible à l'écran (le rendu est correct) et ne
> se voit qu'en inspectant les calques.

### Procédure obligatoire quand un rôle semble non couvert

**Interdit de créer du custom de ta propre initiative**, quel que soit ton mode
d'exécution. Le custom est une décision de l'utilisateur, jamais la tienne.

- **Si tu peux interroger l'utilisateur** → décris le rôle non couvert, les
  recherches déjà faites, et demande l'autorisation.
  - **Oui** → réalise-le en custom en t'appuyant sur **toutes les variables et
    styles des fondations** et en respectant au maximum les conventions du DS
    (mêmes tokens, mêmes patterns d'auto-layout, mêmes états).
  - **L'utilisateur indique qu'un composant existe** → **relance une recherche**
    ciblée pour le retrouver. Ne pars pas en custom.
- **Si tu travailles en autonomie** (mission déléguée, sans interlocuteur) →
  **ne tranche pas, et ne comble pas le trou**. Une consigne d'autonomie te
  demande de prendre l'option raisonnable sur les choix de conception ; elle ne
  t'autorise pas à créer du custom, qui reste une décision de l'utilisateur.
  Livre le reste et remonte le rôle non couvert comme un **blocage explicite**
  dans ton rapport (le rôle, tes recherches, ce que tu proposerais) pour que
  l'appelant pose la question. Un blocage remonté est un résultat correct ; un
  custom inventé ne l'est pas.

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
- **Le contenu suit le contexte d'usage.** Un même composant local peut servir dans des contextes aux besoins opposés : écran réel du flow vs aperçu/illustration marketing, état d'activation (premier usage) vs état de croisière (données remplies). Le contenu adapté à un contexte est un contresens dans l'autre — un empty state légitime sur l'écran d'arrivée devient une anti-vitrine dans un panneau marketing. Quand un composant est réutilisé à travers des contextes différents, expose ce qui varie en **propriétés ou variantes de contenu** et choisis à l'instance le contenu du contexte ; ne laisse jamais le contenu d'un contexte fuiter dans l'autre par commodité de réutilisation.

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
