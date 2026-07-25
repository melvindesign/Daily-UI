# Exemple déroulé — un shot Dribbble

Cas fictif, pour montrer les décisions et leurs raisons. Le sujet : un écran de
gestion de dépenses d'équipe, déjà conçu, à démontrer sur Dribbble.

## 1. Cadrer le canal

Canal fourni par l'appelant : **Dribbble**. Donc 4:3, surface de 2800 × 2100 en
HiDPI, et un jugement à ~400 × 300.

Conséquence immédiate, posée **avant** de composer : à cette taille de vignette,
l'écran desktop entier serait illisible. On sait déjà qu'on va recadrer.

## 2. Choisir l'idée démontrable

L'écran fait beaucoup de choses : liste des dépenses, filtres, graphique de
répartition, validation en un clic, export.

Premier jet d'idée : « la gestion des dépenses d'équipe, avec validation rapide
et suivi du budget ». Il y a un « et », et même deux — c'est un sommaire, pas une
idée.

Idée retenue, en une phrase : **« valider une dépense sans quitter la liste »**.

Ce que ça décide tout de suite : la ligne de dépense en cours de validation
devient le sujet, le graphique de répartition sort du cadrage, l'export
n'apparaît nulle part.

## 3. Composer la surface

**Cadrage.** L'idée tient dans une zone — trois lignes de la liste, dont celle en
cours de validation avec son action visible. C'est ce qu'on montre, pas l'écran
entier. Le reste de l'écran (barre latérale, en-tête) est coupé par le bord du
cadre : présent pour situer, clairement décoratif, jamais présenté comme à lire.

**Cadre.** La zone recadrée a son fond opaque et une ombre portée. Test de
détachement : on masque l'environnement, la zone reste lisible comme un objet.
Validé.

**Environnement.** Un aplat sourd, sans motif. L'écran est le seul élément
contrasté de la surface.

**Hiérarchie.** Point d'entrée = l'action de validation, seul élément en couleur
d'accent. Puis le montant de la dépense, qui situe. Le reste (dates, catégories,
avatars) existe pour la crédibilité.

Un arbitrage : l'avatar du demandeur était aussi en couleur d'accent et se
disputait le regard avec l'action. Il descend d'un cran — teinte neutre.

**Marges.** 5 % de 2100, soit ~105 px. L'action de validation est bien à
l'intérieur ; la barre latérale coupée est en dehors, ce qui est voulu.

## 4. Contenu réel

Noms de collaborateurs plausibles, montants qui s'additionnent au total affiché,
dates de la semaine en cours. Aucune ligne désactivée, aucun skeleton, aucun état
d'erreur — même si l'écran réel en a : ils appartiennent au livrable de
conception, pas ici.

## 5. Test de vignette

Réduction à 400 × 300, une seconde de regard. Question : quelle est l'idée ?

Premier passage : la réponse ne vient pas — on voit « une liste ». Le bouton de
validation est trop discret à cette taille.

Correction : recadrage **encore plus serré** (deux lignes au lieu de trois),
l'action gagne en surface relative. On ne grossit pas le texte, on retire du
contenu.

Second passage : « on valide quelque chose depuis une liste ». L'idée passe.

## 6. Gate

Toutes les lignes de « Terminé si » tranchées vrai. La surface est nommée
`Validation de dépense — Dribbble`.

## Ce que cet exemple illustre

- L'idée se formule **avant** la composition et décide du cadrage — pas l'inverse.
- Le test de vignette a produit une **correction réelle**, et la correction a été
  de **retirer**, pas d'agrandir.
- Les états conçus dans le produit réel n'ont aucune place ici, même s'ils
  existent et qu'ils sont bons.
