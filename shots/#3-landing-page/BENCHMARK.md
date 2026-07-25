# Benchmark — Landing page marketing SaaS "Stellar" (outil de knowledge de design system, MCP + plugin Claude)

**Sujet :** landing page marketing d'un SaaS B2B, sous-genre "outil pour design systems / dev tooling / AI-native"
**Plateforme :** web (desktop-first)
**Lentille(s) :** UX (fonctionnelle), avec quelques repères UI de registre
**Source :** visite directe des sites réels (meilleure source dispo pour des pages marketing — Mobbin cible les écrans d'app, pas les LP), complétée par une recherche Mobbin (web) pour confirmer l'anatomie générique SaaS
**Références analysées :** 9 retenues au gate visuel + 1 rejetée (obsolète) + ~11 références Mobbin en appui (hero SaaS génériques)

## Références analysées

- [Storybook](https://storybook.js.org) — `ref/01-storybook-hero-mcp-banner.png` — hero avec bandeau "Introducing MCP for React", H1, stats produit (installs/mois, contributeurs), démo produit à onglets (Development/Interaction testing/Visual testing/Documentation), mention MCP réintroduite plus loin comme bénéfice d'une feature existante ("publier héberge aussi votre serveur MCP")
- [zeroheight](https://zeroheight.com) — `ref/02-zeroheight-hero-agents-headline.png` — hero "Get teams and agents building from your design system – not around it", nav avec item de premier niveau dédié "MCP", logos clients avec stat chiffrée attachée, showcase de design systems clients cliquables en public, section "Go further, faster" avec cartes Explore API / zeroheight AI, logos d'intégration incluant Claude et Cursor
- [Supernova](https://www.supernova.io) — `ref/03-supernova-hero-ai-agents.png` — hero "Design & engineering knowledge, ready for AI agents", capture produit montrant une URL d'endpoint MCP réelle et un item "Claude Code plugin" dans l'UI, section pédagogique sur le risque agent ("vos agents ne valent que le contexte que vous leur donnez"), sections Context Intelligence / Skills & Exporters / Feedback loop, badges de conformité entreprise (SOC2, GDPR, ISO)
- [Knapsack](https://www.knapsack.cloud) — `ref/04-knapsack-hero-intelligent-engine.png` — structure narrative Problème → Solution → Preuve chiffrée, AI traitée comme 1 pilier parmi 4 (aux côtés de système de vérité, design-with-code, gouvernance), pages de comparaison directe "vs Storybook / vs Supernova / vs Zeroheight" en footer
- [Linear](https://linear.app) — `ref/05-linear-hero-teams-and-agents.png` — hero "The product development system for teams and agents", démo produit narrative et vivante (un agent nommé qui "réfléchit" et modifie du code en direct dans la capture), agents tiers nommés comme acteurs du workflow (Cursor Agent, GitHub Copilot Agent, Codex) aux côtés d'avatars humains, MCP mentionné seulement en changelog (jamais dans le hero)
- [Vercel](https://vercel.com/home) — `ref/06-vercel-hero-agentic-infrastructure.png` — hero minimaliste "Agentic Infrastructure" (2 mots), 3 sections "client nommé + stat d'usage + capture produit + liste de features" répétées, snippet CLI d'installation de plugin affiché en clair dans la page, "Agent Skills" comme rubrique de footer dédiée
- [Cursor](https://cursor.com) — `ref/07-cursor-hero-coding-agent.png` — hero très court, démo produit narrative (agent qui lit des fichiers, réfléchit, écrit du code, terminal live), preuve sociale par citations nominatives de dirigeants reconnus (CEO NVIDIA, CEO Stripe, President OpenAI) plutôt que logos anonymes, "MCPs et skills" visibles comme placeholders dans le champ de prompt de la capture produit
- [Notion](https://www.notion.com) — `ref/08-notion-hero-teams-and-agents.png` — hero "Where teams and agents Think together", 3 blocs fonctionnels (Capture/Find/Automate) chacun affiché avec sa propre capture, grille de "cas d'usage IA" concrets, stats de preuve sociale empilées (G2 #1, 100M users, 62% Fortune 100)
- [HubSpot](https://www.hubspot.com) — `ref/09-hubspot-hero-agentic-platform.png` — eyebrow "HUBSPOT AGENTIC CUSTOMER PLATFORM" au-dessus du H1, section dédiée "Built-in AI agents that work for you 24/7" avec agents nommés individuellement (Customer Agent, Prospecting Agent, Data Agent), stat "2 000+ intégrations"

**Rejeté au gate :** [Backlight](https://backlight.dev) — bandeau "Backlight.dev is shutting down June 1st 2025" visible en tête de page : produit en fin de vie, ne reflète plus l'état actuel du marché. Conservé seulement comme repère historique (aucune mention IA/agent nulle part sur la page — signe de ce à quoi ressemblait ce créneau avant la vague agentique).

**Appui Mobbin (web, hero SaaS génériques observés en image) :** Langdock, Fireflies, Laravel Cloud, StackAI, Wrangle, Twenty, Fibery, Dovetail, Midday, Mixpanel, Zoho CRM — tous convergent vers : header nav + H1/sous-titre + double CTA + capture produit sous le pli + logos clients à proximité immédiate du hero.

## Conventions

- **Anatomie de page** — header (logo, nav, CTA secondaire + primaire) → hero (H1 + sous-titre + double CTA) → capture produit immédiatement sous le pli → bande de logos clients/preuve sociale → 3 à 5 blocs feature (têtière + texte court + visuel) → témoignages nominatifs → CTA final répétant l'accroche du hero → footer multi-colonnes. Présent chez les 9 références retenues + les 11 d'appui Mobbin.
- **Double CTA systématique dans le hero** — un CTA primaire self-serve ("Get Started", "Start for free", "Deploy now") + un CTA secondaire orienté vente ("Talk to sales", "Request a demo", "Book a live demo"). Présent chez Storybook, zeroheight, Supernova, Knapsack, Vercel, Notion, HubSpot.
- **Preuve sociale juste sous le hero, avant tout autre contenu** — bande de logos clients (souvent enrichie d'une stat : nombre de clients, pays, % Fortune 100/YC) placée immédiatement après le hero, avant même les sections feature. Présent chez zeroheight, Knapsack, Vercel, Notion, HubSpot, Linear (stat sans logos).
- **Capture produit comme pièce centrale du hero, pas une simple illustration** — la capture est looks-alive : onglets interactifs (Storybook), dashboard avec données réalistes (zeroheight, Supernova), ou narration en direct d'un agent en train d'agir (Linear, Cursor). Aucune des 9 références n'utilise une illustration abstraite ou une photo de stock comme visuel principal du hero.
- **Pas de tableau de pricing ni de FAQ intégrés à la page d'accueil** — confirmé sur les 9 références (Storybook, zeroheight, Supernova, Knapsack, Linear, Vercel, Cursor, Notion, HubSpot) : le pricing et la FAQ vivent sur des pages dédiées liées depuis la nav/footer, jamais en scroll de la home. C'est un signal fort qui contredit l'anatomie "manuel" attendue d'une LP SaaS (hero → features → pricing → FAQ → CTA) : au sein de ce créneau (outillage dev/design/AI-native, 2026), la page d'accueil sert à qualifier et convaincre, pas à transacter.
- **Nommer explicitement les agents/outils IA plutôt que de dire "IA" en général** — les références qui parlent d'IA le font en nommant des entités concrètes : agents produits nommés (Customer Agent, Prospecting Agent chez HubSpot ; Cursor Agent, Codex, GitHub Copilot Agent chez Linear), outils tiers cités par leur nom (Cursor, Claude Code, Copilot, Codex chez Supernova et zeroheight). Aucune des références n'utilise seulement un vague "powered by AI" sans incarnation concrète.
- **Preuve chiffrée et nominative rattachée à une capacité, pas un simple logo** — chaque bloc feature s'accompagne d'une preuve spécifique : un client nommé + un chiffre d'usage (zeroheight/Decathlon "17 produits, 19 pays" ; Vercel/Notion "millions de conversations d'agents par jour" ; Knapsack "+20% efficacité, $1M d'économies") ou une citation nominative d'un dirigeant reconnu (Cursor, Linear, Notion).

## Enseignements UX

- **Le MCP et les agents sont l'accroche principale, pas une section en bas de page.** Sur zeroheight, Supernova, Linear, Vercel et Notion, la promesse "vos données/votre travail est consommable par des agents IA" est *dans le H1 ou le sous-titre*, pas reléguée à une section "Intégrations" en milieu de page. C'est le motif le plus significatif pour Stellar : la synchro/source de vérité pour agents doit structurer le message principal, pas être un paragraphe additionnel.
- **Le mot "MCP" lui-même reste discret dans le langage marketing grand public.** Storybook, Linear et Cursor n'emploient "MCP" que dans un changelog, un bandeau secondaire ou en petit texte technique — jamais dans le H1. zeroheight et Supernova sont les deux seules à en faire un point de nav de premier niveau. Le bénéfice ("vos outils restent synchronisés", "vos agents ont le bon contexte") porte le message ; l'acronyme technique reste un détail pour public averti (dev/ops), pas l'accroche.
- **La preuve de la valeur "abstraite" passe par un artefact réel consultable, pas une promesse.** zeroheight expose des liens publics vers de vrais design systems clients (Uber, NS, CCV) ; Vercel montre des chiffres d'usage réels par client nommé. Pour Stellar, l'équivalent serait de rendre visible/consultable un vrai endpoint MCP, une vraie doc générée, ou un vrai plugin en action plutôt que de décrire la fonctionnalité en langage abstrait.
- **La démo produit du hero doit "vivre" (narration), pas juste illustrer.** Linear et Cursor présentent un agent en train d'agir en temps réel dans la capture (réflexion visible, fichiers modifiés, PR ouverte) — bien plus convaincant pour incarner "un agent construit depuis la connaissance du DS" qu'une capture statique de dashboard.
- **Le pricing et la FAQ ne sont pas des attendus systématiques sur la home** dans ce créneau — contrairement à l'anatomie "manuel" d'une LP SaaS généraliste. À arbitrer explicitement dans le PRD plutôt que de les inclure par défaut.
- **La gouvernance/sécurité entreprise mérite sa propre preuve visible** (badges SOC2/GDPR/ISO chez Supernova, mention SSO/permissions chez zeroheight et Knapsack) dès lors que la cible inclut des équipes design ops/enterprise — pertinent pour Stellar vu le positionnement B2B équipe produit.

## Opportunités de différenciation

- **Incarner concrètement le plugin Claude (skills + agent + connecteur) plutôt que de le nommer.** Aucune des références n'a encore de section dédiée montrant un agent Claude en train d'utiliser des skills issus du DS pour vibe-coder/vibe-designer un écran réel — Stellar peut être la première à rendre cela tangible (ex. capture narrative d'un skill DS invoqué par Claude, comme le fait Linear pour ses agents de code).
- **Traiter "documentation hébergée" comme la fondation visible, et le MCP/plugin comme l'accélérateur au-dessus** — Knapsack le fait bien (4 piliers équilibrés) mais aucune référence ne raconte clairement la relation causale "doc à jour → tokens synchronisés → assets gérés → donc l'agent a un contexte fiable". C'est un angle de différenciation narratif : montrer la chaîne de confiance plutôt qu'une liste de features juxtaposées.
- **Rendre le MCP lisible pour un public non-technique** dans le corps du hero, sans jargon — aucune référence n'a encore résolu élégamment "expliquer MCP à un designer qui ne code pas". Une opportunité : traduire le bénéfice ("les mêmes règles que vos agents consultent, vous les voyez aussi") plutôt que d'exposer l'acronyme.
- **Une preuve "avant/après" quantifiée sur la dérive de DS** (incohérence tokens, docs obsolètes) manque sur la plupart des références (seul Knapsack chiffre le pain point) — un compteur ou visuel "X composants désynchronisés détectés" serait un différenciateur fort et directement lié à la proposition de valeur "source unique de vérité".
- **Comparaison directe avec les alternatives** (à la manière des pages "vs Storybook/vs Supernova/vs Zeroheight" de Knapsack) : envisageable en page dédiée plutôt que sur la home, mais absent de zeroheight/Supernova — une carte de positionnement claire (doc DS classique vs DS + MCP + plugin agent) pourrait clarifier la catégorie hybride de Stellar.

## Recommandations

1. **Placer la promesse agent/MCP dans le H1 ou le sous-titre du hero**, pas dans une section dédiée à mi-page — conforme au motif dominant chez zeroheight, Supernova, Linear, Vercel, Notion.
2. **Prévoir un double CTA dans le hero** (self-serve type "Commencer gratuitement" + orienté vente type "Demander une démo") — convention chez 7 des 9 références.
3. **Spécifier une démo produit narrative pour le hero** (un agent en train d'agir avec le contexte du DS — pas une capture statique) plutôt qu'un simple screenshot de dashboard, en s'inspirant du niveau d'incarnation de Linear/Cursor.
4. **Nommer explicitement les outils IA intégrés** (Claude, Claude Code, Cursor, etc.) plutôt que de rester au niveau "IA" générique, dans une section Intégrations dédiée.
5. **Ne pas supposer que pricing et FAQ doivent figurer sur la home** — trancher explicitement ce point dans le PRD plutôt que de les inclure par défaut ; si retenus, les traiter comme sections de conversion tardive, après la preuve de valeur.
6. **Prévoir une section de confiance/gouvernance** (sécurité, permissions, conformité) si la cible inclut des équipes enterprise/design ops, comme chez Supernova et Knapsack.
7. **Envisager une preuve chiffrée du problème résolu** (dérive de tokens/composants) comme différenciateur, en s'appuyant sur le pattern "client nommé + stat" observé chez zeroheight/Vercel/Knapsack.

> Recommandations strictement fonctionnelles (lentille UX) : elles portent sur la structure, les sections et leur rôle dans le parcours de conversion — pas sur le traitement visuel (typographie, couleurs, composants), qui relève du travail du designer/DS Solar UI.

---

## Passe complémentaire — anatomie des sections de corps (Linear, hors hero)

Motif : après l'itération 2, le parcours en 5 étapes se lisait comme une liste de
libellés précédée d'un indicateur de progression. Relevé ciblé sur Linear, **toutes
sections confondues**, pour comprendre comment une section de corps se démontre.

### Ingrédients observés

- **Marqueur de chapitre discret** — une étiquette courte type `1.0 Intake`, `2.2
  Documents`, `FIG. 2.3` situe la section dans la séquence. L'ordre est porté par une
  annotation, jamais par un composant de progression dédié.
- **En-tête dissocié** — l'accroche de la section et son paragraphe explicatif sont
  séparés (l'un à gauche, l'autre à droite), ce qui laisse toute la place au visuel.
- **Le visuel occupe la majeure partie de la section.** Il n'illustre pas le texte : il
  *est* la démonstration. Le texte le légende.
- **Des fragments d'interface, pas des captures d'écran complètes** — un fil de
  discussion, un composer de message, une ligne de commande saisie, une note avec
  commentaires en ligne, une rangée de tuiles d'intégrations. On reconnaît le **geste**,
  pas l'application entière.
- **Cadrage partiel assumé** — les panneaux sont rognés, superposés, débordent du cadre :
  on donne à voir un produit vivant plutôt qu'un poster.
- **Annotations autour du visuel** — de courtes légendes nomment ce qu'on regarde
  (« édition collaborative », « commentaires en ligne »…), pour que le visuel se lise
  sans effort.
- **Sous-grille de mini-objets** quand une section couvre plusieurs briques : chaque
  mini-carte porte une micro-représentation de l'objet + un titre + une ligne.

### Enseignements pour Stellar

- **1 étape = 1 section de plein droit, avec son propre visuel de démonstration.** Une
  liste d'étapes, même numérotée, ne démontre rien : elle ne fait que réciter.
- **Un indicateur de progression est superflu** dès lors que chaque section porte son
  marqueur de séquence — il occupe de la place sans rien démontrer.
- **Ce que le visuel doit montrer relève du fonctionnel** (quel objet, dans quel état,
  avec quelle preuve que ça marche) et doit donc être spécifié au PRD, même quand le
  visuel définitif n'existe pas encore.

Références : [Intake](https://mobbin.com/sites/sections/51e7f400-3bc1-4432-9f3b-117d49cd19c1) ·
[Documents](https://mobbin.com/sites/sections/ac08f1c7-d536-4996-91cc-85da059dcade) ·
[Asks / Slack](https://mobbin.com/sites/sections/7debe786-3469-4421-91db-b13310ba8b96) ·
[grille Plan](https://mobbin.com/sites/sections/d3332e07-9e99-40d1-a60d-0921233bd100) ·
[Unlike any tool](https://mobbin.com/sites/sections/8b3beefe-4449-4b8c-a498-d6633521e8a8) ·
[Milestones & dependencies](https://mobbin.com/sites/sections/310c96f7-e776-47d5-bcbf-4871dcda726a)
