# PRD — #3 Landing Page

## Contexte

**Stellar n'existe pas encore.** Cette page est un actif **marketing de pré-lancement**
destiné à **mesurer l'intérêt** : elle vend une promesse et n'a qu'une seule action
possible, **s'inscrire à la bêta**. Aucun lien sortant, aucune page liée, aucun accès
produit : tout ce qui ne mène pas à l'inscription est contre-productif.

**Audience : des designers.** Le vocabulaire, les exemples et les preuves parlent
du quotidien d'un designer (Figma, design system, maquettes), pas d'un acheteur IT.

**Toute la copy de la page est en anglais** (ce PRD reste en français : c'est un
document de travail, pas le contenu de la page).

## Objectif

Faire comprendre à un designer, en une lecture linéaire, ce que Stellar changera dans
son travail, et le convertir en **email inscrit sur la liste bêta**.

## Métriques de succès

- Taux d'inscription bêta (visiteurs → emails capturés).
- Taux d'ouverture de la modal d'inscription (clic sur le CTA) et taux de complétion
  une fois ouverte (ouverte → soumise avec succès au 1er essai).
- Part d'inscriptions valides (email bien formé, sans doublon) sur le total soumis.
- Profondeur de scroll jusqu'au CTA final (proxy : l'histoire a été suivie jusqu'au bout).

## User stories

- En tant que designer qui découvre Stellar, je veux saisir la promesse en quelques
  secondes, afin de décider si ça vaut la peine de continuer à lire.
- En tant que designer intéressé, je veux comprendre concrètement ce que je gagne et
  comment ça se passerait pour moi, afin de me projeter avant de laisser mon email.
- En tant que designer convaincu, je veux m'inscrire sans friction et sans engagement,
  afin d'être prévenu à l'ouverture de la bêta.

## Fonctionnalités

### Structure de la page (ordre imposé)

La page est un **récit linéaire** en 4 temps : promesse → bénéfice → parcours d'usage
→ inscription. L'ordre des sections ci-dessous fait partie de la spec.

#### 1. Hero — la promesse *(must)*

Registre **sobre et court** : une accroche, une sous-accroche, une action. Le visiteur
doit pouvoir comprendre l'intention du produit et agir sans scroller.

- Contenu fonctionnel : accroche courte + sous-accroche qui précise pour qui et ce que
  ça change + **un seul CTA « S'inscrire »**. Pas de champ email dans le hero, pas de
  CTA secondaire, pas de navigation vers d'autres pages.
- *Issues* : clic sur le CTA → ouverture de la modal d'inscription ; sinon → poursuite
  de la lecture (aucune action bloquante).
- *États* : défaut.

### Régime d'illustration de la page (transverse)

Le produit n'existe pas : **la page se démontre par l'image, pas par la description**.
Chaque section de contenu (benefits + les 5 étapes) porte **un visuel de démonstration
qui lui est propre**, montrant des morceaux d'interface Stellar concrets — de quoi
permettre à un designer de se projeter dans l'outil.

- Ces visuels sont **le corps de la section**, pas une vignette décorative posée à côté
  du texte : une section sans son visuel est incomplète.
- **Au stade actuel, aucun visuel n'est produit.** Chaque emplacement est matérialisé
  par un **placeholder assumé, dimensionné et intégré à la composition**, accompagné
  d'une **légende décrivant ce que le visuel définitif montrera**. Le contenu de cette
  légende est spécifié section par section ci-dessous, sous « *Visuel* ».
- Les visuels définitifs seront produits dans un second temps.

#### 2. Benefits — le bénéfice, en avant/après *(must)*

Le visiteur doit comprendre le bénéfice central : **Stellar élève la qualité visuelle
des rendus produits par les agents**. Ce bénéfice est démontré par une comparaison
**avant / après** (un rendu médiocre vs un rendu de qualité), accompagnée d'un texte
court qui nomme le gain.

- *Visuel* : la même maquette générée sans Stellar puis avec Stellar, mises côte à côte
  et comparables au premier coup d'œil. **Fourni ultérieurement par Melvin** — ne rien
  produire à sa place.
- *Issues* : mène à la suite du récit ; aucune action attendue ici.
- *États* : défaut.

#### 3. Le parcours en 5 sections illustrées — l'histoire vécue avec Stellar *(must)*

Cinq **sections successives et de plein droit**, chacune = **une étape du parcours du
designer**, dans cet ordre. Chaque section porte un titre d'étape, une explication
courte, les éléments concrets qu'elle met en jeu (nommés explicitement, jamais « de
l'IA » en générique) et **son propre visuel de démonstration**.

> Une étape n'est pas une ligne dans une liste : c'est une section à part entière avec
> son visuel. Un récapitulatif compact des cinq étapes, ou un indicateur de progression
> qui les résume, **ne remplace aucune de ces sections** — et n'apporte rien de plus.

1. **Synchroniser ses sources** — le designer branche ses sources de vérité :
   **Figma**, sa **documentation**, sa **codebase**.
   - *Visuel* : les trois sources branchées à Stellar, chacune identifiable et montrant
     qu'elle est effectivement connectée et indexée (ce qui a été lu de chacune).
2. **Poser ses règles** — il définit ce qui se fait et ne se fait pas sur l'usage des
   tokens et des composants (logique **DO / DON'T**).
   - *Visuel* : un jeu de règles rédigées par le designer, où l'on distingue au premier
     regard ce qui est autorisé de ce qui est interdit, sur des tokens et des composants
     nommés.
3. **Régler ses préférences** — il dit comment il aime travailler : mise en page et
   disposition des maquettes, découpage en sections, son abonnement cloud (qui
   détermine jusqu'où on peut pousser), le recours ou non au **multi-agents**, et ses
   **intégrations tierces** (**Mobbin**, **GSAP**). Stellar s'adapte à son workflow.
   - *Visuel* : le panneau de réglages du designer, où l'on voit qu'il a fait des choix
     — une disposition retenue parmi d'autres, un plan cloud, le multi-agents activé ou
     non, ses intégrations tierces.
4. **Connecter ses agents** — il connecte l'agent qui exécute : **Claude** au
   lancement, **Codex** à terme, via l'installation d'un plugin puis une connexion.
   - *Visuel* : les agents disponibles avec leur statut — Claude connecté et
     opérationnel, Codex annoncé pour plus tard — et le geste d'installation du plugin.
5. **Prompter** — il travaille : des **commandes de workflow** pré-cadrent les façons
   de faire, **dans Figma** comme **dans le code**.
   - *Visuel* : le designer en train de lancer une commande de workflow, avec les
     commandes disponibles visibles, et le fait que cela vaut aussi bien dans Figma que
     dans le code.

- *Issues* : chaque section mène à la suivante ; la dernière mène au CTA final.
- *États* : défaut.
- L'ordre des cinq étapes doit rester lisible comme une **progression** (chaque section
  se situe explicitement dans la séquence), pas comme cinq features juxtaposées.

#### 4. Inscription bêta — le CTA final *(must)*

Répétition de l'appel à l'inscription en fin de page, reprenant la promesse du hero.
Même action, même flux que le hero.

- *Issues* : clic → ouverture de la même modal d'inscription.
- *États* : défaut.

### Flux d'inscription (modal) *(must)*

L'inscription **n'est jamais dans le flux de la page** : le CTA (hero ou fin de page)
ouvre une **modal** dédiée qui ne demande **que l'email**.

1. **Ouverture** — la modal explique en une phrase à quoi on s'inscrit (être prévenu à
   l'ouverture de la bêta) et présente le champ email + l'action de validation.
   - *Issues* : validation → soumission ; fermeture (croix, clic extérieur, Échap) →
     retour à la page **au même endroit de lecture**, sans perte de contexte.
   - *États* : défaut.
2. **Soumission** — le visiteur valide son email.
   - *Issues* : succès → état de confirmation dans la modal, disant **ce qui se passe
     ensuite** ; email mal formé → erreur inline sous le champ, actionnable ; email
     déjà inscrit → message rassurant (du type « you're already on the list ») ;
     échec serveur →
     message près de l'action, **sans perdre la saisie**, avec possibilité de réessayer.
   - *États* : défaut ; invalide (inline, au blur) ; invalide (serveur / déjà inscrit) ;
     en cours de soumission (double soumission impossible) ; succès (confirmation).

## Critères d'acceptation

- [ ] La page respecte l'ordre : hero → benefits → 5 étapes → inscription bêta.
- [ ] Le hero tient en accroche + sous-accroche + **un seul** CTA, sans champ email.
- [ ] Aucun lien ne mène ailleurs que vers l'inscription : pas de nav de pages, pas de
      pricing, pas de docs, pas de footer multi-colonnes truffé de liens morts.
- [ ] La section Benefits contient un **emplacement avant/après explicite** dimensionné
      et intégré, prêt à recevoir le visuel définitif.
- [ ] Les 5 étapes apparaissent dans l'ordre spécifié, ordonnées et lisibles comme un
      parcours, chacune nommant ses éléments concrets (Figma, docs, codebase, DO/DON'T,
      Claude, Codex, Figma/code).
- [ ] **Chacune des 5 étapes est une section à part entière** portant son propre
      emplacement de visuel — aucune étape n'est réduite à une ligne de liste.
- [ ] **Chaque emplacement de visuel porte une légende** disant ce que le visuel
      définitif montrera ; aucun emplacement n'est laissé muet.
- [ ] Aucun récapitulatif compact des étapes ni indicateur de progression **ne se
      substitue** aux cinq sections.
- [ ] Les outils sont **nommés** (Claude, Codex, Figma, Mobbin, GSAP), jamais réduits
      à « IA ».
- [ ] **Toute la copy affichée est en anglais**, sans mélange de langues.
- [ ] Le CTA du hero et celui de fin de page ouvrent **la même** modal d'inscription.
- [ ] La modal ne demande **que l'email** ; son libellé d'action est spécifique
      (ex. « Join the beta »), jamais un « Submit » générique.
- [ ] Le bouton de validation est **toujours actif** (un clic sur email vide/invalide
      déclenche le message d'erreur, il n'est pas désactivé silencieusement).
- [ ] Un email mal formé produit un message **sous le champ**, spécifique et disant
      comment corriger ; l'erreur disparaît une fois corrigée.
- [ ] La saisie n'est **jamais vidée** après une erreur (inline ou serveur).
- [ ] Pendant la soumission, l'attente est visible et une **double soumission** est
      impossible.
- [ ] Un email déjà inscrit renvoie un message **rassurant**, pas une erreur brute.
- [ ] Le succès affiche une **confirmation explicite** indiquant la suite (prévenu à
      l'ouverture de la bêta) — jamais une fermeture silencieuse.
- [ ] Aucune promesse d'accès immédiat, d'essai ou de démo produit : le produit n'existe
      pas encore et la page ne laisse pas croire le contraire.

### Accessibilité

- [ ] Le champ email a un **label accessible visible en permanence** (pas de placeholder
      tenant lieu de label).
- [ ] À l'ouverture de la modal, le **focus entre dans la modal** et y reste piégé ; à la
      fermeture, il **revient sur le CTA** qui l'a ouverte.
- [ ] La modal se ferme au clavier (Échap) et l'action de fermeture est atteignable au
      clavier.
- [ ] Les erreurs de validation et la confirmation de succès sont **annoncées à
      l'assistance** (rôle live / focus déplacé sur le message).
- [ ] La page est **navigable au clavier**, focus visible, ordre logique.
- [ ] Sur mobile : **clavier de type email**, autofill activé, champ et action pleine
      largeur atteignables au pouce.

## Priorisation

- **Must** — Les 4 blocs de page dans l'ordre ; le CTA unique du hero ; la modal
  d'inscription avec **tous ses états** (défaut, invalide inline, invalide
  serveur/déjà inscrit, soumission, succès) ; les 5 étapes nommées et ordonnées, chacune
  en section propre ; **les 6 emplacements de visuel réservés et légendés** (avant/après
  + une par étape).
- **Should** — Une phrase de réassurance sous le CTA (ce qu'implique l'inscription :
  pas de spam, désinscription possible) ; un rappel léger du statut « bêta à venir »
  visible en haut de page ; un identifiant de marque minimal en haut (logo seul,
  sans navigation).

## Hors scope

- Toute considération visuelle ou de design system (composants, couleurs, layout, tokens).
- **Les visuels de démonstration eux-mêmes** — aucun n'est produit à ce stade : seuls
  leur place et ce qu'ils devront montrer sont spécifiés ici. L'avant/après est fourni
  par Melvin ; les cinq visuels d'étape seront produits dans un second temps.
- **FAQ, pricing, témoignages, logos clients, badges de conformité, comparatifs** — la
  page ne dispose d'aucune preuve réelle avant lancement ; inventer de la preuve sociale
  serait faux.
- Toute page liée (docs, pricing, mentions légales, blog) et toute navigation multi-pages.
- Authentification, création de compte, essai, démo produit interactive, espace connecté.
- Mécanique backend (email de confirmation, double opt-in, gestion de la file) au-delà de
  la confirmation affichée à l'écran.
- Tout champ d'inscription autre que l'email (nom, rôle, entreprise).
