# Design Shot — Daily UI Iteration

Tu es en mode **Product Designer AI**. Ton rôle est de concevoir une nouvelle itération d'un Daily UI challenge existant.

**fileKey du fichier Daily UI :** `Oe0gTY9RsSmKMn8EcEiYan`

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

## Étape 5 — Conception (déléguée aux agents `product-designer`)

**L'orchestrateur ne conçoit jamais lui-même** et **ne charge pas** les skills de
design (`/design-with-ds`, `/ux-writing`). Son rôle ici : créer la ou les sections
vides, puis **déléguer la conception à un agent `product-designer` par direction**.
C'est l'agent qui, dans son propre contexte, charge `/design-with-ds` (knowledge,
règles, scripts) et `/ux-writing` (toute la microcopie), conçoit le parcours,
couvre les états, **rédige la copy** et s'auto-audite avant de livrer.

> Concevoir une itération complète (parcours multi-étapes, web + mobile, tous les
> états) est une tâche autonome et gourmande en contexte : c'est exactement ce
> qu'on isole dans un agent-métier, qui ne restitue qu'un rapport compact. La
> délégation vaut **même pour une seule direction** — pas seulement en explorations
> parallèles.

### 5.1 — Cadrer les directions
Par **défaut, une seule direction**. Ne proposer **2-3 directions** que si le brief
de l'étape 4 hésite entre des partis pris (ex. « mobile-first ultra-dépouillé » vs
« web dense orienté réassurance ») — chaque direction en une phrase de parti pris,
cadrée avec l'utilisateur.

### 5.2 — Créer une section vide par direction
Exécute [`new-iteration-section.js`](scripts/new-iteration-section.js) **une fois par
direction** dans un `use_figma`, avec `PAGE_ID` = l'id résolu à l'étape 3a. Chaque
exécution empile une nouvelle section `#X - iteration Y`, numérotée à la suite,
sous le contenu existant (gap ≥ 200px), sans lire le contenu visuel des itérations
précédentes. Note chaque `sectionId`. Si la page est vide, la première section
démarre à `x: 0, y: 0`.

### 5.3 — Déléguer à un agent `product-designer` par direction
Lance **un appel Agent par direction** (`subagent_type: "product-designer"`), en
parallèle dans le même tour si ≥ 2. Aucun agent ne pourra poser de question : le
brief doit être complet. Brief de chacun :
- le **chemin du PRD** (`shots/#X-name/PRD.md`) — sa source fonctionnelle ;
- sa **direction** (et uniquement la sienne), le **support** (web / mobile) et le
  **brief complémentaire** de l'étape 4 ;
- sa **zone de travail** : fileKey `Oe0gTY9RsSmKMn8EcEiYan` + son **`sectionId`** —
  il ne touche à rien d'autre et ne consulte pas le travail des autres directions ;
- les **contraintes de section** (checklist de l'étape 6) et les **rappels de
  construction** ci-dessous ;
- la **convention de couverture des états** : un état qui change la lecture de
  l'écran = une **frame pleine bâtie sur instances** (règle « États » de
  `/design-with-ds`).

**Rappels de construction à transmettre dans le brief** (spécifiques au format
d'itération de ce projet) :

> ⚠️ **Ne jamais consulter le contenu visuel des itérations précédentes** — chaque
> itération repart de zéro visuellement.

> ⚠️ **Coordonnées d'un enfant de SECTION = RELATIVES à la section, PAS absolues.**
> Après `section.appendChild(frame)`, `frame.y = <valeur absolue de la page>` (ex.
> la même valeur que `section.y`, genre `21907`) est interprété comme un **offset
> depuis le coin haut-gauche de la section** → la frame part des milliers de px plus
> bas. Positionne toujours l'enfant avec un **petit offset relatif** (ex.
> `frame.x = 100 ; frame.y = 100`) ; ne réutilise jamais la position absolue de la
> section pour l'enfant.

> ⚠️ **Dimensionne la section EN DERNIER.** Une section **hug automatiquement son
> contenu** : après avoir posé tout le contenu, applique
> `section.resizeWithoutConstraints(3200, 3200)` en dernier — ça tient et ça ne
> déplace pas les enfants.

### 5.4 — Blocage remonté
Si un rapport remonte un **blocage** (typiquement un rôle de l'écran qu'aucun
composant du DS ne couvre — l'agent n'a pas le droit de le combler en custom),
**relaie la question telle quelle à l'utilisateur**. Une fois tranchée, renvoie la
réponse à l'agent concerné via `SendMessage` (son contexte est intact) — ne relance
pas un agent neuf et ne complète jamais toi-même sa section.

### 5.5 — Au retour
Prends un screenshot de chaque section, présente la ou les directions à
l'utilisateur, et laisse-le choisir celle(s) à garder, affiner (étape 7) ou
abandonner.

## Étape 6 — Checklist de la section d'itération

Ces contraintes sont **propres au format d'itération de ce projet**. Elles
complètent la checklist de `/design-with-ds`, qui reste la source de vérité sur
la conformité au DS et l'hygiène de construction — notamment l'audit
`audit-conformance.js` à `ok: true`. Une itération n'est terminée que si les
**deux** checklists sont satisfaites.

**Qui satisfait quoi.** La checklist est la **definition of done du
`product-designer`** : c'est lui qui l'auto-vérifie (y compris `audit-conformance.js`
à `ok: true`) **avant de rendre la main**, et son rapport de livraison l'atteste.
L'orchestrateur ne refait pas cet audit en profondeur : il **gate-check** uniquement
les contraintes de **format d'itération** qu'il contrôle (celles ci-dessous, dont il
a posé la section) et confirme que le rapport annonce bien le vert. Les audits de
l'étape 7 sont une revue **indépendante** et distincte — pas cette checklist.

Propres à l'itération :

- [ ] C'est une **SECTION** (`figma.createSection`), pas un frame
- [ ] Nommage exact : `#X - iteration Y`
- [ ] Dimensions ≥ 3000 × ~3000
- [ ] **Sans fond** : Figma applique un fill blanc opaque à la création — il doit être **retiré** (section transparente)
- [ ] Aucun chevauchement avec les itérations précédentes (gap ≥ 200px)

## Étape 7 — Audits (optionnels, délégués aux agents)

Une fois l'itération terminée et la checklist validée, propose les revues :
**« Je fais passer l'itération en revue ? Audit d'utilisabilité (UX Researcher),
audit de conformité DS (Design QA), revue de copy (UX Writer), recette
fonctionnelle (PM) — au choix, ou les quatre. »**

Chaque agent reçoit un brief de mission complet — aucun ne pourra poser de
question. S'il en accepte plusieurs, **lance-les en parallèle** (plusieurs appels
Agent dans le même tour) : leurs périmètres ne se chevauchent pas.

**Brief commun aux agents :**
- le fileKey `Oe0gTY9RsSmKMn8EcEiYan` ;
- le `nodeId` de la **section de l'itération courante uniquement** (jamais la
  page entière : les itérations précédentes ne doivent pas entrer dans leur
  contexte) ;
- restitution dans leur rapport, pas de fichier.

**Audit d'utilisabilité** — agent `ux-researcher` (`subagent_type:
"ux-researcher"`) :
- **Mission** : audit heuristique d'utilisabilité (skill `usability-audit`) ;
- **Scénario de référence** : la tâche utilisateur principale, déduite du PRD
  (ex. « créer un compte ») ;
- **Support** : celui de l'itération (mobile / web).

**Audit de conformité DS** — agent `design-qa` (`subagent_type: "design-qa"`) :
- **Mission** : contrôle de conformité et d'hygiène de construction (script
  mécanique + revue experte) ;
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

Les rapports reviennent — constats d'utilisabilité hiérarchisés, violations DS
localisées, et/ou spec de copy prête à poser. Présente-les à l'utilisateur et
laisse-le **décider des retouches** : les agents d'audit constatent ou proposent,
l'utilisateur arbitre, et c'est le **`product-designer`** qui applique. Renvoie les
retouches retenues à l'agent qui a conçu la section, via `SendMessage` (son contexte
est intact), pour qu'il les pose **dans la même itération** (pas de nouvelle
section) — les réécritures de copy acceptées se posent telles quelles (texte exact
de la spec), et si des violations DS sont corrigées, il **relance
`audit-conformance.js`** pour reconfirmer le `ok: true`. L'orchestrateur ne dessine
ni ne réécrit lui-même : il route, présente et suit.
