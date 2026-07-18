# Grille d'heuristiques

La grille qualifie et complète le déroulé du scénario (étape 3 du skill). Pour
chaque heuristique : la question à se poser, et des violations typiques pour
calibrer l'œil. Les dix premières sont les heuristiques de Nielsen ; les trois
dernières les complètent sur la charge cognitive et l'accessibilité de base.

## 1. Visibilité de l'état du système

**Question :** à tout moment du scénario, l'utilisateur sait-il où il en est et ce
qui se passe ?
**Violations typiques :** action sans feedback ; étape courante invisible dans un
parcours multi-étapes ; chargement sans indicateur ; soumission sans confirmation.

## 2. Correspondance système / monde réel

**Question :** les mots et concepts sont-ils ceux de l'utilisateur, pas ceux du
produit ?
**Violations typiques :** jargon interne ou technique ; ordre des informations qui
suit la logique de la base de données plutôt que celle de la tâche.

## 3. Contrôle et liberté de l'utilisateur

**Question :** peut-on revenir en arrière, annuler, sortir — sans pénalité ?
**Violations typiques :** pas de retour possible dans un flux ; annulation
introuvable ; modale sans issue ; saisie perdue en changeant d'étape.

## 4. Cohérence et standards

**Question :** un même geste produit-il le même effet partout, et l'écran
respecte-t-il les conventions de sa catégorie ?
**Violations typiques :** deux styles pour une même action ; terme qui change
entre deux écrans ; convention de catégorie ignorée sans bénéfice.

## 5. Prévention des erreurs

**Question :** le design empêche-t-il l'erreur plutôt que de la signaler après
coup ?
**Violations typiques :** format attendu non indiqué avant la saisie ; action
destructive sans confirmation ; champs ambigus (deux interprétations possibles).

## 6. Reconnaissance plutôt que rappel

**Question :** tout ce qu'il faut pour décider est-il visible, sans devoir se
souvenir d'un écran précédent ?
**Violations typiques :** récapitulatif absent au moment de confirmer ; options
cachées derrière une interaction non signalée ; libellé qui suppose un contexte
que l'écran ne donne pas.

## 7. Flexibilité et efficacité

**Question :** le chemin fréquent est-il le chemin court ?
**Violations typiques :** action principale au même niveau visuel que les actions
rares ; ressaisie d'informations déjà connues ; raccourci évident absent
(ex. connexion via un compte existant).

## 8. Design esthétique et minimaliste

**Question :** chaque élément visible sert-il la tâche du scénario ?
**Violations typiques :** informations concurrentes autour de l'action principale ;
décoration qui masque la hiérarchie ; densité qui noie l'essentiel.

## 9. Aide à la reconnaissance et à la récupération des erreurs

**Question :** une erreur dit-elle ce qui s'est passé, en langage clair, et
comment s'en sortir ?
**Violations typiques :** message générique (« une erreur est survenue ») ; erreur
affichée loin du champ concerné ; code d'erreur sans traduction ; pas d'issue
proposée.

## 10. Aide et documentation

**Question :** l'aide nécessaire est-elle disponible au moment et à l'endroit du
besoin ?
**Violations typiques :** règle de saisie révélée seulement après l'échec ;
information contractuelle (prix, engagement, conditions) absente au moment de la
décision.

## 11. Charge cognitive

**Question :** combien de décisions et d'informations l'écran demande-t-il de
tenir en tête d'un coup ?
**Violations typiques :** trop de choix simultanés sans défaut recommandé ;
formulaire long non découpé ; deux tâches entremêlées dans un même écran.

## 12. Hiérarchie de l'attention

**Question :** le premier regard tombe-t-il sur ce qui sert le scénario ?
**Violations typiques :** action principale moins saillante qu'une action
secondaire ; élément périphérique qui capte l'attention ; parcours de lecture qui
contredit l'ordre de la tâche.

## 13. Accessibilité de base

**Question :** l'écran reste-t-il utilisable pour quelqu'un qui voit moins bien,
lit lentement, ou vise moins précisément ?
**Violations typiques :** contraste texte/fond manifestement insuffisant ; cibles
tactiles minuscules ou collées ; information portée par la couleur seule ; texte
essentiel trop petit.

---

**Rappel de méthode :** dérouler le *scénario* d'abord, la grille ensuite. Un
constat doit citer l'heuristique par son numéro et son nom (ex. « H5 — Prévention
des erreurs »).
