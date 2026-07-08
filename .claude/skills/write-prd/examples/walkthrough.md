# Walkthrough — rédiger un PRD léger (cas « Sign Up »)

Exemple bout-en-bout appliqué au workflow Daily UI, appelé par `/shot:new`.

## 1. Élicitation

Contexte fourni par `/shot:new` : `#1`, `sign-up`, description « inscription mobile
avec email/mot de passe et SSO ». On complète juste les trous, par petites salves :

- **Objectif** → « L'utilisateur doit pouvoir créer un compte rapidement. »
- **Acteurs** → nouvel utilisateur non connecté.
- **Flux principal** → SSO en tête, sinon email + mot de passe.
- **Alternatives** → « déjà un compte → se connecter ».
- **Règles** → email valide requis ; mot de passe avec critères ; validation avant soumission.
- **États critiques** → erreur inline, chargement, succès (évoqués).
- **Hors-scope** → tout le visuel.

On s'arrête : plus de zone d'ombre fonctionnelle.

## 2. Rédaction (PRD léger obtenu)

```markdown
# PRD — #1 Sign Up

## Objectif
Permettre à un nouvel utilisateur de créer un compte rapidement.

## User stories
- En tant que nouvel utilisateur, je veux m'inscrire en un geste avec un compte existant (SSO) afin de démarrer sans saisie.
- En tant que nouvel utilisateur sans SSO, je veux créer un compte par email afin d'accéder à l'app.

## Fonctionnalités
### Inscription SSO
- Proposer la connexion via un compte tiers en premier.
### Inscription par email
- Saisir un email et un mot de passe.
- Retour de validation au fil de la saisie.
### Déjà inscrit
- Accéder à la connexion depuis l'écran d'inscription.

## Critères d'acceptation
- [ ] L'action de validation reste inactive tant que le formulaire est invalide.
- [ ] Une erreur s'affiche au niveau du champ email si l'email est invalide.
- [ ] Un état de chargement est visible pendant la soumission.
- [ ] Une confirmation est présentée en cas de succès.

## Hors scope
- Toute considération visuelle ou de design system
```

Une page, fonctionnel, chaque critère vérifiable.

## 3. Enchaînement

Le PRD est un **premier jet d'intention**. On ne fige pas les partis-pris
discutables (SSO d'abord ? un ou deux écrans ? consentement ?) : on enchaîne sur
`/benchmark`, qui les confronte à des références réelles et propose des
enrichissements fonctionnels, puis `/shot:iterate` pour designer.

---

### Variante générique (hors Daily UI)

Même méthode sans contexte `shots/` : on demande d'abord le **dossier de sortie**,
on élicite le besoin, et on écrit le même PRD léger à l'emplacement indiqué.
