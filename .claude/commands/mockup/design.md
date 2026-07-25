# Mockup — Conception de la maquette

Concevoir une **maquette exploitable** — le parcours entier, ses états critiques, ses
supports — dans une nouvelle itération du fichier Daily UI.

Cette command ne conçoit pas : elle apporte le contexte projet (fichier, page,
conteneur, conventions d'itération), et c'est le métier du **Product Designer** qui
fait la maquette — **délégué** à un sub-agent ou **incarné** par toi, selon les
préférences.

**fileKey du fichier Daily UI :** `Oe0gTY9RsSmKMn8EcEiYan`

> Famille `mockup:*` — le livrable est jugé sur sa **couverture**, pas sur sa
> vignette. Pour une image de démonstration, c'est `/shot:iterate`.

## Étape 0 — Mode d'exécution et layout

Lis `.claude/knowledge/preferences.json` :

- **`agentic.mode`** — champ absent → `sub-agents`.

  | Mode | Conception (étape 4) | Revues |
  |---|---|---|
  | `multi-agent` | un agent `product-designer` **par direction**, en parallèle | agents délégués, en parallèle |
  | `sub-agents` | un agent `product-designer` | agents délégués, séquentiels |
  | `mono-agent` | **incarné** | incarnés, en annonçant ce qu'on y perd |

- **`layout`** — `container`, `inner`, `between`, `gap`, `minSize`. Alimente le script
  de l'étape 3. Absent → `{ container: "section", inner: "horizontal", between: "vertical", gap: 200, minSize: 3000 }`.

**Incarner un rôle**, c'est : lire `.claude/agents/<nom>.md`, appliquer ses sections
**Métier**, ignorer ses sections **Exécution en agent**, et charger les skills
déclarés dans son frontmatter. Tu tiens le métier ; tu gardes le droit de poser des
questions.

Annonce le résultat en une ligne.

## Étape 1 — Contexte

- Le **challenge** : si l'utilisateur ne l'a pas précisé, demande-le (numéro ou nom).
  Déduis le dossier `shots/#X-name/`.
- Le **PRD** : `shots/#X-name/PRD.md` doit exister. Sinon → **arrête** et renvoie vers
  `/mockup:new`. Sans référentiel fonctionnel, la matrice de couverture n'a rien à
  dériver. `shots/#X-name/BRIEF.md`, s'il existe, complète le PRD (ce qui a été
  arbitré au cadrage et pourquoi).

## Étape 2 — Résoudre la page

> ⚠️ **Ne JAMAIS utiliser `get_metadata` / `get_design_context` sans `nodeId` pour lister les pages.**
> Sans `nodeId`, ces outils ne renvoient que la **page active** — or ce fichier s'ouvre systématiquement sur la page **Cover**, et la page du challenge serait invisible.

Énumère toutes les pages via `use_figma` (indépendant de la page active) :

```js
return figma.root.children.map(p => ({ id: p.id, name: p.name, childrenCount: p.children.length }));
```

Récupère l'`id` de la page dont le `name` vaut exactement `#X - Name`. Si elle
n'existe pas, le script de l'étape 3 la crée.

## Étape 3 — Poser le conteneur

Exécute [`new-iteration-container.js`](../shot/scripts/new-iteration-container.js) dans
un `use_figma`, en **injectant les constantes en tête du script** : `PAGE_ID` = l'id
résolu à l'étape 2, et `CONTAINER` / `BETWEEN` / `GAP` / `MIN` depuis `layout`.

Le script nomme le conteneur `#X - iteration Y` (numéroté à la suite), le place sans
chevauchement, et ne lit que positions et dimensions des itérations précédentes —
jamais leur contenu. Note le `sectionId` retourné.

Le conteneur est posé par la command **dans tous les modes** — une exécution par
direction si tu en lances plusieurs.

## Étape 4 — Concevoir

Demande d'abord : **« Des contraintes ou orientations particulières pour cette
itération ? »** (parti pris, focus sur une étape, contrainte d'accessibilité…)

### En `multi-agent` / `sub-agents` — délégation

Lance `product-designer` (`subagent_type: "product-designer"`), un appel par
direction. Il ne pourra poser aucune question : le brief doit être complet.

```
livrable: maquette exploitable — charge le skill `design-mockup` et juge-toi
          sur son contrat de sortie
besoin: shots/#X-name/PRD.md   (+ shots/#X-name/BRIEF.md s'il existe)
couverture: écris la matrice dans shots/#X-name/COUVERTURE.md avant de dessiner
zone: fileKey Oe0gTY9RsSmKMn8EcEiYan, sectionId <id de l'étape 3> — rien d'autre
knowledge: .claude/knowledge/
pattern: <le type d'écran principal>
support: <ceux du PRD>
direction: <une seule par agent>
brief: <les contraintes de l'utilisateur>
disposition: écrans disposés en <layout.inner> dans le conteneur, dans l'ordre du
             parcours ; chaque support forme un bloc continu
```

Ajoute les **contraintes du format d'itération** ci-dessous.

**S'il remonte un blocage** (typiquement un rôle d'écran qu'aucun composant du DS ne
couvre — le custom est une décision de l'utilisateur, jamais la sienne) : relaie la
question telle quelle, puis renvoie la réponse au **même agent** via `SendMessage`.
Ne relance pas un agent neuf et ne complète jamais son conteneur toi-même.

### En `mono-agent` — incarnation

Incarne le `product-designer` (étape 0), et charge en plus le skill `design-mockup` —
c'est lui qui porte le livrable : matrice de couverture dérivée **avant** de dessiner
(dans `shots/#X-name/COUVERTURE.md`), lisibilité, contrat de sortie.

Le brief ci-dessus devient ta feuille de route, aux mêmes contraintes de format. Ce
qui change : tu peux poser tes questions en direct au lieu de remonter un blocage —
et la règle « le custom n'est jamais ton choix » se règle en une phrase.

### Contraintes du format d'itération

Elles ne sont écrites nulle part ailleurs : transmets-les dans le brief, ou
applique-les toi-même.

> Le conteneur est déjà posé, dimensionné et nommé : ne le renomme pas, n'en crée pas
> d'autre, ne sors pas de sa zone.

> ⚠️ **Coordonnées d'un enfant du conteneur = RELATIVES au conteneur, PAS absolues.**
> Après `container.appendChild(frame)`, `frame.y = <valeur absolue de la page>` est
> interprété comme un offset depuis le coin haut-gauche du conteneur → la frame part
> des milliers de px plus bas. Utilise toujours un petit offset relatif (ex.
> `frame.x = 100 ; frame.y = 100`).

> ⚠️ **Redimensionne le conteneur EN DERNIER.** Une section hug automatiquement son
> contenu : une fois tout le contenu posé, applique
> `container.resizeWithoutConstraints(W, H)` en dernier — ça tient et ça ne déplace pas
> les enfants. `layout.minSize` est un **plancher**, pas une cible : une maquette
> (parcours × états × supports) déborde souvent.

> ⚠️ **Ne consulte jamais le contenu visuel des itérations précédentes** — chaque
> itération repart de zéro.

## Étape 5 — Restitution

Screenshot de chaque conteneur, puis présente **la couverture d'abord** : les cases
conçues, les cases absentes et pourquoi. Une maquette se présente par sa couverture,
pas par sa vignette.

## Pour aller plus loin

Ces revues ne sont pas enchaînées ici — lance-les à la demande, toujours sur le
`nodeId` du **conteneur courant uniquement** (jamais la page entière : les itérations
précédentes n'ont pas à entrer dans le contexte).

| Revue | Rôle | Mission |
|---|---|---|
| **Recette fonctionnelle** — la revue qui compte sur une maquette | `product-manager` | `mission: recette`, `prd: shots/#X-name/PRD.md` |
| Conformité DS et hygiène de construction | `design-qa` | audit du conteneur |
| Utilisabilité | `ux-researcher` | audit heuristique, scénario principal du PRD |
| Copy | `ux-writer` | révision de la microcopy |

En `mono-agent`, ces rôles s'incarnent comme les autres — **mais dis-le en le
proposant** : l'auditeur est alors l'auteur, on perd l'indépendance du regard. Pour
une revue qui compte, basculer `agentic.mode` le temps de la revue est le bon
réflexe.

Les constats reviennent, **l'utilisateur arbitre**. Les retouches retenues se posent
**dans la même itération** — en délégation, renvoie-les au `product-designer` qui l'a
conçue via `SendMessage` (son contexte est intact). Si des violations DS sont
corrigées, `audit-conformance.js` est **relancé** pour reconfirmer le `ok: true`. Si
la recette révèle une case manquante, `COUVERTURE.md` est mis à jour avec la
maquette : la matrice et le livrable ne divergent jamais.
