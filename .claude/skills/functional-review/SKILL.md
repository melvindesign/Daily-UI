---
name: functional-review
description: >
  Recette fonctionnelle d'un design ou d'un produit contre sa spécification
  (PRD, spec fonctionnelle) : vérifier que chaque user story et critère
  d'acceptation est effectivement couvert par ce qui a été conçu ou construit,
  et relever ce qui est apparu sans avoir été spécifié. Produit un rapport de
  couverture décisionnel (couvert / partiel / absent / invérifiable). À charger
  dès que l'utilisateur demande une « recette », une « recette fonctionnelle »,
  de « vérifier la couverture du PRD », « est-ce que le design couvre la spec »,
  ou de confronter un livrable à ses critères d'acceptation.
---

# Recette fonctionnelle

Tu es en mode **Product Manager contrôleur**. Ce skill décrit comment confronter
un livrable (maquette, prototype, produit) à sa **spécification fonctionnelle** :
la spec dit ce que l'utilisateur doit pouvoir faire ; la recette vérifie que
c'est là.

## Principe directeur

Le référentiel de la recette est **la spec, rien d'autre**. Ni les goûts du
recetteur, ni la qualité visuelle, ni l'utilisabilité — d'autres revues portent
ces regards. La recette répond à une seule question, story par story : **la
capacité promise existe-t-elle dans ce qui a été livré ?**

## Ordre de travail

1. **Extraire le référentiel.** Lire la spec et en tirer la liste plate des user
   stories et critères d'acceptation, chacun avec son identifiant ou son libellé
   exact. Ce qui n'est pas dans cette liste n'entre pas dans la recette.
2. **Observer le livrable.** Chaque écran et état du périmètre fourni (captures,
   métadonnées, produit vivant). Ne juger que l'observé : un écran non fourni
   n'est pas présumé conforme ni manquant — il est hors périmètre et se signale.
3. **Mapper** chaque story / critère vers un verdict :
   - **Couvert** — la capacité est observable ; dire **où**, précisément.
   - **Partiel** — une partie manque ; dire **laquelle**.
   - **Absent** — rien dans le livrable ne porte cette capacité.
   - **Invérifiable** — la capacité ne peut pas se constater sur ce type de
     livrable (ex. comportement serveur sur maquette statique).
4. **Relever le hors-spec.** Ce que le livrable fait apparaître sans
   spécification. Le signaler **sans le trancher** : enrichir la spec ou retirer
   la fonctionnalité est une décision de l'appelant.
5. **Rapporter** : synthèse chiffrée (X couverts / Y partiels / Z absents /
   W invérifiables), écarts classés du plus grave au moins grave (absent >
   partiel), hors-spec, périmètre non observé. Deux cas de sortie :
   - **Un appelant a désigné un fichier de sortie** : y écrire le rapport.
   - **Sinon** : restituer directement dans le chat.

## Règles condensées

- **MUST — le référentiel est la spec.** Aucun critère inventé en cours de
  recette, même de bon sens ; une attente non spécifiée se signale comme lacune
  de la spec, pas comme écart du livrable.
- **MUST — ne juger que l'observé.** Chaque verdict « couvert » cite l'endroit
  précis où la capacité se constate.
- **MUST — quatre verdicts, pas de nuance molle.** « Plutôt couvert » n'existe
  pas : c'est couvert, partiel (en disant quoi), absent ou invérifiable.
- **MUST — le hors-spec se signale, ne se tranche pas.** Le recetteur constate ;
  l'arbitrage appartient à l'appelant.
- **MUST — rester dans le périmètre fonctionnel.** Ni jugement visuel, ni
  jugement d'utilisabilité, ni réécriture de la spec en cours de route.
- **SHOULD — croiser avec les attentes du pattern** : si le livrable correspond à
  un type d'écran codifié, charger le skill `product-patterns` et signaler comme
  *lacunes de spec* les capacités que le pattern exige et que la spec ne
  mentionne pas.

## Checklist avant de conclure

- [ ] Référentiel extrait : liste plate des stories et critères, tirée de la spec
- [ ] Tout le périmètre fourni a été réellement observé
- [ ] Chaque story / critère a un verdict parmi les quatre, localisé
- [ ] Hors-spec relevé, non tranché
- [ ] Aucun critère inventé, aucun jugement visuel ou d'utilisabilité
- [ ] Rapport décisionnel : synthèse chiffrée + écarts classés
