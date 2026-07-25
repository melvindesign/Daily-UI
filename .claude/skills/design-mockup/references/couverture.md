# Dériver la matrice de couverture

La couverture se **dérive du besoin**, elle ne s'improvise pas en dessinant. Une
maquette dont on découvre le périmètre au fil des écrans finit systématiquement
avec un état manquant — et c'est toujours le même genre d'état qui manque : celui
qu'on ne voit pas quand tout se passe bien.

Trois passes, dans cet ordre. Chacune ne peut se faire qu'une fois la précédente
figée.

## Passe 1 — Les étapes

Lister les étapes du parcours telles que le besoin les décrit. Une étape = un
moment où l'utilisateur voit quelque chose de différent et peut agir.

Ce qu'on oublie systématiquement, et qui compte comme une étape :

- **L'entrée** — d'où l'utilisateur arrive, et ce qu'il voit avant d'agir.
- **La confirmation** — ce qui prouve que ça a marché.
- **La sortie** — où il atterrit une fois fini, ou s'il abandonne.
- **Le retour arrière** — ce qu'il retrouve s'il revient sur une étape.

Une étape sans intérêt visuel reste une étape. Elle se conçoit.

## Passe 2 — Les états de chaque étape

Pour chaque étape, la question n'est pas « quels états existent en général » mais
**« quelles issues cette étape déclare »**. Un besoin bien écrit les nomme déjà :
succès → où ; échec → quoi ; abandon → quel état.

Grille de dérivation, à appliquer étape par étape :

| Si l'étape… | …alors elle a un état |
|---|---|
| attend une saisie de l'utilisateur | **erreur de saisie**, au niveau du champ concerné |
| dépend d'un traitement ou d'un envoi | **en cours**, et **échec du traitement** |
| affiche du contenu qui peut ne pas exister | **vide**, et le vide a une cause qui change la réponse |
| conclut le parcours ou une transaction | **succès**, explicite, pas juste un retour silencieux |
| a des conditions d'accès | **indisponible / non autorisé** |

**Un état ne compte que s'il change la lecture de l'écran.** Un champ en focus,
un bouton survolé, un élément désactivé n'ouvrent pas une case de la matrice —
ils appartiennent au composant. La case s'ouvre quand l'utilisateur voit un
écran différent et doit décider autre chose.

**Croiser ensuite avec le type d'écran.** Le skill de patterns produit énumère
les états critiques d'un pattern donné. Un état que le pattern juge critique et
que le besoin ne mentionne pas est une **lacune du besoin** : on le remonte à
l'appelant, on ne le comble pas en silence. Le remonter est un livrable ; le
deviner est une dette.

## Passe 3 — Les supports

Pour chaque case (étape × état), déterminer si elle doit exister sur chaque
support demandé.

- **Par défaut, oui.** Un parcours ne perd pas une étape en changeant d'écran.
- **Sauf si le besoin dit le contraire** — une capacité réservée à un support est
  une décision, elle doit être écrite quelque part.
- **Chaque support se conçoit pour lui-même.** Ce qui change entre supports n'est
  pas seulement la largeur : c'est souvent la découpe des étapes (ce qui tient en
  une étape sur grand écran en demande deux sur petit) et la place des actions.

Si un support impose une découpe différente, la matrice de ce support a ses
propres lignes. Ne pas forcer une correspondance ligne à ligne.

## Ce que la matrice produit

Un tableau rempli, une case = un écran à concevoir → [../templates/COUVERTURE.md](../templates/COUVERTURE.md).

Et trois sorties qui ne sont pas des écrans, à remonter à l'appelant :

1. **Les lacunes du besoin** — états attendus par le pattern, absents du besoin.
2. **Les cases volontairement vides** — avec leur raison. Une case vide sans
   raison est un oubli ; une case vide justifiée est une décision.
3. **Les arbitrages qui reviennent à l'utilisateur** — les endroits où deux
   résolutions sont défendables, et qui deviendront des variants.

## Erreurs de dérivation fréquentes

| Erreur | Ce qu'elle coûte |
|---|---|
| Dériver les états de l'écran plutôt que des issues de l'étape | On produit les états qu'on sait dessiner, pas ceux dont le parcours a besoin |
| Traiter le vide comme un seul état | Le vide de premier usage et le vide de recherche infructueuse appellent des réponses opposées |
| Reporter la passe 3 après la conception | Le support secondaire hérite d'une découpe pensée pour l'autre |
| Ouvrir une case pour un micro-état | La matrice se dilue, et les vrais états s'y perdent |
| Combler une lacune du besoin en la devinant | La décision de l'utilisateur est prise à sa place, sans qu'il le sache |
