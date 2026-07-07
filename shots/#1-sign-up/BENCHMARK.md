# Benchmark — #1 Sign Up

## Références analysées
- [Viator — Creating an account](https://mobbin.com/screens/3b56a723-0180-46e4-8e48-846c964edac3) — `ref/01-viator-welcome.webp` — écran d'entrée unifié : un seul champ email + un CTA « Log in or Sign up » (pas de distinction connexion/inscription), puis « Or continue with » Google/Facebook/Apple.
- [Brilliant — Creating account](https://mobbin.com/screens/d19406b0-6264-4509-b17b-62829118d429) — `ref/02-brilliant-sso-landing.webp` — landing **SSO-first** : Apple + Google mis en avant, puis « Continue with email » en dernier recours. Lien « Existing user? Sign in » séparé.
- [Me+ — Creating an account](https://mobbin.com/screens/88ed6be5-32ab-47bb-b4ae-f8a1f4147395) — `ref/03-me-plus-email-form.webp` — formulaire email minimal : Name / Email / Password (8+ characters annoncé dans le placeholder), CTA « Next » **désactivé** tant que le formulaire est incomplet.
- [Skip — Creating an account](https://mobbin.com/screens/32f32c8b-dc43-475b-a7e6-34a57ec0bc8c) — `ref/04-skip-signup-consent.webp` — consentement **implicite** : « By signing up… you agree with the Terms & Privacy » sous le bouton, pas de case à cocher. Un seul champ nom complet.
- [Tubi — Creating an account](https://mobbin.com/screens/908859ef-659d-448f-bbc6-3e34a018276d) — `ref/05-tubi-inline-error.webp` — gestion d'erreur **inline** par champ (« Age is invalid » en rouge sous le champ concerné), CTA désactivé, consentement en tête de formulaire.
- [eBay — Onboarding](https://mobbin.com/screens/83227de3-b029-436a-96f9-e23194d58826) — `ref/06-ebay-create-password.webp` — flux **découpé en étapes** : identité (email/prénom/nom) puis mot de passe sur un écran séparé, avec consentement affiché juste avant la création.
- [Zopa Bank — Create a password](https://mobbin.com/screens/307ec048-1347-4840-b8bd-2b5b24f2979f) — `ref/07-zopa-password-requirements.webp` — **checklist de critères** de mot de passe cochés en temps réel (8+, chiffre, minuscule, majuscule, caractère spécial) + message d'erreur si non conforme + barre de progression du parcours.
- [Vrbo — Create a password](https://mobbin.com/screens/649a7384-bc30-4e92-84b7-e5823beeda67) — `ref/08-vrbo-password-strength.webp` — **jauge de force** de mot de passe (Weak → Strong) + critères listés + conseil « éviter votre nom, email, mots de passe déjà utilisés ».

## Enseignements fonctionnels

- **Ordre des méthodes : SSO d'abord.** Brilliant, Viator et la plupart des refs placent Apple/Google **en haut**, l'email en second. Le PRD liste les deux méthodes sans priorité → réduire la friction en poussant le SSO en premier.
- **Le SSO devrait suffire seul.** Aucune référence ne redemande prénom/nom/mot de passe après un Apple/Google réussi (l'IdP les fournit). Le PRD impose l'acceptation des T&C « quelle que soit la méthode » — c'est correct, mais tout le reste (prénom, nom, mot de passe) ne doit **pas** être redemandé en SSO.
- **Consentement : implicite plutôt que case obligatoire.** Skip, Tubi, eBay, Brilliant utilisent un texte « En vous inscrivant, vous acceptez… » sous le CTA, **sans checkbox**. Le PRD impose une case à cocher obligatoire → c'est un choix plus friction-lourd que le standard du marché (à assumer ou à assouplir).
- **CTA désactivé tant que le formulaire est invalide.** Me+ et Tubi désactivent le bouton jusqu'à complétion valide → feedback d'état absent du PRD.
- **Validation mot de passe visible et temps réel.** Zopa et Vrbo affichent les critères (longueur, casse, chiffre, caractère spécial) **cochés au fur et à mesure**, parfois une jauge de force. Le PRD dit seulement « niveau de sécurité minimal » sans exposer les règles à l'utilisateur.
- **Erreurs inline par champ.** Tubi affiche l'erreur sous le champ fautif, pas en haut de page → à préciser dans le PRD (aujourd'hui muet sur l'emplacement/format des erreurs).
- **Découpage progressif possible.** eBay répartit identité puis mot de passe sur deux écrans (progressive disclosure). Le PRD suppose un formulaire unique — les deux sont valables, à trancher.
- **Champ « nom » souvent unique.** Viator/Skip demandent un seul champ nom (ou aucun avant plus tard), là où le PRD sépare prénom + nom. Séparer reste standard mais n'est pas obligatoire.
- **Basculer vers la connexion.** Toutes les refs offrent un lien « Already have an account? Sign in ». Absent du PRD alors que c'est un cas critique d'un écran d'inscription.

## Recommandations pour le PRD

1. **Prioriser le SSO** : présenter Apple/Google en premier, l'inscription manuelle en second (méthode de repli).
2. **SSO sans re-saisie** : après Apple/Google, ne demander aucun champ supplémentaire (hors acceptation T&C si maintenue) — l'IdP fournit identité et email.
3. **Exposer les règles du mot de passe** : afficher les critères de sécurité (ex. longueur min, chiffre, casse) et les valider en temps réel plutôt que de bloquer silencieusement.
4. **Feedback d'état du CTA** : le bouton de validation reste désactivé tant que les champs requis ne sont pas valides.
5. **Erreurs inline** : afficher les messages d'erreur sous le champ concerné (email invalide, mot de passe trop faible), pas seulement une règle abstraite.
6. **Lien vers la connexion** : ajouter un accès « J'ai déjà un compte → Se connecter ».
7. **(À trancher) Consentement** : envisager le consentement implicite (texte sous le CTA) plutôt qu'une case obligatoire, plus conforme au standard — ou assumer la case si un opt-in explicite est voulu.
8. **(À trancher) Découpage** : décider entre formulaire unique et parcours en étapes (identité puis mot de passe).
