# PRD — #1 Sign Up (v2)

> Mise en situation : **Klarity**, un outil SaaS de productivité (espace de travail
> collaboratif pour équipes : tâches et projets). Marque fictive créée pour le
> challenge. Plateformes : **Web et Mobile**, même parcours fonctionnel sur les deux.
>
> v2 : réécriture au standard « flux calibré ». Toutes les décisions structurantes
> du v1 sont conservées (parcours 6 étapes email + SSO + routage compte existant,
> consentement implicite CGU + marketing optionnel, vérification par code 6 chiffres,
> onboarding léger, Web + Mobile). L'apport v2 est le calibrage des **issues** et des
> **états** de chaque étape.

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
- En tant qu'**utilisateur interrompu** (erreur, code non reçu, fermeture), je veux
  pouvoir reprendre ou récupérer mon parcours afin de ne pas être bloqué ni obligé
  de tout recommencer.

## Fonctionnalités — flux calibré

Chaque étape déclare sa **capacité**, ses **issues** (succès → où ; échec / abandon →
quel état, quelle sortie) et ses **états** pertinents, formulés en capacités.

### Étape 1 — Accueil sign-up

- **Capacité** : l'utilisateur voit la proposition de valeur de Klarity, peut lancer
  une inscription par email, choisir une méthode SSO, ou basculer vers la connexion.
- **Issues** :
  - Succès (entrée email) → étape 2 (saisie de l'email).
  - Succès (SSO) → flux alternatif SSO.
  - Bascule → parcours de connexion (hors-scope, simple sortie).
- **États** :
  - Nominal : entrée email, méthodes SSO et accès connexion tous disponibles.
  - Erreur SSO (fournisseur indisponible / autorisation refusée) : l'utilisateur est
    informé de l'échec et l'écran d'accueil reste utilisable pour réessayer ou choisir
    une autre méthode.

### Étape 2 — Saisie de l'email (routeur)

- **Capacité** : l'utilisateur renseigne son email ; Klarity détermine si un compte
  existe déjà, pour router vers l'inscription ou la connexion.
- **Issues** :
  - Succès, email inconnu → étape 3 (création des identifiants).
  - Succès, email déjà associé à un compte → orientation vers la connexion (flux
    alternatif compte existant), sans recréer de compte.
  - Abandon → aucun compte créé ; l'utilisateur peut revenir à l'accueil.
- **États** :
  - Vide / invalide : la validation de l'étape reste inactive tant que l'email n'est
    pas d'un format valide.
  - Erreur de saisie : email mal formé → message actionnable au niveau du champ.
  - Chargement : pendant la vérification d'existence du compte, l'action est en cours
    et une double soumission est empêchée.
  - Erreur de vérification (échec technique de la détection) : l'utilisateur est
    informé et peut réessayer sans perdre l'email saisi.

### Étape 3 — Création des identifiants

- **Capacité** : l'utilisateur définit un mot de passe avec retour de conformité en
  temps réel. Le consentement légal (CGU) est acquis par l'action de création ; un
  consentement marketing distinct est proposé de façon optionnelle.
- **Issues** :
  - Succès → étape 4 (vérification de l'email).
  - Abandon → aucun compte activé ; retour possible en arrière sans perte de l'email.
- **États** :
  - Saisie : conformité du mot de passe indiquée en temps réel pendant la frappe.
  - Invalide : mot de passe non conforme → message actionnable au niveau du champ ;
    la validation de l'étape reste inactive tant que le mot de passe n'est pas conforme.
  - Marketing refusé : le refus du consentement marketing n'empêche pas de continuer.
  - Chargement : pendant la création du compte, l'action est en cours et une double
    soumission est empêchée.
  - Erreur serveur (création impossible) : l'utilisateur est informé sans perdre sa
    saisie et peut réessayer.

### Étape 4 — Vérification de l'email

- **Capacité** : l'utilisateur saisit un code à 6 chiffres reçu par email pour
  confirmer son adresse ; l'adresse est rappelée et le renvoi du code est possible
  après un délai.
- **Issues** :
  - Succès → étape 5 (onboarding léger).
  - Échec (code incorrect ou expiré) → l'utilisateur reste sur l'étape et peut ressaisir
    ou demander un nouveau code.
  - Abandon (l'utilisateur quitte pour consulter sa boîte mail ou ferme) → le compte
    reste en attente de vérification ; au retour, l'utilisateur reprend à cette étape
    (voir « À valider »).
- **États** :
  - Attente : l'adresse de destination est rappelée, la consultation de la boîte mail
    est facilitée, et la mention de vérifier les indésirables est présente.
  - Renvoi temporisé : le renvoi du code n'est possible qu'après un délai signalé à
    l'utilisateur (compte à rebours), pour éviter les envois répétés.
  - Invalide : code incorrect ou expiré → message actionnable ; le champ n'est pas vidé
    de force au point d'obliger à tout ressaisir.
  - Chargement : pendant la vérification du code, l'action est en cours et une double
    soumission est empêchée.
  - Échecs répétés : après un nombre d'essais infructueux, l'utilisateur est protégé
    contre le forçage sans être définitivement bloqué (voir « À valider »).

### Étape 5 — Onboarding léger

- **Capacité** : l'utilisateur fournit les informations minimales pour personnaliser
  son espace (son nom, puis le nom / objet de son espace de travail).
- **Issues** :
  - Succès → étape 6 (arrivée sur la plateforme).
  - Abandon en cours → le compte est déjà créé et vérifié ; au retour, l'utilisateur
    reprend l'onboarding là où il s'est arrêté sans re-vérifier son email.
- **États** :
  - Vide / invalide : la validation d'une sous-étape reste inactive tant que les
    informations minimales requises ne sont pas fournies.
  - Erreur de saisie : information requise manquante ou non valide → message
    actionnable au niveau du champ concerné.
  - Chargement : pendant l'enregistrement des informations et la préparation de
    l'espace, l'action est en cours.

### Étape 6 — Arrivée sur la plateforme

- **Capacité** : l'utilisateur atterrit sur un accueil nominatif de son espace
  Klarity, avec une première action mise en avant.
- **Issues** :
  - Succès (fin du parcours) → l'utilisateur est dans la plateforme, prêt à agir.
- **États** :
  - Premier usage (espace sans contenu) : l'accueil n'est pas un écran vide — il est
    nominatif et propose explicitement une première action de mise en route, plutôt
    qu'un tableau de bord générique et inerte.

### Flux alternatif — inscription par SSO

- L'utilisateur choisit un fournisseur tiers (ex. Google, Microsoft) dès l'accueil.
- **Issues** :
  - Succès → l'email étant déjà vérifié par le fournisseur, l'étape 4 (vérification par
    code) est ignorée ; l'utilisateur enchaîne sur l'onboarding léger (étape 5) puis
    l'arrivée (étape 6).
  - Échec / annulation (autorisation refusée, fenêtre fermée, fournisseur indisponible)
    → l'utilisateur revient à l'accueil, informé de l'échec, et peut réessayer ou
    poursuivre par email.

### Flux alternatif — compte déjà existant

- Si l'email saisi (étape 2) correspond à un compte existant, l'utilisateur est orienté
  vers la connexion plutôt que vers la création — l'orientation est explicite et
  actionnable, sans le laisser dans une impasse.

## Critères d'acceptation

- [ ] Depuis l'accueil, l'utilisateur peut lancer une inscription par email **ou** par SSO.
- [ ] Un accès vers la **connexion** est disponible sur l'écran d'accueil de sign-up.
- [ ] La saisie d'un email **déjà associé à un compte** oriente l'utilisateur vers la connexion, de façon explicite et actionnable.
- [ ] L'action de création de compte **vaut acceptation des CGU** (consentement implicite), sans case bloquante.
- [ ] Un éventuel **consentement marketing est distinct et optionnel** : le refuser n'empêche pas l'inscription.
- [ ] L'action de validation d'une étape **reste inactive** tant que les champs requis de l'étape ne sont pas valides.
- [ ] Une **erreur au niveau du champ** s'affiche pour un email invalide, un mot de passe non conforme, ou un code incorrect / expiré, avec un message indiquant comment corriger.
- [ ] Après une erreur de saisie ou serveur, **la saisie de l'utilisateur n'est pas perdue**.
- [ ] La conformité du **mot de passe** est indiquée en temps réel pendant la saisie.
- [ ] Chaque étape qui déclenche un traitement (vérification d'email, création de compte, vérification du code, préparation de l'espace) présente un **état de chargement** et **empêche la double soumission**.
- [ ] L'inscription par email **exige une vérification par code** avant d'accéder à la plateforme ; l'inscription par SSO en est dispensée.
- [ ] Sur l'écran de vérification, l'**adresse est rappelée** et la mention des indésirables est présente.
- [ ] Le **renvoi du code** n'est possible qu'après un **délai signalé** (compte à rebours) à l'utilisateur.
- [ ] Un **échec de SSO** (annulation, refus, indisponibilité) ramène l'utilisateur à un état utilisable pour réessayer ou poursuivre par email.
- [ ] L'onboarding ne demande que les informations **minimales** nécessaires à la personnalisation de l'espace.
- [ ] En fin de parcours, l'utilisateur arrive sur un **accueil nominatif** de son espace, à l'état **premier usage** (non vide), avec une première action proposée.
- [ ] Le parcours est **fonctionnellement identique sur Web et Mobile**.

## À valider (hypothèses en attente d'arbitrage)

Points de calibrage non tranchés par le v1, le benchmark ou le pattern. La v2 retient
l'option la plus standard ; à confirmer.

- **Politique d'échecs répétés du code de vérification.** Hypothèse retenue : après un
  nombre d'essais infructueux, l'utilisateur est temporisé (et non définitivement
  bloqué), avec message générique « code incorrect » sans révéler la cause exacte.
  Le seuil et la nature exacte de la protection (temporisation, nouveau code forcé,
  blocage) restent à décider.
- **Reprise après abandon de la vérification.** Hypothèse retenue : le compte reste en
  attente de vérification et l'utilisateur reprend à l'étape 4 à son retour. À confirmer
  qu'aucun redémarrage complet du parcours n'est souhaité, et jusqu'à quand ce compte
  en attente reste valable.

## Hors scope

- Toute considération visuelle ou de design system (layout, couleurs, composants, tokens).
- Le parcours de **connexion** complet (login) et la **récupération de mot de passe** : seul le renvoi vers la connexion est couvert.
- La gestion avancée des **équipes / invitations de membres** au-delà de la création de l'espace initial.
- L'authentification à deux facteurs et la sécurité au-delà de la vérification d'email.
- Les règles back-end (stockage, chiffrement, politique exacte de mot de passe, anti-fraude, durée de vie du compte en attente et du code).
- La conception du produit Klarity au-delà de l'écran d'arrivée post-inscription.
