# PRD — #3 Landing Page

Landing page de pré-lancement de **Stellar**, un SaaS + plugin qui rend un agent IA fidèle
au design system de l'équipe. Objectif unique : convertir un visiteur en inscrit à la bêta.

Supports : **web desktop et mobile**, chacun traité pour lui-même.
Artefacts frères : `BENCHMARK.md` (13 références, 17 captures), `BRIEF.md` (élicitation et
challenge), `ref/`.

> **Version 3.** v2 avait repositionné le document après un complément de benchmark qui
> invalidait son statu quo comparé. v3 intègre les arbitrages de l'utilisateur sur la
> compatibilité, la légitimité et les valeurs de qualification. Historique complet dans
> `BRIEF.md`.

## Objectif

Amener un visiteur venu du social organique ou d'un lancement communautaire à **laisser son
email pour accéder à la bêta**, en levant dans l'ordre les raisons qu'il a de ne pas le
faire : il ne relie pas sa douleur à une catégorie de solution, il a déjà vu des outils
promettre la même chose, il doute que ça marche sur *son* design system avec *son* agent, il
ne sait pas qui est derrière, ni ce qu'il recevra, ni quand.

**Un seul objectif de conversion.** Toute autre action de la page lui est subordonnée.

## Cadrage retenu

| Axe | Valeur |
| --- | --- |
| Archétype | SaaS B2B, pré-lancement (produit non disponible) |
| Type de page | **Lead-gen** — la capture d'email est la conversion, elle vit dans la page |
| Audience | Product designers AI, design system managers, product managers, design engineers |
| Niveau de conscience | **Problem-aware** dominant, avec une part **solution-aware** (canal communautaire) |
| Statu quo comparé | **Double** — voir ci-dessous |

### Le statu quo est double

C'est le socle de tout l'argumentaire.

1. **Le statu quo artisanal** — l'utilisateur re-prompte son agent à la main, corrige les
   écarts au design system à chaque rendu, recommence à la session suivante.
2. **Le statu quo outillé** — des plateformes de design system donnent **déjà** accès à la
   donnée du design system aux agents, MCP compris. Le message « connecter une IA à votre
   design system » est occupé.

**Axe de différenciation retenu : la calibration humaine.** Ces plateformes exposent la
donnée du design system à l'agent ; aucune ne prévoit que l'humain **définisse d'abord les
règles d'usage et ses préférences de rendu** avant que l'agent produise quoi que ce soit.
C'est ce geste — trier, poser les règles, dire comment on veut être servi — qui appartient à
Stellar et à personne d'autre dans les 13 références observées.

**Conséquence pour tout ce document** : la page ne dit jamais « nous aussi on connecte l'IA
à votre design system ». Elle dit que l'agent obéit à *vos* règles parce que *vous* les avez
posées.

### Registre lexical

Décision de cadrage, pas hypothèse. Le vocabulaire de catégorie est déjà capté par les
plateformes concurrentes (« source of truth », « agents building from your design system ») :
la page **n'ouvre pas dessus**. Elle emploie le vocabulaire du **geste** — trier, définir des
règles, poser ses préférences, calibrer — qui est ce qui lui appartient en propre. Les termes
de catégorie restent utilisables plus bas dans l'argumentaire, une fois la différence posée,
jamais comme promesse d'entrée.

## Objections à lever, dans l'ordre

C'est la liste qui donne le contenu et la longueur de la page. Chaque capacité de la section
« Fonctionnalités » lève une de ces objections.

1. « De quoi s'agit-il, et est-ce que ça me parle ? »
2. « Mon agent produit déjà du code et des maquettes — pourquoi j'aurais besoin de ça ? »
3. « En quoi c'est différent de ce qui existe déjà et qui promet la même chose ? »
4. « Concrètement, qu'est-ce que j'ai à faire pour que ça marche ? »
5. « Est-ce que ça marcherait sur *mon* design system, avec *mon* agent ? »
6. « Est-ce que le résultat est vraiment meilleur, ou c'est une promesse ? »
7. « Qui êtes-vous pour faire ça ? »
8. « Qu'est-ce que je reçois exactement si je laisse mon email, quand, et à quel prix ? »

## Métriques de succès

- **Taux de conversion visite → email soumis** — l'indicateur unique de la page.
- **Profondeur de lecture atteinte** avant conversion : indique quelle objection déclenche
  la décision.
- **Taux de complétion de la qualification post-inscription** : mesure si l'étape
  optionnelle mérite d'exister.
- **Répartition des profils et des agents déclarés** : conditionne le séquencement des
  invitations bêta et confirme (ou non) le ciblage.

## User stories

| # | Story | Prio |
| --- | --- | --- |
| US1 | En tant que visiteur qui découvre Stellar, je veux comprendre d'emblée ce que le produit fait et à qui il s'adresse, afin de décider si je continue à lire. | must |
| US2 | En tant que designer ou développeur qui utilise déjà un agent IA, je veux comprendre pourquoi mes rendus dérivent du design system, afin de reconnaître mon propre problème. | must |
| US3 | En tant que visiteur qui connaît déjà les plateformes de design system, je veux comprendre ce que Stellar fait qu'elles ne font pas, afin de ne pas le classer comme une redite. | must |
| US4 | En tant que visiteur intéressé, je veux comprendre ce que Stellar me demande de faire et dans quel ordre, afin d'évaluer l'effort de mise en place. | must |
| US5 | En tant que visiteur intéressé, je veux vérifier que mes sources et mon agent sont pris en charge, afin de savoir si la promesse me concerne aujourd'hui ou plus tard. | must |
| US6 | En tant que visiteur sceptique, je veux confronter un résultat produit avec Stellar à un résultat produit sans, afin de croire la promesse. | must |
| US7 | En tant que visiteur qui ne connaît pas Stellar, je veux savoir qui le construit et à quel titre, afin de juger si cette personne a la légitimité de résoudre mon problème. | must |
| US8 | En tant que visiteur convaincu, je veux m'inscrire à la bêta en donnant uniquement mon email, afin de le faire sans effort ni engagement. | must |
| US9 | En tant qu'inscrit, je veux savoir ce qui se passe ensuite, sous quel délai et à quelles conditions, afin de ne pas rester dans l'incertitude. | must |
| US10 | En tant qu'inscrit, je veux pouvoir préciser mon rôle, l'agent que j'utilise et mon design system existant, afin d'être invité au moment où le produit me servira. | should |
| US11 | En tant que visiteur qui se décide tard dans sa lecture, je veux pouvoir m'inscrire sans revenir en arrière, afin de ne pas perdre ma décision. | must |
| US12 | En tant que visiteur mobile, je veux parcourir l'intégralité de l'argumentaire et m'inscrire aussi facilement que sur desktop. | must |

## Fonctionnalités

### F1 — Comprendre l'offre (lève 1) · must

Le visiteur peut, sans action et sans avoir à faire défiler la page, identifier **ce que le
produit fait**, **à qui il s'adresse** et **qu'il n'est pas encore disponible**. Le fait que
l'accès soit restreint à une bêta est une information affichée, pas une déduction.

### F2 — Reconnaître le problème (lève 2) · must

Le visiteur peut lire la formulation du problème : un agent IA qui ignore les règles du
design system produit des rendus qui en dérivent, et l'humain corrige à la main, à chaque
fois, sans que la correction survive à la session suivante.

### F3 — Comprendre ce qui distingue Stellar (lève 3) · must

Le visiteur peut identifier ce que Stellar fait que les outils qui promettent déjà de
connecter l'IA au design system ne font pas : **c'est lui qui définit les règles d'usage et
ses préférences de rendu, en amont, et l'agent s'y conforme.**

La comparaison porte sur **le geste de calibration**, pas sur une liste de fonctionnalités.
Elle est formulée contre le comportement de la catégorie, **sans nommer de concurrent** —
nommer des alternatives établies devant une audience majoritairement froide les lui ferait
découvrir.

### F4 — Comprendre le fonctionnement (lève 4) · must

Le visiteur peut lire le parcours d'usage complet, en étapes **ordonnées et distinctes**,
dont il peut restituer l'enchaînement après une seule lecture :

1. **Synchroniser** le fichier Figma du design system, la codebase et/ou la documentation.
2. **Définir les règles** d'usage des tokens, composants et patterns, à partir de la matière
   synchronisée et triée.
3. **Définir ses préférences** de rendu avec son agent.
4. **Connecter le plugin** à son agent, qui dispose alors d'un MCP, de skills, d'agents et de
   commands prêts à l'emploi.

**Les étapes 2 et 3 portent la différenciation** énoncée en F3 : elles doivent se lire comme
le cœur de la proposition, pas comme deux maillons parmi quatre. Les étapes 1 et 4 sont des
prérequis techniques et se traitent comme tels.

Chaque étape énonce ce que l'utilisateur fait, pas comment l'outil est construit. Le visiteur
peut identifier ce qu'il obtient au bout de la chaîne : maquettes, prototypes ou intégrations
conformes aux règles de son design system.

> Le PRD **ne prescrit pas la forme** de cette explication. Le benchmark relève qu'une
> séquence numérotée fléchée n'a de précédent nulle part dans les 13 références, tandis que
> les deux statu quo les plus proches exposent leur fonctionnement en blocs nommés
> juxtaposés. La forme appartient au design ; l'ordre et la lisibilité de l'enchaînement sont
> l'exigence.

### F5 — Vérifier la compatibilité (lève 5) · must

Le visiteur peut identifier **quelles sources** Stellar sait ingérer et **quels agents** il
sait équiper, avec pour chaque agent son **statut de disponibilité**.

| Élément | Statut à afficher |
| --- | --- |
| Figma (fichier de design system) | pris en charge |
| Codebase | pris en charge |
| Documentation de design system | pris en charge |
| Claude Code | pris en charge |
| Codex | **à venir** |
| Tout autre agent | non annoncé — ne figure pas dans la liste |

Un visiteur dont l'agent est « à venir » doit pouvoir le constater et s'inscrire quand même :
c'est une raison de rejoindre la liste, pas un motif de partir. Un visiteur dont l'agent
n'est pas listé doit pouvoir le constater plutôt que le supposer — la page n'entretient
aucune ambiguïté sur ce qui n'est pas pris en charge.

C'est l'objection qu'aucune des trois plateformes concurrentes ne traite frontalement : une
capacité qui différencie autant qu'elle rassure.

### F6 — Voir la preuve par la réalisation (lève 6) · must

Le visiteur peut confronter **deux résultats issus du même point de départ** : un rendu
produit par un agent sans Stellar, et le rendu produit avec, sur un design system réel
(anonymisation admise).

**Ce que la comparaison doit démontrer** — c'est le contrat fonctionnel, la forme appartient
au design :

- Le **point de départ est identique et identifiable** : même intention, même design system,
  même agent. Sans ça, la comparaison ne prouve rien.
- L'écart porte sur la **conformité au design system**, jamais sur l'esthétique ou la
  finition. Un « après » simplement plus joli invaliderait la démonstration.
- Chaque écart est **attribuable à une règle nommable** — une valeur hors de l'échelle du
  design system, un composant recréé au lieu d'être réutilisé, un token absent de la palette.
  Le visiteur doit pouvoir dire *ce qui* n'allait pas, pas seulement *que* c'était moins bien.
- Le nombre d'écarts montrés reste **lisible d'un coup d'œil** : la démonstration porte sur
  la nature du problème, pas sur son exhaustivité.

C'est la seule preuve de la page : en pré-lancement, ni logo client, ni témoignage, ni
métrique d'usage n'est disponible — et aucune des 13 références n'en affiche.

### F7 — Savoir qui construit Stellar (lève 7) · must

Le visiteur peut lire **qui construit Stellar et à quel titre**. La légitimité est établie
par l'**expérience vécue du problème** : un design engineer qui rencontre cet écart entre
agent et design system dans sa propre pratique, et qui construit l'outil qui lui manquait.

- La légitimité s'énonce par la **pratique**, pas par un titre ni un parcours : ce qui compte
  est que l'auteur vive le problème décrit en F2, et que le visiteur puisse le reconnaître.
- Cette capacité se règle **sans lien sortant** : la page raconte, elle ne renvoie pas
  ailleurs. L'objectif de conversion unique et l'attention ratio restent intacts (C18).
- Elle ne revendique ni antériorité, ni nombre d'utilisateurs, ni caution extérieure — rien
  qui ne soit vérifiable en pré-lancement.

### F8 — S'inscrire à la bêta (lève 8) · must

Point de conversion unique.

- Un seul champ demandé : l'**adresse email**.
- L'action d'envoi est nommée par son bénéfice, jamais par sa mécanique.
- Le visiteur peut lire, au moment de la saisie, **ce qu'on fera de son email**, le fait que
  l'inscription n'engage à rien et que **la bêta est gratuite**.
- Le visiteur **consent explicitement** à être recontacté ; ce consentement est une condition
  de la soumission, jamais une case déjà cochée.

**Issues de l'étape :**

| Issue | Ce que le visiteur obtient |
| --- | --- |
| Succès | La confirmation décrite en F9 |
| Email invalide | Message textuel associé au champ, disant quoi corriger ; la saisie est conservée |
| Consentement non donné | La soumission ne part pas ; ce qui manque est dit explicitement |
| Email déjà inscrit | Message qui confirme l'inscription existante sans la présenter comme une erreur |
| Envoi en cours | Le double envoi est empêché ; l'action reste visible |
| Échec technique | Message disant que rien n'a été perdu et que l'envoi peut être retenté ; la saisie est conservée |
| Inscriptions fermées | La page dit que la liste est close et ce qui reste possible ; elle ne propose jamais une saisie qui n'aboutira pas |

### F9 — Savoir ce qui se passe ensuite (lève 8) · must

Après soumission, le visiteur obtient une confirmation **sans quitter la page ni perdre le
contexte de sa lecture**. Cette confirmation :

- confirme que l'inscription est enregistrée ;
- énonce **ce qui se passe ensuite et par quel canal** ;
- indique qu'un **email de confirmation a été envoyé** ;
- ne se contente jamais d'un remerciement.

**Le mécanisme d'ouverture des accès n'est pas arrêté** (décision produit non prise). La
confirmation retient donc une formulation **délibérément sans engagement** : elle dit que
l'inscription est prise en compte et que l'utilisateur sera prévenu **dès que son accès sera
prêt**, sans annoncer ni vague, ni lot, ni date, ni rang.

Contrainte associée : la page **ne promet aucun délai qu'elle ne peut pas tenir**. Mieux vaut
une attente non chiffrée qu'un horizon inventé — un horizon manqué détruit la confiance que
toute la page vient de construire. Cette formulation est **provisoire par construction** et
doit être remplacée dès que le déroulement réel de la bêta est décidé, avant toute mise en
ligne.

### F10 — Préciser son profil (optionnel) · should

Depuis la confirmation, le visiteur peut choisir de compléter son profil. Cette étape est
**strictement optionnelle** : la refuser ou la quitter ne remet pas en cause l'inscription
obtenue en F8.

Trois informations, chacune avec son usage déclaré au visiteur :

| Information | Valeurs proposées | Ce qu'on en fait |
| --- | --- | --- |
| **Rôle** | Product designer · Design system manager · Product manager · Design engineer · Autre | Prioriser les profils pour lesquels le produit est prêt |
| **Agent utilisé** | Claude Code · Codex · Autre · Aucun pour l'instant | Séquencer les invitations selon les agents pris en charge |
| **Design system existant** | Figma seul · Figma + code · Code seul · Documentation publiée · Pas de design system formalisé | Vérifier que les sources ingérables couvrent le cas |

Chaque question admet une réponse « autre » ou « je ne sais pas » : aucune ne peut bloquer
la progression. La liste des agents reflète F5 — elle n'annonce jamais un agent que la page
ne déclare pas pris en charge ou à venir.

**Issues :** complétée → accusé de prise en compte · ignorée ou quittée → l'inscription reste
acquise, sans relance bloquante.

### F11 — Se décider à tout moment (lève 8) · must

Le visiteur atteint le point d'inscription **à n'importe quel moment de sa lecture, sans
revenir en arrière**, et cela vaut sur les deux supports. Sur mobile, l'accès à l'action
reste atteignable en permanence sans masquer de contenu.

Le PRD n'impose ni le nombre ni l'emplacement des points d'entrée : il exige que la décision,
où qu'elle tombe, trouve immédiatement où s'exercer.

## Critères d'acceptation

**Compréhension**

- [ ] C1 — Un lecteur extérieur au marché, à qui on ne montre que le début de la page, peut
      dire ce que vend Stellar et à qui, avec ses propres mots.
- [ ] C2 — Ce début de page indique que le produit n'est pas encore disponible.
- [ ] C3 — Les 4 étapes du fonctionnement sont ordonnées et distinctes ; un lecteur peut en
      restituer l'enchaînement après une seule lecture.
- [ ] C4 — Les étapes 2 et 3 (règles d'usage, préférences de rendu) sont identifiables comme
      le cœur de la proposition, et non comme deux maillons équivalents aux deux autres.
- [ ] C5 — La page ne contient nulle part la promesse générique « connecter votre design
      system à l'IA » sans la qualifier immédiatement par la calibration humaine.
- [ ] C6 — L'entrée de la page n'emploie aucune expression de catégorie déjà captée par les
      plateformes concurrentes ; le vocabulaire du geste (règles, préférences, calibrer) y
      domine.
- [ ] C7 — Aucun concurrent n'est nommé.
- [ ] C8 — Chaque partie de l'argumentaire est rattachable à l'une des 8 objections listées ;
      une partie sans objection assignée est retirée.

**Preuve, compatibilité, légitimité**

- [ ] C9 — La comparaison de F6 est identifiable comme deux résultats du **même** point de
      départ : même intention, même design system, même agent.
- [ ] C10 — Chaque écart montré dans la comparaison est rattachable à une règle de design
      system nommable, pas à une impression de qualité.
- [ ] C11 — Les sources ingérables et les agents sont énumérés explicitement, chacun avec son
      statut ; Codex apparaît comme **à venir**, distinct de ce qui est déjà pris en charge.
- [ ] C12 — Un visiteur dont l'agent est « à venir » peut s'inscrire sans obstacle ni message
      dissuasif.
- [ ] C13 — La page dit qui construit Stellar et à quel titre, en s'appuyant sur l'expérience
      vécue du problème décrit en F2.
- [ ] C14 — La page ne contient aucune preuve sociale chiffrée, aucun logo client, aucun
      témoignage : rien qui ne soit vérifiable en pré-lancement.

**Conversion**

- [ ] C15 — La page compte **un seul** objectif de conversion ; aucune autre action n'a un
      poids équivalent.
- [ ] C16 — Depuis n'importe quel point de la page, sur les deux supports, le point
      d'inscription est atteignable sans revenir en arrière.
- [ ] C17 — Le formulaire ne demande que l'email. Toute autre information est demandée
      **après** la soumission.
- [ ] C18 — La page ne comporte aucun lien sortant ni menu de navigation complet.
- [ ] C19 — La gratuité de la bêta et l'absence d'engagement sont lisibles au moment de la
      saisie, pas ailleurs.
- [ ] C20 — Le consentement est un geste explicite du visiteur ; aucune case n'est
      pré-cochée, et son absence empêche la soumission avec un message qui le dit.
- [ ] C21 — La confirmation énonce ce qui se passe ensuite, par quel canal, et l'envoi de
      l'email de confirmation.
- [ ] C21b — La page n'annonce **aucun délai, aucune date, aucun rang** : le mécanisme
      d'ouverture n'étant pas arrêté, toute mention chiffrée serait une promesse non tenable.
- [ ] C22 — Les sept issues de F8 sont chacune représentées par un état distinct.
- [ ] C23 — Chaque question de qualification admet une réponse d'échappement ; aucune ne
      bloque la progression.
- [ ] C24 — La liste des agents proposée en qualification est cohérente avec celle annoncée
      en F5.
- [ ] C25 — Quitter l'étape de qualification laisse l'inscription acquise : aucun message ne
      laisse penser le contraire.

**Accessibilité**

- [ ] C26 — Chaque erreur de saisie est portée par un **texte**, associé au champ, et annoncée
      aux technologies d'assistance — jamais signalée par la seule couleur.
- [ ] C27 — Le champ email a un libellé persistant ; aucun placeholder ne tient lieu de
      libellé.
- [ ] C28 — Le parcours d'inscription est réalisable entièrement au clavier, le focus reste
      visible, et il se déplace vers la confirmation après soumission.
- [ ] C29 — La saisie d'email déclenche le clavier adapté sur mobile et n'entraîne pas de zoom
      automatique.
- [ ] C30 — La hiérarchie des titres est réelle et sans saut de niveau.
- [ ] C31 — Le texte posé sur un visuel reste lisible sur les deux supports ; les visuels
      porteurs de sens ont une alternative textuelle.
- [ ] C32 — Toute animation déclenchée au défilement respecte la préférence système de
      réduction des animations.

**Mobile**

- [ ] C33 — Aucun défilement horizontal, sur aucune partie de la page — y compris la
      comparaison de F6 et la liste de compatibilité de F5.
- [ ] C34 — Le point d'inscription reste atteignable sans masquer de contenu ni s'empiler avec
      un autre élément persistant.
- [ ] C35 — Les cibles tactiles sont atteignables d'une seule main sans repositionner la prise
      sur l'appareil.
- [ ] C36 — Chaque transition entre deux parties de la page laisse voir qu'il y a une suite.

## Méthode de revue (hors critères)

Ces vérifications portent sur la démarche de conception, pas sur un état observable du
produit — elles ne sont donc pas des critères d'acceptation, mais elles conditionnent la
recette :

- Recenser tous les éléments cliquables de la page et justifier chacun (attention ratio).
- Lister les parties écartées et la raison de leur écart, pour les empêcher de revenir par
  habitude.
- Vérifier la page en réduction, sans lire : le fil de l'argumentation et l'emplacement du
  point d'inscription doivent rester identifiables.

## Priorisation

**Must** — F1 à F9, F11, et l'ensemble des critères d'accessibilité. C'est le parcours
minimal qui convertit un visiteur qui a déjà croisé la promesse ailleurs.

**Should** — F10 (qualification post-inscription) seule. Retirée, la page convertit encore ;
son absence coûte en séquencement des invitations.

## Hors scope

Écrit comme décision, pas comme oubli :

- **Le produit lui-même** — aucune fonctionnalité de Stellar n'est spécifiée ici ; la page
  parle du produit, elle ne l'exécute pas.
- **La grille tarifaire** — le produit n'est pas commercialisé. Seule la **gratuité de la
  bêta** est énoncée (C19) ; aucun prix futur, aucun plan, aucune promesse de tarif.
- **La comparaison nommée à des concurrents** — écartée : la différenciation se joue contre
  le comportement de la catégorie, pas contre des marques citées, pour ne pas faire découvrir
  d'alternatives établies à une audience froide.
- **Les agents non annoncés** — tout agent autre que Claude Code (pris en charge) et Codex
  (à venir) est absent de la page. Aucune roadmap de compatibilité n'est promise.
- **Le parcours et le CV de l'auteur** — F7 établit la légitimité par l'expérience du
  problème, pas par un profil professionnel détaillé.
- **CTA « réserver un call »** — écarté pour préserver un objectif de conversion unique.
- **Rang dans la file et parrainage** — écartés : mécanique B2C peu pertinente pour une cible
  B2B technique, un seul précédent dans le benchmark.
- **Compteur d'inscrits** — écarté : à faible volume, une preuve sociale chiffrée dessert.
- **Le contenu de l'email de confirmation** — la page annonce son envoi ; l'email est un
  livrable distinct.
- **Compte utilisateur, connexion, espace membre** — il n'y a pas de compte en pré-lancement.
- **Pages annexes** (mentions légales, politique de confidentialité) — leur existence est
  supposée et requise par F8 ; leur contenu n'est pas cadré ici.
- **Documentation produit, changelog, page de statut.**

## À valider

Hypothèses déclarées : décisions que personne n'a prises et sur lesquelles le design va
pourtant s'appuyer.

| Hypothèse retenue | Ce qui l'aurait tranchée |
| --- | --- |
| Le **mécanisme d'ouverture des accès** n'est pas décidé. Traité, pas contourné : F9 retient une formulation sans engagement, et C21b interdit tout délai, date ou rang à l'écran. **La page ne mentira donc pas — mais elle rassure moins qu'elle ne le pourrait**, et cette formulation doit être remplacée avant toute mise en ligne réelle. | La décision sur le déroulement réel de la bêta. |
| Le cadrage vise le niveau de conscience le plus froid (**problem-aware**), donc une page longue, parce que les deux sources de trafic ont été retenues sans priorité. Si le trafic est majoritairement communautaire, la page est trop longue de deux objections. | Une priorité entre social organique et lancement communautaire. |
| La comparaison de preuve (F6) porte sur un **design system anonymisé non identifié** à ce stade. Le contrat fonctionnel est posé, le cas concret reste à choisir — et le cas choisi change la force de la preuve. | Le choix du design system de démonstration (relève du contenu, pas du cadrage). |
| **Aucune observation mobile réelle** n'a nourri ce PRD, aux deux passes de benchmark (navigateur indisponible). Les critères C33-C36 viennent du pattern `landing-page`, pas du marché observé. Des captures seront fournies séparément. | Un benchmark mobile sur captures réelles. |
| **Raycast**, cité comme inspiration de mise en page, n'a pas pu être benchmarké. Sans conséquence sur ce PRD (lentille visuelle), mais le brief de design en héritera. | Des captures fournies séparément. |

## Suite

`/mockup:design` — conception dans Figma. Le brief de design reprendra les inspirations
données au cadrage (**Linear** — observé au benchmark, section 7 — et **Raycast**, à venir),
qui sont hors du périmètre de ce document.
