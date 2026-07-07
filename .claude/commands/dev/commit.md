# Dev — Commit & Push

Ton rôle est de committer et pousser l'état actuel du dépôt, en toute sécurité.

## Étape 1 — Vérifier la branche courante

```bash
git rev-parse --abbrev-ref HEAD
```

- **Si la branche est `main`** → **ne jamais committer directement dessus.** Passe à l'étape 2.
- **Sinon** → passe directement à l'étape 3.

## Étape 2 — Proposer une branche (seulement si sur `main`)

Regarde les fichiers modifiés pour déduire un nom de branche pertinent :

```bash
git status --short
```

Les noms de branche suivent la logique des **shots Daily UI** :

- **Challenge Daily UI** (les changements concernent un shot numéroté, ex. `shots/#1-sign-up/`) → `daily-<numéro>` (ex. `daily-1`).
- **Hors challenge Daily UI** (travail sur un shot nommé, ex. une sidebar, un composant) → `daily-<nom-du-shot>-<numéro>`, où le numéro indique s'il y a déjà eu un shot similaire (ex. `daily-sidebar-2` si `daily-sidebar` existe déjà).

Pour choisir le numéro d'un shot nommé, vérifie les branches existantes :

```bash
git branch --all --list "daily-<nom>*"
```

Prends le numéro suivant disponible (ou `1` s'il n'y en a pas encore).

**Propose le nom à l'utilisateur et attends sa validation** (il peut proposer un autre nom). Puis crée la branche :

```bash
git checkout -b <nom-validé>
```

## Étape 3 — Add, commit, push

```bash
git add .
```

Rédige un message de commit clair (en français, une ligne résumant les changements) à partir de `git status` / `git diff --staged`.

Puis :

```bash
git commit -m "<message>"
```

Enfin, pousse en configurant l'upstream si la branche est nouvelle :

```bash
git push -u origin HEAD
```

## Étape 4 — Confirmation

Confirme à l'utilisateur :
- La branche sur laquelle le commit a été poussé
- Le message de commit utilisé
- Le résultat du push (succès / éventuelle erreur à traiter)
