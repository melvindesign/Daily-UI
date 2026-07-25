---
name: design-with-ds
description: Designer dans Figma en s'appuyant sur la knowledge d'un design system. À charger avant tout travail de design dans Figma : explique comment lire l'architecture de knowledge (manifeste + foundations + composants), les règles de conception à respecter, et fournit des scripts JS canoniques prêts à coller dans use_figma pour les opérations répétées (liaison de tokens, instanciation de composants, audit de conformité).
---

# Design avec le design system dans Figma

Tu es en mode **Product Designer AI**. Ce skill décrit **comment exploiter la knowledge du design system** (dossier `.claude/knowledge/`) pour concevoir correctement dans Figma, et fournit des **scripts réutilisables** pour ne pas ré-écrire à chaque fois les mêmes séquences d'API.

## Ordre de travail

1. **Charge le cache de knowledge** → [references/knowledge-cache.md](references/knowledge-cache.md). Toujours lire `.claude/knowledge/figma.json` en premier, puis les foundations et specs pertinentes. La knowledge est la **seule source de vérité** pour valeurs, tokens, styles, variants et clés de bibliothèque.
2. **Charge les skills Figma d'exécution**, dans cet ordre :
   1. `/figma-use` — contexte Plugin API (OBLIGATOIRE avant tout `use_figma`)
   2. `/figma-generate-design` — workflow de génération section par section
3. **Applique les règles de conception** → [references/design-rules.md](references/design-rules.md) (composants, couleurs, typo, sizing, spacing, états + procédures « custom » et « couleur fixe »).
4. **Réutilise les scripts** au lieu de ré-écrire l'API à la main → dossier [`scripts/`](scripts/) (voir ci-dessous).

## Scripts réutilisables (`scripts/`)

`use_figma` est **isolé et atomique** : aucun état ne persiste entre les appels. Les « scripts » ne sont donc pas des modules chargés une fois, mais du **code canonique figé** à coller dans un appel `use_figma` — ça évite de re-dériver des séquences longues et source d'erreurs.

| Fichier | Usage |
|---|---|
| [`scripts/_prelude.js`](scripts/_prelude.js) | Bloc de helpers (`applyColor`, `applyText`, `setText`, `bindSpacing`, `autoLayout`, `applyMode`, `instantiate`) à **coller en tête** d'un `use_figma`, puis à appeler. C'est le mode d'emploi quotidien. |
| [`scripts/factor-local-component.js`](scripts/factor-local-component.js) | **Factorisation d'un assemblage répété** en composant local : convertit l'occurrence de référence en composant, range la définition hors du flux et remplace les autres occurrences par des instances (même parent, index, position, sizing). La correction canonique des `repeatedAssemblies` de l'audit. |
| [`scripts/fix-default-containers.js`](scripts/fix-default-containers.js) | **Filet sur les conteneurs laissés par défaut** : repasse `clipsContent` à `false` (hors viewports/masques explicitement préservés) et retire les fills blancs non liés posés par `createFrame` / `createAutoLayout`. La correction canonique des `clippedContainers` et des `unboundFills` de défaut ; les fills non liés qui portent une vraie couleur sont **listés**, pas supprimés — ils doivent être liés à un token. |
| [`scripts/audit-conformance.js`](scripts/audit-conformance.js) | **Audit de conformité** : scanne les nœuds racines (`ROOT_IDS` — la zone de travail **et** les définitions de composants locaux rangées hors du flux) et remonte texte sans style, fills non liés, espacements en dur, `clipsContent` hors cas légitimes, fills masqués (`visible: false`), instances atténuées à la main (`opacity < 1`), **assemblages répétés non factorisés** et **rôles du DS redessinés à la main** (renseigner `DS_COMPONENT_NAMES` avec l'inventaire complet lu dans la knowledge). À lancer avant de conclure une maquette. |
| [`scripts/snippets.md`](scripts/snippets.md) | Les mêmes opérations en **snippets autonomes documentés** (pour comprendre/déboguer, sans le prelude). |

Un exemple complet de bout en bout : [examples/walkthrough.md](examples/walkthrough.md).

> Règle : préfère toujours ces scripts. Ne re-dérive une séquence à la main que si le cas sort du cadre couvert ici.

## Règles non négociables (résumé)

Le détail et les procédures sont dans [references/design-rules.md](references/design-rules.md). En condensé :

- **Composants** — TOUJOURS instancier depuis la bibliothèque, jamais redessiner.
- **Inventaire des rôles avant de dessiner** — liste les rôles UI de l'écran en langage de besoin, mappe chacun sur un composant du DS en balayant l'inventaire **complet** (une famille qui paraît hors-sujet peut porter le composant : la taxonomie du DS n'est pas une table des besoins). Le custom n'est jamais une initiative : trou confirmé → demander l'autorisation, ou remonter le blocage si tu es en autonomie.
- **Patterns répétés** — dès qu'un assemblage se répète dans la maquette (entre breakpoints, entre étapes d'un flow, dans un même écran), en faire un **composant local** (un par pattern ou un à variantes) instancié partout : une seule source de vérité, jamais de copier-coller de calques.
- **Couleurs** — jamais de hex en dur ; chaque fill lié à un token de couleur sémantique. Attention au fill blanc par défaut de `createFrame`.
- **Typo** — jamais de style custom ; toujours un style du DS via `setTextStyleIdAsync`, choisi par rôle sémantique.
- **Sizing** — `fill-container` / `hug-content` par défaut ; dimensions fixes rares. `clipsContent` reste `false` par défaut, activé seulement si le rognage est réellement voulu (page, média, zone scrollable).
- **Spacing** — jamais de valeur en dur ; chaque gap/padding/rayon lié à un token d'espacement. Séparateurs = composant, jamais un trait dessiné.
- **Proximité** — l'espace encode l'appartenance ; rythme cohérent sur trois niveaux ; l'erreur plus proche de son champ que les champs entre eux.
- **Coins concentriques** — élément arrondi dans un conteneur arrondi : rayon externe = rayon interne + padding.
- **États** — au minimum `Default` ; formulaires : `Default` + `Invalid` + `Disabled`.

## Checklist avant de commencer

- [ ] `.claude/knowledge/figma.json` lu (structure du DS + conventions de variables)
- [ ] Foundations pertinentes lues : au minimum couleurs, typographie, espacement
- [ ] Spec(s) de composants pertinente(s) lue(s)
- [ ] **Inventaire des rôles fait** : chaque rôle UI de l'écran mappé sur un composant du DS (inventaire complet balayé), aucun rôle laissé implicite
- [ ] Skills `/figma-use` et `/figma-generate-design` chargés
- [ ] Fichier / page Figma de destination identifié

**Contrôles de conformité pendant la conception :**
- [ ] Aucun fill par défaut laissé : chaque frame transparent ou lié à une variable de fond
- [ ] Aucune valeur en dur : couleurs, typos et espacements liés à des variables / styles / tokens
- [ ] Aucun `clipsContent` activé sans raison : `false` par défaut, `true` seulement si le rognage est voulu (page, média, zone scrollable)
- [ ] Tout assemblage répété (breakpoints, étapes d'un flow, éléments récurrents) est un **composant local** instancié, pas un copier-coller de calques → à corriger avec `scripts/factor-local-component.js`
- [ ] `scripts/audit-conformance.js` lancé sur **toutes** les racines (zone de travail + définitions des composants locaux) → `ok: true`
