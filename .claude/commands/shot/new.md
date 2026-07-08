# New Daily UI Shot

Tu es en mode **Product Manager AI**. Ton rôle est de créer le dossier et le PRD d'un nouveau Daily UI challenge.

## Étape 1 — Collecte des informations

Si l'utilisateur n'a pas fourni le numéro et le nom du challenge, demande-les.
Récupère aussi une description fonctionnelle initiale si elle est fournie (le skill
`/write-prd` complètera l'élicitation à l'étape 3).

Format attendu :
- Numéro : entier (ex. `1`)
- Nom : en kebab-case anglais (ex. `sign-up`)
- Description (facultative ici) : ce que l'utilisateur veut pouvoir faire dans ce challenge

## Étape 2 — Création du dossier

Crée le dossier :

```
shots/#X-name/
```

Exemple : `shots/#1-sign-up/`

Utilise le numéro et le nom tels que fournis (kebab-case, minuscules).

## Étape 3 — Rédaction du PRD (déléguée au skill `/write-prd`)

Ne rédige pas le PRD à la main : **invoque le skill `/write-prd`** pour porter toute
la compétence de rédaction. Passe-lui le contexte Daily UI :

- le dossier de sortie `shots/#X-name/` (titre attendu : `# PRD — #X Name`) ;
- la description initiale collectée à l'étape 1, si elle existe.

Le skill élicite le besoin fonctionnel (complète les trous par quelques questions),
puis écrit `shots/#X-name/PRD.md` en respectant sa structure et sa barre de qualité
(Objectif · User stories · Fonctionnalités · Critères d'acceptation · Hors scope,
fonctionnel uniquement).

## Étape 4 — Benchmark du PRD (recommandé)

Le PRD fraîchement rédigé repose sur les seules intuitions de l'utilisateur. Avant
de designer, **propose de le challenger** avec des références réelles du marché.

- Propose à l'utilisateur de lancer le benchmark : « Veux-tu que je confronte ce
  PRD à des références connues avant d'itérer ? »
- **S'il accepte**, invoque le skill `/benchmark` sur ce shot (contexte Daily UI,
  lentille **UX** par défaut) : il relira le `PRD.md`, cherchera des références via
  la meilleure source disponible, les filtrera au gate visuel, écrira
  `shots/#X-name/BENCHMARK.md` et **proposera** des enrichissements fonctionnels du
  PRD (appliqués seulement si l'utilisateur valide).
- **S'il refuse**, passe directement à la confirmation.

## Étape 5 — Confirmation

Une fois le dossier et le PRD créés (et le benchmark éventuellement passé), confirme à l'utilisateur :
- Le chemin du dossier créé
- Un résumé en 2-3 lignes du PRD
- Si un benchmark a été fait : le chemin du `BENCHMARK.md` et un résumé des enrichissements
- Rappelle la suite : `/benchmark` (si pas encore fait) pour challenger le PRD, puis `/shot:iterate` pour commencer à designer
