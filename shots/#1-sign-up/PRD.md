# PRD — #1 Sign Up

## Objectif
Permettre à l'utilisateur de créer un compte via un fournisseur d'identité tiers ou manuellement, avec le minimum de friction, en acceptant les termes et conditions.

## Fonctionnalités

### Inscription via fournisseur tiers (méthode prioritaire)
- S'inscrire avec Apple
- S'inscrire avec Google
- Ces méthodes sont présentées **en premier**, avant l'inscription manuelle.
- Après un SSO réussi, aucun champ supplémentaire n'est redemandé (l'identité et l'email sont fournis par le fournisseur).

### Inscription manuelle (méthode de repli)
- Présentée après les options SSO.
- Formulaire unique regroupant tous les champs :
  - Saisir un prénom
  - Saisir un nom
  - Saisir une adresse email
  - Saisir un mot de passe

### Consentement
- Acceptation des termes et conditions par **consentement implicite** : un texte « En vous inscrivant, vous acceptez les termes et conditions » accompagne le bouton de validation (pas de case à cocher).
- Le consentement s'applique quelle que soit la méthode d'inscription choisie.

### Basculer vers la connexion
- Un accès « J'ai déjà un compte → Se connecter » est disponible depuis l'écran d'inscription.

## Règles fonctionnelles
- L'email doit être au format valide.
- Le mot de passe doit respecter un niveau de sécurité minimal, avec des **critères exposés à l'utilisateur** (ex. longueur minimale, présence d'un chiffre, casse) et **validés en temps réel** pendant la saisie.
- Le bouton de validation reste **désactivé** tant que les champs requis ne sont pas valides.
- Les erreurs sont affichées **en inline, sous le champ concerné** (email invalide, mot de passe non conforme), et non comme une règle abstraite.

## Format
- Page au format mobile

## Hors scope
- Toute considération visuelle ou de design
