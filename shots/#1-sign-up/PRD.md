# PRD — #1 Sign Up

> Mise en situation : **Klarity**, un outil SaaS de productivité (espace de travail
> collaboratif pour équipes : tâches et projets). Marque fictive créée pour le
> challenge. Plateformes : **Web et Mobile**, même parcours fonctionnel sur les deux.

## Objectif

Permettre à un nouvel utilisateur de créer son compte Klarity et d'arriver sur son
espace de travail prêt à l'emploi, avec le moins de friction possible, depuis
l'écran d'accueil de sign-up jusqu'à la première action dans la plateforme.

## User stories

- En tant que **nouvel utilisateur**, je veux créer un compte en quelques étapes
  guidées afin de commencer à utiliser Klarity sans effort ni blocage.
- En tant que **nouvel utilisateur pressé**, je veux m'inscrire via un compte tiers
  (SSO) afin d'éviter de saisir et retenir un mot de passe.
- En tant que **personne déjà inscrite** qui se trompe de parcours, je veux être
  redirigée vers la connexion afin de ne pas recréer un compte inutilement.

## Fonctionnalités

### Flux principal — inscription par email

1. **Accueil sign-up** — l'utilisateur voit la proposition de valeur de Klarity, une
   entrée par email, les méthodes SSO, et un accès à la connexion.
2. **Saisie de l'email** — l'utilisateur renseigne son email ; Klarity détermine si
   un compte existe déjà pour router vers l'inscription ou la connexion.
3. **Création des identifiants** — l'utilisateur définit un mot de passe (avec
   retour de validité en temps réel). Le consentement légal est acquis par l'action
   de création ; un consentement marketing distinct est proposé de façon optionnelle.
4. **Vérification de l'email** — l'utilisateur saisit un code à 6 chiffres reçu par
   email pour confirmer son adresse. Le renvoi du code est possible après un délai.
5. **Onboarding léger** — l'utilisateur fournit les informations minimales pour
   personnaliser son espace (son nom, puis le nom/objet de son espace de travail).
6. **Arrivée sur la plateforme** — l'utilisateur atterrit sur un accueil nominatif de
   son espace Klarity, avec une première action mise en avant.

### Flux alternatif — inscription par SSO

- L'utilisateur choisit un fournisseur tiers (ex. Google, Microsoft) dès l'accueil.
- L'email étant déjà vérifié par le fournisseur, l'étape de vérification par code est
  ignorée ; l'utilisateur enchaîne sur l'onboarding léger puis l'arrivée.

### Flux alternatif — compte déjà existant

- Si l'email saisi correspond à un compte existant, l'utilisateur est orienté vers la
  connexion plutôt que vers la création.

### États critiques (évoqués)

- **Erreur de saisie** : email mal formé, mot de passe non conforme, code de
  vérification invalide ou expiré → message au niveau du champ concerné.
- **Chargement** : envoi de l'email, vérification du code, création du compte.
- **Renvoi de code** : possibilité de redemander un code après expiration du délai.

## Critères d'acceptation

- [ ] Depuis l'accueil, l'utilisateur peut lancer une inscription par email **ou** par SSO.
- [ ] Un lien/accès vers la **connexion** est disponible sur l'écran d'accueil de sign-up.
- [ ] La saisie d'un email **déjà associé à un compte** oriente l'utilisateur vers la connexion.
- [ ] L'action de création de compte **vaut acceptation des CGU** (consentement implicite), sans case bloquante.
- [ ] Un éventuel **consentement marketing est distinct et optionnel** : le refuser n'empêche pas l'inscription.
- [ ] L'action de validation d'une étape **reste inactive** tant que les champs requis de l'étape ne sont pas valides.
- [ ] Une **erreur au niveau du champ** s'affiche pour un email invalide, un mot de passe non conforme, ou un code incorrect/expiré.
- [ ] La conformité du **mot de passe** est indiquée en temps réel pendant la saisie.
- [ ] L'inscription par email **exige une vérification par code** avant d'accéder à la plateforme ; l'inscription par SSO en est dispensée.
- [ ] Le **renvoi du code** est possible après un délai, signalé à l'utilisateur.
- [ ] L'onboarding ne demande que les informations **minimales** nécessaires à la personnalisation de l'espace.
- [ ] En fin de parcours, l'utilisateur arrive sur un **accueil nominatif** de son espace, avec une première action proposée.
- [ ] Le parcours est **fonctionnellement identique sur Web et Mobile**.

## Hors scope

- Toute considération visuelle ou de design system (layout, couleurs, composants, tokens).
- Le parcours de **connexion** complet (login) et la **récupération de mot de passe** : seul le renvoi vers la connexion est couvert.
- La gestion avancée des **équipes/invitations de membres** au-delà de la création de l'espace initial.
- L'authentification à deux facteurs et la sécurité au-delà de la vérification d'email.
- Les règles back-end (stockage, chiffrement, politique exacte de mot de passe, anti-fraude).
- La conception du produit Klarity au-delà de l'écran d'arrivée post-inscription.
