# Walkthrough — benchmark d'un écran de Sign Up (lentille UX, source Mobbin)

Exemple bout-en-bout avec le MCP Mobbin disponible.

## 1. Brief

- **Sujet** : parcours d'inscription (sign up) mobile — fourni par l'appelant
  (nom: `#1 - sign-up` + description).
- **Plateforme** : `ios`.
- **Lentille** : UX (objectif : défricher le terrain de jeu fonctionnel).

L'appelant a désigné `shots/#1-sign-up/` comme sortie → le benchmark
écrira un fichier. En invocation directe dans le chat, il restituerait plutôt
l'analyse sans écrire de fichier.

## 2. Choix de la source & acquisition

`mcp__mobbin__*` disponible → **source Mobbin**. Plusieurs requêtes, une intention
chacune, `platform: ios`, en sur-échantillonnant :

- `search_flows` : « sign up account creation », « email signup flow ».
- `search_screens` : « create password criteria », « signup email inline error »,
  « terms consent checkbox signup ».

On récupère ~20 candidates (pour ~6 visées).

## 3. Gate visuel

Chaque candidate est téléchargée puis **lue**. On rejette tout ce qui n'est pas le
parcours d'inscription (dashboards, réglages, onboarding produit) même quand le
flow Mobbin s'intitule « Creating an account ». Il reste 8 références valides, par
exemple :

- `01-gopuff-sso-signup.webp` — SSO en tête, séparateur « or », un seul champ Email + Next.
- `03-ebay-inline-email-error.webp` — erreur inline « Please enter a valid email address » sous le champ.
- `06-ubereats-password-criteria.webp` — checklist de critères qui passe au vert en temps réel.
- `07-zopa-password-error.webp` — critères exposés + bandeau d'erreur + bouton désactivé.
- … (4 autres)

## 4. Analyse (lentille UX)

En s'appuyant uniquement sur l'observé :

- **Conventions** (≥3 réfs) : SSO en tête avant le formulaire ; progressive
  disclosure du mot de passe ; erreur inline sous le champ ; lien « déjà un compte ».
- **Différenciation** : entasser prénom + nom + email + mot de passe sur un seul
  écran est à contre-courant ; le découpage (email d'abord, mot de passe dédié) est
  la norme — un point à trancher lors du cadrage.

## 5. Restitution

Un fichier de sortie ayant été désigné, écriture de `shots/#1-sign-up/BENCHMARK.md`
d'après le template : références citées (`[App](mobbin_url) — ref/NN.webp — observé`),
conventions, enseignements UX, opportunités de différenciation, recommandations. Les
8 réfs sont enregistrées dans `shots/#1-sign-up/ref/`.

Le skill s'arrête là : il restitue les enseignements à l'appelant et ne rédige aucune
spec — c'est le cadrage/PRD en aval qui les exploitera.

---

### Variante sans Mobbin (fallback URLs/captures)

Même brief, mais `mcp__mobbin__*` absent. On bascule sur la source « URLs/captures
fournies » : on demande à l'utilisateur 5–8 écrans de sign-up (URLs d'images ou
captures). On les télécharge/lit, **on passe le même gate visuel**, puis la même
analyse UX. Seule l'acquisition a changé ; le reste du pipeline est identique.
