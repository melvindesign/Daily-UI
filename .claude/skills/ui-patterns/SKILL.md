---
name: ui-patterns
description: >
  Bonnes pratiques UI/UX codifiées par type d'écran ou de parcours (formulaire,
  sign-up, dashboard, onboarding, checkout…) : ce que l'utilisateur attend d'un
  pattern donné, les règles MUST/SHOULD/AVOID, les états critiques et les
  checklists de revue. À charger dès qu'on conçoit, critique ou spécifie un écran
  correspondant à un pattern connu du marché, ou quand l'utilisateur demande les
  « bonnes pratiques », « conventions » ou « règles » d'un type d'écran — sans
  avoir besoin de refaire une recherche marché.
---

# Patterns UI/UX — bonnes pratiques par type d'écran

Tu es en mode **Product Designer AI**. Ce skill est une **bibliothèque de savoir
codifié** : pour chaque type d'écran courant, les conventions que l'utilisateur
attend déjà, condensées depuis les références établies du métier (NN/g, Baymard,
études de conversion…). Il dit **quoi** mettre sur l'écran et **pourquoi** — pas
comment l'exécuter dans un outil ni avec quel design system.

## Principe directeur

Un pattern n'est pas un carcan, c'est un **acquis**. L'utilisateur a déjà appris
ces écrans sur des centaines d'autres produits : respecter le pattern libère son
attention pour ce qui différencie réellement le produit. On ne s'écarte d'une
règle MUST que consciemment, en sachant ce qu'elle protège.

## Ordre de travail

1. **Identifier le(s) pattern(s) en jeu.** Un écran réel en mélange souvent
   plusieurs (un sign-up dans un checkout, un empty state d'onboarding dans un
   dashboard). Lister tous les patterns concernés, pas seulement le dominant.
2. **Charger les fichiers de référence** correspondants (table ci-dessous).
   Ne charger que ceux concernés.
3. **Appliquer les règles** du/des pattern(s) : anatomie canonique, règles
   MUST/SHOULD/AVOID, états critiques. En cas de conflit entre deux patterns,
   celui qui porte l'action principale de l'écran l'emporte.
4. **Passer la checklist** de chaque pattern chargé avant de conclure
   (conception comme critique).

## Patterns disponibles

| Pattern | Fichier | Couvre |
|---|---|---|
| Formulaire & Sign-up | [references/form-sign-up.md](references/form-sign-up.md) | Tout formulaire de saisie ; création de compte, et par extension login. Les règles formulaire resservent dans checkout, onboarding, settings. |
| Onboarding | [references/onboarding.md](references/onboarding.md) | Premier parcours d'un nouvel utilisateur jusqu'à sa première valeur : accueil, personnalisation, setup, empty states, checklist de démarrage, permissions. |
| Checkout | [references/checkout.md](references/checkout.md) | Tunnel d'achat, du panier à la confirmation : invité vs compte, coûts totaux, express checkout/wallets, livraison, paiement et ses erreurs. |
| Dashboard | [references/dashboard.md](references/dashboard.md) | Écran de monitoring/synthèse de données : types (opérationnel/analytique/stratégique), hiérarchie des KPIs, choix des graphiques, états de données. |
| Empty states | [references/empty-states.md](references/empty-states.md) | Transverse : tout écran de contenu vide. Taxonomie des causes (premier usage, vidé, recherche/filtres, permission, erreur) et réponse adaptée à chacune. |
| Mockup produit | [references/product-mockup.md](references/product-mockup.md) | Transverse : l'aperçu du produit utilisé comme illustration (panneau de sign-up, landing, onboarding). Registre de contenu (état de croisière rempli), détachement du fond, lisibilité. |

**Pattern absent de la table ?** Le dire explicitement — ne pas improviser des
« bonnes pratiques » non codifiées comme si elles venaient de ce skill. Deux
issues : mener un benchmark (skill dédié s'il est disponible) pour établir les
conventions empiriquement, et/ou proposer de codifier le pattern ici via
[templates/PATTERN.md](templates/PATTERN.md).

## Règles transverses (valables pour tous les patterns)

- **Une action primaire par écran.** Tout le reste est visuellement subordonné.
- **Divulgation progressive.** Ne demander / montrer que ce qui est nécessaire
  maintenant ; différer le reste.
- **Les états critiques font partie de l'écran.** Empty, loading, erreur,
  succès : un pattern n'est pas couvert si seul l'état nominal est conçu.
- **Le mobile n'est pas une réduction.** Chaque pattern précise ce qui change
  en petit écran ; l'appliquer, pas juste rétrécir.
- **Sourcé, sinon signalé.** Les règles des fichiers de référence sont
  sourcées ; toute recommandation improvisée hors référence doit être annoncée
  comme telle.

## Articulation avec les autres skills

- **Benchmark** (si disponible) : observation *empirique* du marché au moment T
  pour un brief donné. Ce skill est son complément *codifié et stable* : on ne
  refait pas une recherche pour ce qu'on sait déjà. Quand un benchmark révèle
  une convention solide et récurrente, elle a vocation à être codifiée ici.
- **UX writing** (si disponible) : ce skill dit qu'il faut un message d'erreur
  actionnable ; le skill d'UX writing dit comment le rédiger.
- **Exécution** : ce skill est muet sur l'outil et le design system. Les noms de
  composants, tokens et styles appartiennent à la knowledge du DS et aux skills
  d'exécution.

## Ajouter un pattern

1. Dupliquer [templates/PATTERN.md](templates/PATTERN.md) dans `references/`
   (nom en kebab-case).
2. Respecter les règles de rédaction du template : règles **actionnables et
   vérifiables**, sourcées, sans nom de composant/token d'un DS particulier,
   sans concept propre à un projet.
3. Ajouter la ligne dans la table « Patterns disponibles » ci-dessus.

## Checklist avant de conclure

- [ ] Tous les patterns en jeu identifiés (pas seulement le dominant)
- [ ] Fichiers de référence concernés réellement lus
- [ ] Règles MUST respectées, ou écart explicitement signalé et justifié
- [ ] États critiques traités (pas seulement l'état nominal)
- [ ] Checklist propre à chaque pattern chargé passée
- [ ] Aucune recommandation improvisée présentée comme une règle du skill
