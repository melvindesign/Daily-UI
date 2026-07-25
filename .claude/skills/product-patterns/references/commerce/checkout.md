# Checkout

S'applique au **tunnel d'achat** : du panier à la confirmation de commande.
C'est un **parcours**, et le plus documenté du métier (études d'abandon de
panier). Les étapes de saisie (coordonnées, adresse, paiement) obéissent en plus
au pattern [form-sign-up.md](form-sign-up.md).

## Job du parcours

Transformer une **intention d'achat déjà formée** en commande payée. Le checkout
ne vend plus rien : tout élément qui n'aide pas à finaliser est une distraction
qui coûte de la conversion. Succès = commande complétée au premier essai, **sans
surprise** (ni de coût, ni d'étape). Ordre de grandeur à connaître : ~70 % des
paniers sont abandonnés ; les deux premières causes évitables par le design sont
les **frais révélés tard** (~48 %) et la **création de compte imposée** (~26 %).

## Anatomie canonique

1. **Panier** : récapitulatif modifiable (quantités, suppression), coût total
   estimé, action primaire vers le checkout — et l'express checkout déjà proposé.
2. **Express checkout** (wallets : Apple Pay, PayPal…) : en tête du tunnel,
   avant les formulaires — il court-circuite la saisie entière.
3. **Choix invité / compte** : le **checkout invité est l'option la plus
   proéminente** ; la connexion est proposée, jamais imposée.
4. **Coordonnées & livraison** : email d'abord (il sert à tout : confirmation,
   relance, création de compte différée), adresse, options de livraison avec
   prix et délais explicites.
5. **Paiement** : moyens de paiement, champs carte, adresse de facturation
   (pré-remplie = livraison).
6. **Révision & confirmation** : récap complet avant paiement ; après paiement,
   numéro de commande, email envoyé, suite proposée.

**Transverse** : un **récapitulatif de commande avec le coût total** (produits,
livraison, taxes) reste visible ou accessible à chaque étape.

## Règles

### MUST

- **Checkout invité proéminent.** Jamais de création de compte imposée avant
  l'achat (2ᵉ cause d'abandon) ; la majorité des sites échouent en rendant
  l'option invité moins visible que la connexion — faire l'inverse.
- **Coût total connu le plus tôt possible.** Frais de livraison et taxes
  affichés (ou estimés) dès le panier, jamais révélés à la dernière étape —
  c'est la 1ʳᵉ cause d'abandon.
- **Parcours linéaire à progression visible.** L'utilisateur sait où il en est
  et combien il reste ; revenir en arrière ne perd **aucune** saisie.
- **Minimum de champs.** La moyenne du marché (~15 champs) est le double du
  nécessaire ; chaque champ obéit aux règles Formulaire
  ([form-sign-up.md](form-sign-up.md)) : labels au-dessus, colonne unique,
  validation inline, statut optionnel explicite.
- **Facturation = livraison par défaut** (case pré-cochée) ; ne jamais faire
  saisir deux fois la même information.
- **Options de livraison comparables** : chaque option affiche prix **et**
  délai concret (date estimée, pas « 3-5 jours ouvrés » seul si évitable).
- **Erreur de paiement actionnable** : dire ce qui a échoué et quoi faire
  (réessayer, autre moyen), sans jamais vider les champs ni renvoyer au début.
- **Récap avant engagement** : le montant exact débité et son détail sont
  visibles au moment de confirmer le paiement.

### SHOULD

- **Wallets en express checkout dès le panier / la fiche produit** : le gain de
  conversion est documenté (+22 % chez les acheteurs éligibles, Stripe 2025) ;
  pour un utilisateur équipé, sauter la sélection du moyen de paiement.
- **Proposer la création de compte APRÈS la confirmation** : nom, email et
  adresse sont déjà connus — il ne manque qu'un mot de passe. C'est le meilleur
  des deux mondes : zéro friction avant l'achat, compte quand même créé.
- **Champ code promo discret** (lien replié « Vous avez un code ? ») : un champ
  proéminent envoie les acheteurs chasser des coupons hors du tunnel — et
  certains ne reviennent pas.
- **Tunnel épuré** : navigation du site réduite, pas de sorties concurrentes de
  l'action primaire — mais toujours un chemin de retour vers le panier.
- **Champs carte assistés** : formatage automatique (groupes de 4), détection
  du réseau, libellés proches de la carte physique (« comme sur la carte »).
- **One-page vs multi-étapes : neutre en conversion.** Ce qui compte est « une
  tâche à la fois » : si one-page, utiliser un accordéon ; le one-page se
  défend surtout sur mobile.
- **Réassurance sobre près du paiement** : mention de sécurité, politique de
  retour — sans empiler les badges.
- **Auto-complétion d'adresse** (et lookup par code postal) : moins de frappe,
  moins d'erreurs de livraison.

### AVOID (anti-patterns)

- Création de compte **obligatoire** avant paiement.
- Frais ou taxes **révélés à l'étape finale**.
- Champ **code promo proéminent** en pleine page de paiement.
- **Upsell / cross-sell** intrusif à l'intérieur du tunnel.
- **Redirection** vers un site de paiement tiers déroutant sans prévenir.
- Vider le formulaire (ou tout le tunnel) après un refus de paiement.
- Faire ressaisir une information déjà donnée (email, adresse).
- Compte à rebours artificiel / pression manipulatoire dans le tunnel.

## États critiques

- **Panier vide** : état prescriptif qui renvoie vers le catalogue, pas une
  impasse.
- **Traitement du paiement** : indicateur explicite, double soumission
  impossible, consigne « ne pas fermer la page » si le traitement est long.
- **Paiement refusé** : message actionnable, saisie conservée, moyen de
  paiement alternatif proposé.
- **Changement en cours de tunnel** (stock épuisé, prix modifié) : le signaler
  immédiatement et clairement, jamais au moment du paiement ni après.
- **Confirmation** : numéro de commande, récapitulatif, confirmation
  d'envoi d'email, suivi proposé — et c'est **ici** que la création de compte
  se propose.

## Adaptations mobile

- Les **wallets deviennent le chemin principal** (le mobile domine le trafic
  e-commerce et la saisie y est le pire des cas) : express checkout en premier,
  formulaire complet en repli.
- **Clavier numérique** pour carte, CVC, téléphone, code postal ; autofill et
  scan de carte activés.
- Récap de commande **repliable mais toujours accessible** (le coût total ne
  disparaît jamais).
- Cibles tactiles généreuses, action primaire pleine largeur et atteignable ;
  une tâche par écran (le one-page accordéon fonctionne bien ici).

## Checklist de revue

- [ ] Checkout invité présent et **plus** proéminent que la connexion
- [ ] Coût total (livraison + taxes) visible ou estimé dès le panier
- [ ] Express checkout / wallets proposés en tête
- [ ] Progression visible ; retour arrière sans perte de saisie
- [ ] Champs au strict minimum, conformes au pattern Formulaire
- [ ] Facturation pré-remplie depuis la livraison
- [ ] Options de livraison avec prix et délai concrets
- [ ] Code promo discret ; aucun upsell intrusif dans le tunnel
- [ ] États conçus : paiement en cours, refus (saisie conservée), confirmation
- [ ] Création de compte proposée après confirmation, pas avant
- [ ] Mobile : wallets en premier, claviers adaptés, récap accessible

## Sources

- Baymard Institute — Checkout UX Best Practices / Current State of Checkout UX — https://baymard.com/blog/current-state-of-checkout-ux
- Baymard Institute — Form Design for E-Commerce — https://baymard.com/learn/form-design
- Stripe — Apple Pay Best Practices (impact conversion, avril 2025) — https://docs.stripe.com/apple-pay/best-practices
- Apple — Human Interface Guidelines, Apple Pay Checkout and Payment — https://developers.apple.com/design/human-interface-guidelines/apple-pay/overview/checkout-and-payment/
- CrazyEgg — Mobile Checkout Optimization: 11 Highest-Impact Fixes — https://www.crazyegg.com/blog/perfect-mobile-ecommerce-checkout/
- Boundev — E-commerce Checkout Flow: UX Design Best Practices — https://www.boundev.com/blog/ecommerce-checkout-flow-design-ux-2025
