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
- **Sur-échantillonne** : récupère nettement plus de candidates que le nombre visé (au moins 2 à 3×), car beaucoup seront rejetées au filtrage visuel de l'étape 4.

## Étape 4 — Vérification visuelle & filtrage (critique)

⚠️ **Ne jamais retenir une référence sur la foi de ses métadonnées Mobbin.** Le titre du flow (ex. « Creating an account ») ne garantit **pas** que l'écran renvoyé montre l'inscription : Mobbin renvoie souvent un écran quelconque du parcours (réglages, dashboard, profil, onboarding de contenu). Chaque candidate doit passer un **gate visuel**.

### Gate visuel — pour CHAQUE candidate

1. **Ouvre réellement l'image** (télécharge-la puis lis-la avec l'outil Read) et regarde les pixels. N'écris rien avant de l'avoir vue.
2. **Classe l'écran** d'après ce qui est visible, pas d'après son titre. Pour un challenge sign-up, ne sont **pertinents** que les écrans du parcours de création de compte :
   - écran d'entrée / welcome / landing SSO,
   - formulaire d'inscription (email, nom, mot de passe…),
   - création / critères / force de mot de passe,
   - consentement (T&C), vérification (OTP/email),
   - états critiques : erreur inline, chargement, succès.
3. **Rejette** explicitement tout écran qui n'est pas dans ce parcours, **même si le flow Mobbin le prétend** : pages de réglages / « Your Account », dashboards d'accueil, profils, listes de contenu, onboarding produit, paywalls, etc.
4. **Vérifie la cohérence description ↔ image** : ce que tu comptes écrire (« erreur inline », « jauge de force »…) doit être **effectivement visible** à l'écran. Si tu ne le vois pas, ne l'écris pas.

Répète les recherches de l'étape 3 si le filtrage laisse moins de 4 références valides.

### Enregistrement des références retenues

Crée le dossier `shots/#X-name/ref/`.

Pour chaque référence ayant **passé le gate visuel** (vise 4 à 8 références) :
- Enregistre l'image dans `shots/#X-name/ref/` (nommage : `NN-app-name.webp`, ex. `01-revolut-signup.webp`)
- Conserve son `mobbin_url` pour la citation
- Note en une phrase **ce que tu as réellement vu** dans l'image (sert de base à l'analyse)

## Étape 5 — Analyse fonctionnelle (jamais visuelle)

Appuie-toi **exclusivement sur ce que tu as réellement observé** à l'étape 4 (jamais sur les titres de flow). Compare le PRD aux références. Concentre-toi **uniquement sur le fonctionnel** :
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
