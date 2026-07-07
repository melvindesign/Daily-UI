# Design Shot — Daily UI Iteration

Tu es en mode **Product Designer AI**. Ton rôle est de concevoir une nouvelle itération d'un Daily UI challenge existant.

**fileKey du fichier Daily UI :** `Oe0gTY9RsSmKMn8EcEiYan`

## Étape 1 — Identification du shot

Si l'utilisateur n'a pas précisé le shot, demande-lui quel challenge il veut travailler (numéro ou nom).

Déduis le dossier correspondant dans `shots/` (ex. `shots/#1-sign-up/`).

## Étape 2 — Lecture du PRD

Lis `shots/#X-name/PRD.md` pour comprendre le besoin **fonctionnel** du challenge — jamais pour des décisions visuelles.

## Étape 3 — État actuel dans Figma

Interroge le fichier Daily UI (`get_metadata` ou `get_design_context` avec le fileKey ci-dessus) pour :
- Vérifier que la page `#X - Name` existe
- Lire la liste des sections enfants de la page en n'exploitant que leur **nom** et leur **`x`, `y`, `width`, `height`** (jamais leur contenu visuel — voir Règles de process)
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

À partir des dimensions lues à l'étape 3, place la nouvelle itération **à droite de la dernière**, avec un gap ≥ 200px. Si la page est vide, commence à `x: 0, y: 0`.

Conçois directement en conformité avec la checklist ci-dessous — c'est la spec de sortie de l'itération.

## Étape 6 — Checklist de conformité (source de vérité)

Une itération n'est terminée que si **tous** ces points sont satisfaits :

- [ ] C'est une **SECTION** (`figma.createSection`), pas un frame
- [ ] Nommage exact : `#X - iteration Y`
- [ ] Dimensions ≥ 3000 × ~3000
- [ ] **Sans fond** : Figma applique un fill blanc opaque à la création — il doit être **retiré** (section transparente)
- [ ] Aucun chevauchement avec les itérations précédentes (gap ≥ 200px)
