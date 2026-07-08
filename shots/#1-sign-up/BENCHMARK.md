# Benchmark — #1 Sign Up

**Sujet :** parcours d'inscription complet, de l'arrivée sur la page de sign-up jusqu'à l'entrée sur la plateforme (welcome → saisie → vérification → arrivée)
**Plateforme :** ios (mobile) + web
**Lentille(s) :** UX + UI
**Source :** Mobbin
**Références analysées :** 24 au total — 12 en passage large (ci-dessous) + 12 en passage ciblé segment SaaS (section finale)

> Ce benchmark comporte **deux passages** : un premier large sur le sign-up tous
> secteurs (conventions génériques), puis un second **ciblé sur le segment de Klarity**
> (SaaS productivité / espace de travail d'équipe) — voir la section « Segment » en fin
> de document. Les conventions génériques restent valables ; le segment ajoute les
> patterns propres au B2B (workspace, invitation, cas d'usage, arrivée orientée setup).

## Références analysées

### Mobile (ios)
- [foodpanda — Sign up or log in](https://mobbin.com/screens/9f6cd0b9-322a-45b1-a912-7c9c1911a60c) — `ref/01-foodpanda-sso-welcome.webp` — Écran d'accueil plein fond rose : illustrations d'aliments, titre « Sign up or log in », sur-titre incitatif « SIGN UP TO GET YOUR DISCOUNT », deux boutons SSO (Continue with Google, Continue with Apple), lien « View more methods », « Skip » en haut à droite.
- [foodpanda — What's your email? (erreur inline)](https://mobbin.com/screens/c9ef52ca-83a6-47e4-898b-7cb9b8eacd7f) — `ref/02-foodpanda-email-inline-error.webp` — Un seul champ Email, titre « What's your email? », sous-titre « We'll check if you have an account ». Champ en état d'erreur : bordure rouge, message rouge « Enter a valid email address », bouton Continue plein en bas.
- [Blue Bottle Coffee — Create a Blue Bottle account](https://mobbin.com/screens/47ebd4ad-86e8-4f60-821e-b900de4cd400) — `ref/03-bluebottle-full-form.webp` — Formulaire complet sur un seul écran : First name / Last name (sur une ligne), Email address, Phone number, Password, mention « All fields are required », bouton Sign up, lien « Already a member? Log in », texte de consentement implicite avec liens Terms/Privacy.
- [foodpanda — Continue without a password](https://mobbin.com/screens/43e8dfa7-7f24-4602-8cba-0e0ee19e6aca) — `ref/04-foodpanda-passwordless-option.webp` — « Let's get you started! », First/Last name, encart avec case cochée « Continue without a password » et 3 bénéfices (pas de mot de passe à retenir, connexion par email, expérience rapide et sécurisée), bouton Create account désactivé.
- [foodpanda — Verification link sent](https://mobbin.com/screens/14006f07-1563-4203-80f6-78946f46dcea) — `ref/05-foodpanda-verify-email-link.webp` — Illustration enveloppe, « We've sent a verification link to samlee.mobbin@gmail.com », « Please click the verification link in your inbox », boutons « Check inbox » (plein) et « Resend verification link » (contour).

### Web
- [Atlassian (Jira) — Sign up to continue](https://mobbin.com/screens/47547f82-1cea-43cf-87f9-7fbf714df905) — `ref/06-atlassian-email-sso-consent.webp` — Carte centrée : logo, titre « Sign up to continue », un champ Email, texte de consentement implicite « By signing up, I accept… Terms + Privacy », bouton Sign up, séparateur « Or continue with », 4 boutons SSO empilés (Google, Microsoft, Apple, Slack), lien « Already have an account? Log in ».
- [Juicebox — Get started (social proof)](https://mobbin.com/screens/3f2e4d00-fa12-4966-a74c-8ff9c7abb66d) — `ref/07-juicebox-form-social-proof.webp` — Écran scindé : panneau gauche marketing (« Welcome to PeopleGPT », visuel réseau + « Trusted by 25 000+ recruiters », logos clients), panneau droit formulaire « Sign up with email » (Full name, Email, Password, Continue), badges de conformité (COPPA, GDPR, ISO 42001, SOC 2) en pied.
- [Clerk — Password requirements met](https://mobbin.com/screens/b8f5027f-ce72-4839-adf3-c2b5ecd1b43f) — `ref/08-clerk-password-requirements-met.webp` — Carte « Create your account to continue to MyApp », rangée d'icônes SSO, séparateur « or », champs Email / Phone / Password, message de validation temps réel « ✓ Your password meets all the necessary requirements », bouton Continue, lien « Have an account? Sign in ».
- [GoDaddy — Username already in use (erreur inline)](https://mobbin.com/screens/24a69867-06e1-4d37-9336-cba3fbdc3d5d) — `ref/09-godaddy-username-error-consent.webp` — Formulaire Email / Username / Password (lien « Show »), champ Username en erreur (bordure rouge, « This username is already in use »), encart consentement marketing SMS optionnel (Agree / Decline en radios), bouton Create Account, consentement implicite en tête.
- [Expedia — Sign in or create an account (SSO primaire)](https://mobbin.com/screens/085cc190-6152-4b8e-9808-f57a6ceb9b6a) — `ref/10-expedia-entry-sso-primary.webp` — « Sign in or create an account », bouton plein « Sign in with Google » en premier, séparateur « or », champ Email + Continue, « Other ways to sign in » (Apple, Facebook), consentement implicite, logos écosystème (Expedia, Hotels.com, Vrbo).
- [Clerk — Verify your email (OTP)](https://mobbin.com/screens/abea02c4-18a9-4e38-a80a-34b72f93a257) — `ref/11-clerk-otp-verification.webp` — « Verify your email to continue to MyApp », rappel de l'email avec icône d'édition, « Verification code / Enter the verification code sent to your email address », 6 cases de saisie segmentées, lien « Didn't receive a code? Resend (23) » avec compte à rebours.
- [Expedia — Let's confirm your email (OTP)](https://mobbin.com/screens/abe7b69f-ca4f-4a25-a491-1b77b04e748c) — `ref/12-expedia-otp-confirm.webp` — « Let's confirm your email », « enter the secure code we sent to… Check junk mail », un champ « 6-digit code », case cochée « Keep me signed in » (avec note appareils personnels), bouton Continue, « Didn't receive an email? You can request another code in 26s ».

## Conventions

Motifs présents chez ≥3 références → à respecter, c'est ce que l'utilisateur attend déjà.

- **SSO en évidence dès l'entrée** — connexion sociale (Google/Apple/Microsoft…) proposée d'emblée, avant ou à côté de l'email. Présent chez foodpanda, Atlassian, Clerk, Expedia, GoDaddy.
- **Consentement implicite (« by signing up/continuing »)** — pas de case à cocher bloquante : le texte légal + liens Terms/Privacy est affiché sous le CTA, l'action vaut acceptation. Présent chez Blue Bottle, Atlassian, Expedia, GoDaddy.
- **Vérification d'email obligatoire dans le parcours** — étape dédiée avant l'accès plein : lien magique ou code OTP. Présent chez foodpanda (lien), Clerk (OTP), Expedia (OTP), GoDaddy (code), Juicebox (lien).
- **Basculement vers la connexion toujours offert** — lien « Already have an account? Log in / Sign in » sur l'écran de saisie. Présent chez Blue Bottle, Atlassian, Clerk, GoDaddy.
- **Validation inline des champs** — erreur affichée au niveau du champ (bordure + message rouge), non en pop-up. Présent chez foodpanda (email invalide), GoDaddy (username pris), Clerk (état de validation du mot de passe en positif).
- **CTA principal désactivé tant que le formulaire est incomplet** — le bouton reste inactif jusqu'à saisie valide. Présent chez foodpanda, Me+ (vu au gate), Coursera (vu au gate).
- **Renvoi du code / lien avec compte à rebours** — « Resend » temporisé sur l'écran de vérification. Présent chez Clerk (Resend 23s), Expedia (26s), foodpanda (Resend verification link).

## Enseignements UX

- **Deux stratégies de découpage coexistent.** *Tout-sur-un-écran* (Blue Bottle, GoDaddy, Clerk, Juicebox : nom + email + mot de passe ensemble) vs *progressive disclosure multi-étapes* (foodpanda, Expedia, Atlassian : email d'abord → nom → mot de passe → vérif). Le multi-étapes réduit la charge perçue par écran ; le mono-écran réduit le nombre de taps. Pour un objectif « friction minimale », le choix dépend de la longueur réelle du formulaire.
- **L'email-first sert de routeur login/signup.** foodpanda (« We'll check if you have an account »), Atlassian, Expedia, Trip.com (vu au gate) demandent l'email en premier puis détectent si le compte existe — l'utilisateur n'a pas à choisir « je m'inscris » vs « je me connecte ». Fort réducteur de friction et d'erreurs.
- **Le mot de passe est de plus en plus optionnel/reporté.** foodpanda propose explicitement « Continue without a password » (connexion par email/lien) ; Trip.com/Viator (vus au gate) n'ont aucun mot de passe à l'inscription. La tendance va vers passwordless / magic link / OTP.
- **La vérification d'email est un point de friction assumé mais accompagné.** Toutes les réfs qui vérifient donnent un CTA « Check inbox / Resend », rappellent l'adresse saisie, mentionnent le dossier spam, et temporisent le renvoi — pour éviter l'abandon sur cet écran d'attente.
- **Le consentement marketing est séparé du consentement légal.** GoDaddy isole l'opt-in promotionnel (Agree/Decline, « consent is not a condition of purchase ») du consentement implicite aux CGU — le premier est optionnel, le second implicite. Ne pas les mélanger.
- **La demande de données est échelonnée selon le besoin.** Nom réel demandé quand il a un usage (Expedia « name on your travel ID », Blue Bottle pour la commande), téléphone reporté à une étape de sécurisation (foodpanda). Ne demander une donnée qu'au moment où elle sert.

## Enseignements UI

- **Format conteneur : carte centrée (web) vs plein écran (mobile).** Web = carte étroite (~380–450 px) centrée sur fond neutre, logo en tête (Atlassian, Clerk, GoDaddy). Mobile = contenu pleine largeur, CTA collé en bas (foodpanda, Blue Bottle).
- **Le split-screen web transporte la preuve sociale.** Juicebox et Atlassian (hero « Meet your AI ») consacrent la moitié gauche au marketing / social proof / logos clients pendant que la saisie occupe la droite — l'écran de signup fait aussi office d'argumentaire.
- **Hiérarchie du CTA claire et registre sobre.** Un seul bouton plein coloré (le CTA principal), SSO en boutons contour/secondaires, liens en accent. Registre majoritairement sobre et pro (Atlassian, Clerk, GoDaddy, Expedia) ; foodpanda est l'exception « grand public » (fond de marque saturé, illustrations).
- **Traitement visuel des états de mot de passe.** Jauge de force (Expedia « Weak » + barre, foodpanda barre + liste de critères avec croix/coches), toggle Show/œil systématique, et pour Clerk une ligne de validation verte unique plutôt qu'une checklist. Le feedback positif (Clerk) est plus léger visuellement que la checklist (foodpanda).
- **Écran de vérification = illustration + focus unique.** Enveloppe illustrée, un seul champ (OTP segmenté chez Clerk, champ unique chez Expedia) ou aucun (lien chez foodpanda/Juicebox), très peu d'éléments — l'écran ne fait qu'une chose.
- **Badges de confiance en pied (web B2B).** Juicebox affiche COPPA/GDPR/ISO/SOC 2 ; signal de sécurité qui rassure sur un écran où l'on confie ses données.

## Opportunités de différenciation

- **Email-first + passwordless comme parcours par défaut.** Peu de réfs combinent les deux proprement (foodpanda le propose en option, pas par défaut). Un parcours « email → magic link/OTP → tu es sur la plateforme », sans mot de passe, serait à la fois moderne et le plus court possible — colle exactement à l'objectif « friction minimale ».
- **Transformer l'écran de vérification (temps mort) en moment utile.** La plupart laissent l'utilisateur attendre. Ouvrir la boîte mail en un tap, pré-remplir l'OTP (autofill), ou faire patienter avec le début de l'onboarding pendant la vérification = différenciateur sur un point d'abandon connu.
- **Rendre la valeur explicite dès l'entrée.** Seul foodpanda incite (« get your discount ») et Juicebox rassure (social proof). Un bénéfice clair « pourquoi créer un compte » sur l'écran d'accueil signup est rare côté mobile grand public.
- **Feedback de mot de passe positif plutôt que punitif.** La checklist à croix rouges (foodpanda) est anxiogène ; l'approche « une ligne verte quand c'est bon » (Clerk) est plus douce. Une jauge qui encourage plutôt qu'elle ne sanctionne peut se démarquer.
- **Continuité welcome → plateforme personnalisée.** Blue Bottle (« HI SAM, Let's get something brewing »), Expedia (« Sam, you'll save 10% »), Jira (session ouverte) montrent une arrivée personnalisée. Soigner ce dernier écran (état non-vide, personnalisé, première action évidente) clôt le parcours au lieu de le laisser retomber sur un dashboard générique.

## Recommandations

Recommandations mixtes (UX + UI), à confronter au besoin lors de la rédaction du PRD.

1. **Adopter l'email-first comme entrée unique** (routeur login/signup), justifié par foodpanda, Atlassian, Expedia, Trip.com — supprime le choix « s'inscrire vs se connecter » et réduit la friction dès le premier écran.
2. **Proposer SSO en évidence + email**, convention forte (5 réfs) ; SSO en boutons secondaires, email/CTA principal en bouton plein.
3. **Prioriser un parcours passwordless (magic link ou OTP)** par défaut, avec mot de passe en option — appuyé par foodpanda (passwordless), Clerk/Expedia (OTP), et l'objectif produit de friction minimale.
4. **Consentement implicite aux CGU sous le CTA** (Blue Bottle, Atlassian, Expedia, GoDaddy), et **opt-in marketing séparé et optionnel** (GoDaddy) — ne jamais bloquer l'inscription sur une case.
5. **Soigner l'écran de vérification** : rappel de l'email, CTA « ouvrir la boîte mail », renvoi temporisé, mention spam (foodpanda, Clerk, Expedia) — c'est un point d'abandon connu.
6. **Validation inline positive** sur chaque champ (bordure/message au niveau du champ, feedback vert de type Clerk plutôt que checklist punitive), CTA désactivé jusqu'à validité.
7. **Formats par plateforme** : carte centrée sobre côté web (avec, en option, un panneau de preuve sociale à la Juicebox), pleine largeur + CTA collant côté mobile.
8. **Clôturer par une arrivée personnalisée** sur la plateforme (Blue Bottle, Expedia) : accueil nominatif + première action évidente, plutôt qu'un dashboard générique.

> Note : ces recommandations incluent des considérations visuelles (lentille UI activée). Le PRD ne doit retenir que le fonctionnel ; les points UI ci-dessus serviront à l'étape de design, pas à la spec.

---

## Segment — SaaS productivité / espace de travail d'équipe

Second passage ciblé sur le segment réel de **Klarity** (outil collaboratif de tâches/projets
d'équipe). Références issues des leaders B2B : Slack, Notion, Coda, Asana, Linear, monday.
12 références (7 web, 5 mobile), toutes passées au gate visuel.

### Références analysées — segment

#### Web
- [Asana — What's your work email?](https://mobbin.com/screens/ececf429-6f84-48d6-b179-0bea61629105) — `ref/13-asana-work-email-signup.webp` — Écran de sign-up minimal : logo, titre « What's your work email? », un seul champ email, bouton Sign up, lien « Already use Asana? Log in », consentement implicite Terms/Privacy. L'email pro est la donnée d'entrée unique.
- [Asana — Enter a work email address (nudge)](https://mobbin.com/screens/cea8cacd-1df5-4471-83df-77a50f737c29) — `ref/14-asana-work-email-nudge.webp` — Modale : « samlee@gmail.com looks like a personal email address. If you want to be connected with your team, please use your work email. » Deux options : « Enter a work email address » (primaire) vs « Continue with my personal email », plus un « Why are we asking? » explicatif.
- [Notion — How are you planning to use Notion?](https://mobbin.com/screens/ad74a5b4-deed-40de-b010-1f88afd817a7) — `ref/15-notion-use-case-selection.webp` — Choix de cas d'usage en 3 cartes illustrées : « For my team » (sélectionnée), « For personal use », « For school », sous-titre « We'll streamline your setup experience accordingly », bouton Continue.
- [Coda — Welcome! What's your role?](https://mobbin.com/screens/7d618f25-89e0-4d74-a687-3311bece87cd) — `ref/16-coda-role-selection.webp` — Sélection du rôle en liste : Working solo / Team member / Team manager / Executive (C-level / VP), sous-titre « We'll help you set up your first doc and personalize your experience », lien « Skip » discret.
- [Slack — What's the name of your company or team?](https://mobbin.com/screens/a5a4fd25-8b66-4824-8f0b-92b2eff42b64) — `ref/17-slack-workspace-naming.webp` — Étape « Step 1 of 5 » : champ nom du workspace (« Ex: Acme Marketing or Acme Co », compteur 50), case cochée « Let anyone with an @domain email join this workspace », bouton Next.
- [Notion — Invite teammates](https://mobbin.com/screens/7293aa16-d6b2-4611-958e-9f1c7a24a11d) — `ref/18-notion-invite-teammates.webp` — 3 champs email empilés, « + Add more or invite in bulk », lien « Get shareable link », case « Allow anyone with a @domain email to join this workspace », bouton « Take me to Notion » (invitation non bloquante).
- [Slack — Check your email for a code](https://mobbin.com/screens/32300616-a5fb-4f18-a3f0-818fb4bf5167) — `ref/19-slack-email-code-otp.webp` — Vérification par code : « We've sent a 6-character code… The code expires shortly », 6 cases segmentées (groupées 3-3), raccourcis « Open Gmail » / « Open Outlook », « Can't find your code? Check your spam folder! ».
- [Coda — What tools do you currently use?](https://mobbin.com/screens/37f14db7-a213-4a41-ad10-610ade1413cc) — `ref/20-coda-connect-tools.webp` — Grille d'intégrations sélectionnables (Snowflake, Confluence, Notion, Jira, Gmail, Slack, Excel/Sheets, Word/Docs, Airtable, Google Calendar) avec cases cochées, « You can connect your software to keep all your information in one space », barre de progression, Back / Next.

#### Mobile (ios)
- [Slack — What's your team working on right now?](https://mobbin.com/screens/00e852d1-f6c3-4330-8655-fd32f424df6e) — `ref/21-slack-first-focus.webp` — Étape « Step 4 of 5 » : champ libre « This could be anything: a project, campaign, event, or the deal you're trying to close », valeur « design project », Next. Sert à amorcer le premier objet de travail (→ nom de canal).
- [Asana — Good afternoon, Sam](https://mobbin.com/screens/911365f0-858e-4407-b9c3-83f183c203d2) — `ref/22-asana-personalized-home.webp` — Accueil post-inscription nominatif et horodaté : carte « A task is due today » avec action « View task », section Projects (EOY Campaign, + New project, See all projects), résumé de tâches (Completed/Overdue/Due), barre d'onglets.
- [monday — Hi Alex Smith, Finish setting up](https://mobbin.com/screens/17658b1b-2a5e-4f8e-a4e9-dfcf1523cd7f) — `ref/23-monday-setup-checklist-home.webp` — Accueil avec jauge « 33% Completed » et checklist de démarrage : « Create your first board » (coché/barré), « Get started with basics », « Unlock the full experience », section « Recently visited » (Your first board), raccourci Workspaces.
- [Linear — Create a new workspace](https://mobbin.com/screens/048541b6-a920-499a-a369-f2ebfe80989c) — `ref/24-linear-create-workspace.webp` — Formulaire de workspace : Workspace Name, Workspace URL générée (`linear.app/slmobbin`), région d'hébergement (« can not be changed later »), « How large is your company? » (Just me / 1-5 / 5-25 / … / 1000+), « What is your role? » (Founder, Engineering manager, Product manager, Designer, Software developer…), bouton Create workspace.

### Conventions — segment

- **L'unité de compte est le workspace/équipe, pas l'individu.** Création + nommage d'un
  espace d'équipe dans le parcours. Présent chez Slack, Notion, Linear (et Confluence/Jira vus au gate).
- **Étape d'invitation de coéquipiers intégrée au sign-up**, non bloquante (skip possible),
  avec saisie multi-emails **et** lien partageable. Présent chez Slack, Notion, Asana (et ClickUp/Confluence vus au gate).
- **Personnalisation par cas d'usage ou rôle** avant d'entrer dans le produit (routage de l'onboarding).
  Présent chez Notion (usage), Coda (rôle), Linear (rôle + taille), ClickUp (solution vue au gate).
- **Vérification d'email par code** dans le parcours, systématique. Présent chez Slack, ClickUp,
  Confluence, Jira (vus au gate) — confirme la convention générique, ici quasi universelle en B2B.
- **Arrivée orientée « mise en route » plutôt que dashboard vide.** Accueil nominatif + checklist/
  première tâche/premier board. Présent chez monday, Asana, Confluence, Jira, ClickUp.

### Enseignements UX — segment

- **L'email professionnel est activement encouragé, pas imposé.** Asana nudge explicitement vers
  l'email pro (« to be connected with your team ») tout en laissant continuer en perso ; Confluence/
  Jira intitulent le champ « Work email ». Le choix reste à l'utilisateur → friction maîtrisée.
- **L'ordre canonique du B2B :** compte → (vérif code) → cas d'usage/rôle → création/nommage du
  workspace → invitation d'équipe → premier projet/board → accueil. Chaque étape est courte et souvent
  « skippable », ce qui étale la charge sans bloquer l'accès.
- **La donnée demandée sert directement à personnaliser.** Rôle, taille d'entreprise, usage,
  outils existants (Coda) alimentent un onboarding sur-mesure — ce n'est pas de la collecte gratuite.
- **L'invitation est traitée comme un levier d'activation**, jamais comme un mur : toujours un
  « Skip » et un lien partageable en plus des emails, souvent avec auto-join par domaine.
- **Le sous-domaine / URL de workspace** est un objet à part entière (Linear `app/slug`, Confluence
  `.atlassian.net`), parfois avec vérification de disponibilité — spécificité B2B absente du grand public.

### Enseignements UI — segment

- **Onboarding multi-étapes à steppers explicites** (« Step 1 of 5 » Slack, barres de progression
  Coda/ClickUp/Asana) : l'utilisateur sait où il en est dans une séquence plus longue qu'en B2C.
- **Une question par écran, réponses en grandes cibles.** Cartes (Notion), lignes cliquables
  (Coda), dropdowns (Linear) : la sélection prime sur la saisie libre pour réduire l'effort.
- **Registre sobre et professionnel**, illustrations discrètes ou absentes (Linear, Slack, Coda),
  cohérent avec un public de travail — loin de la saturation grand public (foodpanda).
- **L'accueil est une surface d'activation composée** : salutation nominative + jauge de complétion
  + checklist + « recently visited » (monday), ou carte de tâche + projets (Asana). L'état « vide »
  est explicitement évité.

### Opportunités de différenciation — segment

- **Compresser l'ordre canonique sans le sacrifier.** Les leaders enchaînent 4-6 étapes ; Klarity
  peut fusionner cas d'usage + nommage de workspace, ou différer l'invitation en post-onboarding,
  pour rester le plus court du segment tout en gardant la personnalisation.
- **Passwordless + email pro** : aucun leader B2B observé ne combine nudge email-pro **et** parcours
  sans mot de passe par défaut — un angle cohérent avec l'objectif friction minimale de Klarity.
- **Faire de l'invitation un moment à faible friction et fort effet** : lien partageable proposé en
  premier (avant la saisie email-par-email), auto-join par domaine bien expliqué.
- **Accueil d'activation « déjà amorcé »** : plutôt qu'une checklist à 0 %, arriver avec un premier
  projet/board pré-créé à partir des réponses d'onboarding (usage/rôle), pour supprimer l'écran vide.
- **Personnalisation utile et légère** : se limiter à 1-2 questions (rôle **ou** usage) réellement
  exploitées pour préparer l'espace, au lieu d'empiler rôle + taille + outils comme certains.

### Recommandations — segment (à confronter au PRD)

1. **Introduire l'email professionnel** comme entrée recommandée (nudge non bloquant façon Asana),
   cohérent avec un espace de travail d'équipe.
2. **Ajouter au parcours une étape de personnalisation légère** (rôle ou cas d'usage) réellement
   utilisée pour préparer l'espace — justifié par Notion, Coda, Linear.
3. **Créer et nommer un workspace** dans le flow, avec génération de sous-domaine/URL (Linear,
   Confluence) — c'est l'unité de compte attendue en B2B.
4. **Intégrer une étape d'invitation d'équipe non bloquante** (emails + lien partageable + skip +
   auto-join par domaine), justifiée par Slack, Notion, Asana.
5. **Concevoir l'arrivée comme une surface d'activation** : accueil nominatif + première action/
   projet amorcé, pas un dashboard vide (monday, Asana).
6. **Garder des steppers clairs** sur la séquence B2B plus longue, avec des étapes courtes et
   majoritairement skippables pour ne pas rallonger la friction perçue.

> Ces enseignements de segment orientent surtout l'**ampleur du parcours** de Klarity (workspace,
> invitation, personnalisation, arrivée d'activation). Le PRD actuel les couvre partiellement
> (onboarding léger, arrivée nominative) ; à l'itération de design, arbitrer quelles étapes B2B
> retenir vs compresser au nom de la friction minimale.
