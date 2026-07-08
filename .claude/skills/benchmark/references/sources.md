# Source-layer — acquérir des références quelle que soit la source

Ce fichier décrit **d'où** viennent les références et **comment** les acquérir.
C'est le cœur générique du skill : un utilisateur a le MCP Mobbin, un autre non —
la méthode d'analyse ne change pas, seule l'**acquisition** change.

## Principe : toutes les sources convergent

Peu importe la source, l'objectif est identique : produire un **jeu d'images
candidates** que l'on passera au [gate visuel](visual-gate.md), puis à l'analyse.
Une source est valide si elle fournit :

1. des **images** réelles d'écrans/parcours (pas seulement du texte) ;
2. une **provenance citable** (URL, nom d'app, ou fichier fourni).

```
[source dispo] → candidates (images) → gate visuel → références retenues → analyse
```

## Détection & priorité

Choisir la **meilleure source disponible**, dans cet ordre :

1. **MCP Mobbin** — si les outils `mcp__mobbin__*` sont présents dans la session.
   Source privilégiée : large, indexée par app/flow/écran, avec captures.
2. **URLs / captures fournies par l'utilisateur** — fallback **universel**,
   toujours possible même sans aucun MCP. À privilégier aussi quand l'utilisateur
   a déjà une short-list de références en tête.
3. **Autre MCP design** (Pencil, bibliothèque interne, etc.) — si un MCP fournit
   des designs de référence exportables en image. Voir §Point d'extension.

Si **aucune** source ne fournit d'images → le benchmark ne peut pas se faire à
l'aveugle : demander à l'utilisateur des URLs ou des captures (source 2).

## Recette par source

### 1. MCP Mobbin

Outils :

| Outil | Usage |
|---|---|
| `mcp__mobbin__search_flows` | Parcours multi-étapes (onboarding, checkout, sign up…) — utile surtout pour la lentille **UX**. |
| `mcp__mobbin__search_screens` | Écrans précis d'un flux (formulaire, état d'erreur, succès). |
| `mcp__mobbin__search_sections` | Sections / patterns UI (hero, pricing table, nav, empty state…) — utile surtout pour la lentille **UI**. |

Règles de recherche :

- Requêtes en **langage naturel**, **une intention par requête** (ne pas combiner
  plusieurs flux dans une même requête).
- Renseigner la bonne **`platform`** déduite du brief (`ios` pour mobile, `web` sinon).
- Lancer **plusieurs requêtes** pour couvrir : le cas principal **+** les
  alternatives / états critiques (erreur, chargement, succès, empty).
- **Sur-échantillonner** : récupérer au moins **2–3×** le nombre visé, car beaucoup
  seront rejetées au gate visuel.
- **Télécharger** chaque candidate (puis la lire) — ne jamais juger sur le titre.
- Conserver le `mobbin_url` de chaque candidate retenue pour la citation.

### 2. URLs / captures fournies par l'utilisateur

- L'utilisateur donne soit des **URLs** de références, soit des **fichiers**
  (captures d'écran) directement.
- Pour des URLs d'images : les télécharger dans un dossier de travail, puis les lire.
- Pour des captures fournies : les lire telles quelles.
- Si l'utilisateur ne donne que des **noms d'apps/produits** sans image, lui
  demander les captures ou des URLs pointant vers les écrans concernés — ne pas
  décrire un écran qu'on n'a pas vu.
- **Citation** : URL fournie, ou « capture fournie par l'utilisateur » + nom du produit.

### 3. Autre MCP design (point d'extension)

Patron générique, à instancier selon le MCP présent (ex. Pencil) :

1. Interroger le MCP pour des **designs / écrans de référence** correspondant au sujet.
2. **Exporter** chaque candidate en image (screenshot / export de nœud).
3. Converger vers le [gate visuel](visual-gate.md) comme les autres sources.
4. **Citation** : identifiant/URL du design dans l'outil source.

> Pour brancher une nouvelle source, il suffit de fournir : (a) une façon de
> **lister des candidates** et (b) une façon d'en **obtenir l'image** + une
> provenance citable. Le reste du pipeline (gate → analyse → restitution) est commun.

## Récapitulatif — source → outils → citation

| Source | Comment lister | Comment obtenir l'image | Citation dans `BENCHMARK.md` |
|---|---|---|---|
| MCP Mobbin | `search_flows` / `search_screens` / `search_sections` | download de la capture Mobbin | `[App](mobbin_url)` |
| URLs / captures fournies | fournies par l'utilisateur | download de l'URL / fichier lu | `[Produit](url)` ou « capture fournie » |
| Autre MCP design | requête au MCP | export/screenshot du nœud | identifiant/URL de l'outil |
