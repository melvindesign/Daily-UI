# Barre de qualité & anti-patterns

Un bon PRD est **fonctionnel, vérifiable et court**. Voici la barre à tenir.

## Règle 1 — Fonctionnel uniquement

Le PRD décrit ce que l'utilisateur doit pouvoir **faire**, jamais l'apparence.

**À bannir** : « bouton bleu », « input avec bordure », layout, colonnes,
espacements, couleurs, ombres, typographie, design system, tokens.

**Recentrer** quand ça dérape :
- ❌ « Un gros bouton vert “Créer le compte” en bas. »
- ✅ « Une action “Créer le compte” valide le formulaire et lance l'inscription. »

## Règle 2 — Ni trop vague, ni trop lourd

- **Trop vague** = un énoncé qu'on ne peut pas trancher. « Le formulaire doit être
  simple » → non vérifiable. Reformuler en critère : « Le formulaire ne demande que
  l'email et le mot de passe. »
- **Trop lourd** = une spec de plusieurs pages qui anticipe tout. Le PRD n'est pas
  exhaustif : il pose l'intention claire, sans figer les partis-pris qui restent
  ouverts.

Viser **une page**. Couper ce qui n'aide pas à comprendre le besoin.

## Règle 3 — User stories orientées bénéfice

Format : **« En tant que \<rôle>, je veux \<action> afin de \<bénéfice>. »**

- Orientées **valeur**, pas solution.
  - ❌ « …je veux un champ email et un champ mot de passe. » (solution)
  - ✅ « …je veux créer un compte rapidement afin de commencer à utiliser l'app. »
- 2-3 stories suffisent : couvrir l'intention principale + 1-2 alternatives clés.

## Règle 4 — Critères d'acceptation vérifiables

Chaque critère est un **énoncé qu'on peut trancher vrai/faux**, quelques-uns par
flux clé (pas une liste fleuve).

- ✅ « Le bouton de validation reste inactif tant que le formulaire est invalide. »
- ✅ « Une erreur s'affiche au niveau du champ email si l'email est invalide. »
- ❌ « L'expérience doit être fluide. » (non vérifiable)

C'est ici qu'on absorbe les anciennes « règles fonctionnelles » : une règle
fonctionnelle **est** un critère d'acceptation.

## Règle 5 — Ne pas figer les partis-pris ouverts

Le PRD pose une intention claire, pas une vérité arrêtée. **Ne sur-spécule pas**
sur les partis-pris discutables (nombre de champs, ordre des étapes, consentement
implicite/explicite…) : pose un choix quand il est nécessaire, et laisse
explicitement ouvert ce qui n'a pas à être tranché à ce stade.

## Rappel — Hors scope

Toujours clore par une section **Hors scope** qui exclut explicitement au minimum
« toute considération visuelle ou de design system », plus ce que l'utilisateur a
déclaré hors-périmètre à l'élicitation.
