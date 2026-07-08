# Gate visuel — vérification & filtrage des candidates

**Indépendant de la source.** Que la référence vienne de Mobbin, d'une URL fournie
ou d'un autre MCP, chaque candidate doit passer ce gate avant d'entrer dans
l'analyse.

## Pourquoi

⚠️ **Ne jamais retenir une référence sur la foi de ses métadonnées.** Un titre de
flow (« Creating an account ») ne garantit **pas** que l'écran renvoyé montre bien
ce que tu cherches : les sources renvoient souvent un écran quelconque du parcours
(réglages, dashboard, profil, onboarding de contenu, paywall). L'analyse doit se
baser sur les **pixels**, pas sur les libellés.

## Gate — pour CHAQUE candidate

1. **Ouvre réellement l'image.** Télécharge-la puis lis-la avec l'outil Read.
   N'écris **rien** avant de l'avoir vue.
2. **Classe l'écran d'après ce qui est visible**, pas d'après son titre. Rapporte
   l'écran au **sujet du brief** : ne sont pertinents que les écrans qui font
   réellement partie du parcours / du type d'écran ciblé.
   - *Exemple sign-up* : sont pertinents welcome/landing SSO, formulaire
     d'inscription, écran mot de passe (critères/force), consentement (T&C),
     vérification (OTP/email), et états critiques (erreur inline, chargement, succès).
3. **Rejette explicitement** tout écran hors-sujet, **même si la source l'affirme** :
   pages de réglages / « Your Account », dashboards d'accueil, profils, listes de
   contenu, onboarding produit, paywalls, etc.
4. **Vérifie la cohérence description ↔ image.** Ce que tu comptes écrire
   (« erreur inline », « jauge de force », « bouton désactivé ») doit être
   **effectivement visible**. Si tu ne le vois pas, ne l'écris pas.

## Seuil & relance

- Viser **4 à 8 références retenues**.
- Si le gate laisse **< 4** références valides → **relancer l'acquisition**
  ([sources.md](sources.md)) avec de nouvelles requêtes / d'autres références, puis
  re-passer le gate. Ne pas compléter avec des écrans hors-sujet pour « faire du
  nombre ».

## Ce qu'on note à la sortie du gate

Pour chaque référence retenue :

- l'image enregistrée dans `<sortie>/ref/` en `NN-app-name.webp` (ex.
  `01-revolut-signup.webp`, `03-ebay-inline-email-error.webp` — le suffixe encode
  l'écran/état réellement observé) ;
- sa **provenance citable** (URL de la source) ;
- **une phrase** décrivant ce qui est **réellement visible** — base factuelle de
  l'analyse.
