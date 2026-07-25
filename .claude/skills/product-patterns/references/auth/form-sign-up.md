# Formulaire & Sign-up

S'applique à **tout formulaire de saisie** (les règles « Formulaire » resservent dans checkout, onboarding, settings, contact) avec une section dédiée au **sign-up** (création de compte) et, par extension, au login.

## Job de l'écran

- **Formulaire** : obtenir des informations exactes avec le minimum d'effort et d'erreurs. Succès = soumission réussie au premier essai.
- **Sign-up** : convertir un visiteur déjà décidé en compte créé. Le visiteur a pris sa décision *avant* d'arriver ici — l'écran ne doit plus vendre, il doit ne pas faire échouer. Succès = compte créé sans abandon ni erreur.

## Anatomie canonique

Ordre vertical, **colonne unique** :

1. **Titre** orienté valeur ou action (« Créer votre compte »), pas décoratif.
2. **Authentification alternative** (social / SSO / passwordless) si proposée — en haut, avant les champs, séparée par un « ou ».
3. **Champs** — le minimum vital (souvent email + mot de passe ; le nom seulement si le produit en a besoin dès maintenant).
4. **Consentements légaux** si requis (case non pré-cochée).
5. **Action primaire** pleine largeur, libellé spécifique.
6. **Bascule vers le login** (« Déjà un compte ? Se connecter ») — beaucoup d'utilisateurs déjà inscrits atterrissent sur le sign-up par erreur.

## Règles

### MUST — Formulaire (tout contexte)

- **Colonne unique.** Les layouts multi-colonnes cassent le flux de lecture vertical et font sauter des champs.
- **Label au-dessus du champ**, visible en permanence. Le couple label+champ se lit en une seule fixation oculaire → complétion plus rapide, moins d'erreurs que les labels à gauche.
- **Jamais de placeholder comme label.** Il disparaît à la saisie : un champ à moitié rempli devient illisible et invérifiable.
- **Chaque champ justifie son existence.** Tout champ non indispensable maintenant est supprimé ou différé (divulgation progressive). Réduire le nombre de champs est le levier de conversion n°1 documenté.
- **Statut requis/optionnel jamais ambigu.** Marquer explicitement les champs optionnels (« (optionnel) ») ; si le formulaire mélange beaucoup des deux, marquer les deux statuts. Ne jamais laisser l'utilisateur deviner.
- **Validation inline au blur** (à la sortie du champ) : ni à la première frappe (on ne corrige pas quelqu'un qui n'a pas fini d'écrire), ni seulement à la soumission. L'erreur apparaît **sous le champ concerné**, le champ est marqué visuellement, et le message dit **comment corriger** — pas seulement que c'est faux.
- **Ne jamais vider les champs après une erreur.** L'utilisateur corrige, il ne recommence pas.
- **Action primaire au libellé spécifique** (« Créer mon compte », « Payer 12 € »), jamais « Soumettre » / « Valider ».
- **Largeur de champ ≈ longueur attendue de la réponse** (un code postal n'est pas large comme un email) : la largeur est une affordance.

### MUST — Sign-up / login

- **Toggle afficher/masquer le mot de passe.** C'est lui (et non un champ de confirmation) qui protège des fautes de frappe.
- **Exigences de mot de passe affichées avant la saisie**, près du champ, et validées en temps réel (critères cochés au fur et à mesure) — jamais révélées seulement après un échec.
- **Erreur « email déjà utilisé » actionnable** : proposer directement le lien vers la connexion et la récupération de mot de passe.
- **Après soumission réussie, dire ce qui se passe ensuite** (email de vérification envoyé, code à saisir…) : écran ou état dédié, avec l'adresse affichée et une action de renvoi.

### SHOULD

- **Auth sociale : 3 options maximum**, choisies pour la cible, placées avant les champs. Une majorité d'utilisateurs préfère éviter de créer un mot de passe ; trop d'options recrée du choix paralysant.
- **Pas de champ « confirmer le mot de passe ».** Il double l'effort pour un bénéfice couvert par le toggle d'affichage (cas documenté : +56 % de conversion à sa suppression).
- **Préférer longueur/passphrase aux règles de complexité arbitraires** (majuscule + chiffre + symbole) : plus mémorable, souvent plus sûr.
- **Envisager le passwordless** (magic link, passkey, code par email) si le produit s'y prête : supprime la classe d'erreurs « mauvais mot de passe ».
- **Une information par ligne / par question.** Regrouper prénom+nom est la seule exception courante acceptable.
- **Bouton de soumission toujours actif** (plutôt que désactivé tant que le formulaire est invalide) : un clic sur bouton actif déclenche les messages d'erreur ; un bouton mort n'explique rien.

### AVOID (anti-patterns)

- Placeholder utilisé comme label.
- Multi-colonnes dans un formulaire.
- Validation agressive à la première frappe.
- Champ de confirmation d'email ou de mot de passe.
- Captcha visible en première intention (le réserver aux soumissions suspectes).
- Demander des données « pour plus tard » (téléphone, entreprise, date de naissance sans justification immédiate).
- Vider le formulaire après une erreur serveur.
- Règles de mot de passe révélées uniquement par messages d'erreur successifs.

## États critiques

- **Default** : focus visible et ordre de tabulation logique.
- **Invalid (inline)** : champ marqué + message sous le champ, spécifique et actionnable ; l'erreur disparaît dès que corrigée.
- **Invalid (global/serveur)** : message en tête ou près de l'action, qui ne fait pas perdre la saisie ; cas « compte existant » → liens login / reset.
- **Submitting** : indicateur de chargement sur l'action primaire, double soumission impossible.
- **Succès** : transition explicite vers l'étape suivante (vérification, onboarding) — jamais un simple retour silencieux.

## Adaptations mobile

- **Clavier adapté à chaque champ** (email, numérique, téléphone) et attributs d'autocomplétion/autofill activés — l'autofill est le meilleur réducteur de friction sur mobile.
- Champs et action primaire **pleine largeur** ; action atteignable au pouce.
- Jamais de champs côte à côte.
- L'auth sociale / passwordless pèse encore plus lourd : taper un mot de passe robuste sur clavier mobile est le pire des cas.

## Checklist de revue

- [ ] Colonne unique, labels au-dessus, visibles en permanence
- [ ] Aucun champ non indispensable maintenant ; statut requis/optionnel explicite
- [ ] Validation inline au blur, messages spécifiques et actionnables sous le champ
- [ ] Toggle afficher/masquer ; exigences de mot de passe visibles avant saisie
- [ ] Pas de champ de confirmation (email ou mot de passe)
- [ ] CTA spécifique ; bascule login présente ; erreur « compte existant » actionnable
- [ ] États conçus : invalid (inline + serveur), submitting, succès
- [ ] Mobile : claviers adaptés, autofill, pleine largeur

## Sources

- Baymard Institute — Form Design: 6 Best Practices for Better E-Commerce UI — https://baymard.com/learn/form-design
- Form UX best practices: what the research actually says — https://fomr.io/blog/form-ux-best-practices
- Erik Kennedy — 15 Tips for Better Signup / Login UX — https://www.learnui.design/blog/tips-signup-login-ux.html
- Authgear — Login & Signup UX: The 2025 Guide to Best Practices — https://www.authgear.com/post/login-signup-ux-guide/
- UXD World — 12 Best Practices for Sign-Up and Login Page Design — https://uxdworld.com/12-best-practices-for-sign-up-and-login-page-design/
