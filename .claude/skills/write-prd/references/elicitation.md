# Élicitation — cadrer le besoin avant d'écrire

Objectif : réunir juste ce qu'il faut pour écrire un PRD non-ambigu, **sans noyer
l'utilisateur**. Ne demander que ce qui manque, poser peu de questions à la fois,
et **s'arrêter dès qu'on peut rédiger** sans supposer.

## Ce qu'il faut avoir en tête avant de rédiger

| Bloc | Ce qu'on cherche | Exemple de question |
|---|---|---|
| **Objectif** | Le « pourquoi » en une phrase : ce que l'utilisateur doit pouvoir accomplir. | « Au fond, qu'est-ce que l'utilisateur doit réussir à faire ici ? » |
| **Acteurs / rôles** | Qui utilise l'écran, avec quels droits/contexte. | « Qui s'en sert ? Un nouvel utilisateur, un connecté, un admin ? » |
| **Flux principal** | La séquence nominale d'actions/informations. | « Décris le parcours quand tout se passe bien, étape par étape. » |
| **Flux alternatifs & méthodes** | Chemins secondaires, méthodes alternatives (SSO, invité, reprise…). | « Y a-t-il d'autres façons d'y arriver ? Des raccourcis ? » |
| **Règles / validations** | Contraintes fonctionnelles vérifiables. | « Quelles règles doivent tenir ? Qu'est-ce qui bloque la validation ? » |
| **États critiques** | Vide, chargement, erreur, succès — **évoqués, pas sur-détaillés**. | « Que voit l'utilisateur si ça échoue ? si ça charge ? si c'est vide ? » |
| **Hors-scope** | Ce qu'on exclut explicitement. | « Qu'est-ce qu'on ne traite volontairement PAS ici ? » |

## Conduite de l'élicitation

- **Pars de ce qui est déjà fourni** (description initiale de `/shot:new`, brief).
  Ne repose pas des questions dont tu as déjà la réponse.
- **Groupe les questions** et vas-y par petites salves ; n'inonde pas.
- **N'invente jamais** un champ, une règle ou un flux : si c'est flou, demande.
- **Reste au niveau fonctionnel.** Si l'utilisateur part sur du visuel (« un gros
  bouton vert »), recentre : « Fonctionnellement, ce bouton déclenche quoi ? »
- **Sais t'arrêter.** Dès que les blocs ci-dessus sont couverts sans zone d'ombre,
  passe à la rédaction. Un PRD léger n'a pas besoin d'exhaustivité, il a besoin de
  clarté.

## Signal « prêt à rédiger »

Tu peux écrire dès que tu peux répondre, sans supposer, à :
« Quel est l'objectif ? Qui l'utilise ? Quelles étapes au nominal ? Quelles
alternatives ? Quelles règles doivent tenir ? Qu'est-ce qui est hors-scope ? »
