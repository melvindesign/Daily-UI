---
name: design-mockup
description: >
  Concevoir une maquette exploitable — l'ensemble des écrans qui couvrent un
  besoin : parcours complet, états critiques, supports, variants qui portent une
  décision. Le livrable qu'on peut lire en revue et dont on peut développer,
  par opposition à une image de démonstration. Couvre la dérivation de la matrice
  de couverture depuis le besoin, les règles qui rendent le livrable révisable, et
  le contrat de sortie (terminé si / rejeté si). À charger dès qu'on conçoit un
  parcours, un flow multi-écrans, ou des écrans avec états et variants.
---

# Concevoir une maquette

Tu es en mode **Product Designer AI**. Une maquette est un livrable
**exploitable** : quelqu'un doit pouvoir la parcourir et savoir ce qui se passe à
chaque étape, dans chaque cas, sur chaque support.

## Principe directeur

Le test qui décide si le livrable est fini :

> Un développeur ou un PM peut-il parcourir la maquette et répondre seul à
> « et si ça échoue ? », « et si c'est vide ? », « et sur mobile ? » **sans poser
> de question** ?

Si non, ce n'est pas encore une maquette — c'est une belle image du cas nominal.

Deux conséquences :

- **On conçoit un parcours, pas son écran le plus intéressant.** Les étapes
  ingrates (confirmation, sortie, retour arrière) font partie du besoin.
- **Les états ne sont pas un supplément.** C'est là que le produit se joue, et
  les omettre ne fait pas gagner du temps : ça déplace le travail vers la revue,
  où il coûte plus cher.

## Ordre de travail

1. **Dériver la matrice de couverture** → [references/couverture.md](references/couverture.md).
   Depuis le besoin ou le PRD : les étapes, puis les états de chaque étape, puis
   les supports. **Avant de dessiner quoi que ce soit.** Une maquette dont la
   couverture se découvre en cours de route finit toujours par un état oublié.
   Matrice à remplir : [templates/COUVERTURE.md](templates/COUVERTURE.md).

2. **Croiser avec les attentes du type d'écran.** Le skill de patterns produit
   dit ce qu'un écran de ce type doit porter et quels états lui sont critiques.
   Ce qu'il exige et que le besoin ne mentionne pas est une **lacune à remonter**,
   pas un écran à inventer.

3. **Concevoir**, avec le skill d'exécution du design system. Ce skill-ci ne dit
   rien de la construction : ni composants, ni tokens, ni technique de
   représentation des états.

4. **Rendre le livrable révisable** → [references/lisibilite.md](references/lisibilite.md).
   Nommage, ordre de lecture, cohérence des données. Un livrable qu'on ne peut
   pas désigner en revue est un livrable qu'on ne peut pas corriger.

5. **Passer le gate** ci-dessous, matrice de couverture en main.

## Contenu du livrable

- **Le parcours entier.** Chaque étape du besoin a son écran, y compris les
  étapes sans intérêt visuel.
- **Les états critiques.** Un parcours n'est pas couvert par son seul état
  nominal. *La manière de les représenter — écran plein ou variant de composant —
  appartient au skill d'exécution. Ici on décide lesquels doivent exister.*
- **Chaque support demandé, traité pour lui-même.** Un support absent est un
  manque ; un support obtenu en rétrécissant un autre est un manque déguisé.
- **Les variants qui portent une décision.** Deux façons de résoudre le même
  écran figurent toutes les deux **si l'arbitrage revient à l'utilisateur** ;
  sinon une seule, la retenue. Un variant sans décision à trancher est du bruit.
- **Du contenu réel et continu** : le même utilisateur, les mêmes montants, les
  mêmes dates d'un bout à l'autre du parcours.

## Terminé si

- [ ] La matrice de couverture est remplie, et chaque case attendue a son écran
- [ ] Chaque étape du besoin a son écran — aucune étape sautée
- [ ] Chaque support demandé est traité, conçu pour lui-même
- [ ] Les états critiques figurent : au minimum erreur, vide et succès partout où
      le besoin les rend possibles
- [ ] Chaque écran est nommé selon la convention, l'ordre de lecture suit le parcours
- [ ] Contenu cohérent d'un écran à l'autre (mêmes données tout du long)
- [ ] Aucun texte placeholder
- [ ] Aucun écran orphelin : tout ce qui est dans la zone appartient au parcours
- [ ] L'audit de conformité au design system a été passé et **son résultat est déclaré**
- [ ] Les écarts non corrigés sont listés avec leur cause, pas laissés muets
- [ ] Les lacunes du besoin révélées par la matrice sont remontées

## Rejeté si

| Motif | Pourquoi |
|---|---|
| Un seul écran alors que le besoin décrit un parcours | Le livrable illustre un morceau du besoin au lieu d'y répondre |
| Seul l'état nominal est conçu | Déplace vers la revue le travail qui n'a pas été fait |
| Un support obtenu en rétrécissant un autre | Un petit écran n'est pas un grand écran réduit |
| Écrans non nommés, ordre de lecture arbitraire | Le livrable devient irrévisable : plus personne ne peut désigner un écran |
| Données incohérentes entre écrans | Le lecteur perd le fil du parcours et doute de tout le reste |
| Audit de conformité non passé ou non déclaré | « Terminé » sans gate est une affirmation, pas un constat |
| Élément custom hors design system posé sans autorisation | Une décision de l'utilisateur prise à sa place |

## Frontières

- **Comment construire** (instanciation, tokens, auto-layout, factorisation,
  audit) : skill d'exécution du design system.
- **Comment représenter un état** (écran plein vs variant de composant) : skill
  d'exécution. Ce skill exige la couverture, pas la technique.
- **Ce que doit contenir chaque écran** selon son type : skill de patterns produit.
- **Les mots de l'interface** : skill d'UX writing.
- **La découpe du besoin en étapes** : elle vient du PRD ou du brief. Ce skill la
  lit et la vérifie ; il ne la décide pas.
- **Une image de démonstration**, un écran, une idée : ce n'est pas ce livrable.
