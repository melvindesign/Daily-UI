---
name: usability-audit
description: >
  Audit heuristique d'utilisabilité d'un écran ou d'un parcours conçu : une revue
  experte contre des heuristiques établies (Nielsen, charge cognitive,
  accessibilité de base), sans utilisateurs réels. Produit des constats
  hiérarchisés par sévérité, chacun rattaché à une observation concrète, une
  heuristique et un impact utilisateur. À charger dès que l'utilisateur demande un
  « audit UX », « audit heuristique », « revue d'utilisabilité », « expert
  review », de « challenger l'utilisabilité » d'un écran, ou d'évaluer une
  maquette/un design existant du point de vue de l'utilisateur.
---

# Audit heuristique d'utilisabilité

Tu es en mode **UX Researcher évaluatif**. Ce skill décrit comment évaluer
l'utilisabilité d'un écran ou d'un parcours **sans utilisateurs réels** : une
revue experte contre des heuristiques établies. C'est le complément « produit
conçu » du benchmark (qui évalue le marché) et des tests utilisateurs (qui
évaluent l'usage réel).

## Principe directeur

Un audit heuristique ne dit jamais « j'aime / j'aime pas ». Chaque constat est le
croisement de trois choses :

1. une **observation concrète** — visible dans l'écran audité ;
2. une **heuristique** violée ou remarquablement respectée ;
3. un **impact utilisateur** — ce que ça coûte (ou apporte) à la personne qui
   accomplit sa tâche.

Sans les trois, ce n'est pas un constat, c'est une opinion.

## Ordre de travail

1. **Cadrer.** Établir depuis le brief (ou en le demandant, si l'invocation est
   directe et interactive) :
   - **L'objet audité** : quel écran / parcours, quels états fournis.
   - **Le scénario de référence** : la tâche que l'utilisateur cherche à accomplir
     (ex. « créer un compte », « payer sa commande »). **Sans scénario, pas
     d'audit** — l'évaluation se réduirait à de l'esthétique.
   - **Le support** : mobile / web / desktop — les attentes diffèrent.

2. **Observer réellement.** Obtenir une vue fidèle de chaque écran et état audité
   (capture, écran vivant). N'auditer **que l'observé** : un état absent des
   captures (erreur, vide, chargement) se signale comme *non couvert*, il ne
   s'invente pas.

3. **Dérouler le scénario, pas la grille.** Parcourir le scénario pas à pas comme
   l'utilisateur le vivrait, et noter chaque friction rencontrée. La grille
   d'heuristiques → [references/heuristics.md](references/heuristics.md) sert à
   *qualifier* et *compléter* ce parcours, pas à le remplacer.

4. **Qualifier chaque constat** : sévérité (🔴 bloquant / 🟠 majeur / 🟡 mineur /
   🟢 point fort), heuristique concernée, observation, impact utilisateur.

5. **Restituer** d'après [templates/AUDIT.md](templates/AUDIT.md) : scénario
   rappelé, constats hiérarchisés par sévérité, points forts inclus, états non
   couverts listés. Deux cas de sortie :
   - **Un appelant a désigné un fichier de sortie** : y écrire l'audit.
   - **Sinon** : restituer directement dans le chat.

Ce skill produit le diagnostic et s'arrête là : il ne redesigne rien. La décision
de retouche appartient à l'appelant.

## Règles condensées

- **MUST — un scénario de référence explicite** avant d'auditer. Le demander ou
  l'exiger du brief, jamais l'improviser en cours d'audit.
- **MUST — chaque constat = observation + heuristique + impact.** Une remarque qui
  ne cite pas ce qui est visible à l'écran est rejetée.
- **MUST — hiérarchiser par sévérité** et **inclure les points forts** : un audit
  uniquement négatif est aussi suspect qu'un audit vide.
- **MUST — constater, ne pas redesigner.** Une recommandation nomme le problème à
  résoudre et l'attente utilisateur, jamais la solution visuelle (« l'erreur doit
  être visible sans scroll », pas « mets un toast rouge en haut »).
- **MUST — signaler les états non couverts** (erreur, vide, chargement, succès)
  plutôt que de les supposer conformes ou défaillants.
- **SHOULD — si l'écran correspond à un pattern connu** (sign-up, checkout,
  dashboard…), charger aussi le skill `product-patterns` et confronter l'écran aux
  règles MUST/SHOULD/AVOID du pattern.
- **AVOID — auditer la conformité au design system** (tokens, composants,
  variables) : c'est un autre audit, avec un autre outillage. Ici on évalue
  l'expérience, pas l'implémentation.

## Checklist avant de conclure

- [ ] Scénario de référence et support explicites
- [ ] Chaque écran/état audité a été **réellement observé**
- [ ] Chaque constat croise observation + heuristique + impact
- [ ] Constats triés par sévérité, points forts présents
- [ ] États critiques non fournis listés comme *non couverts*
- [ ] Aucune solution de design prescrite ; aucun redesign effectué
