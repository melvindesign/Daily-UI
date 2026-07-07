# Benchmark Daily UI Shot

Tu es en mode **Product Researcher AI**. Ton rôle est de challenger le PRD d'un Daily UI challenge existant en le confrontant à des références connues trouvées sur **Mobbin** (via le MCP Mobbin), puis d'en tirer des améliorations **fonctionnelles**.

## Étape 1 — Identification du shot

Si l'utilisateur n'a pas précisé le shot, demande-lui quel challenge benchmarker (numéro ou nom).

Déduis le dossier correspondant dans `shots/` (ex. `shots/#1-sign-up/`).

## Étape 2 — Lecture du PRD

Lis `shots/#X-name/PRD.md` pour comprendre le besoin **fonctionnel** du challenge.

Extrais-en :
- L'objectif
- Les flux et actions décrits
- Le format (mobile / web) → détermine la `platform` Mobbin (`ios` pour mobile, `web` sinon)

## Étape 3 — Recherche sur Mobbin

Interroge le MCP Mobbin pour trouver des références connues correspondant au challenge :
- `mcp__mobbin__search_flows` pour les parcours multi-étapes (ex. onboarding, checkout, sign up)
- `mcp__mobbin__search_screens` pour des écrans précis d'un flux

### Règles de recherche

- Formule des requêtes en langage naturel, **une intention par requête** (ne combine pas plusieurs flux).
- Utilise la bonne `platform` déduite à l'étape 2.
- Lance **plusieurs requêtes** pour couvrir : le flux principal + les flux alternatifs / états critiques du PRD.
- **Examine réellement les images** renvoyées (ne te fie pas aux seules métadonnées) pour comprendre ce que font ces produits.

## Étape 4 — Enregistrement des références

Crée le dossier `shots/#X-name/ref/`.

Pour chaque référence pertinente retenue (vise 4 à 8 références) :
- Enregistre l'image dans `shots/#X-name/ref/` (nommage : `NN-app-name.webp`, ex. `01-revolut-signup.webp`)
- Conserve son `mobbin_url` pour la citation

## Étape 5 — Analyse fonctionnelle (jamais visuelle)

Compare le PRD aux références. Concentre-toi **uniquement sur le fonctionnel** :
- Étapes du flux (ordre, découpage, progressive disclosure)
- Champs demandés (présence, absence, regroupement, moment de la demande)
- Méthodes alternatives (SSO, magic link, passkey, téléphone…)
- Validations, gestion d'erreur, états critiques (chargement, échec, succès)
- Réduction de friction (ce qui est reporté, pré-rempli, optionnel)

**À ignorer totalement :** couleurs, layout, composants, espacements, typographie, tokens.

## Étape 6 — Restitution & mise à jour du PRD

Crée `shots/#X-name/BENCHMARK.md` :

```markdown
# Benchmark — #X Name

## Références analysées
- [App Name](mobbin_url) — `ref/NN-app-name.webp` — ce que ça apporte
- …

## Enseignements fonctionnels
- [Constat] → [ce que fait la référence vs. le PRD]
- …

## Recommandations pour le PRD
- [Amélioration fonctionnelle concrète, justifiée par une ou plusieurs références]
- …
```

Puis présente à l'utilisateur une synthèse des recommandations et **propose de mettre à jour le PRD** en conséquence.

- N'édite `shots/#X-name/PRD.md` que si l'utilisateur valide.
- Les ajouts au PRD restent **fonctionnels uniquement** (mêmes règles que `/shot:new` : pas de visuel, pas de design system).

## Étape 7 — Confirmation

Confirme à l'utilisateur :
- Le nombre de références enregistrées dans `ref/`
- Le chemin du `BENCHMARK.md`
- Si le PRD a été mis à jour, un résumé des changements
- Rappelle qu'il peut lancer `/shot:iterate` pour designer à partir du PRD enrichi
