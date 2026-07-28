# Brief de cadrage — #3 Landing Page (Stellar)

Trace de l'élicitation qui a produit `PRD.md`. Un agent neuf doit pouvoir reprendre le
cadrage à partir de ce seul fichier, sans redemander quoi que ce soit.

- **Date** : 2026-07-25
- **Mode d'exécution** : `mono-agent` — rôle `product-manager` incarné par l'orchestrateur.
  Le benchmark est resté délégué à l'agent `ux-researcher`.
- **Artefacts frères** : `BENCHMARK.md`, `ref/` (14 captures, 8 produits).

## Besoin initial (formulation de l'utilisateur)

> Il s'agit de la landing page de Stellar, un SaaS B2B qui va bientôt sortir. Le but de
> cette landing page est de convertir le visiteur en inscription à la bêta (récolte
> d'email). Stellar est un SaaS et un plugin Claude qui permet d'améliorer drastiquement
> les rendus d'un agent IA. En effet dans un premier temps nous synchronisons le fichier
> Figma du design system, la codebase et/ou la documentation du design system. Nous les
> trions et permettons à l'utilisateur de définir des règles d'utilisation des tokens,
> composants, patterns etc. Puis l'utilisateur définit ses préférences, de comment il aime
> avoir un rendu avec son agent. Ensuite il connecte le plugin Stellar à son agent. Et
> enfin il a à disposition un MCP, des skills, des agents et des commands pour le workflow
> prêt à l'emploi qui vont produire des maquettes, des prototypes ou des intégrations
> fidèles aux règles du design system. La cible est les product designers AI, design system
> managers, product managers et design engineers.

**Supports attendus** : web desktop **et** mobile, chaque support traité pour lui-même.

**Inspirations données en cours de cadrage** (message spontané de l'utilisateur) :

- **Linear**, **Raycast** — esthétique et mise en page. *Ne concerne pas le PRD* : à
  transmettre au brief de design.
- **Storybook**, **Supernova**, **zeroheight** — l'aspect métier. Fixe l'axe de comparaison
  du positionnement : ces outils documentent un design system pour des humains ; Stellar le
  rend exploitable par un agent.

## Questions structurantes posées, et réponses

### 1. Qualification — que savoir des inscrits au-delà de l'email ?

**Impact** : détermine s'il existe une user story et un état supplémentaires après la
capture, ou une seule story de conversion.
**Défaut annoncé** : email seul.

> **Réponse : email, puis qualification optionnelle.** Capture de l'email d'abord ; après
> soumission, on propose rôle + agent utilisé (Claude Code / Cursor / autre) + design
> system existant. Conforme à la convention observée (aucune référence ne qualifie dans le
> hero).

### 2. Source de trafic — fixe la longueur de la page et l'ordre des sections

**Impact** : le niveau de conscience (Schwartz) change la séquence entière et la longueur.
**Défaut annoncé** : social organique, problem-aware, page longue.

> **Réponse : les deux (social organique X/LinkedIn + Product Hunt), sans priorité.**
> Conséquence assumée avec l'utilisateur : le cadrage se fait sur le niveau le plus froid
> (**problem-aware**), page longue par sécurité. Déclaré en hypothèse dans le PRD.

### 3. Preuve disponible aujourd'hui

**Impact** : décide de l'existence d'une section preuve et de sa nature. Aucune référence de
pré-lancement n'affiche de logos ni de métriques.
**Défaut annoncé** : aucun (question ouverte, « rien » était une réponse valide).

> **Réponse : des rendus produits par le plugin** — avant/après sur un vrai design system,
> même anonymisé. C'est le levier de crédibilité retenu, à la place de la preuve sociale
> classique impossible en pré-lancement.

### 4. Périmètre autour de la conversion (choix multiple)

**Impact** : chaque option ajoute une user story et/ou un état de confirmation ; le CTA
« call » créerait un second objectif de conversion, que le pattern landing proscrit.
**Défaut annoncé** : rien de coché = email seul.

Options proposées : CTA alternatif « réserver un call » · rang dans la file + parrainage ·
email de confirmation annoncé à l'écran · compteur d'inscrits.

> **Réponse : email de confirmation annoncé à l'écran, et rien d'autre.**
> Donc **écartés explicitement** : le CTA « réserver un call » (objectif de conversion
> unique préservé), le rang/parrainage (mécanique B2C peu pertinente en B2B technique), le
> compteur d'inscrits (contre-productif à faible volume).

## Défauts pris par le PM et validés en bloc

Annoncés à l'utilisateur au moment de poser les questions, non contredits :

| Décision | Raison |
| --- | --- |
| Formulaire de capture **inline dans le hero** | L'offre est gratuite et réversible, donc peu engageante : le formulaire *est* le CTA. Convention confirmée par le benchmark (Coinbase, Cron). |
| Section **« comment ça marche » en 4 étapes** | La valeur de Stellar est séquentielle et la catégorie est neuve. La sobriété observée en pré-lancement coûterait la compréhension. Choix différenciant assumé, sans précédent dans l'échantillon. |
| **Pas de prix** sur la page | Produit non sorti, offre bêta gratuite. Écrit en hors-scope. |

## Second tour — complément de benchmark et challenge de spec

Après livraison du PRD v1, l'utilisateur a demandé d'ajouter au benchmark cinq références
qu'il avait citées en cours de route, puis de challenger le PRD.

### Complément de benchmark (même agent `ux-researcher`, contexte repris)

Deux passes séparées, la lentille n'étant pas la même :

- **Passe A, UI/composition** — Linear et Raycast. **Raycast s'est révélé inaccessible**
  (absent de Mobbin, navigateur intégré indisponible) : déclaré comme limite de source
  plutôt que décrit de mémoire. La passe ne repose donc que sur Linear, une seule
  référence — aucune observation n'y est qualifiée de convention.
- **Passe B, positionnement métier** — Storybook, Supernova, zeroheight, vérifiés par
  récupération du contenu réel des pages (pas de capture visuelle : écart au gate assumé,
  la lentille demandée étant textuelle).

**Le mobile est resté un trou aux deux passes** — le navigateur intégré était indisponible
les deux fois. Il faudra un autre outil ou des captures fournies à la main.

### Le constat qui a fait basculer le cadrage

Supernova et zeroheight ont **déjà** un discours agent/IA explicite dès le titre de leur
hero, avec Claude, Cursor et MCP nommés ; zeroheight écrit *« Get teams and agents building
from your design system »*. Le PRD v1 les décrivait comme des outils qui documentent le
design system pour des humains : **c'était faux**, et tout l'argumentaire reposait dessus.

Axe encore libre, observé nulle part dans les trois : aucune ne décrit un geste de
**calibration humaine** — tri, règles d'usage, préférences de rendu — en amont de l'agent.
Ce sont les étapes 2 et 3 du fonctionnement de Stellar.

### Challenge du PRD (rôle `product-manager` incarné)

Statut : **écarts constatés**. Verdict : fonctionnel-only en écart (4 fuites visuelles),
critères testables en écart (3 critères non observables), hors-scope et granularité
conformes. 13 corrections identifiées, dont 4 relevant d'un arbitrage utilisateur.

> ⚠️ Challenge non indépendant : la spec a été relue par son auteur, en `mono-agent`.
> Signalé à l'utilisateur, qui a maintenu ce mode.

**Les deux arbitrages posés à l'utilisateur :**

1. *Comment se positionner face à Supernova et zeroheight ?*
   **Réponse : sur la calibration humaine.** Ils exposent la donnée du DS à l'agent ;
   Stellar laisse l'humain poser les règles et ses préférences avant que l'agent produise.
   Corollaire décidé au passage : **ne nommer aucun concurrent** — nommer des alternatives
   établies devant une audience froide les lui ferait découvrir.
2. *Que peut faire un visiteur qui se demande « qui est derrière Stellar ? »*
   **Réponse : rien, on assume.** L'objection reste sans réponse sur la page. Consignée
   comme hypothèse déclarée en tête de « À valider », et non comme un oubli : c'est le
   premier point à réexaminer si la conversion déçoit.

**Les 13 corrections appliquées au PRD v2 :**

| # | Nature |
| --- | --- |
| 1 | Statu quo réécrit en double (artisanal + outillé) ; axe = calibration humaine |
| 2 | Objection « en quoi c'est différent de ce qui existe déjà ? » ajoutée (n°3) |
| 3 | Objection de légitimité : arbitrée en hypothèse déclarée, pas en capacité |
| 4 | F4 : les étapes 2 et 3 déclarées porteuses de la différenciation |
| 5 | « numérotées » retiré — aucun précédent dans les 13 références ; forme rendue au design |
| 6 | F7/F10 : la répétition des points d'entrée, qui était une composition de page, devient une capacité d'atteignabilité |
| 7 | F8 : « à l'emplacement du point de saisie » remplacé par « sans quitter la page ni perdre le contexte » |
| 8 | F5 (compatibilité) passée de `should` à `must` |
| 9 | Consentement explicite ajouté comme condition de soumission |
| 10 | État « inscriptions fermées » ajouté aux issues |
| 11 | C4 et C10 v1 (règles de processus) déplacés dans une section « Méthode de revue » |
| 12 | Critère de cible tactile reformulé en observable |
| 13 | Gratuité de la bêta énoncée à la saisie, la grille tarifaire restant hors-scope |

Le PRD v2 compte 11 user stories, 10 fonctionnalités et 30 critères d'acceptation.

## Troisième tour — arbitrages sur les hypothèses (PRD v3)

L'utilisateur a tranché quatre des hypothèses déclarées en v2.

| Hypothèse v2 | Arbitrage |
| --- | --- |
| Liste de compatibilité supposée | **Claude Code pris en charge, Codex à venir.** Aucun autre agent annoncé. Le statut « à venir » devient une donnée fonctionnelle affichée (F5) et une raison de s'inscrire, pas un motif de partir. |
| Légitimité sans réponse (« on assume ») | **Renversé** : une capacité F7 est créée. La légitimité s'établit par l'**expérience vécue du problème** — un design engineer qui construit l'outil qui lui manquait — et **sans lien sortant**, ce qui préserve l'attention ratio. L'objection « qui êtes-vous ? » entre dans la liste en n°7. |
| Mécanisme d'ouverture de la bêta | **« Je ne sais pas encore ».** Traité par une formulation sans engagement en F9 (« vous serez prévenu dès que votre accès est prêt ») et un interdit explicite en C21b : aucun délai, aucune date, aucun rang à l'écran. Provisoire par construction, à remplacer avant mise en ligne réelle. |
| Mobile sans base observée | L'utilisateur s'en charge : captures à fournir. Hypothèse maintenue, avec sa résolution annoncée. |
| Valeurs de qualification, vocabulaire, contenu de la preuve | **« Définissons le quoi, je m'occupe du visuel »** — le PM tranche le fonctionnel, le contenu visuel reste à l'utilisateur. Voir ci-dessous. |

### Ce que le PM a tranché sur consigne « définissons le quoi »

- **Registre lexical** — n'était plus une hypothèse mais une décision de cadrage : la page
  n'ouvre pas sur le vocabulaire de catégorie déjà capté par les concurrents (« source of
  truth », « agents building from your design system ») ; elle emploie le vocabulaire du
  geste (trier, définir des règles, poser ses préférences, calibrer). Les termes de
  catégorie redeviennent utilisables une fois la différence posée.
- **Contrat fonctionnel de la preuve (F6)** — quatre exigences qui rendent la comparaison
  démonstrative : point de départ identique et identifiable, écart portant sur la conformité
  et jamais sur l'esthétique, chaque écart rattachable à une règle nommable, nombre d'écarts
  lisible d'un coup d'œil. La forme et le choix du design system restent à l'utilisateur.
- **Valeurs de qualification (F10)** — rôle (product designer / DS manager / PM / design
  engineer / autre), agent (Claude Code / Codex / autre / aucun), design system existant
  (Figma seul / Figma + code / code seul / documentation publiée / pas de DS formalisé).
  Chaque question admet une échappatoire ; la liste d'agents reste cohérente avec F5.

### Raycast

Non benchmarké faute d'accès. L'utilisateur fournira les captures. Sans conséquence sur le
PRD (lentille visuelle), à reporter au brief de design.

**PRD v3** : 12 user stories, 11 fonctionnalités, 36 critères d'acceptation, 8 objections,
12 items en hors-scope, 5 hypothèses restantes.

## Points laissés non structurants → section « À valider » du PRD

- Contenu exact des options de qualification (liste des agents, des rôles).
- Existence et contenu d'un email de confirmation côté serveur (la page l'annonce ; le PRD
  ne spécifie pas l'email lui-même).
- Comportement mobile détaillé : le benchmark n'a produit **aucune observation mobile**
  (limite de source déclarée). Le PRD s'appuie sur le pattern `landing-page`, pas sur du
  marché observé.
- Nature précise de l'avant/après de preuve : quel design system, quel niveau
  d'anonymisation.
