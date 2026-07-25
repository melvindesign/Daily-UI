# Onboarding

S'applique au **premier parcours** d'un nouvel utilisateur : de son arrivée
(post-inscription ou premier lancement) jusqu'à sa **première valeur** dans le
produit. C'est un **parcours**, pas un écran : les règles portent autant sur
l'enchaînement que sur chaque étape. Les étapes de saisie obéissent en plus au
pattern [form-sign-up.md](form-sign-up.md).

## Job du parcours

Amener l'utilisateur le plus vite possible à l'**aha moment** — l'instant où la
valeur du produit devient concrète pour *lui*. Succès = **activation** (l'action
de première valeur est accomplie : premier message envoyé, premier projet créé,
premières données visibles), **pas** la complétion du flow d'onboarding.
Un onboarding terminé sans activation est un échec ; un onboarding sauté avec
activation est une réussite.

## Anatomie canonique

Séquence type — chaque bloc est optionnel *sauf* le dernier :

1. **Accueil orienté bénéfice** (1 écran max) : ce que l'utilisateur va
   obtenir, pas ce que le produit sait faire.
2. **Personnalisation** : 1 à 3 questions, uniquement si les réponses changent
   réellement la suite (contenu, parcours, réglages) — et le dire.
3. **Setup minimal** : la configuration strictement nécessaire à la première
   valeur (import, connexion d'une source, invitation). Tout le reste est différé.
4. **Arrivée dans le produit** : jamais un écran vide — un empty state qui
   prescrit l'action (« Créez votre premier projet »), des données de
   démonstration, et/ou une checklist de démarrage.
5. **Première victoire** : l'action de première valeur, reconnue explicitement
   (confirmation, célébration), avec la suite proposée.

## Règles

### MUST

- **Identifier l'action de première valeur avant de dessiner quoi que ce
  soit.** Tout le parcours converge vers elle ; toute étape qui ne l'approche
  pas est supprimée ou différée.
- **Minimum d'étapes avant la valeur.** Chaque écran entre l'utilisateur et sa
  première victoire justifie son existence ; le coût de chaque étape se paie en
  abandon.
- **Sautable et reprenable.** Tout ce qui n'est pas techniquement
  indispensable est skippable ; un onboarding interrompu se reprend où il
  s'était arrêté, sans perdre la saisie. L'utilisateur qui saute atterrit sur
  un produit utilisable, pas sur un écran vide.
- **Progression visible** dès qu'il y a plus de 2 étapes : l'utilisateur sait
  où il en est et combien il reste.
- **Une question de personnalisation n'existe que si la réponse change la
  suite.** Sinon c'est de la friction déguisée en attention. Annoncer l'usage
  (« pour adapter votre espace »).
- **Jamais d'écran vide à l'arrivée.** Chaque empty state est un prompt
  d'action ou un exemple rempli — l'écran vide silencieux est un point
  d'abandon documenté.
- **Permissions système demandées en contexte**, précédées d'une explication
  du bénéfice, jamais empilées à l'entrée. (Voir Adaptations mobile : la
  demande native ne se rejoue pas.)

### SHOULD

- **Faire faire plutôt que montrer.** Apprendre l'action en la faisant sur de
  vraies données bat le tour guidé descriptif ; un tour ne se justifie que
  s'il fait *agir* à chaque étape.
- **Checklist de démarrage** plutôt que tour forcé : elle respecte le rythme de
  l'utilisateur et obtient les meilleurs taux de complétion mesurés. La
  pré-entamer (« 1/5 fait : compte créé ») exploite l'effet de progression
  acquise.
- **Données de démonstration ou templates** quand le produit est vide au
  départ : montrer l'état « rempli » avant de demander l'effort de remplir.
- **Différer tout le reste** (everboarding) : introduire chaque capacité au
  moment où le comportement de l'utilisateur la rend pertinente, pas à J0.
- **Reconnaître la première victoire** : confirmation explicite, et proposer
  immédiatement la marche suivante.
- **Segmenter par profil** seulement si les parcours diffèrent réellement
  ensuite.

### AVOID (anti-patterns)

- **Le feature dump** : visite exhaustive des fonctionnalités avant la moindre
  valeur — l'anti-pattern n°1 documenté, surcharge cognitive et abandon.
- Tour guidé **forcé / non skippable**.
- **Carrousel d'intro descriptif** multi-écrans avant la première interaction.
- **Tooltips en cascade** qui se déclenchent en rafale à l'arrivée.
- Demander des informations **sans usage immédiat** dans le parcours.
- Empiler les **demandes de permissions** à l'ouverture.
- Mesurer le succès à la **complétion du flow** plutôt qu'à l'activation.

## États critiques

- **Premier lancement** : l'entrée du parcours dit le bénéfice et la durée
  implicite (nombre d'étapes) — pas de suspense sur ce qui attend.
- **Interruption / reprise** : quitter en cours ne perd rien ; au retour, on
  reprend à l'étape en cours, avec la possibilité d'abandonner le guidage.
- **Skip** : l'utilisateur qui saute tout arrive sur un produit utilisable,
  avec un moyen de relancer le guidage plus tard (la checklist reste
  accessible).
- **Erreur de setup** (import échoué, connexion refusée) : message actionnable,
  possibilité de réessayer ou de passer l'étape sans casser le parcours.
- **Fin / première victoire** : reconnaissance explicite + prochaine action
  proposée — jamais une fin silencieuse.

## Adaptations mobile

- **La demande de permission native ne se rejoue pas** : toujours une étape
  d'explication avant le dialogue système, déclenchée au moment où la
  permission sert.
- Étapes plus courtes et saisie minimale : reporter sur le desktop (ou plus
  tard) tout setup lourd ; proposer des choix plutôt que du texte à taper.
- Un écran = une idée ; la progression et l'action primaire restent visibles
  sans scroll.
- Le carrousel d'intro est encore plus coûteux qu'ailleurs : l'utilisateur
  mobile veut essayer, pas lire.

## Checklist de revue

- [ ] L'action de première valeur est identifiée et le parcours y converge
- [ ] Chaque étape avant la première valeur est justifiée (sinon supprimée/différée)
- [ ] Tout le non-indispensable est sautable ; le parcours est reprenable sans perte
- [ ] Progression visible (si > 2 étapes)
- [ ] Chaque question de personnalisation change réellement la suite, et l'annonce
- [ ] Aucun écran vide : empty states prescriptifs, démo ou checklist à l'arrivée
- [ ] Permissions demandées en contexte, précédées du bénéfice
- [ ] Première victoire reconnue + suite proposée
- [ ] Étapes de saisie conformes au pattern Formulaire ([form-sign-up.md](form-sign-up.md))
- [ ] États conçus : interruption/reprise, skip, erreur de setup, fin

## Sources

- Appcues — Onboarding UX: 10 patterns, best practices, and real examples — https://www.appcues.com/blog/user-onboarding-ui-ux-patterns
- Chameleon — Onboarding UX Patterns: A Data-Backed Guide (benchmarks checklists/tours) — https://www.chameleon.io/blog/onboarding-ux-patterns
- Formbricks — 9 User Onboarding Best Practices — https://formbricks.com/blog/user-onboarding-best-practices
- StepsKit — Onboarding Tours That Don't Get Skipped — https://stepskit.com/blog/onboarding-tours
- DesignerUp — I studied the UX/UI of over 200 onboarding flows — https://designerup.co/blog/i-studied-the-ux-ui-of-over-200-onboarding-flows-heres-everything-i-learned/
- Userpilot — 10 Onboarding UX Examples — https://userpilot.com/blog/onboarding-ux-examples/
