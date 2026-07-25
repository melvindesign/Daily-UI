# Mockup produit (aperçu du produit comme illustration)

Pattern **transverse** : pas un type d'écran, mais un usage — montrer un aperçu du produit (capture ou reconstitution d'interface) comme **argument visuel**, sur un panneau de sign-up, une landing page, un écran d'onboarding ou une vitrine de fonctionnalité. Il complète [form-sign-up.md](../references/auth/form-sign-up.md) (split-screen avec panneau marketing) et se distingue radicalement des [empty-states.md](../references/states/empty-states.md) : ici on ne conçoit pas le produit, on l'**expose comme argument**.

## Job du visuel

Faire que le spectateur se projette : « voilà à quoi ressemblera *mon* espace une fois que je l'utiliserai ». Succès = le mockup donne envie et rend le produit concret avant même le premier usage. C'est une promesse, pas une documentation.

## Anatomie canonique

1. **Le mockup** : l'interface montrée (écran entier ou zone recadrée).
2. **Son cadre** : ce qui le détache de l'environnement — fond propre, bordure, élévation (ombre). Sans cadre, le mockup se fond dans le décor et perd sa lisibilité d'objet.
3. **L'environnement** : le fond sur lequel il pose — subordonné au mockup, jamais en compétition avec lui.

## Règles

### MUST

- **Données remplies, jamais d'empty state.** Le mockup montre l'**état de croisière** : listes peuplées, données nominatives crédibles, activité visible. L'empty state appartient au produit réel (premier usage) — dans un visuel marketing, il montre littéralement un produit vide, l'inverse de la promesse. Si un composant d'écran réel est réutilisé comme mockup, son contenu doit être basculé vers l'état rempli.
- **Se détacher du fond.** Le mockup a un fond opaque qui lui appartient et une séparation explicite avec l'environnement (bordure, ombre portée, ou les deux). Vérifiable : masquer l'environnement ne doit rien changer à la lisibilité du mockup.
- **Contenu crédible et cohérent.** Pas de lorem ipsum, pas de données contradictoires (dates impossibles, totaux faux), pas d'états techniques (chargement, erreur, disabled) — le spectateur lit le contenu plus qu'on ne le croit.
- **Recadrer sur ce qui porte la valeur.** Un écran entier réduit devient illisible ; mieux vaut une zone parlante lisible que la totalité en miniature. Ce qui est illisible doit être clairement décoratif (hors focus, coupé par le cadre), pas simplement trop petit.

### SHOULD

- **Montrer de l'activité humaine** : noms, avatars, horodatages récents, statuts en cours. Un produit collaboratif se vend par la présence visible d'une équipe.

### AVOID (anti-patterns)

- Empty state, skeleton, spinner ou message d'erreur dans un visuel marketing.
- Mockup sans fond propre ni séparation, qui se fond dans le panneau.
- Contenu placeholder visible (lorem, « Item 1 », données à zéro).

## États critiques

Un seul état a sa place ici : **l'état de croisière rempli**. Les autres états du produit (vide, chargement, erreur) relèvent des écrans réels et de leurs patterns respectifs — leur présence dans un mockup marketing est un défaut à corriger, pas une variante à concevoir.

## Adaptations mobile

- Sur petit écran, le panneau marketing disparaît souvent au profit d'un écran d'entrée dédié : le mockup y est plus petit → recadrer encore plus serré sur la zone de valeur, ou le remplacer par un extrait (une carte, une ligne de liste) plutôt qu'un écran.
- Ne jamais reprendre tel quel le mockup desktop réduit.

## Checklist de revue

- [ ] Aucun empty state / placeholder / état technique dans le mockup
- [ ] Données crédibles, nominatives, cohérentes entre elles
- [ ] Fond propre + bordure et/ou ombre : le mockup se détache de son environnement
- [ ] La zone montrée est lisible et porte la proposition de valeur
- [ ] Version mobile recadrée ou remplacée, pas juste réduite

## Sources

- Julian Shapiro — Landing Pages handbook (montrer le produit en action, données réalistes) — https://www.julian.com/guide/growth/landing-pages
- NN/g — Empty states (le vide est un moment de premier usage, pas un argumentaire) — https://www.nngroup.com/articles/empty-state-interface-design/
