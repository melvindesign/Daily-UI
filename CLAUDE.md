# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Projet de **Daily UI challenges** réalisés en vibe design avec Claude Code + Figma MCP, en utilisant le design system **Solar UI**.

Il y a **un seul fichier Figma** pour tous les challenges :  
https://www.figma.com/design/Oe0gTY9RsSmKMn8EcEiYan/Daily-UI--1---Sign-up

## Architecture : commands, skills, knowledge (contrat d'étanchéité)

Trois couches **étanches**. Cette séparation est le contrat le plus important du repo : chaque ajout (surtout un nouveau skill) doit la respecter.

| Couche | Emplacement | Contient | Ne contient JAMAIS |
|---|---|---|---|
| **Commands** | `.claude/commands/` | Ce qui est **propre au projet Daily UI** : orchestration des étapes, conventions du fichier Figma (pages `#X`, itérations, canvas), chemins `shots/`. Jetable hors de ce projet. | — |
| **Skills** | `.claude/skills/` | Une **compétence générique de designer**, valable pour n'importe quel projet/DS. Destinés à devenir un plugin. Principes, comportements, mécaniques Figma génériques. | Tout nom Solar UI (`Palette/*`, `Sizes/*`, fichiers foundation, familles, steps), tout concept Daily UI (itération, `#X`, `shots/`). |
| **Knowledge** | `.claude/knowledge/` | La **donnée du design system Solar UI** : manifeste (`figma.json`), foundations, specs de composants, clés de bibliothèque, conventions propres au DS. À terme servie par un MCP maison. | Impératifs de design universels (ils vivent dans le skill), mention Daily UI. |

### Critère de tri (à appliquer à chaque règle / fichier)

> **Skill** = le principe / comportement, vrai pour *n'importe quel* DS.
> **Knowledge** = ce qui casse si on retire Solar UI (un nom de token, une valeur, une famille, un step, une convention DS).
> **Command** = ce qui appartient au projet Daily UI (itération, nommage `#X`, canvas, `shots/`).
>
> Test skill : « Puis-je donner ce skill à un designer sur un autre DS, dans un autre projet, **sans rien changer** ? » S'il cite `Palette/9`, `Sizes/*`, Geist, `#f76b15`, « itération » ou `shots/` → ce n'est pas du skill.

**Seule tolérance temporaire** : un skill de design peut nommer `.claude/knowledge/figma.json` comme point d'entrée du manifeste, le temps qu'un MCP le serve. Rien d'autre de Solar/projet ne doit fuir dans un skill.

### Comment ça s'articule à l'exécution

Une command custom (spécifique au projet) charge les skills de design dont elle a besoin. Le skill `/design-with-ds` lit le manifeste `figma.json` qui décrit la structure du DS ; l'agent y résout tokens, styles et composants, puis conçoit dans Figma en s'appuyant sur les autres skills (ex. `/ux-writing`). Le skill reste muet sur Solar UI et Daily UI : il ne connaît que *comment consommer une knowledge de DS*, pas *quelle* knowledge.

## Structure Figma

- **Une page par challenge**, nommée `#X - Name` (ex. `#1 - Sign Up`)
- Chaque page contient les itérations successives du challenge

## Conventions d'itération

- Nommage incrémental : `#X - iteration Y` (ex. `#1 - iteration 5`)
- Chaque itération = une **SECTION** (`figma.createSection`, jamais un frame), **sans fond**, **≥ 3000 × ~3000**

### Règle de positionnement (critique)

Ne **jamais** consulter le contenu des itérations précédentes. Lire uniquement leur **position et dimensions** pour placer la nouvelle itération sans chevauchement. Chaque itération repart de zéro visuellement.

## Structure locale des shots

Les challenges sont organisés dans `shots/` :

```
shots/
  #1-sign-up/
    BENCHMARK.md
    ref/
    PRD.md
  #2-checkout/
    BENCHMARK.md
    ref/
    PRD.md
  …
```

- **`/shot:new`** — crée le dossier d'un nouveau challenge, puis lance d'abord `/benchmark` pour défricher le marché, et enfin délègue la rédaction du PRD au skill `/write-prd` (specs fonctionnelles uniquement, sans détails visuels) nourri par les enseignements du benchmark
- **`/shot:iterate`** — démarre ou continue une itération sur un challenge existant (lit le PRD, vérifie l'état Figma, demande un brief, puis lance le design)

## Solar UI Design System

Contexte JSON local : `.claude/knowledge/` (manifeste `figma.json`, foundations, components).  
Les règles de design, la checklist et l'exploitation de la knowledge sont dans le skill `/design-with-ds`.

**Toujours invoquer `/design-with-ds` avant tout travail de design dans Figma.**
