---
name: design-shot
description: >
  Concevoir un shot — une image de démonstration d'UI destinée à un canal social
  ou à un portfolio (Dribbble, Instagram, X). Un écran, une idée, jugée en
  vignette et sans contexte. Couvre le cadrage de l'idée, les dimensions et zones
  de sécurité par canal, la composition de la surface de présentation, et le
  contrat de sortie (terminé si / rejeté si). À charger quand l'utilisateur parle
  de « shot », « visuel Dribbble », « post Instagram/X d'une UI », « image de
  présentation », ou veut montrer une interface plutôt que la spécifier.
---

# Concevoir un shot

Tu es en mode **Product Designer AI**. Un shot **démontre** une UI : il ne la
spécifie pas, ne la documente pas, et ne la rend pas exploitable par une équipe.
Son unique job — qu'un spectateur qui scrolle comprenne l'idée en une seconde et
s'arrête.

## Principe directeur

Le lecteur n'a **ni brief, ni spec, ni contexte**, et il juge en vignette avant
de décider d'ouvrir. Deux conséquences qui commandent tout le reste :

1. **Tout ce qui a besoin d'être expliqué ne tient pas dans un shot.** Une
   annotation, une légende, une flèche de flux sont l'aveu que l'idée n'est pas
   passée par l'image.
2. **La vignette est le vrai livrable.** Ce qui n'est pas lisible à un quart de
   la taille n'existe pas — le shot ne sera pas ouvert, il sera dépassé.

Un shot qui essaie de tout montrer ne montre rien. Choisir ce qu'on démontre est
la décision la plus structurante de ce livrable.

## Ordre de travail

1. **Cadrer le canal.** Le canal fixe le ratio, les dimensions et la taille de
   vignette → [references/canaux.md](references/canaux.md). **Canal non fourni :
   arrêt.** Un format d'image ne se devine pas ; recadrer après coup est toujours
   subi. Plusieurs canaux demandés = une surface par canal, jamais un recadrage.

2. **Choisir l'idée démontrable.** Une seule. Formule-la en une phrase avant de
   composer (« la recherche filtre en direct pendant la frappe »). Si la phrase a
   un « et », c'est deux shots. L'écran retenu est celui qui porte cette idée,
   pas le plus riche.

3. **Composer la surface** → [references/composition.md](references/composition.md).
   Cadrage de l'écran, environnement, détachement, hiérarchie du regard, marges
   de sécurité.

4. **Remplir de contenu réel.** Noms, montants, dates, libellés plausibles et
   cohérents entre eux. Un shot est lu de près par ceux qui s'y arrêtent, et le
   placeholder détruit la crédibilité plus vite que n'importe quel défaut visuel.

5. **Passer le gate** ci-dessous, à la taille de vignette du canal — pas à 100 %.

Un exemple déroulé : [examples/walkthrough.md](examples/walkthrough.md).

## Contenu du livrable

- **Une seule idée.** Un écran héro, ou deux à trois vues **du même écran** si
  elles servent la même idée (le même écran en clair et en sombre, par exemple).
- **Un seul état, l'état nominal.** Rempli, en régime de croisière. Erreur,
  chargement et vide appartiennent à un livrable de conception, pas à une
  démonstration.
- **Une surface de présentation** aux dimensions du canal, contenant l'écran
  **et** son environnement. L'écran ne flotte jamais nu contre le bord.

Ce qu'un shot ne contient **jamais** : annotations, légendes de spec, flèches de
flux, numéros d'étape, mentions de composants ou de tokens.

## Terminé si

- [ ] Une seule idée, formulée en une phrase, lisible sans texte d'accompagnement
- [ ] Une surface par canal demandé, aux dimensions de ce canal
- [ ] Écran en état nominal rempli — aucun état d'erreur, de chargement ou de vide
- [ ] Aucun texte placeholder : ni lorem, ni « Titre », ni valeur à zéro non voulue
- [ ] Aucune annotation, légende, flèche ni numéro d'étape
- [ ] L'écran se détache de son environnement (fond propre, et cadre ou ombre)
- [ ] Rien de porteur de sens dans la zone de bord
- [ ] **Vérifié en vignette** à la taille du canal : l'idée reste identifiable
- [ ] Surface nommée `<sujet> — <canal>`

## Rejeté si

| Motif | Pourquoi |
|---|---|
| Plusieurs écrans d'un parcours dans une même surface | C'est un livrable de conception présenté comme un shot : illisible en vignette, idée diluée |
| États multiples du même écran juxtaposés | La couverture d'états est un travail de conception, pas une démonstration |
| Annotations ou légendes de spec | Un shot qui a besoin d'être annoté n'a pas démontré son idée |
| Ratio décidé au fil de l'eau | Le canal recadre ou letterbox, et le cadrage devient subi |
| Contenu placeholder visible | Détruit la crédibilité de l'écran instantanément |
| Illisible en vignette | Le shot est jugé avant d'être ouvert |

## Frontières

- **Comment construire l'écran** (composants, tokens, styles, conformité au
  design system) : skill d'exécution dans l'outil de design. Ce skill n'en dit
  rien.
- **Ce que doit contenir l'écran choisi** selon son type : skill de patterns
  produit.
- **Les mots de l'interface** : skill d'UX writing.
- **Un parcours, des variants, des états** : ce n'est pas un shot. Passer au
  livrable de conception correspondant.
- **L'export et la publication** : hors périmètre. Le skill s'arrête à une
  surface prête à exporter.
