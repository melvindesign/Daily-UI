# Matrice de couverture — <sujet>

> Remplir **avant** de concevoir. Une case = un écran à produire.
> Une case vide sans raison écrite est un oubli, pas une décision.

**Source du besoin** : <chemin du PRD, ou brief>
**Supports demandés** : <liste>

## Matrice

Une table par support. Colonnes = les états dérivés des issues de l'étape.

### Support : <nom>

| # | Étape | Nominal | Erreur | En cours | Vide | Succès | Indisponible |
|---|-------|---------|--------|----------|------|--------|--------------|
| 1 | <entrée> | ● | | | | | |
| 2 | <saisie> | ● | ● | ● | | | |
| 3 | <traitement> | ● | ● | ● | | ● | |
| 4 | <sortie> | ● | | | | | |

Légende : `●` case à concevoir · `—` sans objet, avec la raison en note ·
`?` en attente d'un arbitrage.

**Cases sans objet :**
- <étape / état> : <pourquoi cette case n'existe pas>

## Variants à trancher

Deux résolutions défendables du même écran, à comparer côte à côte.

- écran: <nom>
  option A: <parti pris>
  option B: <parti pris>
  ce que ça change pour l'utilisateur: <l'enjeu réel de l'arbitrage>

## Lacunes du besoin

États attendus par le type d'écran, absents du besoin. **À remonter, jamais à
combler en devinant.**

- état: <lequel>
  étape: <où il manquerait>
  attendu par: <le pattern concerné>
  proposition: <ce qu'on ferait si l'utilisateur l'autorisait>

## Synthèse

- écrans à concevoir : <nombre> · dont états non nominaux : <nombre>
- supports : <nombre>
- variants ouverts : <nombre>
- lacunes remontées : <nombre>
