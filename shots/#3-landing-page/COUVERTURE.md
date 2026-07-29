# Matrice de couverture — #3 Landing Page (Stellar)

> Remplie **avant** conception. Une case = un écran à produire.
> Une case vide sans raison écrite est un oubli, pas une décision.

**Source du besoin** : `PRD.md` (v4) · complété par `BRIEF.md`
**Supports demandés** : web desktop (1440) · web mobile (390)
**Itération Figma** : `#3 - iteration 4` — section `468:2630`
**Langue de la copy** : anglais (arbitrage utilisateur — cf. « Décisions de cadrage »)

## Décisions de cadrage prises avant de dessiner

| Décision | Portée | Raison |
| --- | --- | --- |
| **Un seul jeu de frames, entièrement lié aux tokens** — pas de duplication Light/Dark | Toute la maquette | La collection `Mode` de Solar UI n'est pas publiée (`figma.json` → `published: false`) : elle est inaccessible depuis un fichier consommateur, donc deux frames ne peuvent pas porter deux modes. Le registre se bascule manuellement dans Figma et se lit sur le même livrable. |
| **Les états du formulaire se cadrent sur le bloc d'inscription**, pas sur la page entière | Étapes 2 à 4 | 10 duplications d'une page de ~7000 px seraient illisibles en revue. Le bloc de la partie 9 est ce que l'utilisateur voit au moment de décider ; la matrice reste comparable ligne à ligne. |
| **Copy en anglais** | Toute la maquette | Sources de trafic du `BRIEF` (X / LinkedIn / Product Hunt), vocabulaire de catégorie anglophone, 21 références du benchmark toutes anglophones. |
| **Mode `Screen` appliqué explicitement** : `Desktop` sur les frames 1440, `Mobile` sur les frames 390 | Toute la maquette | `figma.json` → `system.collections.Screen.applyMode` : sans ça un écran conçu comme mobile hérite du mode Desktop et les tokens `Sizes/*` résolvent aux mauvaises valeurs. Cette collection-là **est** atteignable (via une variable `Sizes/*` importée), contrairement à `Mode`. |

## Matrice

Légende : `●` case à concevoir · `—` sans objet, avec la raison en note · `?` en attente d'un arbitrage.

### Support : desktop (1440)

| # | Étape | Nominal | Erreur de saisie | Erreur globale | En cours | Succès | Indisponible |
|---|-------|---------|------------------|----------------|----------|--------|--------------|
| 1 | Lecture de l'argumentaire (9 parties) | ● | — | — | — | — | — |
| 2 | Saisie de l'email (F8) | ● | ● ×2 | ● ×2 | ● | — | ● |
| 3 | Confirmation (F9) | — | — | — | — | ● | — |
| 4 | Qualification optionnelle (F10) | ● | — | — | — | ● | — |

Détail de la ligne 2 — les **7 issues** que F8 déclare, une frame chacune :

| Issue F8 | Frame | Colonne |
| --- | --- | --- |
| Défaut (avant saisie) | `Join the beta — desktop` | Nominal |
| Email invalide | `Join the beta — desktop — invalid email` | Erreur de saisie |
| Consentement non donné | `Join the beta — desktop — consent missing` | Erreur de saisie |
| Email déjà inscrit | `Join the beta — desktop — already on the list` | Erreur globale |
| Échec technique | `Join the beta — desktop — send failed` | Erreur globale |
| Envoi en cours | `Join the beta — desktop — sending` | En cours |
| Inscriptions fermées | `Join the beta — desktop — list closed` | Indisponible |

Lignes 3 et 4 :

| Étape | Frame |
| --- | --- |
| Confirmation (F9) | `Confirmation — desktop` |
| Qualification (F10) | `Profile — desktop` |
| Qualification prise en compte | `Profile — desktop — saved` |

**Total desktop : 11 frames** (1 page longue + 10 frames de bloc).

### Support : mobile (390)

Mêmes 11 lignes, **conçues pour elles-mêmes** — pas obtenues en rétrécissant le desktop.
Ce qui change réellement, et qui justifie une conception propre :

- La partie 1 se **recompose** : le dispositif de convergence passe **sous** le texte et perd
  une rangée d'agents par ligne ; la promesse tient en trois lignes.
- La comparaison avant/après de la partie 7 passe en **empilement vertical** (C33 :
  aucun défilement horizontal).
- La liste de compatibilité de la partie 6 passe du registre tabulaire à des **lignes
  empilées**, statut à droite de chaque agent.
- Le point d'inscription devient **persistant en bas d'écran** (F11 / C34).

**Total mobile : 11 frames.**

**Total maquette : 22 frames.**

## Cases sans objet

- **Étape 1 / tous états non nominaux** — la lecture de l'argumentaire est du contenu
  statique : elle n'attend aucune saisie, ne dépend d'aucun traitement, et n'affiche rien
  qui puisse ne pas exister. Aucune issue à dériver.
- **Étape 2 / succès** — le succès de la saisie **est** l'étape 3. Ouvrir une case ici
  produirait deux fois le même écran.
- **Étape 3 / erreur, en cours, indisponible** — la confirmation est un état terminal
  atteint après que le traitement a réussi ; ses échecs vivent tous en étape 2.
- **Étape 4 / erreur, en cours, indisponible** — F10 est déclarée « strictement
  optionnelle » et « aucune ne peut bloquer la progression » : une qualification qui
  échoue laisse l'inscription acquise, ce qui est l'état de l'étape 3, déjà couvert.
- **Étape 4 / « ignorée ou quittée »** — le PRD (F10, Issues) dit que l'inscription reste
  acquise sans relance. C'est exactement l'écran `Confirmation`, déjà conçu ; en faire une
  frame séparée dupliquerait la case 3/Succès. Le chemin de sortie est **visible** sur
  `Profile` (action de report explicite), pas dessiné en écran supplémentaire.
- **Micro-états (focus, hover, champ rempli)** — variantes des composants Solar UI
  (`Input Text [State]`, `Button [State]`), jamais une frame. Conformément à la règle de
  représentation des états : une frame ne s'ouvre que si la lecture de l'écran change.

## Variants à trancher

- écran: `Join the beta` (partie 9) — **aucun variant ouvert**.
  Le PRD tranche déjà la forme (F8 : un seul champ, consentement explicite, gratuité
  lisible à la saisie). Il n'y a pas deux résolutions défendables à comparer.

- écran: partie 1, dispositif de convergence — **arbitrage déjà rendu**, pas rouvert ici.
  Le PRD (« Le dispositif de convergence ») le maintient en position haute contre la
  recommandation du benchmark, risque déclaré. La maquette applique la décision et ses
  trois garde-fous (C5, C6, C38) ; elle ne propose pas l'alternative.

## Lacunes du besoin

États attendus par le pattern `landing-page`, absents du PRD. **Remontés, pas comblés.**

- état: **empilement d'interface simultané** (bandeau de cookies + point d'inscription
  persistant mobile)
  étape: 1 et 2, support mobile
  attendu par: `landing-page` → « Empilement d'interface » et C34 (« sans masquer de
  contenu ni s'empiler avec un autre élément persistant »)
  proposition: le PRD interdit l'empilement mais ne dit pas ce qui occupe l'écran en plus
  du point d'inscription. Aucune bannière n'est spécifiée nulle part → je conçois le point
  d'inscription persistant **seul**, et je signale que la vérification « tous les éléments
  flottants affichés simultanément » exigée par le pattern n'est **pas vérifiable** sur
  cette maquette. À réexaminer si une bannière de consentement cookies entre au scope.

- état: **texte alternatif des visuels porteurs de sens** (C31)
  étape: toutes, les deux supports
  attendu par: `landing-page` → accessibilité, et C31 du PRD lui-même
  proposition: un texte alternatif n'est pas un état visible en maquette Figma. Je le
  porte en **nom de calque explicite** sur chaque visuel (le rôle du visuel, pas sa forme),
  ce qui le rend transmissible à l'implémentation. C31 reste **invérifiable en recette
  visuelle** — à signaler comme tel plutôt qu'à cocher.

- état: **maquettes d'intention** — F12 impose « au plus une représentation par partie »
  et un seuil de **lisibilité** du contenu affiché
  étape: parties 2, 4, 5, 6, 7
  attendu par: PRD F12 / C37, et `landing-page` → « le visuel montre le produit ou son
  résultat »
  proposition: le produit n'existe pas et aucune capture réelle n'est disponible. Je
  conçois ces représentations **avec les composants Solar UI** (donc réellement lisibles,
  pas des vignettes grises), et je signale que ce que Stellar affiche réellement n'a
  jamais été spécifié : le contenu de ces écrans est une **hypothèse de ma part**, listée
  au rapport.

## Synthèse

- écrans à concevoir : **22** · dont états non nominaux : **16** — **22 conçus, 0 manquant**
- supports : **2**, chacun conçu pour lui-même
- variants ouverts : **0** (les deux arbitrages possibles sont déjà tranchés au PRD)
- lacunes remontées : **3**

## Sources de vérité uniques (composants locaux)

Rangés hors du flux dans `_Local components`, audités comme racines à part entière.

| Composant local | Occurrences | Ce qu'il porte |
| --- | --- | --- |
| `Signup form` | 22 | Le bloc de capture : champ, erreur inline, consentement, action, réducteur de risque, message global. Les 7 issues de F8 sont des **overrides** de cette source, jamais des calques copiés. |
| `Beta signup block` | 14 | Titre + sous-titre + `Signup form`, partagé par les 14 frames d'états des deux supports. |
| `Confirmation` | 2 | F9 — accusé, ce qui se passe ensuite, entrée vers F10. |
| `Profile` | 4 | F10 — les trois questions, leurs actions, le rappel C25. |
| `Profile question` | 3 | Une question de qualification et ses 5 options. |
| `Section header` | 18 | Eyebrow + titre + chapô de chaque partie, sur les deux supports. |
| `Proof side` | 4 | Un côté de la comparaison F6 (marqueur, visuel, légende). |

## Audit de conformité au design system

**`ok: true`** — 314 nœuds audités, **3 passes**, zéro violation restante :
texte sans style · fill non lié · espacement en dur · `clipsContent` hors cas légitime ·
fill masqué · instance atténuée à la main · assemblage répété non factorisé · rôle du DS
redessiné à la main — **0 sur chacun des huit contrôles**.

Deux corrections prises en cours d'audit, hors violations :

- Les badges « Rule set » de la partie 4 étaient en `Primary` (orange) et **concurrençaient
  le CTA**. Passés en `Secondary` : la couleur la plus saturée reste réservée à l'action
  d'inscription, et à elle seule.
- Trois libellés de réglage de la partie 5 cassaient sur deux lignes dans leur `Switch`.
  Raccourcis.
