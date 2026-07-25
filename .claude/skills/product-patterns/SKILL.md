---
name: product-patterns
description: >
  Bibliothèque de bonnes pratiques UI/UX codifiées par type d'écran ou de parcours,
  rangées par famille (acquisition, auth, onboarding, commerce, data, states) : ce
  que l'utilisateur attend d'un pattern donné, les règles MUST/SHOULD/AVOID, les
  états critiques et les checklists de revue. À charger dès qu'on conçoit, critique
  ou spécifie un écran correspondant à un pattern connu du marché — landing page,
  formulaire, sign-up, welcome, checkout, dashboard, empty state — ou quand
  l'utilisateur demande les « bonnes pratiques », « conventions » ou « règles » d'un
  type d'écran, sans avoir besoin de refaire une recherche marché.
---

# Patterns produit — bibliothèque par famille

Tu es en mode **Product Designer AI**. Ce skill est une **bibliothèque de savoir codifié**, pas une méthode : son seul rôle est de te faire identifier le ou les patterns en jeu, puis de te renvoyer vers les fichiers correspondants. Tout le contenu est dans `references/<famille>/<pattern>.md` — un fichier par pattern.

Ce que ce skill dit : **quoi** mettre sur l'écran et **pourquoi**. Ce qu'il ne dit pas : comment l'exécuter dans un outil, ni avec quel design system.

## Principe directeur

Un pattern n'est pas un carcan, c'est un **acquis**. L'utilisateur a déjà appris ces écrans sur des centaines d'autres produits : respecter le pattern libère son attention pour ce qui différencie réellement le produit. On ne s'écarte d'une règle MUST que consciemment, en sachant ce qu'elle protège.

## Ordre de travail

1. **Identifier le(s) pattern(s) en jeu.** Un écran réel en mélange souvent plusieurs (un sign-up dans un checkout, un empty state de welcome dans un dashboard). Lister tous les patterns concernés, pas seulement le dominant.
2. **Charger les fichiers correspondants** (table ci-dessous). **Ne charger que ceux concernés** — la bibliothèque est volumineuse, on ne la lit pas en entier.
3. **Appliquer les règles** : anatomie canonique, MUST/SHOULD/AVOID, états critiques. En cas de conflit entre deux patterns, celui qui porte l'action principale de l'écran l'emporte.
4. **Passer la checklist** de chaque pattern chargé avant de conclure (en conception comme en critique).

## Patterns disponibles

| Famille | Pattern | Fichier | Couvre |
|---|---|---|---|
| **acquisition** | Landing page | [references/acquisition/landing-page.md](references/acquisition/landing-page.md) | Page marketing autonome à action unique : cadrage par les objections, niveaux de conscience, séquence de sections, hero, preuve sociale, argumentation, CTA, capture de lead, chiffres de conversion citables et mythes à refuser. |
| **auth** | Formulaire & Sign-up | [references/auth/form-sign-up.md](references/auth/form-sign-up.md) | Tout formulaire de saisie ; création de compte, et par extension login. Les règles formulaire resservent dans checkout, welcome, settings. |
| **onboarding** | Welcome | [references/onboarding/welcome.md](references/onboarding/welcome.md) | Premier parcours d'un nouvel utilisateur jusqu'à sa première valeur : accueil, personnalisation, setup, empty states, checklist de démarrage, permissions. |
| **commerce** | Checkout | [references/commerce/checkout.md](references/commerce/checkout.md) | Tunnel d'achat, du panier à la confirmation : invité vs compte, coûts totaux, express checkout/wallets, livraison, paiement et ses erreurs. |
| **data** | Dashboard | [references/data/dashboard.md](references/data/dashboard.md) | Écran de monitoring/synthèse de données : types (opérationnel/analytique/stratégique), hiérarchie des KPIs, choix des graphiques, états de données. |
| **states** | Empty states | [references/states/empty-states.md](references/states/empty-states.md) | Transverse : tout écran de contenu vide. Taxonomie des causes (premier usage, vidé, recherche/filtres, permission, erreur) et réponse adaptée à chacune. |

**Ressources annexes d'un pattern**, quand elles existent, dans la même arborescence de familles :
- `templates/<famille>/<pattern>.md` — le document de travail à remplir (ex. [templates/acquisition/landing-page.md](templates/acquisition/landing-page.md)).
- `examples/<famille>/<pattern>.md` — un cas déroulé bout-en-bout (ex. [examples/acquisition/landing-page.md](examples/acquisition/landing-page.md)).

**Pattern absent de la table ?** Le dire explicitement — ne pas improviser des « bonnes pratiques » non codifiées comme si elles venaient de ce skill. Deux issues : mener un benchmark (skill dédié s'il est disponible) pour établir les conventions empiriquement, et/ou codifier le pattern ici via [templates/PATTERN.md](templates/PATTERN.md).

Le dossier `archives/` contient ce qui a été retiré de la bibliothèque parce que ce n'est pas un pattern d'écran. On n'y renvoie pas depuis une mission de conception.

## Règles transverses (valables pour tous les patterns)

- **Une action primaire par écran.** Tout le reste est visuellement subordonné.
- **Divulgation progressive.** Ne demander / montrer que ce qui est nécessaire maintenant ; différer le reste.
- **Les états critiques font partie de l'écran.** Empty, loading, erreur, succès : un pattern n'est pas couvert si seul l'état nominal est conçu.
- **Le mobile n'est pas une réduction.** Chaque pattern précise ce qui change en petit écran ; l'appliquer, pas juste rétrécir.
- **Sourcé, sinon signalé.** Les règles des fichiers de référence sont sourcées ; toute recommandation improvisée hors référence doit être annoncée comme telle. Un chiffre cité sans son degré de fiabilité et sa source est une faute.

## Articulation avec les autres skills

- **Benchmark** (si disponible) : observation *empirique* du marché au moment T pour un brief donné. Ce skill est son complément *codifié et stable* : on ne refait pas une recherche pour ce qu'on sait déjà. Quand un benchmark révèle une convention solide et récurrente, elle a vocation à être codifiée ici.
- **UX writing** (si disponible) : ce skill dit qu'il faut un message d'erreur actionnable, ou quel message une section doit porter ; l'UX writing dit comment le rédiger.
- **Exécution** : ce skill est muet sur l'outil, le design system, la typographie et la palette. Les noms de composants, tokens et styles appartiennent à la knowledge du DS et aux skills d'exécution.

## Ajouter un pattern

1. Choisir sa **famille** — ou en créer une si aucune ne convient, en la nommant par le moment du cycle de vie ou le domaine fonctionnel, jamais par la forme de l'écran.
2. Dupliquer [templates/PATTERN.md](templates/PATTERN.md) dans `references/<famille>/` (nom de fichier en kebab-case).
3. Respecter les règles de rédaction du template : règles **actionnables et vérifiables**, sourcées, sans nom de composant/token d'un DS particulier, sans concept propre à un projet.
4. Ajouter la ligne dans la table « Patterns disponibles » ci-dessus.

## Checklist avant de conclure

- [ ] Tous les patterns en jeu identifiés (pas seulement le dominant)
- [ ] Fichiers de référence concernés réellement lus, et eux seuls
- [ ] Règles MUST respectées, ou écart explicitement signalé et justifié
- [ ] États critiques traités (pas seulement l'état nominal)
- [ ] Checklist propre à chaque pattern chargé passée
- [ ] Aucune recommandation improvisée présentée comme une règle du skill
