---
name: benchmark
description: >
  Benchmark UI/UX d'un type d'écran ou de parcours contre des références connues
  du marché, pour distinguer ce qui est convention (à respecter) de ce qui est
  différenciant (à travailler). Acquiert les références depuis la meilleure source
  disponible (MCP Mobbin, URLs/captures fournies, autre MCP design), les filtre au
  gate visuel, puis produit une analyse UX (fonctionnelle) et/ou UI (visuelle).
  À charger dès que l'utilisateur demande un « benchmark UI/UX », « que font les
  concurrents / le marché », « références connues », « conventions du marché »,
  « patterns du marché », ou de challenger une spec/un PRD avec des références réelles.
---

# Benchmark UI/UX multi-sources

Tu es en mode **Product Researcher AI**. Ce skill décrit **comment benchmarker**
un écran ou un parcours contre des références réelles du marché — quelle que soit
la source disponible — et en tirer des enseignements exploitables.

## Principe directeur

L'utilisateur ne vit jamais un produit **isolément** : il arrive avec les attentes
de tous les autres produits de la même catégorie. Un écran qui ignore les
conventions de ses leaders n'est pas « original », il est **déroutant**. Le
benchmark sert donc à séparer :

- **Convention** (motif présent chez ≥3 références) → **à respecter**, c'est ce que
  l'utilisateur attend déjà.
- **Commodité / différenciation** (là où les leaders se ressemblent, ou une lacune
  de catégorie) → **là où se démarquer** délibérément.

On ne copie pas : on comprend le terrain de jeu, puis on décide où s'aligner et où
diverger.

## Ordre de travail

1. **Cadrer le brief.** Établir, en demandant à l'utilisateur si non précisé :
   - **Sujet** : catégorie / type d'écran ou de parcours (ex. « inscription
     mobile », « checkout e-commerce », « empty state dashboard »).
   - **Plateforme** : mobile (`ios`) / web / desktop — conditionne la recherche.
   - **Lentille(s)** : **UX** (fonctionnel), **UI** (visuel), ou **les deux**.
     Par défaut, si l'objectif est de nourrir une spec/PRD → UX ; si l'objectif est
     l'inspiration visuelle → UI. En cas de doute, demander.

2. **Choisir la source et acquérir les références** → [references/sources.md](references/sources.md).
   Détecter les sources disponibles, prendre la meilleure (MCP Mobbin > URLs/captures
   fournies > autre MCP design), et **sur-échantillonner 2–3×** le nombre visé, car
   beaucoup de candidates seront rejetées au gate visuel.

3. **Passer le gate visuel** → [references/visual-gate.md](references/visual-gate.md).
   Obligatoire pour **chaque** candidate, **quelle que soit la source** : ouvrir
   réellement l'image, classer d'après les pixels, rejeter le hors-sujet, vérifier
   la cohérence description ↔ image. Viser 4 à 8 références retenues.

4. **Analyser selon la/les lentille(s)** → [references/lenses.md](references/lenses.md).
   Ne s'appuyer **que sur ce qui a été réellement observé** à l'étape 3. Extraire
   les **conventions** et les **opportunités de différenciation**.

5. **Restituer** l'analyse d'après [templates/BENCHMARK.md](templates/BENCHMARK.md) :
   références citées (source/URL), conventions, opportunités de différenciation, en
   ne gardant que les sections de lentille effectivement traitées. Deux cas de sortie :
   - **Un appelant a désigné un fichier de sortie** (p. ex. une commande qui délègue) :
     y écrire le `BENCHMARK.md` et enregistrer chaque référence retenue dans un
     sous-dossier `ref/` (nommage `NN-app-name.webp`), source citée par ligne.
   - **Sinon** (invocation directe) : restituer directement dans le chat, sans écrire
     de fichier.

Ce skill produit l'analyse et s'arrête là : il ne rédige ni n'édite aucune spec.
L'exploitation des enseignements (cadrage, PRD, design) appartient à l'appelant.

## Contrat de sortie

| Cas | Destination |
|---|---|
| Un dossier de sortie est fourni | `<sortie>/BENCHMARK.md` **et** `<sortie>/ref/`, une référence retenue par fichier, nommée `NN-nom-de-la-source.<ext>` |
| Aucune sortie fournie | Restitution directe à l'appelant, **aucun fichier écrit** |

Écrire des fichiers sans destination fournie, ou écrire ailleurs que dans
`<sortie>`, est un dépassement de périmètre. Les sections de lentille non
traitées sont **retirées**, pas laissées vides.

**Motifs de rejet** — un benchmark complet en apparence est renvoyé si :

| Motif | Pourquoi |
|---|---|
| Une observation sans référence rattachée | Invérifiable : le livrable ne peut plus être challengé |
| Une référence citée mais absente de `ref/` | Le lecteur ne peut pas revenir à la source ; l'analyse devient parole d'évangile |
| Convention et différenciation mélangées | Le livrable ne sert plus à décider où s'aligner et où diverger |
| Une spec, un PRD ou une reco de design rédigés | Le benchmark a débordé sur le travail de l'appelant |
| Fichiers écrits sans destination fournie | Dépôt non demandé, hors périmètre |

Un exemple complet de bout en bout : [examples/walkthrough.md](examples/walkthrough.md).

## Règles condensées

Le détail est dans les fichiers `references/`. En condensé :

- **MUST — ≥3 références valides.** En dessous, le signal de convention est
  insuffisant. Relancer l'acquisition si le gate en laisse < 4.
- **MUST — gate visuel systématique.** Ne jamais retenir une référence sur la foi
  de ses métadonnées / de son titre. Voir [references/visual-gate.md](references/visual-gate.md).
- **MUST — ne décrire que l'observé.** Ce que tu écris (« erreur inline »,
  « jauge de force ») doit être **effectivement visible** dans l'image.
- **MUST — distinguer convention vs choix isolé.** Un motif présent chez une seule
  référence n'est pas une convention.
- **MUST — rester dans le périmètre du benchmark.** Produire `BENCHMARK.md` et les
  réfs ; ne pas rédiger ni éditer de spec/PRD — c'est le rôle de l'appelant.
- **SHOULD — une intention par requête** de recherche, et couvrir le flux principal
  **et** les états critiques / alternatives.
- **SHOULD — citer chaque référence** par sa source (URL) et son fichier `ref/`.

## Checklist avant de conclure

- [ ] Brief cadré : sujet, plateforme, lentille(s)
- [ ] Source choisie selon disponibilité (Mobbin > URLs/captures > autre MCP)
- [ ] ≥ 4 références ont **réellement** passé le gate visuel
- [ ] Analyse fondée sur l'observé, pas sur les titres de flow
- [ ] Conventions (≥3 réfs) séparées des opportunités de différenciation
- [ ] Restitution faite : dans le chat, ou `BENCHMARK.md` + `ref/` si un fichier de sortie est désigné
- [ ] Chaque référence citée est présente dans `ref/` et rattachée à sa source
- [ ] Nombre de références retenues déclaré, pas sous-entendu
- [ ] Aucune spec/PRD rédigée ou éditée : enseignements restitués à l'appelant
- [ ] Aucun des cinq motifs de rejet ne s'applique
