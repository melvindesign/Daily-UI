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

## Étape 5 — Conception

Charge le skill `/stellar-figma-use`.

### Règles de process (critiques)

- **Ne jamais consulter le contenu visuel des itérations précédentes** — uniquement leur position et dimensions (lues à l'étape 3).
- Chaque itération **repart de zéro** visuellement.

### Placement

À partir des dimensions lues à l'étape 3, place la nouvelle **section** d'itération sans chevauchement avec la précédente, avec un gap ≥ 200px. Si la page est vide, commence à `x: 0, y: 0`.

> ⚠️ **Coordonnées d'un enfant de SECTION = RELATIVES à la section, PAS absolues.**
> Le piège récurrent : après `section.appendChild(frame)`, si tu fais `frame.y = <valeur absolue de la page>` (ex. la même valeur que `section.y`, genre `21907`), Figma l'interprète comme un **offset depuis le coin haut-gauche de la section** → la frame part très loin (des milliers de px plus bas). 
> **Règle :** positionne toujours l'enfant avec un **petit offset relatif** (ex. `frame.x = 100 ; frame.y = 100`). Ne réutilise jamais la position absolue de la section pour l'enfant.

> ⚠️ **Dimensionne la section EN DERNIER.** Une section **hug automatiquement son contenu** : si tu la crées en 3200×3200 puis ajoutes des enfants, elle se re-dimensionne à leur bounding box (souvent < 3000 → checklist non respectée). Donc, **après avoir placé tout le contenu**, applique `section.resizeWithoutConstraints(3200, 3200)` en dernier — ça tient et ça ne déplace pas les enfants.

Conçois directement en conformité avec la checklist ci-dessous — c'est la spec de sortie de l'itération.

## Étape 6 — Checklist de conformité (source de vérité)

Une itération n'est terminée que si **tous** ces points sont satisfaits :

- [ ] C'est une **SECTION** (`figma.createSection`), pas un frame
- [ ] Nommage exact : `#X - iteration Y`
- [ ] Dimensions ≥ 3000 × ~3000
- [ ] **Sans fond** : Figma applique un fill blanc opaque à la création — il doit être **retiré** (section transparente)
- [ ] Aucun chevauchement avec les itérations précédentes (gap ≥ 200px)
