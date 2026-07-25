# New Mockup — Cadrage du besoin

Créer le dossier d'un challenge destiné à une **maquette exploitable** (parcours
complet, états, supports), et produire son PRD.

Cette command ne cadre pas et ne rédige pas : elle apporte le contexte projet et
enchaîne les rôles. Le travail est fait par le **UX Researcher** puis le **Product
Manager** — **délégués** à des sub-agents ou **incarnés** par toi, selon les
préférences.

Le workflow, dans cet ordre :

```
1. collecte le trivial        → numéro, nom, besoin, supports
2. ux-researcher              → BENCHMARK.md            (contexte lourd, isolé)
3. product-manager, passe 1   → ses questions structurantes
   relayées en dialogue       → réponses écrites dans BRIEF.md
4. product-manager, passe 2   → PRD.md                  (besoin + BENCHMARK + BRIEF)
5. product-manager neuf       → challenge à froid       (optionnel)
```

**L'ordre n'est pas décoratif.** Le benchmark vient avant l'élicitation parce qu'un
PM qui connaît le marché pose de meilleures questions : il sait ce qui est convention
(donc attendu sans être dit) et ce qui est un choix à trancher. Élicité d'abord,
benchmarké ensuite, le PRD se serait figé sur les seules intuitions de l'utilisateur.

> Famille `mockup:*` — livrable exploitable, skill `design-mockup`.
> Pour un visuel de démonstration (Dribbble, Instagram), c'est `/shot:new`.
> Les deux familles partagent l'arborescence `shots/` et le même fichier Figma.

## Étape 0 — Mode d'exécution

Lis `.claude/knowledge/preferences.json`, clé **`agentic.mode`**. Champ absent →
`sub-agents`. Annonce-le en une ligne.

| Étape | `multi-agent` · `sub-agents` | `mono-agent` |
|---|---|---|
| 2 · benchmark | agent `ux-researcher` délégué | **délégué quand même** — voir l'étape |
| 3-4 · cadrage | agent `product-manager` délégué, deux passes | **incarné**, dialogue direct |
| 5 · challenge | agent `product-manager` neuf | incarné, en annonçant la perte d'indépendance |

**Incarner un rôle**, c'est : lire `.claude/agents/<nom>.md`, appliquer ses sections
**Métier**, ignorer ses sections **Exécution en agent** (elles n'existent que pour un
agent qui ne peut pas parler), et charger les skills déclarés dans son frontmatter.
Tu tiens le métier ; tu gardes le droit de poser des questions.

## Étape 1 — Collecte du trivial

Demande ce qui manque. Ne demande **que** ça : tout le reste, c'est le PM qui saura
quoi demander, à l'étape 3.

- **Numéro** : entier (ex. `2`)
- **Nom** : kebab-case anglais (ex. `checkout`)
- **Besoin** : ce que l'utilisateur doit pouvoir faire, en quelques phrases
- **Supports** attendus : mobile / web / les deux

Les supports sont une donnée de cadrage, pas une décision de design : une maquette
traite chaque support pour lui-même.

Crée ensuite `shots/#X-name/` (numéro et nom tels que fournis, minuscules).

## Étape 2 — Benchmark

**Rôle : `ux-researcher`.** Livrable : `shots/#X-name/BENCHMARK.md` + les références
retenues dans `shots/#X-name/ref/`.

```
sujet: <déduit du nom du challenge et du besoin de l'étape 1>
plateforme: <les supports de l'étape 1 — confirme-les si le besoin est ambigu>
lentille: UX — le benchmark nourrit un PRD, pas une direction visuelle
périmètre: le parcours entier, pas son écran principal
livrable: shots/#X-name/BENCHMARK.md + références dans shots/#X-name/ref/
méthode: skill `benchmark`. Aucune spec n'est rédigée ici.
```

> ⚠️ **Cette étape reste déléguée même en `mono-agent`.** La recherche — dizaines de
> captures, gate visuel, itérations de tri — sature un contexte, et c'est exactement
> ce qu'un agent isole pour ne restituer qu'un rapport compact. Annonce-le :
> « benchmark délégué malgré le mode mono-agent, la recherche est trop lourde pour ce
> contexte ». Si l'utilisateur préfère la conduire lui-même en direct, incarne le rôle
> et charge le skill `benchmark` — mais c'est son arbitrage, pas ton défaut.

L'utilisateur peut refuser le benchmark. Dans ce cas, passe à l'étape 3 sans champ
`recherche`, en signalant que le PRD reposera sur ses seules intuitions.

Au retour : présente les enseignements en deux blocs — **conventions à respecter** /
**opportunités de différenciation**. Ils cadrent tout ce qui suit.

## Étape 3 — Élicitation

**Rôle : `product-manager`, mission `cadrage`.** C'est l'aller-retour, et c'est là que
se joue la qualité du PRD. N'y réponds **jamais** à la place de l'utilisateur.

### En `multi-agent` / `sub-agents` — passe 1

Lance l'agent `product-manager` (`subagent_type: "product-manager"`) :

```
mission: cadrage
besoin: <le besoin de l'étape 1, supports inclus>
recherche: shots/#X-name/BENCHMARK.md      # si l'étape 2 a eu lieu
sortie: shots/#X-name/PRD.md
contexte: titre attendu du document — « # PRD — #X Name »
```

Trois retours possibles :

| Retour | Conduite |
|---|---|
| `statut: élicitation` | Il n'a **pas** écrit de PRD. Pose ses questions à l'utilisateur **telles quelles**, avec l'impact et le défaut qu'il annonce pour chacune — l'utilisateur peut valider les défauts en bloc. Puis étape 4. |
| `statut: livré` | Tout ce qui manquait était non structurant : il a écrit le PRD directement. Saute l'étape 4, va à l'étape 5. |
| `statut: arrêt` | Le motif désigne un champ manquant dans ton brief. Complète et relance. |

### En `mono-agent` — dialogue direct

Incarne le `product-manager` (étape 0). Sa section **Métier › Élicitation** te donne
la méthode : évalue le besoin avec la grille de `write-prd`, croise-le avec les
attentes du type d'écran (`product-patterns`) et les enseignements du benchmark, puis
**trie** ce qui manque.

- **Structurant** (change l'objectif, le périmètre ou les user stories) → pose la
  question, avec son impact et le défaut que tu prendrais. Attends la réponse.
- **Non structurant** → n'interromps pas, ça ira dans « À valider ».

Son protocole en deux passes ne s'applique pas : tu poses, tu attends, tu continues.

## Étape 4 — Persister l'élicitation, puis rédiger

**D'abord** écris `shots/#X-name/BRIEF.md` : le besoin initial, chaque question posée,
la **réponse de l'utilisateur**, et les défauts validés en bloc le cas échéant.

Ce n'est pas de la paperasse. Sans ce fichier, les réponses vivent dans une
conversation qui disparaît : le PRD n'est plus rejouable, personne ne sait plus
pourquoi il dit ce qu'il dit, et une reprise du cadrage repart de zéro. Avec lui, un
agent neuf reprend le cadrage sans redemander quoi que ce soit.

**Ensuite** le PRD :

- **Modes délégués** — relance le **même** agent via `SendMessage` (son contexte est
  intact) en ajoutant le champ `réponses`. Un agent neuf reposerait les mêmes
  questions. S'il a expiré, relance un agent avec `réponses: shots/#X-name/BRIEF.md` :
  c'est précisément ce que le fichier rend possible.
- **`mono-agent`** — écris toi-même `shots/#X-name/PRD.md` (titre `# PRD — #X Name`),
  à partir du besoin, du benchmark et des réponses, en tenant la barre du poste :
  fonctionnel-only, critères testables, hors-scope explicite, hypothèses regroupées
  dans « À valider ».

## Étape 5 — Challenge à froid (optionnel)

Propose-le : « Je fais challenger le PRD avant de designer ? » Un challenge coûte
quelques minutes ; une lacune de spec découverte en revue de maquette coûte une
itération entière.

- **Modes délégués** — nouvel appel `product-manager`, `mission: challenge`,
  `prd: shots/#X-name/PRD.md`, sur un agent **neuf**. C'est tout l'intérêt : il n'a
  pas assisté au cadrage, il lit la spec comme le designer la lira.
- **`mono-agent`** — incarne le rôle et passe le PRD au crible (grille de `write-prd`,
  angles morts de `product-patterns`). **Dis-le en le proposant** : tu challenges ta
  propre spec, le regard n'est pas indépendant. Basculer `agentic.mode` le temps de
  cette seule étape est le bon réflexe si le challenge compte.

Les corrections sont **arbitrées par l'utilisateur**, puis appliquées au PRD.

## Étape 6 — Restitution

Transmets :

- les chemins produits : `BENCHMARK.md`, `BRIEF.md`, `PRD.md` ;
- les enseignements du benchmark en une ligne chacun ;
- le PRD en 2-3 lignes : nombre de user stories et de critères d'acceptation ;
- les **hypothèses déclarées** dans « À valider » — ce sont des décisions que
  l'utilisateur n'a pas prises, il doit les voir avant qu'on dessine dessus.

Suite : `/mockup:design`.
