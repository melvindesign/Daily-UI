# PRD — <sujet>

<!--
Gabarit de PRD : léger mais précis, fonctionnel uniquement.
Titre en contexte Daily UI : « # PRD — #X Name » (ex. « # PRD — #1 Sign Up »).
Supprimer les commentaires et les exemples entre crochets avant de livrer.
-->

## Objectif

[Une phrase : ce que l'utilisateur doit pouvoir accomplir avec cet écran/parcours.]

## Métriques de succès

<!-- Comment on saura que le besoin est rempli : les indicateurs, pas forcément des
     cibles chiffrées. Omettre seulement si vraiment sans objet. -->
- [ex. taux de complétion du parcours, taux d'activation, délai jusqu'à la 1re valeur]

## User stories

<!-- 2-3 max, orientées bénéfice -->
- En tant que <rôle>, je veux <action> afin de <bénéfice>.
- …

## Fonctionnalités

<!-- chaque étape déclare ses issues (où mènent succès et échecs) et ses états
     (des capacités fonctionnelles, jamais des apparences) -->

### <Flux principal>

1. **<Étape>** — [action ou information attendue]
   - *Issues* : succès → [étape suivante] ; [échec / abandon] → [état + porte de sortie]
   - *États* : [parmi erreur / chargement / vide / succès — ceux qui s'appliquent]
2. …

### <Flux alternatif / méthode>
- [point d'entrée, étapes propres, et où il rejoint le flux principal]

## Critères d'acceptation

<!-- énoncés vérifiables vrai/faux ; quelques-uns par flux clé -->
- [ ] <critère fonctionnel vérifiable>
- …

### Accessibilité

<!-- l'a11y comme critères fonctionnels, pas comme détail technique -->
- [ ] [ex. erreurs annoncées à l'assistance ; navigation clavier ; focus géré ; claviers / cibles adaptés sur mobile]

## Priorisation

<!-- distinguer le cœur du confort -->
- **Must** — [le cœur du parcours, sans quoi le besoin n'est pas rempli]
- **Should** — [ce qui améliore conversion / confort, non bloquant]

## Hors scope

- Toute considération visuelle ou de design system
- [autre exclusion explicite éventuelle]
