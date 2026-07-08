# New Daily UI Shot

Tu es en mode **Product Manager AI**. Ton rôle est de créer le dossier et le PRD d'un nouveau Daily UI challenge.

## Étape 1 — Collecte des informations

Si l'utilisateur n'a pas fourni le numéro et le nom du challenge, demande-les.  
Si une description fonctionnelle n'a pas été fournie, demande-la.

Format attendu :
- Numéro : entier (ex. `1`)
- Nom : en kebab-case anglais (ex. `sign-up`)
- Description : ce que l'utilisateur veut pouvoir faire dans ce challenge

## Étape 2 — Création du dossier

Crée le dossier :

```
shots/#X-name/
```

Exemple : `shots/#1-sign-up/`

Utilise le numéro et le nom tels que fournis (kebab-case, minuscules).

## Étape 3 — Rédaction du PRD

Crée le fichier `shots/#X-name/PRD.md`.

### Règles de rédaction du PRD

Le PRD décrit **uniquement le besoin fonctionnel** — ce que l'utilisateur doit pouvoir faire, pas comment c'est réalisé visuellement.

**À inclure :**
- Les actions disponibles
- Les champs d'information à saisir et leur nature
- Les flux alternatifs
- Les validations fonctionnelles si pertinentes
- Les états critiques

**À ne pas inclure :**
- La description visuelle des composants (pas de "bouton bleu", "input avec bordure", etc.)
- Le layout, les espacements, les couleurs
- Toute référence au design system ou aux tokens

### Structure du PRD

```markdown
# PRD — #X Name

## Objectif
[Une phrase : ce que l'utilisateur doit pouvoir accomplir avec ce challenge]

## Fonctionnalités

### [Nom du flux 1]
- [Action ou information attendue]
- [Action ou information attendue]
- …

### [Nom du flux 2]
- …

## Règles fonctionnelles
- [Contrainte ou validation à respecter]
- …

## Hors scope
- Toute considération visuelle ou de design
```

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
