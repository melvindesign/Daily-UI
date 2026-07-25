# Composer la surface

Ce fichier traite la **couche de présentation** : ce qui entoure l'écran et le
donne à voir. Il ne dit rien de l'intérieur de l'écran — sa construction
appartient au skill d'exécution, son contenu au skill de patterns produit.

## Les trois couches

1. **L'écran** — l'interface montrée, entière ou recadrée.
2. **Le cadre** — ce qui détache l'écran de l'environnement : son fond opaque, sa
   bordure, son élévation.
3. **L'environnement** — le fond sur lequel l'écran pose. Toujours subordonné :
   il porte l'écran, il ne concourt pas avec lui.

**Test de détachement** : masquer mentalement l'environnement ne doit rien
changer à la lisibilité de l'écran. Si l'écran perd ses contours quand le fond
disparaît, il n'a pas de cadre — il se fond dans le décor et cesse d'être lu
comme un objet.

## Décider du cadrage

| Situation | Cadrage |
|---|---|
| L'idée tient dans une zone de l'écran | **Recadrer serré** sur cette zone. Une zone parlante et lisible bat toujours un écran entier en miniature. |
| L'idée est la structure de l'écran | Écran entier, mais vérifier en vignette que la structure reste lisible. |
| L'idée est une transition ou une comparaison | Deux vues du **même** écran, jamais deux écrans différents. |

Ce qui reste illisible après cadrage doit être **clairement décoratif** : hors
focus, coupé par le bord du cadre, en retrait. Un élément simplement trop petit
pour être lu, mais présenté comme s'il devait l'être, est une faute — le lecteur
essaie de le lire et échoue.

## Hiérarchie du regard

Le shot doit avoir un point d'entrée unique et évident. Dans l'ordre :

1. **Ce qui porte l'idée** — le plus grand, le plus contrasté, ou le seul en
   couleur d'accent.
2. **Ce qui la situe** — le contexte minimal pour comprendre de quel écran il
   s'agit.
3. **Tout le reste** — présent pour la crédibilité, jamais pour être lu.

Deux éléments d'égale importance créent une hésitation, et l'hésitation en
vignette se solde par un scroll. Si deux choses se disputent le regard, l'une des
deux doit descendre d'un cran, ou sortir.

## Mise en scène

L'écran peut être posé à plat, incliné, partiellement sorti du cadre, accompagné
d'un second plan. Deux règles seulement :

- **La mise en scène sert la lisibilité ou elle disparaît.** Une inclinaison qui
  déforme le texte au point qu'on ne le lit plus a coûté l'idée pour gagner un
  effet.
- **Sortir du cadre est un choix, pas un accident.** Un élément coupé par le bord
  se lit comme « ça continue » ; un élément coupé par erreur se lit comme un
  cadrage raté. La différence tient à ce qui est coupé : jamais l'action
  principale, jamais un texte à lire.

## Contenu de l'écran

- **Données crédibles et cohérentes** : noms plausibles, montants qui s'additionnent,
  dates récentes et compatibles entre elles.
- **Aucun état technique** : ni chargement, ni erreur, ni vide, ni élément
  désactivé. Le shot montre le régime de croisière.
- **Montrer de l'activité humaine** quand le produit s'y prête — noms, avatars,
  horodatages récents, statuts en cours. Un produit collaboratif se démontre par
  la présence visible de ses utilisateurs.

## Anti-patterns

| Anti-pattern | Ce qu'il produit |
|---|---|
| Écran entier réduit pour « tout montrer » | Rien n'est lisible, l'idée disparaît |
| Écran nu sur fond plein, sans cadre ni ombre | Se fond dans le décor, cesse d'être lu comme un objet |
| Environnement chargé (motifs, dégradés violents, objets) | Concourt avec l'écran et gagne, parce qu'il est plus grand |
| Perspective forte sur un écran plein de texte | L'effet est vu, l'interface ne l'est plus |
| Placeholder visible, valeurs à zéro | Crédibilité perdue, et avec elle l'intérêt |
