# Dashboard

S'applique à tout **écran de monitoring ou de synthèse de données** : vue
d'ensemble d'un produit SaaS, tableau de bord analytique, écran de suivi
opérationnel. Le premier usage (dashboard sans données) relève aussi du pattern
[onboarding.md](onboarding.md).

## Job de l'écran

Répondre **d'un coup d'œil** aux questions clés de l'utilisateur — « est-ce que
tout va bien ? », « où dois-je agir ? » — et déclencher la bonne action.
Test des 5 secondes : en 5 secondes, l'utilisateur doit savoir si la situation
est normale et, sinon, où regarder. Un dashboard n'est **pas un rapport** : il
montre l'état et pointe vers l'action, le détail vit derrière (drill-down).

Avant tout choix, identifier le **type** — il dicte le reste :

| Type | Usage | Conséquences |
|---|---|---|
| **Opérationnel** | Surveiller en continu, réagir vite | Page unique sans scroll, données fraîches/temps réel, alertes saillantes |
| **Analytique** | Explorer, comprendre, comparer | Filtres riches, drill-down, multi-vues acceptable |
| **Stratégique** | Suivre des objectifs périodiquement | Peu de KPIs, tendances longues, comparaison à la cible |

## Anatomie canonique

1. **En-tête de contrôle** : contexte (quoi / pour qui), période et filtres
   globaux, **fraîcheur des données** (« mis à jour il y a… »).
2. **Rangée de KPIs** (3 à 5) : par carte — un chiffre lisible, un label clair,
   et un **contexte** (tendance, delta vs période précédente, cible).
3. **Zone principale** : 1–2 visualisations qui répondent aux questions
   prioritaires.
4. **Zone secondaire** : listes, tables, détails — les points d'entrée du
   drill-down.

Le plus important en **haut à gauche** : le balayage suit un F (recherche NN/g),
et sur une rangée de cartes identiques l'attention décroît de gauche à droite.

## Règles

### MUST

- **Partir des questions, pas des données.** Lister les questions que
  l'utilisateur se pose, puis un widget par question. Tout widget qui ne
  répond à aucune question menant à une décision ou une action est supprimé.
- **Test des 5 secondes.** L'information critique en haut à gauche, dominante
  par la taille et le contraste ; le reste visuellement subordonné.
- **Jamais un chiffre nu.** Chaque KPI porte sa référence : tendance,
  comparaison à la période précédente, ou cible. « 1 247 » ne veut rien dire ;
  « 1 247, +12 % vs mois dernier » est une information.
- **Le graphique se choisit par la question.** Évolution dans le temps →
  ligne ; comparaison entre catégories → barres ; répartition → barres empilées
  ou aire (le camembert ne tient que pour 2–3 parts) ; lecture précise de
  valeurs → table. Jamais de 3D ni de décoration sur les données.
- **Budget de widgets.** 3–5 KPIs en tête, 5–9 widgets par vue au total.
  Au-delà, découper en vues ou déplacer derrière un drill-down.
- **Une seule période de référence.** Tous les widgets alignés sur la période
  des filtres globaux ; toute exception est étiquetée sur le widget.
- **Fraîcheur affichée.** L'utilisateur sait de quand datent les données ; un
  dashboard opérationnel affiche son rythme de rafraîchissement.
- **Distinguer « zéro » de « pas de données ».** Une valeur nulle est une
  information ; une donnée manquante est un état à part, jamais un 0 silencieux.

### SHOULD

- **Vue d'ensemble → détail** (divulgation progressive) : l'écran répond au
  « quoi », le clic sur un widget ouvre le « pourquoi ». Chaque widget
  synthétique est un point d'entrée, pas une impasse.
- **Encre au service de la donnée** (data-ink ratio) : pas de fonds, bordures,
  ombres ou légendes qui n'ajoutent rien ; la donnée est l'élément le plus
  contrasté de la carte.
- **La couleur est un signal, pas un décor.** Réserver les couleurs
  sémantiques (alerte, succès) aux états qui le sont vraiment ; si tout est
  coloré, plus rien n'alerte.
- **Sparklines et deltas** sur les cartes KPI : la tendance en un coup d'œil
  sans ouvrir le détail.
- **Des défauts excellents avant la personnalisation.** La vue par défaut doit
  servir 80 % des cas ; la personnalisation (réordonner, masquer) vient en
  plus, jamais comme excuse d'un défaut médiocre.
- **Formater les nombres pour la lecture** : arrondis significatifs (12,4 k),
  unités explicites, alignement décimal dans les tables.

### AVOID (anti-patterns)

- **Le data dump** : tout afficher sans hiérarchie — l'erreur n°1 documentée
  (« trop de types d'informations sur une même vue »).
- **La grille uniforme** où tous les widgets ont la même taille et le même
  poids : si tout est important, rien ne l'est.
- **KPIs de vanité** : métriques qui flattent mais ne déclenchent aucune
  décision.
- **Camemberts en série, jauges, 3D**, décorations pseudo-« cockpit ».
- **Couleur décorative qui mime un signal** (du rouge qui n'est pas une
  alerte).
- **Le scroll infini de widgets** en guise d'architecture.
- **Axes tronqués ou doubles axes** non signalés : la comparaison visuelle ment.

## États critiques

- **Premier usage (aucune donnée)** : jamais une grille de cartes vides — un
  empty state prescriptif qui dit quoi faire pour alimenter le dashboard
  (connecter une source, créer le premier élément), ou des données de
  démonstration. Voir [onboarding.md](onboarding.md).
- **Chargement** : skeleton par widget (la structure de la page est stable,
  pas de sauts de layout) ; viser un rendu perçu rapide, le dashboard est
  souvent le premier écran de la session.
- **Erreur partielle** : un widget en échec affiche son erreur et son retry
  localement — il ne casse jamais la page entière.
- **Données périmées** : si le rafraîchissement échoue, le montrer (« données
  d'il y a 2 h ») plutôt que d'afficher du vieux comme du frais.
- **Filtre sans résultat** : le dire explicitement et proposer d'élargir —
  distinct de « pas encore de données ».

## Adaptations mobile

- **Re-prioriser, pas rétrécir** : colonne unique ordonnée par importance —
  KPIs d'abord, puis la visualisation principale ; la grille desktop réduite
  est illisible.
- **Consulter plutôt que manipuler** : le mobile sert le coup d'œil et
  l'alerte ; l'exploration fine (filtres riches, tables larges) reste sur
  desktop ou passe dans des écrans de détail dédiés.
- Le drill-down devient une **navigation** (écran de détail par widget), pas
  des popovers.
- Tables réduites aux colonnes essentielles, valeurs critiques en cartes.

## Checklist de revue

- [ ] Type identifié (opérationnel / analytique / stratégique) et choix alignés
- [ ] Chaque widget répond à une question explicite menant à une action
- [ ] Test 5 secondes : l'essentiel domine en haut à gauche
- [ ] Aucun chiffre nu : tendance, comparaison ou cible sur chaque KPI
- [ ] Types de graphiques justifiés par la question posée
- [ ] Budget respecté : 3–5 KPIs, 5–9 widgets par vue
- [ ] Période unique et visible ; exceptions étiquetées ; fraîcheur affichée
- [ ] Couleur sémantique réservée aux vrais signaux
- [ ] États conçus : premier usage, skeletons, erreur partielle par widget, filtre vide
- [ ] Zéro et « pas de données » distingués
- [ ] Mobile : colonne unique re-priorisée, drill-down en navigation

## Sources

- Stephen Few — Information Dashboard Design / Perceptual Edge (dashboard = vue à un coup d'œil, data-ink ratio, anti-patterns) — https://www.perceptualedge.com/library.php
- Pencil & Paper — Dashboard Design UX Patterns Best Practices — https://www.pencilandpaper.io/articles/ux-pattern-analysis-data-dashboards
- UXPin — Dashboard Design Principles: The Definitive Guide — https://www.uxpin.com/studio/blog/dashboard-design-principles/
- Setproduct — Dashboard UI design: From KPIs to layouts — https://www.setproduct.com/blog/dashboard-ui-design
- Context.dev — Dashboard Design Best Practices for SaaS — https://www.context.dev/blog/dashboard-design-best-practices
- 5of10 — Dashboard Design Best Practices (F-pattern, glanceable zone) — https://5of10.com/articles/dashboard-design-best-practices/
