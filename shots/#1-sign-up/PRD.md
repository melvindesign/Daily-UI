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
- **Découpage progressif (progressive disclosure)** — ne jamais tout demander sur un seul écran :
  - **Écran d'entrée** : options SSO + saisie de l'**adresse email seule** (+ bouton de continuation).
  - **Écran mot de passe dédié** : saisie du mot de passe avec ses critères validés en temps réel (voir Règles fonctionnelles).
- **Prénom et nom** ne sont **pas exigés** sur le parcours d'inscription : soit différés après création du compte, soit omis. La méthode manuelle se limite à **email + mot de passe**.
- Ce découpage réduit la friction perçue et suit la pratique dominante des références (email-first + écran mot de passe séparé).

### Consentement
- Acceptation des termes et conditions par **consentement implicite** (parti pris assumé) : un texte « En vous inscrivant, vous acceptez les termes et conditions » accompagne le bouton de validation, **sans case à cocher**.
- Alternative connue écartée : case à cocher explicite (pattern plus lourd, ex. YNAB). Le choix implicite est retenu pour minimiser la friction.
- Le consentement s'applique quelle que soit la méthode d'inscription choisie.

### Basculer vers la connexion
- Un accès « J'ai déjà un compte → Se connecter » est disponible depuis l'écran d'inscription.

## Règles fonctionnelles
- L'email doit être au format valide.
- Le mot de passe doit respecter un niveau de sécurité minimal, avec des **critères exposés à l'utilisateur** (ex. longueur minimale, présence d'un chiffre, casse).
  - Ces critères se présentent sous forme de **checklist d'items** (un par critère), qui **passent à l'état validé (coche) en temps réel** au fur et à mesure de la saisie — pas un simple texte statique ni une erreur affichée après coup.
- Le bouton de validation reste **désactivé** tant que les champs requis ne sont pas valides.
- Les erreurs sont affichées **en inline, sous le champ concerné** (email invalide, mot de passe non conforme), et non comme une règle abstraite.

## États du parcours
- **Chargement** : pendant la soumission (SSO ou manuelle), le bouton de validation passe en état de chargement (indicateur de progression), action bloquée le temps de la requête.
- **Succès** : après création réussie du compte, un état de confirmation clôt le parcours.
- **Erreur de soumission** : échec côté serveur (ex. email déjà utilisé) affiché de façon lisible, sans perdre la saisie.

## Format
- Page au format mobile

## Hors scope
- Toute considération visuelle ou de design
