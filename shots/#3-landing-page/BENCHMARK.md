# Benchmark — Landing page de pré-lancement B2B (Stellar)

**Sujet :** landing page de pré-lancement d'un SaaS B2B (plugin/MCP + agents pour agent IA fidèle à un design system), objectif unique = collecte d'email en bêta
**Plateforme :** web desktop **et** mobile
**Lentille :** UX (fonctionnelle uniquement — aucune reco de palette/typo/style) pour le rapport initial ; **complément à deux lentilles distinctes** ci-dessous (section 7 = UI/composition, section 8 = positionnement métier/fonctionnel)
**Source :** Mobbin (MCP) — gate visuel appliqué à chaque candidate ; complément obtenu via Mobbin quand disponible, sinon récupération de page réelle (WebFetch) pour les références introuvables sur Mobbin — voir limites déclarées section 7 et 8
**Références analysées :** 8 produits réels / 14 écrans (rapport initial) + 1 produit gate-visuellé (3 écrans) + 3 produits vérifiés par contenu de page réelle sans capture d'image (complément)

## Limite de source à déclarer

Mobbin n'indexe que des captures **desktop web** pour la plateforme `web` : aucune
capture mobile-web n'a pu être obtenue pour ces mêmes produits malgré plusieurs
requêtes ciblées, et le navigateur intégré était indisponible pour aller chercher des
captures mobiles en direct sur les sites réels. **Aucune observation mobile n'est donc
restituée ci-dessous** — la section "Spécificités mobile" du périmètre demandé reste
une question ouverte plutôt qu'une análise fondée sur du pixel réellement vu, conformément
à la règle du skill de ne décrire que l'observé. *(Retesté lors du complément : le
navigateur intégré était toujours indisponible cette session — voir section 7, le trou
mobile n'a pas pu être comblé.)*

Deuxième limite, plus structurelle : la catégorie exacte demandée — landing de
pré-lancement d'un outil qui connecte une IA à un **design system** ou une **codebase**
— n'a quasiment pas de représentant public benchmarkable aujourd'hui (les leaders du
Figma-to-code comme Builder.io, ou les MCP design déjà lancés, n'ont plus de landing de
*pré-lancement* ; les vrais MCP en waitlist trouvés, comme Craft.io MCP, n'ont pas pu être
capturés en image faute d'outil de screenshot disponible cette session, donc écartés du
gate visuel). Le benchmark s'appuie donc sur les familles (a) et (c) au sens strict, et
élargit prudemment (b) à des outils IA-dev-tool en accès contrôlé (Mistral Codestral, v0)
qui partagent la mécanique de gate d'accès même si le produit lui-même est déjà en marché.
C'est un enseignement en soi : **le motif de gate n'est pas propre aux produits IA×DS, il
est générique à tout produit dev-tool qui limite l'accès** — Stellar peut s'appuyer dessus
sans chercher des références plus « pures » qui n'existent pas encore publiquement.

## Références analysées

- [Coinbase — Crypto Futures waitlist](https://mobbin.com/screens/8d78bc9b-21d6-452d-85b0-10d0f80ec014) — `ref/01-coinbase-hero.webp`, `ref/02-coinbase-confirmation.webp` — hero + formulaire email inline + état de succès inline
- [Telescope — landing bêta privée](https://mobbin.com/screens/34f17040-e457-465c-810a-8485c67a1fe4) — `ref/03-telescope-hero.webp` — hero sans formulaire, CTA persistant en bas de page
- [Cron Calendar — landing pré-lancement](https://mobbin.com/screens/9a58bfaa-3baa-4e15-ba5e-b4f926729d12) — `ref/04-cron-calendar-hero.webp` — hero dev-tool, formulaire email inline, preuve produit (capture logicielle) sous le fold
- [Contra — confirmation de waitlist avec rang](https://mobbin.com/screens/53ccc109-e55c-4d5f-be90-858da4ff7d94) — `ref/05-contra-waitlist-confirmation-rank.webp` — état de confirmation avec rang + option de partage
- [Amie — parcours de demande d'accès](https://mobbin.com/flows/6a8841de-f692-4bdc-8476-5e5e7f6e9081) — `ref/06-amie-request-step1-email-name.webp`, `ref/07-amie-batch-invite-messaging.webp`, `ref/08-amie-thanks-confirmation.webp` — formulaire multi-champs au-delà de l'email, communication du mécanisme de sélection, confirmation
- [Mistral AI — Codestral, accès en preview](https://mobbin.com/screens/28321c64-0d4b-49a4-b376-92fd2f980a7f) — `ref/09-mistral-codestral-preview-access.webp`, `ref/10-mistral-codestral-request-modal.webp`, `ref/11-mistral-codestral-confirmation.webp` — gate d'accès à une fonctionnalité dev-tool, modale de conditions, confirmation avec clé livrée immédiatement
- [v0 by Vercel — hero produit](https://mobbin.com/screens/19768405-5863-467b-b46f-8f29b8dcfc0a) — `ref/12-v0-prompt-hero.webp` — alternative sans waitlist : accès direct via un champ de prompt, preuve sociale par la galerie communautaire
- [WorkOS — Radar, demande d'accès](https://mobbin.com/flows/3bacf355-9622-4ce6-a56e-e7c5abe1f114) — `ref/13-workos-radar-feature-panel.webp`, `ref/14-workos-radar-request-modal.webp` — argumentaire fonctionnel en checklist, CTA de demande d'accès sans champ email (résolu par SSO/compte existant), alternative "schedule a call"
- **[Complément]** [Linear — landing.app, 3 versions du hero dans le temps](https://mobbin.com/screens/887269c3-bc0d-4090-aaef-13c4462a1b53) — `ref/15-linear-hero-2026.webp`, `ref/16-linear-hero-older-v1.webp`, `ref/17-linear-hero-older-v2.webp` — produit déjà lancé, gate visuel passé, utilisé uniquement pour la lentille UI/composition (section 7)
- **[Complément, sans image]** [Storybook — storybook.js.org](https://storybook.js.org/) — contenu vérifié par récupération de page réelle, pas de capture — voir limite en section 8
- **[Complément, sans image]** [Supernova — supernova.io](https://www.supernova.io/) — idem
- **[Complément, sans image]** [zeroheight — zeroheight.com](https://zeroheight.com/) — idem

## 1. Architecture de sections

**CONVENTION** — Sur les 5 références qui sont de vraies landing pages autonomes
(Coinbase, Telescope, Cron, v0, et Mistral en tant que page produit), le schéma
hero → preuve produit (capture/illustration du produit sous le fold) → CTA est présent
systématiquement. Le hero porte à lui seul : un nom de fonctionnalité/produit court, une
phrase de bénéfice, et le point de capture — jamais un mur de texte avant le CTA.

**CONVENTION** — Le point de capture (email ou CTA principal) est **dans le hero**, pas
plus bas. Coinbase, Cron, v0 le placent tous immédiatement sous le sous-titre, avant tout
argumentaire. Aucune des références qui capture un email ne le fait attendre après une
section "comment ça marche".

**OPPORTUNITÉ DE DIFFÉRENCIATION** — Aucune des références consultées ne déroule
explicitement une section "problème" séparée avant le hero ou juste après : le
sous-titre du hero fait à lui seul office de reformulation du problème ("Trading
regulated is coming soon", "the next-generation calendar"). Une section "problème"
dédiée et illustrée (ex. rendu Figma non respecté par l'agent vs. rendu attendu) n'est
observée nulle part dans cet échantillon — c'est un espace ouvert plutôt qu'un
consensus à rejoindre ou à éviter.

## 2. Explication du fonctionnement sans démo jouable

**CONVENTION** — Quand le produit ne peut pas être essayé avant inscription (accès
gated), l'explication du bénéfice se fait par une **liste à puces courte** (3 à 5 items,
un bénéfice concret par ligne), jamais par un schéma de flux. WorkOS Radar : 4 puces
factuelles ("Blocks common threats…", "Detections can be tailored…"). Mistral Codestral :
une phrase unique qui explique la mécanique de la file d'attente ("we're granting access
in phases… submit your request now"), pas de schéma.

**OPPORTUNITÉ DE DIFFÉRENCIATION** — Le sujet demande explicitement comment un workflow
en plusieurs étapes (1. sync → 2. tri/règles → 3. préférences de rendu → 4. connexion
agent) s'explique sans démo. **Aucune des 8 références ne montre d'étapes numérotées ou
de schéma avant/après** dans leur état de pré-lancement — ce motif "how it works en 3-4
étapes numérotées" existe largement sur le marché des landings *lancées* (vu hors gate
sur Google Maps Platform, TikTok Creative Exchange, GoFundMe lors des recherches
préparatoires, non retenues ici car produits déjà en marché) mais n'apparaît pas sur les
pages de *pré-lancement* observées. Pour Stellar, dont la proposition de valeur repose
sur un enchaînement séquentiel en 4 temps, expliciter ces 4 étapes (même en pré-lancement,
même sans capture d'écran du produit fini) serait un choix différenciant plutôt qu'un
alignement sur une convention — car la convention observée en pré-lancement est de
*ne pas* le faire.

> **Ce pari est ré-examiné à la lumière des 5 nouvelles références en section 9.**

## 3. Collecte d'email — formulaire et champs

**CONVENTION** — Le champ minimal viable est **un seul champ email**, inline dans le
hero, à côté d'un bouton d'action à verbe clair ("Get access", "Request access") — jamais
"Submit" ou "Send". Coinbase et Cron suivent ce schéma à l'identique.

**CONVENTION** — Quand le produit veut qualifier son audience au-delà de l'email
(pertinent pour Stellar dont la cible se découpe en 4 profils : product designer AI,
DS manager, PM, design engineer), la qualification se fait **après** la capture de
l'email, jamais avant ni dans le même écran. Amie capture email + prénom d'abord, puis
enchaîne un flux de questions à choix multiples sur un écran séparé par question. Aucune
référence ne pose un champ "rôle" ou "taille d'équipe" *dans* le formulaire hero
lui-même.

**OPPORTUNITÉ DE DIFFÉRENCIATION** — Aucune des références ne demande le champ "outil
utilisé" (ex. "quel agent IA utilisez-vous : Claude Code, Cursor, Copilot…") alors que
c'est un champ hautement qualifiant pour Stellar (le produit est un plugin qui se
connecte à un agent précis). Ce champ n'a pas de convention établie dans l'échantillon —
à trancher dans le PRD plutôt qu'à copier.

**OPPORTUNITÉ DE DIFFÉRENCIATION** — WorkOS Radar ne demande **aucun email** : la
demande d'accès se fait via un compte déjà authentifié, ou par un CTA alternatif
"Schedule a call with us" / "Email us" dans la modale — pas de champ à remplir du tout.
C'est un rappel utile : la collecte d'email n'est pas une fatalité universelle, c'est un
choix qui suppose que le visiteur n'a pas encore de compte. Pour Stellar (visiteur
anonyme, pas de compte existant), le champ email reste la voie par défaut la plus
cohérente — mais l'alternative "réserver un call" mérite d'être tranchée explicitement
plutôt que d'être un impensé.

## 4. État de confirmation après soumission

**CONVENTION** — La confirmation se fait **inline, sur la même page**, pas par
redirection vers une page dédiée. Coinbase remplace le formulaire par un check vert et le
mot "Success" à l'endroit exact où était le champ. Amie referme son flux multi-étapes par
un écran dédié dans le même parcours (pas un simple message inline, car son flux est
déjà multi-écrans), mais reste dans le même univers visuel, jamais un renvoi externe.

**CONVENTION** — Le message de confirmation reformule **ce qui va se passer ensuite**,
jamais un simple "merci". Amie : "invites are sent in weekly batches so we can ship based
on customer feedback and keep the app stable" — explique le mécanisme de sélection.
Contra : "We'll be in touch in the next few months when you have access to Contra's
community beta" — donne un horizon de temps, même vague.

**OPPORTUNITÉ DE DIFFÉRENCIATION** — Un seul cas observé (Contra) affiche un **rang dans
la file** ("You are 777th on the waitlist") assorti d'un **lien de parrainage** pour
remonter dans la file. C'est un motif isolé, pas une convention (1 réf sur 8) : le
gamifier (rang, parrainage) est un vrai choix de différenciation à trancher, pas un
standard à copier par défaut — d'autant que pour un outil B2B technique (vs. un réseau
social de créateurs comme Contra), la mécanique de parrainage social est moins
évidemment pertinente.

**OPPORTUNITÉ DE DIFFÉRENCIATION** — Aucune des 8 références ne mentionne un email de
confirmation envoyé après soumission (ni dans le texte affiché, ni dans un état visible) —
ce qui ne veut pas dire qu'il n'existe pas côté produit, seulement qu'aucune n'en fait un
élément de rassurance affiché à l'écran. Pour Stellar, afficher "un email de confirmation
vous a été envoyé" (ou choisir de ne pas le faire) est une décision à prendre
explicitement dans le PRD, pas un motif à déduire du marché.

## 5. Crédibilité sans clients ni chiffres

**CONVENTION** — Aucune des références de pré-lancement (Coinbase, Telescope, Cron)
n'affiche de logos clients, de témoignages ou de métriques d'usage sur le hero — la
crédibilité vient exclusivement de **la clarté du bénéfice énoncé** et, quand il existe,
d'un **badge de reconnaissance externe** : Cron affiche "Cron named Mobile App of the
Year →" juste au-dessus du titre, Telescope affiche "CURRENTLY IN PRIVATE BETA" comme
un signal de rareté plutôt que de preuve sociale classique.

**OPPORTUNITÉ DE DIFFÉRENCIATION** — v0 (déjà lancé, donc hors gate strict de "sans
clients") illustre un mécanisme alternatif transposable en pré-lancement : une galerie
"From the Community" montrant des réalisations concrètes faites *avec* l'outil, chacune
attribuée à un auteur avec un compteur de forks. Pour Stellar, montrer des rendus produits
*par le plugin* (avant/après sur un vrai design system, même anonymisé) jouerait un rôle
de preuve équivalent — mais c'est un choix à instruire (le produit doit déjà tourner
quelque part pour produire cette preuve), pas une convention observée en pré-lancement.

## 6. Spécificités mobile

**Question ouverte, non tranchée par ce benchmark** — voir la limite de source
déclarée en tête de document. Aucune capture mobile-web fiable n'a pu être obtenue et
gate-visuellée pour ces 8 références ; toute affirmation sur l'ordre des sections, la
densité ou un CTA sticky en mobile serait une supposition, pas une observation. Le
complément (section 7) n'a pas pu combler ce trou non plus — voir limite déclarée
ci-dessous.

---

# Complément — deux passes supplémentaires (références citées par le commanditaire)

Les cinq références ci-dessous ont été citées **après** la livraison du rapport
initial. Elles relèvent de deux lentilles distinctes, traitées séparément pour ne pas
mélanger inspiration visuelle et enseignements fonctionnels :

- **Passe A (section 7)** — lentille **UI/composition** : Linear, Raycast.
- **Passe B (section 8)** — lentille **positionnement métier/fonctionnel** :
  Storybook, Supernova, zeroheight.

## 7. Passe A — lentille UI/composition : Linear et Raycast

**Limite de source à déclarer avant toute observation.** Le navigateur intégré était
indisponible durant cette session (vérifié à deux reprises). Mobbin, seule source
restante, **n'indexe pas Raycast** malgré plusieurs requêtes ciblées (recherches sur
"Raycast landing page", "Raycast extensions store", "Raycast Mac productivity launcher") :
aucune image de raycast.com n'a pu être obtenue. **Raycast est donc absent de cette
analyse** — aucune observation ci-dessous ne le concerne, plutôt que de le décrire de
mémoire. Seul **Linear** (linear.app) a pu être gate-visuellé, via 3 captures Mobbin
montrant 3 versions successives du hero dans le temps (`ref/15`, `ref/16`, `ref/17`).

**Conséquence méthodologique** — avec un seul produit accessible, **aucune observation
ci-dessous ne peut être qualifiée de convention** (le seuil du skill est ≥ 3 références).
Ce sont des observations isolées sur un seul produit déjà lancé, à traiter comme telles.

Autre limite : les 3 captures Mobbin de Linear sont des crops de hero (haut de page),
pas des captures pleine page ni scrollées — le "rythme de scroll" ne peut donc être
observé qu'au niveau de la jonction hero → premier bloc produit, pas au-delà. Aucune
capture mobile de Linear n'a pu être obtenue non plus.

**Observations (Linear uniquement, produit déjà lancé — à ne pas transposer tel quel à
une landing de pré-lancement) :**

- **Structure du hero** — fond noir plein cadre, barre d'identité fine en haut (logo à
  gauche, liens de nav centrés-droite, "Log in" + "Sign up" tout à droite, peu contrastés
  sauf le bouton "Sign up" qui est le seul élément plein/clair de la barre). Le titre est
  aligné à gauche (pas centré), sur deux lignes, en blanc cassé sur fond noir. Le
  sous-titre est une seule ligne, gris moyen, nettement plus petit — aucun paragraphe.
  Sur les 3 versions vues, le nombre d'éléments cliquables dans la barre d'identité varie
  peu : 5 à 7 liens de nav + 2 boutons (Log in, Sign up), jamais plus.
- **CTA du hero** — dans les 2 versions les plus anciennes, un bouton unique et net
  ("Sign up for free →", "Get started →"). Dans la version la plus récente vue, le hero
  n'a **aucun bouton visible dans le crop capturé** : le seul élément actionnable outre
  la nav est un lien texte discret ("Issue tracking is dead — linear.app/next →") en
  haut à droite du hero, au-dessus du produit. C'est un changement notable dans le temps :
  la version la plus récente mise moins sur un CTA saillant que sur la promesse de titre
  elle-même.
- **Détachement du produit** — dans les 3 versions, la capture d'interface produit
  (toujours en dark mode, cohérent avec le fond de la page) est placée immédiatement sous
  le hero et **déborde du cadre de la capture** (rognée en bas), signe qu'elle continue
  au scroll. Le détachement du fond ne se fait pas par une ombre portée franche mais par
  un halo/gradient coloré diffus derrière l'interface (violet/rose dans la version la
  plus ancienne, plus neutre dans la version récente) — l'interface produit "flotte" sur
  un fond qui n'est plus le noir uni du hero.
- **Traitement de la preuve produit** — jamais une simple image statique décorative :
  c'est toujours une vraie capture d'écran de l'outil (liste d'issues, kanban), avec des
  éléments d'interface lisibles (titres de tâches, avatars, statuts) — la preuve du
  produit est le produit lui-même, pas une illustration qui l'évoque.

**Transposable à une landing de pré-lancement vs. suppose un produit disponible :**

- Transposable telle quelle : la barre d'identité minimale (peu de liens, un seul CTA
  net), le titre aligné à gauche sur fond sombre, le sous-titre réduit à une phrase.
- Suppose un produit disponible : la preuve par capture d'écran réelle de l'outil — pour
  Stellar en pré-lancement, cette preuve n'existe pas encore (cf. section 5 du rapport
  initial, "opportunité preuve par la réalisation"), donc ce motif ne peut être copié que
  s'il existe déjà un rendu produit à montrer.

## 8. Passe B — lentille positionnement métier : Storybook, Supernova, zeroheight

**Méthode déclarée** — le navigateur intégré étant indisponible et Mobbin n'indexant
aucune de ces trois plateformes, ces trois références ont été vérifiées par
**récupération du contenu réel de la page** (fetch + rendu texte), et non par capture
visuelle. C'est un écart assumé au gate visuel habituel du skill : la lentille demandée
ici est **textuelle/positionnement** (vocabulaire employé, ce qui est dit ou non sur
l'IA), pas la composition visuelle — le contenu récupéré est réel et vérifiable à l'URL
citée, mais **aucune observation de mise en page, de hiérarchie visuelle ou de densité
n'est faite sur ces trois références** : ce serait au-delà de ce que la méthode permet de
garantir ici.

### Ce que dit chacune, mot pour mot observé

- **[Storybook](https://storybook.js.org/)** — hero : *"Build, test & document
  components"* / *"Storybook is a frontend workshop for building UI components and pages
  in isolation."* Vocabulaire : "components", "documentation", "UI development",
  "testing" — jamais "source of truth" ni "handoff" dans le contenu récupéré. Cible :
  équipes de développement en général ("Thousands of teams use it for UI development,
  testing, and documentation"), pas un rôle DS nommé. IA : un seul point d'entrée,
  discret, dans la navigation — un lien "Introducing MCP for React →" vers une page `/ai`
  dédiée ; **rien sur ce sujet dans le hero lui-même**. "Comment ça marche" : montré par
  une capture d'un environnement Storybook réel (arborescence de composants organisée par
  dossiers), pas par des étapes numérotées. Compatibilité design system : non traitée
  explicitement dans le contenu récupéré. CTA principal : commande d'installation
  `npm create storybook@latest`, adressée directement aux développeurs.

- **[Supernova](https://www.supernova.io/)** — hero : *"Design & engineering knowledge,
  ready for AI agents"* / *"Ship faster with AI that knows your design system, codebase,
  and rules."* Vocabulaire : "design system", "source of truth", "design tokens",
  "codebase", "MCP endpoint", "design-to-code pipelines". Cible nommée explicitement par
  des rôles dans les témoignages clients cités sur la page : "Senior Product Designer",
  "Design Lead", "Design System manager" — **les mêmes rôles que la cible de Stellar**.
  IA : mentionnée **dès le titre du hero**, avec les noms explicites Claude, Cursor,
  Copilot, Claude Code, Codex, et le protocole MCP comme mécanisme central. "Comment ça
  marche" : 4 blocs nommés — Context Intelligence, Code Components, Skills & Exporters,
  Feedback Loop. CTA : "Request a demo", "Start for free", "Start building".

- **[zeroheight](https://zeroheight.com/)** — hero : *"Get teams and agents building
  from your design system – not around it"* / *"Create one source of truth for your
  design system – so tools and teams stay in sync, and agents always build from the right
  context."* Vocabulaire : "design system", "source of truth", "documentation",
  "delivery", "measurement", "management", "tokens", "integrations" — le contenu
  récupéré ne montre pas les mots "handoff" ni "codebase" mais Figma, GitHub et GitLab
  sont cités comme intégrations. Cible : désignée par trois profils — designers,
  engineers, leaders — et par la maturité de l'équipe (early-stage vs. scaling,
  entreprise/multi-produit). IA : **mentionnée dès le titre du hero** ("agents building
  from your design system"), une section dédiée "zeroheight AI", intégrations nommées
  Claude et Cursor, MCP cité comme fonctionnalité. "Comment ça marche" : 4 onglets —
  Documentation, Delivery, Measurement, Management. CTA : "Start for free", "Request a
  demo", "Book a demo", "See all integrations", "Explore API".

### Articulation Figma ↔ code ↔ documentation

Les trois traitent le triptyque, mais à des degrés différents et jamais nommément pour
un **agent qui produit du rendu** (au sens où Stellar le fait) :
- Storybook part du **code** (composants isolés dans un environnement de dev) et
  documente à partir de là ; Figma n'apparaît pas dans le contenu récupéré du hero.
- Supernova part de la **synchronisation design ↔ code** ("design system, codebase, and
  rules") et positionne la documentation comme un sous-produit de cette synchronisation.
- zeroheight part de la **documentation comme source de vérité** et y raccorde Figma
  (intégration principale citée) et le code (GitHub/GitLab) en aval.

### Le point le plus important : discours IA/agent déjà présent

**Supernova et zeroheight ont d'ores et déjà un discours agent/IA explicite et central,
dès le titre de leur hero** — pas une mention en bas de page. Les deux nomment Claude,
Cursor et MCP. zeroheight va jusqu'à utiliser quasi le même vocabulaire que le
positionnement de Stellar ("agents building from your design system", "agents always
build from the right context"). Storybook, en revanche, garde l'IA à la marge (un lien
de nav vers une page dédiée), sans la mettre dans son hero.

**Conséquence directe pour le PRD** — l'espace de différenciation de Stellar ne peut
plus être "connecter une IA à un design system", ce message est déjà occupé par au moins
deux des trois références qui font office de statu quo. L'axe encore libre, observé nulle
part dans ces trois pages : aucune des trois ne mentionne de **préférences de rendu
définies par l'utilisateur avec son agent** (étape 3 du fonctionnement de Stellar), ni de
**tri/curation des tokens et patterns par l'utilisateur avant usage par l'agent** (étape
2) — les trois proposent un accès à la donnée du DS pour l'agent, mais aucune ne décrit
un geste explicite de l'utilisateur pour **calibrer** comment l'agent doit s'en servir.

### Objection de compatibilité ("est-ce que ça marche sur mon design system")

Aucune des trois ne traite cette objection frontalement dans le contenu récupéré du hero
ou des sections "comment ça marche" observées : Supernova et zeroheight l'esquivent en
listant des intégrations nommées (Figma, GitHub, GitLab, Claude, Cursor) plutôt qu'en
répondant explicitement "oui, quel que soit votre design system". C'est une observation,
pas une conclusion certaine : le contenu récupéré ne couvre pas nécessairement une page
FAQ ou une page technique dédiée qui traiterait la question plus loin dans le site.

### Verdict — axe de différenciation exploitable pour Stellar

Sur la base de ce qui a été effectivement lu sur ces trois pages, l'axe encore libre
n'est **pas** "IA + design system" (occupé) mais **la définition explicite, par
l'utilisateur, des règles d'usage et des préférences de rendu avant que l'agent ne
produise quoi que ce soit** — le triptyque tri/règles → préférences de rendu → connexion,
propre aux étapes 2 et 3 du fonctionnement de Stellar. Les trois références donnent accès
à la donnée du DS à l'IA ; aucune ne décrit un geste de calibration humaine explicite en
amont. C'est l'axe à formuler dans l'argumentaire, pas "nous aussi on connecte l'IA à
votre design system".

## 9. Vérification du pari "comment ça marche en 4 étapes"

Le rapport initial concluait que la convention observée en pré-lancement (8 références,
famille waitlist/dev-tool) est de **ne pas** expliciter le fonctionnement en étapes
numérotées. Les 5 nouvelles références **ne contredisent pas ce constat, mais elles ne le
confirment pas non plus directement** — elles ne répondent pas à la même question :

- **Linear et Raycast (Passe A)** sont des produits déjà lancés, hors du périmètre
  "pré-lancement" du constat initial ; Linear ne montre d'ailleurs aucune section "how it
  works" numérotée dans les crops de hero observés — son argumentaire tient sur le titre
  et la preuve produit, pas sur un déroulé d'étapes. Cela ne contredit donc pas le
  rapport initial mais ne l'aide pas non plus à trancher pour du pré-lancement.
- **Storybook, Supernova, zeroheight (Passe B)** sont aussi des produits déjà lancés
  (statu quo établi), mais leur mécanique "comment ça marche" observée est instructive :
  **aucune des trois ne numérote ses étapes visuellement (pas de "1. 2. 3. 4." avec
  schéma)** — Supernova et zeroheight présentent leur fonctionnement comme des **onglets
  ou blocs nommés côte à côte** (Context Intelligence / Code Components / Skills &
  Exporters / Feedback Loop pour Supernova ; Documentation / Delivery / Measurement /
  Management pour zeroheight), pas comme une séquence chronologique fléchée.

**Ce que ça dit au PRD** — le pari d'une section "comment ça marche en 4 étapes" n'est
**contredit par aucune des 13 références** (initiales + complément) au sens où aucune
n'utilise un schéma numéroté façon "étape 1 → étape 2 → étape 3 → étape 4" avec flèches.
Mais Supernova et zeroheight, qui sont les statu quo les plus proches fonctionnellement de
Stellar, montrent qu'un fonctionnement en plusieurs blocs **peut** s'exposer sans démo
jouable — simplement pas sous forme de séquence temporelle numérotée, plutôt sous forme
de **blocs juxtaposés nommés**, chacun résumé en une ligne. Si le PRD tient à une section
"comment ça marche", cette forme (blocs nommés, pas flèche séquentielle) a un précédent
chez les deux références les plus pertinentes ; une séquence numérotée façon tutoriel n'a
de précédent nulle part dans les 13 références rassemblées, ni en pré-lancement ni chez
les statu quo lancés.

## Questions ouvertes pour le cadrage produit (mise à jour)

**Tranchées par le complément :**

- *Différenciation "IA + design system"* (nouvelle, ne figurait pas dans la liste
  initiale) — **tranchée en défaveur du message générique** : Supernova et zeroheight
  l'occupent déjà explicitement dans leur hero. L'axe à défendre est la calibration
  humaine explicite (règles d'usage, préférences de rendu) en amont de l'agent, absente
  des trois références.

**Toujours ouvertes (reformulées à la lumière du complément) :**

1. **Champ "outil / agent utilisé"** — toujours sans précédent observé, y compris dans
   le complément.
2. **Forme de la section "comment ça marche"** — affinée par la section 9 : si elle
   existe, privilégier des blocs nommés juxtaposés (précédent chez Supernova/zeroheight)
   plutôt qu'une séquence numérotée fléchée (aucun précédent trouvé) — mais l'opportunité
   de l'avoir *en pré-lancement* reste ouverte, faute de précédent pré-lancement dans les
   13 références.
3. **Rang dans la file / parrainage** — inchangé, un seul précédent (Contra).
4. **Email de confirmation vs. état inline seul** — inchangé, aucune référence ne
   documente ce choix visuellement.
5. **CTA alternatif "réserver un call"** — inchangé.
6. **Preuve par la réalisation** — inchangé ; la section 7 ajoute que, chez Linear
   (produit lancé), cette preuve prend la forme d'une vraie capture d'écran détachée du
   fond par un halo, pas d'une illustration — un standard visuel à garder en tête pour le
   jour où Stellar aura ce type de preuve à montrer, pas pour le pré-lancement immédiat.
7. **Comportement mobile** — **toujours entièrement ouvert.** Ni le rapport initial ni le
   complément n'ont pu obtenir de capture mobile-web réelle (navigateur intégré
   indisponible aux deux tentatives). Point de blocage récurrent à signaler à l'appelant
   si le mobile est prioritaire : il faudra soit un outil de capture différent, soit des
   captures fournies manuellement.

**Nouvelles questions apparues avec le complément :**

8. **Traitement de la barre d'identité** — Linear (produit lancé) tient sa nav à 5-7
   liens + 2 boutons. Est-ce pertinent en pré-lancement où il n'y a presque rien à
   naviguer (pas de pricing, pas de docs publiques) ? La nav de Stellar en pré-lancement
   doit-elle être réduite au strict minimum (logo + CTA unique), sujet non tranché par
   aucune des 13 références puisqu'aucune landing de pré-lancement observée n'avait de
   nav aussi riche que Linear.
9. **Vocabulaire à éviter ou à s'approprier** — Supernova et zeroheight ont déjà capté
   "source of truth" et "agents building from your design system" comme expressions de
   catégorie. Le PRD/la landing doivent-ils réutiliser ce vocabulaire pour surfer sur des
   attentes déjà installées chez la cible (DS manager, PM), ou s'en démarquer
   délibérément pour ne pas paraître suiveur ? Question de positionnement, pas de
   fonctionnel pur, mais directement issue de ce complément.

---

# Complément — passe C : sections de fonctionnalité et visuel de convergence

Quatre questions précises, posées après les compléments précédents. Méthode : capture
réelle de chaque landing via un navigateur headless (Playwright, piloté en Bash — le
navigateur intégré au poste s'est révélé disponible en tout début de session mais la
suite de la collecte a été menée via ce second outil pour fiabiliser les captures
longues ; mêmes règles de gate visuel qu'ailleurs dans ce document : chaque référence
citée ci-dessous a été réellement ouverte et observée, capture à l'appui dans `ref/`).
**8 nouveaux produits observés, 11 nouvelles captures (`ref/18` à `ref/28`).**

## Références nouvellement observées

- [Supernova — supernova.io](https://www.supernova.io/) — déjà cité (textuel) en section 8 ;
  **observé en image pour la première fois** ici — `ref/18-supernova-convergence-visual.webp`
- [Segment / Twilio — segment.com](https://segment.com/) — `ref/19-segment-connections-diagram.png`
- [zeroheight — zeroheight.com](https://zeroheight.com/) — déjà cité (textuel) en section 8 ;
  **observé en image pour la première fois** ici — `ref/20-zeroheight-hero-product-screenshot.png`
- [Fivetran — fivetran.com](https://www.fivetran.com/) — `ref/21-fivetran-source-status-table.png`,
  `ref/22-fivetran-logo-grid-sources.png`
- [Raycast — raycast.com](https://www.raycast.com/) — cité comme piste au benchmark initial,
  **non capturable à l'époque (Mobbin ne l'indexait pas)** ; capturé ici directement —
  `ref/23-raycast-extensions-marketplace.png`, `ref/24-raycast-automate-workflow-section.png`
- [Obsidian — obsidian.md](https://obsidian.md/) — `ref/25-obsidian-plugins-personal-workflow.png`
- [Zed — zed.dev](https://zed.dev/) — `ref/26-zed-ai-extensions-section.png`
- [Onlook — onlook.com](https://onlook.com/) — `ref/27-onlook-feature-capsules-annotated.png`,
  `ref/28-onlook-feature-capsules-2.png`

**Références tentées et écartées du gate** — déclarées, pas passées sous silence :
Zapier (zapier.com) et n8n (n8n.io) ont été ouverts pour Q1 : leur hero ne montre **pas**
le motif sources→hub→destinations (Zapier : illustration abstraite d'un portail ; n8n :
capture de canvas de workflow) — écartés de l'analyse Q1, pas forcés à y rentrer.
Merge.dev a été ouvert pour Q1 (positionnement "connect to every API" très proche du
motif recherché) mais son diagramme hub-and-spoke annoncé par le texte de la page
("Merge provides the connective infrastructure...") ne s'est jamais rendu dans la
capture statique (contenu déclenché au scroll, resté blanc après plusieurs tentatives) —
écarté, non halluciné à partir du texte seul. Cognition/Devin (page produit demandée)
renvoie une 404 au moment de la collecte. Granola, Onlook et Subframe ont été ouverts en
espérant des pages encore gated : les trois sont aujourd'hui en accès public (Download /
Start for free) — Onlook est conservé pour Q2 (densité de captures produit, pertinent
même hors gate), Granola et Subframe écartés de Q2 faute d'apporter un angle nouveau par
rapport à Onlook.

## Q1 — Le visuel de convergence (sources → hub → destinations)

**Ce qui a été réellement vu :**

- **Supernova** (`ref/18`) — le visuel exact décrit par le commanditaire : à gauche un
  bloc "Design & engineering knowledge and skills" avec 4 logos (Figma, un logo rose non
  identifié avec certitude, GitHub, un badge Markdown), une ligne qui converge vers un
  cercle central orné du logo Supernova, puis une ligne qui repart vers un bloc à droite
  "Your AI agents, powered by curated context" avec 4 logos (un logo façon soleil/astre —
  Claude/Anthropic vraisemblablement selon la charge sémantique du texte, mais **non
  confirmé par un texte alt lisible dans la capture** — un cube, un logo multicolore façon
  Copilot, un logo à quatre cercles façon OpenAI). **Aucun texte de statut n'accompagne ces
  logos** — ni "available", ni "coming soon", ni compteur. Le cercle central est vide de
  toute information : ni texte, ni chiffre, seulement le monogramme de la marque. En
  dessous, trois bénéfices textuels seuls (Improve agents quality / Cut token usage cost /
  Self-healing contexts), sans lien visuel avec le diagramme au-dessus.
- **Segment / Twilio** (`ref/19`) — le même squelette structurel (SOURCES à gauche,
  connecteur central, DESTINATIONS à droite) mais **rempli de données fonctionnelles
  réelles** : le hub central est nommé ("Connections"), porte un **compteur** ("550+
  Destinations"), et une deuxième version du même diagramme montre un **contenu qui
  traverse** le hub (un profil "Nicola Davis" avec ses attributs, une prédiction, un
  déclencheur de journey) — le hub n'est pas un point neutre, il **transforme** la donnée
  visiblement.
- **Fivetran** (`ref/21`, `ref/22`) — **aucun diagramme de convergence animé** : à la
  place, une **grille de logos** (900+ sources listées comme un mur d'icônes carrées,
  sans ligne ni point de fuite) sous le texte "All the context your AI needs — Explore
  900+ sources and destinations →", et plus haut dans le hero, un **tableau littéral**
  (Source / Status / Last synced, avec des lignes "SAP ERP — Active — 30 secs ago",
  "Snowflake — Active", "Salesforce — Active") superposé à une photo de camion Coca-Cola
  scrollytelling. C'est la preuve la plus directe que **le statut par intégration
  s'affiche mieux dans un tableau que dans un diagramme radial** : au-delà de 3-4 icônes
  par côté, un hub-and-spoke devient illisible, alors qu'une liste scroll parfaitement à
  n'importe quelle volumétrie.

**Réponse à la question posée :**

Ce que le motif communique **effectivement** dépend entièrement de ce qu'on met dedans,
pas de sa géométrie. La géométrie seule (sources convergent vers un point, qui ressort
vers des destinations) communique une seule chose de façon fiable : **il existe une
étape intermédiaire entre la donnée brute et l'agent qui l'utilise** — une promesse de
médiation, pas une preuve de compatibilité. Chez Supernova, c'est tout ce qu'il
communique : le diagramme est un **logo de logos**, une reformulation visuelle du titre,
pas une donnée. Chez Segment, le même squelette communique davantage parce qu'il est
**rempli de vraies données** (un nom, un compteur, un statut) — c'est le contenu du hub,
pas sa forme, qui porte l'information.

**Limite connue, observée directement** : dans aucune des deux occurrences réelles du
motif (Supernova, Segment) le statut *par intégration individuelle* (disponible vs à
venir) n'est porté par le diagramme lui-même. Supernova ne distingue à l'oeil aucun des
4 logos de son bloc droit ("Your AI agents") — Claude Code, Codex, ou un autre, seraient
rendus de façon identique, seul le logo change. Segment ne montre pas non plus de statut
différencié parmi les icônes de destinations (Analytics, Messaging, Warehouse, Facebook,
Zendesk) — elles sont toutes traitées à égalité visuelle. **Aucune des deux références ne
prouve que ce motif peut porter un statut par intégration** — c'est une extension que
Stellar devrait inventer, pas reproduire.

**Condition pour porter l'info de statut (F5)** — à la lumière de Fivetran : le motif
"convergence" et le motif "statut par intégration" sont **deux besoins différents** qui
n'ont, dans l'échantillon observé, jamais cohabité dans le même artefact visuel. Quand un
produit veut vraiment communiquer un statut par intégration (comme Fivetran le fait pour
la synchronisation), il bascule sur un **tableau/liste**, pas sur un diagramme radial.
Un diagramme de convergence à la Supernova peut coexister sur la même page qu'un tableau
de statut à la Fivetran (rien n'empêche les deux), mais **demander au même artefact
visuel de porter à la fois l'idée de centralisation et le détail du statut par agent
(Claude Code pris en charge / Codex à venir) dépasse ce que les deux occurrences
observées font** — c'est un problème de lisibilité au-delà de 3-4 éléments par côté, pas
un simple choix graphique.

## Q2 — Montrer une vue produit sans produit disponible

**Limite à déclarer d'abord** : aucune landing **réellement pré-lancement** (produit non
accessible, mécanique de type waitlist) n'a pu être trouvée dans la catégorie dev/design
tool actuellement — Onlook, Subframe, Granola sont passés en accès public depuis leur
phase de gate ; Devin (Cognition) est en 404 sur l'URL attendue. Le seul waitlist pur
avec capture produit reste **Cron**, déjà dans le rapport initial (une seule capture,
sous le fold). Les observations ci-dessous portent donc sur des produits **déjà lancés**
dans la même catégorie fonctionnelle que Stellar (design system, dev tool, éditeur) —
utiles pour la question de densité et de forme, pas comme preuve de ce qui se fait
*en pré-lancement*.

**Ce qui a été réellement vu :**

- **zeroheight** (`ref/20`) — **une seule capture produit dans le hero**, pleine largeur,
  non recadrée sur un détail : une vraie page de documentation de composant ("Buttons"),
  avec sa navigation latérale complète (Overview / Style / Components), ses onglets
  (Overview / States / Usage / Code) et son contenu réel (règles d'usage des boutons
  primaires/secondaires). C'est très exactement le type d'écran que Stellar veut montrer
  (liste de composants avec page de doc) — précédent direct. Statique, non annotée,
  jouant sur le fait qu'elle est **authentique et complète** plutôt que sur un montage.
- **Supernova** (déjà en section 8, revu en image ici) — **4 captures produit
  distinctes**, une par bloc nommé (Context Intelligence, Code components, Skills &
  Exporters), chacune recadrée sur un panneau UI précis (liste de contextes avec compteurs
  "106 of 284", un extrait de code avec une question de chat en incrustation, une liste de
  fichiers markdown avec un menu de skills) — jamais une capture pleine app, toujours un
  recadrage qui isole *une* preuve par bloc de texte adjacent.
- **Onlook** (`ref/27`, `ref/28`) — le cas le plus dense observé : **au moins 6 captures
  distinctes** rien que dans les deux premiers écrans sous le hero, chacune minuscule
  (occupe un quart d'écran ou moins), recadrée sur un détail hyper précis (une palette de
  couleurs de marque, un mini calendrier, une liste de composants, un réglage de police).
  Une capture montre une **annotation explicite** : un cercle rouge et des poignées de
  sélection superposés sur un visuel (un smiley dans une illustration), signalant
  "ceci est l'élément que l'IA vient de modifier" — la seule occurrence d'annotation
  visuelle trouvée dans tout ce complément.
- **Fivetran** (`ref/21`) — une capture produit unique mais **littéralement
  fonctionnelle** (un tableau de statut de synchronisation), superposée en incrustation
  sur une photo de camion Coca-Cola scrollytelling — mélange capture UI + photo de preuve
  client, jamais vu ailleurs dans ce complément.

**Réponse à la question posée :**

Il n'y a pas de nombre universel, mais un **ordre de grandeur qui se dégage nettement** :
les références qui montrent **1 seule capture, pleine et non recadrée** (zeroheight) le
font pour prouver l'authenticité d'un seul écran représentatif — c'est le choix le plus
proche du besoin de Stellar (montrer *que* l'écran de règles/préférences existe, sans
sur-vendre). Les références qui montrent **4 à 6+ captures** le font toujours en les
**recadrant serré sur un détail minuscule et en les associant chacune à une seule phrase
de bénéfice** (Supernova, Onlook) : dans ce mode, chaque capture n'a plus vocation à être
lue comme un écran complet, elle devient une **icône illustrée** plutôt qu'une preuve.

**Ce qui distingue une capture qui prouve d'une capture qui décore, observé
directement :** une capture qui prouve montre du **contenu réel et spécifique**
(des noms de composants réels, des chiffres réels comme "106 of 284" ou "550+
Destinations", des libellés d'onglets qu'on peut suivre) — zeroheight et Supernova le
font. Une capture qui décore est **illisible à la taille où elle est montrée** (texte non
lisible, juste des blocs de couleur et une forme reconnaissable) — plusieurs des
vignettes Onlook basculent dans ce registre dès qu'elles descendent sous ~200px de
large : on reconnaît "il y a une UI ici" mais pas ce qu'elle dit. **Le seuil de bascule
observé est la lisibilité du texte à l'intérieur de la capture, pas sa taille en
pourcentage d'écran** — une petite capture avec un gros libellé net ("550+
Destinations") prouve encore ; une capture large mais pleine de texte à 8px ne prouve
plus rien.

**Combien avant catalogue illisible** — au-delà de 4 captures **si chacune n'est pas
rattachée à une phrase de bénéfice propre et à un contenu lisible**, la section bascule
en catalogue. Onlook tient à 6+ uniquement parce que chaque capture est minuscule et
fonctionne comme pictogramme, pas comme preuve — un registre que le PRD de Stellar
n'a pas choisi (F6 exige que l'écart soit **nommable**, donc lisible). Pour Stellar,
l'enseignement actionnable est : **une capture unique, pleine, lisible et authentique
(zeroheight) est mieux couverte par le contrat fonctionnel de F6 que plusieurs vignettes
décoratives** — le nombre importe moins que la lisibilité de ce que chaque capture
prouve.

## Q3 — La personnalisation comme argument de vente

**Limite à déclarer** : Linear (déjà benchmarké en section 7, captures hero uniquement)
n'a montré aucune section de personnalisation dans les crops disponibles — silence, pas
absence prouvée. Arc (browser) n'a pas été rouvert dans ce complément (le sujet est déjà
suffisamment couvert par 3 références solides ci-dessous) ; Warp a été ouvert mais son
contenu sous le hero ne s'est pas rendu dans la capture statique (site fortement
scroll-animé) — écarté, pas remplacé par une supposition.

**Ce qui a été réellement vu :**

- **Raycast** (`ref/23`, `ref/24`) — **deux sections** portent un message de
  personnalisation, à deux endroits différents de la page et formulées différemment :
  1. Une section "There's an extension for that. Use your favorite tools without even
     opening them." — un carrousel de cartes d'extensions tierces (Linear, Google
     Translate, Spotify observées), filtrable par catégorie (Productivity, Engineering,
     Design, Writing) — la personnalisation vendue comme **étendue de l'écosystème**, pas
     comme réglage.
  2. Une section "Don't repeat yourself. Automate the things you do all the time." —
     Snippets, Quicklinks, Hotkeys and Aliases — la personnalisation vendue comme
     **automatisation de gestes propres à l'utilisateur**, illustrée par un exemple concret
     de combinaison de touches (option + command + L).
  3. **Preuve sociale directement liée à la personnalisation** — une section testimonials
     où chaque personne cite littéralement sa **"Favorite Feature"** et son **"Top
     Extension"** avec une justification personnelle ("I forked the Notion Search
     extension so I can easily paste 'tokenized' doc links into Slack") — la
     personnalisation n'est pas décrite abstraitement, elle est **incarnée par un usage
     réel et spécifique**.
- **Obsidian** (`ref/25`) — la formulation la plus directe observée : *"Build your ideal
  thinking space. With thousands of plugins and our open API, it's easy to tailor
  Obsidian to fit **your personal workflow**."* — accompagnée d'une **UI réelle de
  réglages** : une liste de plugins avec des interrupteurs on/off visibles à l'écran
  (Calendar activé, Dataview désactivé) — la personnalisation n'est pas racontée, elle est
  **montrée en train de se configurer**.
- **Zed** (`ref/26`) — une section "Growing extensions ecosystem" : *"Boost your Zed
  experience by choosing from hundreds of extensions that broaden language support,
  offer different themes, and more."* — même registre que Raycast (extensions comme
  vecteur de personnalisation), plus discrète (pas de section dédiée aussi développée
  que chez Raycast ou Obsidian, une seule phrase avec liens).

**Réponse à la question posée :**

Sur les 3 produits où le motif est réellement présent, la personnalisation **occupe
sans ambiguïté une section de landing** — ce n'est pas cantonné à la documentation. Mais
dans les 3 cas, **elle n'est jamais vendue comme "vous pourrez configurer vos
préférences"** au sens abstrait : elle est toujours reformulée en **bénéfice concret et
déjà incarné** :
- chez Raycast, par un **usage réel montré** (screenshots d'extensions existantes,
  testimonial nommé avec sa configuration précise) ;
- chez Obsidian, par une **UI de réglage visible** (interrupteurs, pas une promesse de
  texte) ;
- jamais par une simple affirmation ("c'est agréable parce que c'est personnel") sans
  preuve à l'appui.

**Ce que ça vend, et à quelle condition** — la personnalisation **vend sur une landing**
quand elle est démontrée par un **artefact concret** (une vraie capture de réglage, un
vrai témoignage nommé avec sa config, une vraie liste de plugins avec bascules), parce
que l'artefact convertit la promesse abstraite ("c'est personnalisable") en preuve
("voici ce qu'une vraie personne a réellement configuré"). **Sans cet artefact, la même
promesse reformulée en adjectif seul ("personnel", "sur-mesure") n'a aucun précédent
observé dans cet échantillon** — aucune des 3 références ne se contente d'un mot, toutes
montrent un geste ou un témoignage. C'est directement actionnable pour la section "Set
your workflow" envisagée par Stellar : le PRD devra prévoir **un artefact montré** (un
état d'écran réel de préférences configurées, ou une citation d'utilisateur nommant sa
config), pas seulement l'argument nu.

**Limite de la généralisation** — les 3 produits qui vendent la personnalisation
(Raycast, Obsidian, Zed) sont tous des **outils déjà installés, utilisés quotidiennement,
avec une base d'utilisateurs existante à citer en témoignage**. Stellar, en
pré-lancement, n'a ni utilisateurs à citer ni produit à montrer en train de se
configurer réellement — la condition de crédibilité identifiée ci-dessus (artefact
concret) est **plus difficile à remplir en pré-lancement** qu'elle ne l'est pour ces
trois références déjà lancées. C'est un rappel, pas une invalidation : si Stellar ne
peut pas produire cet artefact honnêtement aujourd'hui, mieux vaut une formulation plus
modeste que le calquer sans preuve.

## Q4 — Combien de sections de fonctionnalité

**Ce qui a été réellement vu, compté section par section (chaque section = un titre de
niveau supérieur distinct, pas un sous-item) :**

| Produit | Sections de fonctionnalité comptées après le hero | Regroupement observé |
| --- | --- | --- |
| Supernova | 3 (bénéfices génériques + diagramme ; Context Intelligence ; Code components + Skills & Exporters en paire) | Une section = un thème (ex. "Context Intelligence"), qui peut elle-même contenir 2-4 capacités déclinées en points à puces |
| zeroheight | 1 section à onglets ("Your entire design system workflow, covered") qui agrège 4 capacités (Documentation / Delivery / Measurement / Management) | Agrégation forte : 4 capacités dans une seule section, choisies au clic, pas déroulées l'une après l'autre |
| Raycast | 3 (Extensions ; AI — qui agrège 3 sous-usages ; Automation — qui agrège 3 capacités : Snippets/Quicklinks/Hotkeys) | Une section = un thème qui regroupe 3 capacités concrètes, jamais une section par capacité isolée |
| Zed | 3 (grille de 6 tuiles atomiques sous un même bandeau ; AI — qui agrège 4 sous-usages ; Extensions) | Un thème peut regrouper jusqu'à 6 tuiles très courtes (titre + 1 phrase), toutes sous un seul intitulé implicite |
| Obsidian | 3 ("Spark ideas" agrège Links + Graph ; une section agrège Canvas + Plugins ; "Sync securely" seule) | Regroupement par intention utilisateur ("spark ideas"), pas par mécanique produit |
| Fivetran | 2 (mur de logos + lien "explore 900+ sources" ; "The Fivetran platform" qui agrège Move/Manage/Transform + Context layer) | Regroupement par étape de pipeline, présentées comme un diagramme unique plutôt que des blocs séparés |
| Segment/Twilio | 1 section qui compare 2 offres (Connections vs Connections+Unify+Engage) côte à côte | Regroupement par offre commerciale, pas par capacité |

**Réponse à la question posée** — l'ordre de grandeur qui se dégage est **2 à 3 sections
de fonctionnalité de premier niveau** après le hero, jamais 5 ou plus dans cet
échantillon. Ce qui varie fortement, c'est **combien de capacités chaque section
regroupe en son sein** (de 2 chez Obsidian à 6 chez Zed) — c'est cette variable qui
absorbe la richesse de l'offre, pas la multiplication du nombre de sections. **Aucune des
7 références observées n'aligne 5 sections de premier niveau consacrées chacune à une
seule capacité** — le motif dominant est l'inverse : peu de sections, chacune nommée par
un **thème ou une intention** ("Context Intelligence", "AI that works the way you code",
"Spark ideas"), qui agrège ensuite 2 à 6 capacités déclinées en sous-blocs plus courts
(titre + une phrase, parfois une micro-capture).

**Critère de regroupement observé, récurrent d'un produit à l'autre** — les capacités
sont groupées par **ce qu'elles permettent à l'utilisateur de faire ou de ressentir**
(Obsidian : "Spark ideas" — Zed : "AI that works the way you code" — Raycast : "Don't
repeat yourself"), pas par la mécanique technique qui les sous-tend. Une section qui
s'intitulerait par une fonctionnalité isolée et technique (ex. "Le tri des tokens", "Les
préférences de rendu" pris séparément) n'a **aucun précédent direct** dans cet
échantillon — l'attente installée est de regrouper sous une intention lisible, quitte à
ce que la section détaille ensuite plusieurs mécaniques à l'intérieur.

**Conséquence pour le PRD de Stellar** — F4 (comprendre le fonctionnement, 4 étapes) et
F5 (vérifier la compatibilité) pourraient rester deux sections distinctes sans s'écarter
de la convention (leur objet est réellement différent : un enchaînement séquentiel vs.
une liste de statuts). En revanche, si la proposition actuelle empile 5 sections
consacrées chacune à une seule capacité en registre plat, c'est un point de divergence
par rapport à ce que ces 7 références font toutes : elles **regroupent**. Le point ne
relève pas du fonctionnel (hors du périmètre de ce document) mais mérite d'être signalé
à qui conçoit la page : le nombre de sections observées ailleurs est plus bas que 5, la
densité par section est plus haute.
