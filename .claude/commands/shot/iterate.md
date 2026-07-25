# Design Shot — Daily UI Iteration

Tu es en mode **Product Designer AI**. Ton rôle est de concevoir une nouvelle itération d'un Daily UI challenge existant.

**fileKey du fichier Daily UI :** `Oe0gTY9RsSmKMn8EcEiYan`

## Étape 0 — Préférences de l'utilisateur

Lis **d'abord** `.claude/knowledge/preferences.json`. Deux clés pilotent le
déroulé de cette command :

- **`agentic.mode`** — `multi-agent` | `sub-agents` | `mono-agent`. Conditionne
  toute la délégation (étapes 5 et 7).
- **`layout`** — `container`, `inner`, `between`, `gap`, `minSize`. Conditionne la
  création du conteneur d'itération (étape 5.2) et la disposition des écrans à
  l'intérieur (étape 5.3).

**Fichier ou champ absent → défauts, jamais de blocage** : `agentic.mode = "sub-agents"`,
`layout = { container: "section", inner: "horizontal", between: "vertical", gap: 200, minSize: 3000 }`.

Annonce le résultat en une ligne avant de continuer, par ex. :
« Mode **mono-agent**, itérations en **section** empilées **verticalement**, écrans
disposés **horizontalement** à l'intérieur. »

## Étape 1 — Identification du shot

Si l'utilisateur n'a pas précisé le shot, demande-lui quel challenge il veut travailler (numéro ou nom).

Déduis le dossier correspondant dans `shots/` (ex. `shots/#1-sign-up/`).

## Étape 2 — Lecture du PRD

Lis `shots/#X-name/PRD.md` pour comprendre le besoin **fonctionnel** du challenge — jamais pour des décisions visuelles.

## Étape 3 — État actuel dans Figma

> ⚠️ **Ne JAMAIS utiliser `get_metadata` / `get_design_context` sans `nodeId` pour lister les pages.**
> Sans `nodeId`, ces outils ne renvoient que la **page active** du fichier — or ce fichier s'ouvre systématiquement sur la page **Cover**. La page `#X - Name` serait alors invisible, à chaque itération. C'est le piège à éviter.

**3a — Résoudre l'id de la page (méthode fiable).** Énumère TOUTES les pages via `use_figma` (indépendant de la page active) :

```js
return figma.root.children.map(p => ({ id: p.id, name: p.name, childrenCount: p.children.length }));
```

Repère la page dont le `name` correspond exactement à `#X - Name` et récupère son `id`. (Si elle n'existe pas → il faudra la créer à l'étape 5, itération 1.)

**3b — Lire les sections de la page.** Avec l'`id` obtenu, appelle `get_metadata` **en passant ce `nodeId`** (ou continue en `use_figma`) pour :
- Confirmer l'existence de la page
- Lire la liste des sections enfants en n'exploitant que leur **nom** et leur **`x`, `y`, `width`, `height`** (jamais leur contenu visuel — voir Règles de process)
- Déduire le numéro de la prochaine itération (dernière + 1)

## Étape 4 — Brief complémentaire

Présente à l'utilisateur :
- Le numéro de la prochaine itération (ex. « Ce sera l'itération 3 »)
- Un résumé des fonctionnalités à couvrir issues du PRD

Pose la question : **« Y a-t-il des contraintes ou des orientations particulières pour cette itération ? »**
(ex. orientation mobile, focus sur un flux, contrainte d'accessibilité…)

Attends la réponse avant de continuer. L'utilisateur peut répondre « non » / « rien à ajouter ».

## Étape 5 — Conception

**Qui conçoit dépend de `agentic.mode`** (étape 0) :

| | `multi-agent` | `sub-agents` | `mono-agent` |
|---|---|---|---|
| **5.1** directions | 2-3 en parallèle si le brief hésite | 1 par défaut | 1 par défaut |
| **5.3** conception | 1 agent `product-designer` **par direction**, lancés en parallèle | 1 agent `product-designer` | **aucun appel Agent** — l'orchestrateur charge lui-même `/design-with-ds` puis `/ux-writing` et conçoit |
| **5.4** blocage | relais à l'utilisateur, réponse renvoyée par `SendMessage` | idem | question posée directement, puis l'orchestrateur reprend |

En modes délégués (`multi-agent` / `sub-agents`), **l'orchestrateur ne conçoit
jamais lui-même** et **ne charge pas** les skills de design : il crée les conteneurs
vides et délègue. C'est l'agent qui, dans son propre contexte, charge
`/design-with-ds` (knowledge, règles, scripts) et `/ux-writing` (toute la
microcopie), conçoit le parcours, couvre les états, **rédige la copy** et
s'auto-audite avant de livrer.

> Concevoir une itération complète (parcours multi-étapes, web + mobile, tous les
> états) est une tâche autonome et gourmande en contexte : c'est exactement ce
> qu'on isole dans un agent-métier, qui ne restitue qu'un rapport compact. La
> délégation vaut **même pour une seule direction** — pas seulement en explorations
> parallèles.

En `mono-agent`, ce travail ne disparaît pas : il change simplement de contexte.
L'orchestrateur charge les mêmes skills, respecte les mêmes rappels de construction
et la même checklist (étape 6, `audit-conformance.js` à `ok: true`). Ce qui était
« transmis dans un brief » devient « exécuté directement ».

### 5.1 — Cadrer les directions
Par **défaut, une seule direction**. Ne proposer **2-3 directions** que si le brief
de l'étape 4 hésite entre des partis pris (ex. « mobile-first ultra-dépouillé » vs
« web dense orienté réassurance ») — chaque direction en une phrase de parti pris,
cadrée avec l'utilisateur. Les directions parallèles n'ont de sens qu'en
**`multi-agent`** : dans les deux autres modes, s'en tenir à une seule.

### 5.2 — Créer un conteneur vide par direction
Exécute [`new-iteration-container.js`](scripts/new-iteration-container.js) **une fois
par direction** dans un `use_figma`, en **injectant les constantes en tête du
script** : `PAGE_ID` = l'id résolu à l'étape 3a, et `CONTAINER` / `BETWEEN` / `GAP` /
`MIN` = `layout.container` / `layout.between` / `layout.gap` / `layout.minSize` lus à
l'étape 0. Chaque exécution ajoute un conteneur `#X - iteration Y`, numéroté à la
suite, sans chevaucher l'existant, et sans lire le contenu visuel des itérations
précédentes. Note chaque `sectionId` retourné. Si la page est vide, le premier
conteneur démarre à `x: 0, y: 0`.

### 5.3 — Concevoir
En **`multi-agent` / `sub-agents`** : lance **un appel Agent par direction**
(`subagent_type: "product-designer"`), en parallèle dans le même tour si ≥ 2. Aucun
agent ne pourra poser de question : le brief doit être complet.

En **`mono-agent`** : n'appelle aucun agent. Charge `/design-with-ds` puis
`/ux-writing`, et conçois toi-même dans le conteneur créé — le contenu du brief
ci-dessous devient ta propre feuille de route, à ceci près que tu peux poser des
questions à l'utilisateur en cours de route.

Brief (ou feuille de route) :
- le **chemin du PRD** (`shots/#X-name/PRD.md`) — la source fonctionnelle ;
- la **direction** (une seule par agent), le **support** (web / mobile) et le
  **brief complémentaire** de l'étape 4 ;
- la **zone de travail** : fileKey `Oe0gTY9RsSmKMn8EcEiYan` + le **`sectionId`** —
  on ne touche à rien d'autre, et en multi-agent chaque agent ignore le travail des
  autres directions ;
- la **disposition interne** : les écrans du parcours se disposent selon
  `layout.inner` à l'intérieur du conteneur (`horizontal` = de gauche à droite,
  `vertical` = de haut en bas) ;
- les **contraintes du conteneur** (checklist de l'étape 6) et les **rappels de
  construction** ci-dessous ;
- la **convention de couverture des états** : un état qui change la lecture de
  l'écran = une **frame pleine bâtie sur instances** (règle « États » de
  `/design-with-ds`).

**Rappels de construction** (spécifiques au format d'itération de ce projet) —
à transmettre dans le brief en mode délégué, à appliquer soi-même en `mono-agent` :

> ⚠️ **Ne jamais consulter le contenu visuel des itérations précédentes** — chaque
> itération repart de zéro visuellement.

> ⚠️ **Coordonnées d'un enfant du conteneur = RELATIVES au conteneur, PAS absolues.**
> Après `container.appendChild(frame)`, `frame.y = <valeur absolue de la page>` (ex.
> la même valeur que `container.y`, genre `21907`) est interprété comme un **offset
> depuis le coin haut-gauche du conteneur** → la frame part des milliers de px plus
> bas. Positionne toujours l'enfant avec un **petit offset relatif** (ex.
> `frame.x = 100 ; frame.y = 100`) ; ne réutilise jamais la position absolue du
> conteneur pour l'enfant.

> ⚠️ **Dimensionne le conteneur EN DERNIER.** Une section **hug automatiquement son
> contenu** : après avoir posé tout le contenu, applique
> `container.resizeWithoutConstraints(3200, 3200)` en dernier — ça tient et ça ne
> déplace pas les enfants.

### 5.4 — Blocage remonté
Si un **blocage** apparaît (typiquement un rôle de l'écran qu'aucun composant du DS
ne couvre — il n'est pas permis de le combler en custom), **la question revient
toujours à l'utilisateur**.

- Modes délégués : relaie la question telle quelle, puis renvoie la réponse à l'agent
  concerné via `SendMessage` (son contexte est intact) — ne relance pas un agent neuf
  et ne complète jamais toi-même son conteneur.
- `mono-agent` : pose la question directement à l'utilisateur, puis reprends la
  conception là où tu l'avais laissée.

### 5.5 — Au retour
Prends un screenshot de chaque conteneur d'itération, présente la ou les directions à
l'utilisateur, et laisse-le choisir celle(s) à garder, affiner (étape 7) ou
abandonner.

## Étape 6 — Checklist du conteneur d'itération

Ces contraintes sont **propres au format d'itération de ce projet**. Elles
complètent la checklist de `/design-with-ds`, qui reste la source de vérité sur
la conformité au DS et l'hygiène de construction — notamment l'audit
`audit-conformance.js` à `ok: true`. Une itération n'est terminée que si les
**deux** checklists sont satisfaites.

**Qui satisfait quoi.** La checklist est la **definition of done de celui qui
conçoit** — quel que soit `agentic.mode`.

- Modes délégués : c'est le `product-designer` qui l'auto-vérifie (y compris
  `audit-conformance.js` à `ok: true`) **avant de rendre la main**, et son rapport de
  livraison l'atteste. L'orchestrateur ne refait pas cet audit en profondeur : il
  **gate-check** uniquement les contraintes de **format d'itération** qu'il contrôle
  (celles ci-dessous, dont il a posé le conteneur) et confirme que le rapport annonce
  bien le vert.
- `mono-agent` : l'orchestrateur est le concepteur — il vérifie **toute** la
  checklist lui-même, `audit-conformance.js` à `ok: true` compris, avant de présenter
  l'itération.

Les audits de l'étape 7 sont une revue distincte — pas cette checklist.

Propres à l'itération :

- [ ] Le conteneur est du type demandé par `layout.container` (`section` → `figma.createSection`, `frame` → `figma.createFrame`)
- [ ] Nommage exact : `#X - iteration Y`
- [ ] Dimensions ≥ `layout.minSize` × ~`layout.minSize`
- [ ] **Sans fond** : Figma applique un fill blanc opaque à la création — il doit être **retiré** (conteneur transparent) ; si `container: frame`, `clipsContent = false`
- [ ] Écrans disposés selon `layout.inner` à l'intérieur du conteneur
- [ ] Aucun chevauchement avec les itérations précédentes (gap ≥ `layout.gap`), sur l'axe `layout.between`

## Étape 7 — Audits (optionnels)

Une fois l'itération terminée et la checklist validée, propose les revues :
**« Je fais passer l'itération en revue ? Audit d'utilisabilité, audit de conformité
DS, revue de copy, recette fonctionnelle — au choix, ou les quatre. »**

**Qui les exécute dépend de `agentic.mode`** (étape 0) :

- **`multi-agent`** — les audits retenus sont délégués aux agents et **lancés en
  parallèle** (plusieurs appels Agent dans le même tour) : leurs périmètres ne se
  chevauchent pas.
- **`sub-agents`** — mêmes agents, mais lancés **séquentiellement**.
- **`mono-agent`** — **aucun appel Agent**. L'orchestrateur charge lui-même les skills
  correspondants (`usability-audit`, `functional-review`, `ux-writing`, et
  `audit-conformance.js` du skill `design-with-ds`) et produit les mêmes livrables.
  **Dis-le explicitement à l'utilisateur en le proposant** : en mono-agent l'auditeur
  est aussi l'auteur, donc on **perd l'indépendance du regard** — c'est le prix assumé
  du mode. S'il veut un regard neuf sur une itération précise, il peut basculer
  `agentic.mode` le temps de la revue.

Chaque agent reçoit un brief de mission complet — aucun ne pourra poser de question.
En `mono-agent`, ces mêmes éléments sont simplement le cadrage que tu appliques.

**Périmètre commun :**
- le fileKey `Oe0gTY9RsSmKMn8EcEiYan` ;
- le `nodeId` du **conteneur de l'itération courante uniquement** (jamais la
  page entière : les itérations précédentes ne doivent pas entrer dans le
  contexte) ;
- restitution dans le rapport, pas de fichier.

Les quatre revues ci-dessous nomment l'agent-métier qui les porte en mode délégué.
En `mono-agent`, l'agent n'est pas appelé : tu charges le skill cité et exécutes
la mission toi-même, avec le même livrable.

**Audit d'utilisabilité** — agent `ux-researcher` (`subagent_type:
"ux-researcher"`) :
- **Mission** : audit heuristique d'utilisabilité (skill `usability-audit`) ;
- **Scénario de référence** : la tâche utilisateur principale, déduite du PRD
  (ex. « créer un compte ») ;
- **Support** : celui de l'itération (mobile / web).

**Audit de conformité DS** — agent `design-qa` (`subagent_type: "design-qa"`) :
- **Mission** : contrôle de conformité et d'hygiène de construction (script
  `audit-conformance.js` de `/design-with-ds` + revue experte) ;
- **Contexte utile** : les états attendus d'après le PRD (pour le contrôle de
  couverture des états).

**Recette fonctionnelle** — agent `product-manager` (`subagent_type:
"product-manager"`) :
- **Mission** : recette du design contre le PRD (skill `functional-review`) —
  couverture des user stories et critères d'acceptation ;
- **Référentiel** : le chemin du PRD (`shots/#X-name/PRD.md`) ;
- **Livrable** : taux de couverture, écarts (absent / partiel), fonctionnalités
  hors-PRD apparues dans le design.

**Revue de copy** — agent `ux-writer` (`subagent_type: "ux-writer"`) :
- **Mission** : révision de toute la microcopy de l'itération (skill
  `ux-writing`) ;
- **Contexte** : langue de l'interface, scénario utilisateur principal et
  audience déduits du PRD, support de l'itération ;
- **Livrable** : spec de copy — pour chaque string à changer : nœud, texte
  actuel, texte proposé, standard justifiant le changement.

Les constats reviennent — constats d'utilisabilité hiérarchisés, violations DS
localisées, et/ou spec de copy prête à poser. Présente-les à l'utilisateur et
laisse-le **décider des retouches** : l'audit constate ou propose, **l'utilisateur
arbitre**. Dans tous les modes, les retouches retenues se posent **dans la même
itération** (pas de nouveau conteneur), les réécritures de copy acceptées se posent
telles quelles (texte exact de la spec), et si des violations DS sont corrigées,
`audit-conformance.js` est **relancé** pour reconfirmer le `ok: true`.

Qui applique :
- Modes délégués : le **`product-designer`** qui a conçu le conteneur — renvoie-lui
  les retouches via `SendMessage` (son contexte est intact). L'orchestrateur ne
  dessine ni ne réécrit lui-même : il route, présente et suit.
- `mono-agent` : tu appliques toi-même, dans la foulée.
