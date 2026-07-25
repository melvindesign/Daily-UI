# Rendre le livrable révisable

Une maquette juste mais illisible en revue ne produit aucune correction : les
retours deviennent vagues (« l'écran du milieu, là »), les décisions se perdent,
et le travail se refait. Ces règles ne concernent pas l'apparence des écrans —
elles concernent la capacité du livrable à être **parcouru, désigné et corrigé**.

## Nommage

Chaque écran porte un nom qui l'identifie **sans l'ouvrir** :

```
<étape> — <support> — <état>
```

- L'**état** est omis quand c'est l'état nominal.
- Le **support** est omis s'il n'y en a qu'un dans le livrable.
- L'**étape** ne s'omet jamais.

Exemples : `Paiement — mobile — carte refusée`, `Confirmation — desktop`,
`Liste — vide premier usage`.

Ce que ça permet, et qui justifie la contrainte : un rapport de revue, un audit
ou une recette peuvent **citer un écran par son nom** et l'appelant le retrouve
sans chercher. Un livrable dont les écrans s'appellent `Frame 42` ne peut pas
être audité — les constats deviennent non localisables.

## Ordre de lecture

Les écrans se disposent selon l'axe donné par l'appelant, **dans l'ordre du
parcours**. Le lecteur suit le flux sans chercher l'écran suivant.

- Les **états d'une même étape** restent groupés avec leur étape, pas rassemblés
  dans une zone « états » à part. On lit une étape et tous ses cas d'un coup.
- Les **supports** ne s'entrelacent pas : un parcours complet par support, l'un
  après l'autre. Alterner desktop et mobile écran par écran rend les deux
  parcours illisibles.
- Les **variants** se posent côte à côte, à la même hauteur, pour être comparés
  d'un regard. Un variant qu'on ne peut pas comparer ne sert pas à décider.

## Cohérence des données

Le même utilisateur, les mêmes montants, les mêmes dates d'un bout à l'autre du
parcours. Ce n'est pas du soin décoratif : quand les données changent d'un écran
à l'autre, le lecteur cesse de suivre le parcours et se met à chercher l'erreur.
Il doute alors de tout le reste, y compris de ce qui est juste.

À tenir en particulier :

- Le **fil du parcours** — le panier de l'étape 1 est celui qu'on paie à l'étape 3.
- Les **totaux** s'additionnent réellement.
- Les **dates** sont compatibles entre elles et récentes.
- L'**identité** de l'utilisateur ne change pas en cours de route.

## Rien d'orphelin

Tout ce qui se trouve dans la zone de travail appartient au parcours livré.
Écrans d'essai, versions abandonnées, morceaux mis de côté : retirés avant de
rendre. Un écran orphelin sera lu comme faisant partie du livrable, et il
produira des retours sur du travail qui n'existe plus.

## Ce que le livrable déclare en le rendant

Sans quoi la revue commence par une enquête :

- La **matrice de couverture** et ses cases volontairement vides, avec leur raison.
- Le **résultat de l'audit de conformité**, et les écarts non corrigés avec leur cause.
- Les **lacunes du besoin** révélées pendant la dérivation.
- Les **arbitrages** qui reviennent à l'utilisateur, et où les regarder.
