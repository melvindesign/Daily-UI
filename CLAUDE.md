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

## Solar UI Design System

Contexte JSON local : `.claude/knowledge/` (manifeste `figma.json`, foundations, components).  
Les règles de design, la checklist et les clés Figma sont dans le skill `/solar-design`.

**Toujours invoquer `/solar-design` avant tout travail de design dans Figma.**
