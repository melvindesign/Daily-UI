---
name: write-prd
description: >
  Rédige un PRD — un document de spécification fonctionnelle léger mais précis :
  ce que l'utilisateur doit pouvoir faire, pas comment c'est réalisé visuellement.
  Guide l'élicitation du besoin (bonnes questions), la structuration (objectif,
  user stories, flux, critères d'acceptation légers, hors-scope) et le contrôle
  qualité (fonctionnel-only, ni trop vague ni trop lourd). À charger quand l'utilisateur veut « rédiger
  un PRD », « spécifier une fonctionnalité », « écrire une spec », « cadrer le
  besoin fonctionnel » ou « créer le document de spécification » d'un écran/parcours.
---

# Rédaction de PRD

Tu es en mode **Product Manager AI**. Ce skill porte le savoir-faire pour produire
un **PRD léger mais précis** : assez court pour être lu d'un coup, assez net pour
lever toute ambiguïté sur ce que l'utilisateur doit pouvoir faire.

## Principe directeur

Un PRD est un **contrat d'intention fonctionnelle**, pas un cahier de design. Il
décrit le **quoi** (ce que l'utilisateur doit pouvoir accomplir), jamais le
**comment visuel** (composants, layout, couleurs, tokens). Sa qualité se mesure à
deux choses : il ne laisse pas de zone d'ombre fonctionnelle, et il tient sur une
page.

Le PRD pose une **base d'intention claire**, pas un cahier exhaustif. Ne sur-spécule
pas : exploite le contexte fourni (description, éléments passés par l'appelant) et
laisse les partis-pris discutables ouverts plutôt que de les figer arbitrairement.

## Ordre de travail

1. **Élicitation** → [references/elicitation.md](references/elicitation.md).
   Poser les bonnes questions pour cerner le besoin **avant** d'écrire : objectif,
   acteurs, flux principal + alternatives, règles/validations, hors-scope. Ne
   demander que ce qui manque ; ne rien inventer ; s'arrêter dès qu'on peut écrire
   un PRD non-ambigu.

2. **Rédaction** → [templates/PRD.md](templates/PRD.md). Structurer en :
   **Objectif** · **User stories** (2-3) · **Fonctionnalités** (flux) ·
   **Critères d'acceptation** (légers, vérifiables) · **Hors scope**.

3. **Contrôle qualité** → [references/writing-rules.md](references/writing-rules.md).
   Passer la barre : fonctionnel uniquement (zéro fuite visuelle), ni trop vague ni
   trop lourd, chaque critère d'acceptation réellement vérifiable, user stories
   orientées bénéfice.

4. **Enchaînement.** Rappeler la suite : passer au design.

## Sortie

- Le **dossier et le nom de fichier de sortie** sont des paramètres. Les demander
  s'ils ne sont pas précisés ; ne jamais présumer un emplacement.
- Le contexte (sujet, description initiale) peut être passé directement par
  l'utilisateur ou délégué par un skill appelant. Compléter l'élicitation si la
  description initiale laisse des trous fonctionnels.

## Règles condensées

Le détail est dans [references/writing-rules.md](references/writing-rules.md). En condensé :

- **MUST — fonctionnel uniquement.** Aucun visuel : pas de « bouton bleu »,
  « input bordé », layout, espacements, couleurs, design system, tokens.
- **MUST — ne rien inventer.** Ce qui est écrit vient de l'élicitation, pas d'une
  supposition. En cas de trou, demander.
- **MUST — critères d'acceptation vérifiables.** Chaque critère est un énoncé
  qu'on peut trancher vrai/faux.
- **MUST — flux calibré.** Chaque étape du flux déclare ses **issues** (succès →
  où ; échec/abandon → quel état, quelle sortie) et ses **états** pertinents
  (erreur, chargement, vide, succès) formulés en capacités.
- **SHOULD — rester court.** Viser une page ; couper le superflu.
- **SHOULD — user stories orientées bénéfice** (« afin de… »), pas solution.
- **SHOULD — ne pas sur-spéculer** sur les partis-pris discutables : poser un choix
  clair sans figer arbitrairement ce qui reste ouvert.

## Checklist avant de conclure

- [ ] Besoin élicité (objectif, acteurs, flux, règles, hors-scope) — pas d'invention
- [ ] PRD structuré : Objectif · User stories · Fonctionnalités · Critères d'acceptation · Hors scope
- [ ] Zéro fuite visuelle (aucune mention de composant / couleur / layout / token)
- [ ] Chaque étape du flux déclare ses issues (succès, échecs, abandon)
- [ ] Chaque étape du flux a ses états pertinents, en capacités
- [ ] Chaque critère d'acceptation est vérifiable
- [ ] Tient sur une page ; rien de superflu
- [ ] Dossier/fichier de sortie confirmé (jamais présumé)
- [ ] Suite rappelée : passage au design
