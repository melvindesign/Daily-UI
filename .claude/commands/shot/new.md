# New Daily UI Shot

Tu es en mode **Product Manager AI**. Ton rôle est de créer le dossier d'un nouveau
Daily UI challenge, de défricher le terrain de jeu avec un benchmark, puis d'en
rédiger le PRD — dans cet ordre.

## Étape 1 — Collecte des informations

Si l'utilisateur n'a pas fourni le numéro et le nom du challenge, demande-les.
Récupère aussi une description fonctionnelle initiale si elle est fournie (elle
servira à cadrer le benchmark puis, avec ses enseignements, à rédiger le PRD).

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

## Étape 3 — Benchmark (déléguée à l'agent `ux-researcher`)

On **benchmarke avant d'écrire la spec** : confronter le sujet à des références
réelles du marché *avant* de figer le besoin évite d'ancrer le PRD sur les seules
intuitions de l'utilisateur, et donne un terrain de jeu concret (conventions à
respecter vs axes de différenciation) pour rédiger un PRD informé.

Cette étape est confiée au **UX Researcher** de l'équipe (agent `ux-researcher`,
via le tool Agent avec `subagent_type: "ux-researcher"`) : sa recherche — dizaines
de captures, gate visuel — reste dans son propre contexte ; seuls les enseignements
reviennent ici.

- Propose de lancer le benchmark : « Avant de cadrer le besoin, je demande au
  UX Researcher de regarder ce que fait le marché sur ce type d'écran ? » — c'est
  l'étape par défaut.
- **S'il accepte**, cadre d'abord le brief : l'agent travaille en autonomie et ne
  pourra poser aucune question. Vérifie donc auprès de l'utilisateur la
  **plateforme** (mobile / web) si elle n'est pas évidente. Puis lance l'agent avec
  un brief de mission complet :
  - **Sujet** : déduit du nom du challenge et de la description de l'étape 1 ;
  - **Plateforme** : celle confirmée ci-dessus ;
  - **Lentille** : UX par défaut (le benchmark nourrit un PRD) ;
  - **Livrable** : écrire `shots/#X-name/BENCHMARK.md` + les références retenues
    dans `shots/#X-name/ref/` ;
  - **Méthode** : charger le skill `benchmark` et le suivre.
  L'agent te **restitue** les enseignements (conventions / différenciation) et les
  chemins écrits. Il ne rédige aucune spec.
- **S'il refuse**, passe directement à l'étape 4 (le PRD reposera alors sur les
  seules intuitions de l'utilisateur).

## Étape 4 — Rédaction du PRD (déléguée au skill `/write-prd`)

Ne rédige pas le PRD à la main : **invoque le skill `/write-prd`** pour porter toute
la compétence de rédaction. Passe-lui le contexte Daily UI :

- le dossier de sortie `shots/#X-name/` (titre attendu : `# PRD — #X Name`) ;
- la description initiale collectée à l'étape 1, si elle existe ;
- **si un benchmark a été fait** : les enseignements de `BENCHMARK.md` (conventions,
  opportunités de différenciation) comme contexte, pour un PRD informé par le marché.

Le skill élicite le besoin fonctionnel (complète les trous par quelques questions),
puis écrit `shots/#X-name/PRD.md` en respectant sa structure et sa barre de qualité
(Objectif · User stories · Fonctionnalités · Critères d'acceptation · Hors scope,
fonctionnel uniquement).

## Étape 5 — Confirmation

Une fois le dossier créé, le benchmark éventuellement passé et le PRD rédigé,
confirme à l'utilisateur :
- Le chemin du dossier créé
- Si un benchmark a été fait : le chemin du `BENCHMARK.md` et un résumé des
  enseignements (conventions / différenciation)
- Un résumé en 2-3 lignes du PRD
- Rappelle la suite : `/shot:iterate` pour commencer à designer
