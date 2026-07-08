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
   - **Dossier de sortie** : où écrire `BENCHMARK.md` et le sous-dossier `ref/`.
     **Paramètre générique** — ne jamais présumer `shots/`. (Voir §Intégration
     Daily UI pour le cas de ce repo.)

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

5. **Restituer.** Écrire `<sortie>/BENCHMARK.md` d'après [templates/BENCHMARK.md](templates/BENCHMARK.md).
   Enregistrer chaque référence retenue dans `<sortie>/ref/` (nommage
   `NN-app-name.webp`) et citer sa source (URL) par ligne. N'inclure que les
   sections de lentille effectivement traitées.

Un exemple complet de bout en bout : [examples/walkthrough.md](examples/walkthrough.md).

## Intégration Daily UI (workflow `shots/`)

Ce skill **remplace** l'ancienne commande `/shot:benchmark`. Quand le sujet est un
Daily UI challenge (contexte `shots/#X-name/`) :

1. Déduire le dossier `shots/#X-name/` (demander le numéro/nom si absent).
2. Lire `shots/#X-name/PRD.md` pour le besoin **fonctionnel** ; en déduire la
   plateforme (`ios` si mobile, `web` sinon).
3. Lentille **par défaut = UX** (le PRD est fonctionnel). Ajouter la lentille UI
   seulement si l'utilisateur le demande.
4. Sauver dans `shots/#X-name/ref/`, écrire `shots/#X-name/BENCHMARK.md`.
5. **Proposer** ensuite une mise à jour du `PRD.md` :
   - N'éditer le PRD **que si l'utilisateur valide**.
   - Ajouts **fonctionnels uniquement** (mêmes règles que `/shot:new` : pas de
     visuel, pas de design system).
6. Confirmer : nombre de réfs dans `ref/`, chemin du `BENCHMARK.md`, résumé des
   changements PRD si validés, et rappeler `/shot:iterate` pour designer ensuite.

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
- **MUST — ne pas éditer un PRD/une spec sans accord** de l'utilisateur.
- **SHOULD — une intention par requête** de recherche, et couvrir le flux principal
  **et** les états critiques / alternatives.
- **SHOULD — citer chaque référence** par sa source (URL) et son fichier `ref/`.

## Checklist avant de conclure

- [ ] Brief cadré : sujet, plateforme, lentille(s), dossier de sortie
- [ ] Source choisie selon disponibilité (Mobbin > URLs/captures > autre MCP)
- [ ] ≥ 4 références ont **réellement** passé le gate visuel
- [ ] Analyse fondée sur l'observé, pas sur les titres de flow
- [ ] Conventions (≥3 réfs) séparées des opportunités de différenciation
- [ ] `BENCHMARK.md` écrit + images dans `ref/` + sources citées
- [ ] (Daily UI) MAJ du PRD **proposée**, appliquée seulement si validée
