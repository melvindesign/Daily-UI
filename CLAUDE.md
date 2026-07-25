# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Projet de **Daily UI challenges** réalisés en vibe design avec Claude Code + Figma MCP, en utilisant le design system **Solar UI**.

Il y a **un seul fichier Figma** pour tous les challenges :  
https://www.figma.com/design/Oe0gTY9RsSmKMn8EcEiYan/Daily-UI--1---Sign-up

## Architecture : commands, agents, skills, knowledge (contrat d'étanchéité)

Quatre couches **étanches**. Cette séparation est le contrat le plus important du repo : chaque ajout (surtout un nouveau skill ou agent) doit la respecter.

| Couche | Emplacement | Contient | Ne contient JAMAIS |
|---|---|---|---|
| **Commands** | `.claude/commands/` | Ce qui est **propre au projet Daily UI** : orchestration des étapes, conventions du fichier Figma (pages `#X`, itérations, canvas), chemins `shots/`. Jetable hors de ce projet. | — |
| **Agents** | `.claude/agents/` | Un **métier générique d'une équipe produit** (ex. `ux-researcher`) : positionnement dans l'équipe, skills qu'il charge, standards du poste. Destinés au même plugin que les skills — à terme, une équipe produit complète. | Tout nom Solar UI, tout concept Daily UI. Le contexte spécifique (sujet, chemins de sortie) lui est injecté par la command dans le brief de mission. |

**Chaque fichier d'agent est coupé en deux sections de premier niveau** :

| Section | Contenu | Portable ? |
|---|---|---|
| `# Métier` | Périmètre, frontières du poste, calibrage du jugement, compétences chargées, standards | **Oui** — vrai que le rôle soit tenu par un sub-agent ou incarné par l'orchestrateur |
| `# Exécution en agent` | Brief reçu, protocoles de relance (ex. élicitation en deux passes), mode dégradé, gabarits de rapport | **Non** — n'existe que parce qu'un sub-agent ne peut pas dialoguer et que son rapport est lu par une machine |

**Déléguer vs incarner.** En `mono-agent`, une command n'appelle aucun agent : elle
**incarne** le rôle — lit `.claude/agents/<nom>.md`, applique ses sections `Métier`,
ignore `Exécution en agent`, charge les skills de son frontmatter. Le métier n'est donc
jamais dupliqué dans une command. Règle de partage : **incarner ce qui dialogue**
(cadrage d'un PRD, arbitrages en cours de route), **déléguer ce qui consomme du
contexte** (benchmark, conception Figma) **ou ce qui exige un regard neuf** (challenge
de spec, audits).
| **Skills** | `.claude/skills/` | Une **compétence générique de designer**, valable pour n'importe quel projet/DS. Destinés à devenir un plugin. Principes, comportements, mécaniques Figma génériques. | Tout nom Solar UI (`Palette/*`, `Sizes/*`, fichiers foundation, familles, steps), tout concept Daily UI (itération, `#X`, `shots/`). |
| **Knowledge** | `.claude/knowledge/` | Deux natures de donnée déclarative : **(1)** la **donnée du design system Solar UI** — manifeste (`figma.json`), foundations, specs de composants, clés de bibliothèque, conventions propres au DS (à terme servie par un MCP maison) ; **(2)** les **préférences de workflow de l'utilisateur** (`preferences.json`) — mode agentique, disposition des itérations. | Impératifs de design universels (ils vivent dans le skill), mention Daily UI. |

**Agent vs skill** : le skill porte une *méthode* (comment benchmarker, comment écrire un PRD) ; l'agent porte un *métier* (qui fait quoi dans l'équipe, avec quels standards) et charge les skills correspondant à sa mission. Un agent s'exécute dans son propre contexte : on y délègue les tâches autonomes et gourmandes en contexte (ex. recherche avec beaucoup d'images), et il ne restitue qu'un rapport compact.

### Critère de tri (à appliquer à chaque règle / fichier)

> **Skill** = le principe / comportement, vrai pour *n'importe quel* DS.
> **Knowledge** = ce qui casse si on retire Solar UI (un nom de token, une valeur, une famille, un step, une convention DS).
> **Command** = ce qui appartient au projet Daily UI (itération, nommage `#X`, canvas, `shots/`).
>
> Test skill : « Puis-je donner ce skill à un designer sur un autre DS, dans un autre projet, **sans rien changer** ? » S'il cite `Palette/9`, `Sizes/*`, Geist, `#f76b15`, « itération » ou `shots/` → ce n'est pas du skill.

**Deux fichiers de knowledge tolérés dans un skill** :

1. `.claude/knowledge/figma.json` — point d'entrée du manifeste DS, le temps qu'un MCP le serve (tolérance temporaire).
2. `.claude/knowledge/preferences.json` — les préférences de workflow de l'utilisateur. Le lire ne compromet pas le caractère plugin-ready d'un skill : ce fichier ne nomme **ni Solar UI ni Daily UI**, et ses valeurs (`section`, `horizontal`, `mono-agent`) sont du vocabulaire Figma/workflow générique.

Rien d'autre de Solar/projet ne doit fuir dans un skill.

### Comment ça s'articule à l'exécution

Une command custom (spécifique au projet) commence par **lire `preferences.json`** : `agentic.mode` décide si elle fait le travail elle-même (`mono-agent`) ou le délègue à un agent de l'équipe (`sub-agents`, `multi-agent`), et `layout` décide de la forme des itérations dans Figma. Elle charge ensuite les skills de design dont elle a besoin, ou délègue une mission à un agent avec un brief complet (l'agent ne peut pas poser de questions en cours de mission). Le skill `/design-with-ds` lit le manifeste `figma.json` qui décrit la structure du DS ; on y résout tokens, styles et composants, puis on conçoit dans Figma en s'appuyant sur les autres skills (ex. `/ux-writing`). Skills et agents restent muets sur Solar UI et Daily UI : ils ne connaissent que *comment consommer une knowledge de DS*, pas *quelle* knowledge.

## Structure Figma

- **Une page par challenge**, nommée `#X - Name` (ex. `#1 - Sign Up`)
- Chaque page contient les itérations successives du challenge

## Conventions d'itération

- Nommage incrémental : `#X - iteration Y` (ex. `#1 - iteration 5`)
- Chaque itération = un conteneur **sans fond**, dimensionné à `layout.minSize` (≥ 3000 × ~3000)
- Le **type** du conteneur, l'**axe d'empilement** entre itérations et la **disposition des écrans à l'intérieur** viennent de `layout` dans `.claude/knowledge/preferences.json` — jamais d'une décision prise au fil de l'eau. Par défaut : **SECTION** (`figma.createSection`), itérations empilées **verticalement**, écrans disposés **horizontalement** à l'intérieur.

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

### Deux familles de commands, deux livrables

Les deux familles partagent la même arborescence `shots/`, le même fichier Figma et
la même convention d'itération. Ce qui change, c'est le **livrable visé** — donc le
skill de design chargé et la façon dont le résultat est jugé.

| | `shot:*` — image de démonstration | `mockup:*` — maquette exploitable |
|---|---|---|
| Livrable | un écran, une idée, jugé en vignette (Dribbble, Instagram, X) | le parcours entier : étapes × états × supports |
| Skill de design | `/design-shot` | `/design-mockup` |
| Cadrage | benchmark + PRD via skill `/write-prd` | PRD **cadré par le rôle `product-manager`**, élicitation persistée dans `BRIEF.md` |
| Forme de la command | orchestration : la command déroule les étapes elle-même | la command apporte le **contexte projet**, le **rôle** fait le travail — délégué ou incarné |
| Revue par défaut | audits au choix | **recette fonctionnelle** contre le PRD |

- **`/shot:new`** — crée le dossier d'un nouveau challenge, puis fait le benchmark pour défricher le marché (skill `/benchmark` — délégué à l'agent `ux-researcher` ou conduit en direct selon `agentic.mode`), et enfin délègue la rédaction du PRD au skill `/write-prd` (specs fonctionnelles uniquement, sans détails visuels) nourri par les enseignements du benchmark
- **`/shot:iterate`** — démarre ou continue une itération sur un challenge existant (lit les préférences, lit le PRD, vérifie l'état Figma, demande un brief, puis conçoit — en direct ou via des agents `product-designer` selon `agentic.mode`)
- **`/mockup:new`** — chaîne de rôles : collecte du trivial → `ux-researcher` (`BENCHMARK.md`, **délégué même en mono-agent** : la recherche sature un contexte) → `product-manager` passe 1 (ses questions structurantes, relayées en dialogue, réponses persistées dans `BRIEF.md`) → `product-manager` passe 2 (`PRD.md`) → `product-manager` **neuf** pour un challenge à froid (optionnel). Le benchmark précède l'élicitation : un PM qui connaît le marché pose de meilleures questions
- **`/mockup:design`** — résout la page, pose le conteneur d'itération, briefe l'agent `product-designer` (skill `/design-mockup`, matrice de couverture dans `shots/#X-name/COUVERTURE.md`), restitue. Les revues sont appelées à la demande

**Deux formes de command.** `shot:*` **orchestre** : la command déroule les étapes et
branche sur `agentic.mode`, jusqu'à faire le travail elle-même en `mono-agent`.
`mockup:*` est un **passe-plat** : la command ne porte que ce que l'agent ne peut pas
deviner (contexte projet, conventions Figma, brief de l'utilisateur) et lance l'agent —
le métier, les protocoles et les contrats de sortie restent dans l'agent et ses skills,
jamais dupliqués dans la command.

Le script de création du conteneur d'itération est partagé :
`.claude/commands/shot/scripts/new-iteration-container.js` (source unique, référencée
par les deux familles).

## Solar UI Design System

Contexte JSON local : `.claude/knowledge/` (manifeste `figma.json`, foundations, components).  
Les règles de design, la checklist et l'exploitation de la knowledge sont dans le skill `/design-with-ds`.

**Toujours invoquer `/design-with-ds` avant tout travail de design dans Figma.**
