# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Projet de **Daily UI challenges** réalisés en vibe design avec Claude Code + Figma MCP, en utilisant le design system **Solar UI**.

Il y a **un seul fichier Figma** pour tous les challenges :  
https://www.figma.com/design/Oe0gTY9RsSmKMn8EcEiYan/Daily-UI--1---Sign-up

## Structure Figma

- **Une page par challenge**, nommée `#X - Name` (ex. `#1 - Sign Up`)
- Chaque page contient les itérations successives du challenge

## Conventions d'itération

- Nommage incrémental : `#X - iteration Y` (ex. `#1 - iteration 5`)
- Chaque itération = un frame **sans fond**, **≥ 3000 × ~3000**

### Règle de positionnement (critique)

Ne **jamais** consulter le contenu des itérations précédentes. Lire uniquement leur **position et dimensions** pour placer la nouvelle itération sans chevauchement. Chaque itération repart de zéro visuellement.

## Structure locale des shots

Les challenges sont organisés dans `shots/` :

```
shots/
  #1-sign-up/
    PRD.md
  #2-checkout/
    PRD.md
  …
```

- **`/shot:new`** — crée le dossier et le PRD d'un nouveau challenge (specs fonctionnelles uniquement, sans détails visuels)
- **`/shot:benchmark`** — challenge le PRD d'un challenge existant avec des références connues trouvées via le MCP Mobbin (analyse fonctionnelle), enregistre les références dans `ref/` et propose d'enrichir le PRD
- **`/shot:iterate`** — démarre ou continue une itération sur un challenge existant (lit le PRD, vérifie l'état Figma, demande un brief, puis lance le design)

## Solar UI Design System

Contexte JSON local : `.claude/knowledge/` (manifeste `figma.json`, foundations, components).  
Les règles de design, la checklist et l'exploitation de la knowledge sont dans le skill `/design-with-ds`.

**Toujours invoquer `/design-with-ds` avant tout travail de design dans Figma.**
