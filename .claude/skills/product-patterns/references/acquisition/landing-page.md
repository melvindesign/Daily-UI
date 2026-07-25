# Landing page

Page marketing autonome dont le seul but est **une action unique**. Ce n'est pas un écran produit : personne ne s'y connecte, personne n'y revient. C'est un **argumentaire qui se déplie au scroll**. Elle emprunte deux patterns voisins — le formulaire ([form-sign-up.md](../auth/form-sign-up.md)) quand la capture se fait dans la page, et le mockup produit pour son visuel de hero.

Fichier long : c'est un pattern composite, fait de briques (hero, preuve, contenu, CTA, formulaire) qui ont chacune leurs règles. Le sommaire suit l'ordre de travail.

- [Job de l'écran](#job-de-lécran) · [Cadrage](#cadrage-avant-toute-anatomie) · [Anatomie canonique](#anatomie-canonique) · [Hero](#brique--hero) · [Preuve sociale](#brique--preuve-sociale) · [Contenu](#brique--sections-de-contenu) · [CTA](#brique--cta) · [Formulaire](#brique--formulaire-de-capture) · [Composition visuelle](#composition-visuelle) · [Règles](#règles) · [Mobile](#adaptations-mobile) · [Chiffres et mythes](#chiffres-et-mythes) · [Checklist](#checklist-de-revue)

## Job de l'écran

Amener un visiteur venu d'ailleurs à faire **une** action, en levant une à une les raisons qu'il a de ne pas la faire. Succès = on peut justifier la présence _et_ la position de chaque section sans invoquer l'habitude, et le visiteur qui se décide à n'importe quel moment trouve immédiatement quoi faire.

Deux principes suffisent à trancher la plupart des arbitrages, sans chiffre :

1. **`Conversion = Désir − (Effort + Confusion)`** Toute section augmente le désir, retire de l'effort ou lève une confusion. Une section qui ne fait aucun des trois se supprime — quelle que soit sa beauté.
2. **Le hero ne convertit pas, il mérite le scroll.** L'attention se concentre en haut (57 % du temps au-dessus de la ligne de flottaison, 74 % dans les deux premiers écrans) — ce n'est pas une injonction à tout y empiler : le job du premier écran est de rendre le deuxième désirable.

## Cadrage (avant toute anatomie)

Une landing page se **cadre avant de se dessiner**. Tant que ces cinq réponses ne sont pas posées, toute proposition de sections est arbitraire. Si l'une manque, la poser — ou écrire explicitement l'hypothèse retenue.

1. **Archétype** — SaaS/produit self-serve, e-commerce ou DTC, service/agence, app mobile, événement.
2. **Type de page** — **lead-gen** (le formulaire _est_ la conversion, il vit dans la page) ou **click-through** (le bouton envoie vers un tunnel). Conséquence : sur une click-through le CTA se répète librement ; sur une lead-gen le formulaire est un point de gravité unique et la page se construit autour de lui.
3. **Source de trafic** — elle fixe le message à reprendre et le niveau de chaleur.
4. **Niveau de conscience** — voir ci-dessous. Change la séquence entière.
5. **Objections** — la liste ordonnée des raisons de ne pas convertir. C'est le livrable central du cadrage : il donne le contenu des sections **et** la longueur de la page.

### Niveau de conscience

Tradition Schwartz (_stages of awareness_). C'est l'axe qui change le plus la page, avant l'archétype, et il se déduit largement de la source de trafic : un social froid est presque toujours _problem-aware_, une recherche de marque _product-aware_.

| Niveau             | Ce que la cible sait déjà                                  | Ce que la page fait                                                                     |
| ------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Problem-aware**  | Elle souffre, elle ne connaît pas la catégorie de solution | Ouvrir sur la douleur, éduquer sur la catégorie **avant** le produit. Page plus longue. |
| **Solution-aware** | Elle connaît la catégorie, elle compare                    | Ouvrir sur la différenciation, comparer aux alternatives. Longueur moyenne.             |
| **Product-aware**  | Elle nous connaît, elle hésite                             | Ouvrir sur l'offre, priorité à la preuve et aux objections. Page courte.                |

### Faire émerger les objections

Quand le commanditaire n'a pas la liste, cinq questions la produisent. Outil d'élicitation — à ne pas recopier dans la page.

| Facteur                  | Question à laquelle répondre                               |
| ------------------------ | ---------------------------------------------------------- |
| État actuel              | Quelle frustration concrète vit la cible aujourd'hui ?     |
| État désiré              | À quoi ressemble le succès, de son point de vue à elle ?   |
| Peurs tacites            | De quoi a-t-elle peur qu'elle ne dirait pas à voix haute ? |
| Barrières de confiance   | Pourquoi ne nous croirait-elle pas ?                       |
| Déclencheurs de décision | Qu'est-ce qui la ferait agir **maintenant** ?              |

### Message match

**MUST.** La headline reprend le message qui a fait cliquer. Une annonce qui promet « Facturation automatique pour freelances » et une page qui ouvre sur « La plateforme financière tout-en-un » rompt le fil : le visiteur ne reconnaît pas ce qu'il est venu chercher et repart avant tout argument. Vérifiable : poser côte à côte le texte de la source et la headline — le même mot-clé de promesse doit apparaître dans les deux.

### Longueur

Il n'y a **pas de gagnant universel** entre page courte et page longue, et c'est documenté : le trafic _paid search_ convertit mieux sur des pages courtes tandis que l'organique préfère les longues.

| Facteur                   | Pousse vers court           | Pousse vers long              |
| ------------------------- | --------------------------- | ----------------------------- |
| Prix / engagement         | gratuit, faible, réversible | cher, engageant, irréversible |
| Nature de la décision     | émotionnelle, impulsive     | rationnelle, comparative      |
| Niveau de conscience      | product-aware               | problem-aware                 |
| Nombre de décideurs       | une personne                | un comité (B2B)               |
| Nouveauté de la catégorie | catégorie connue            | catégorie à éduquer           |

**Règle opérante : on liste les objections, on compte, on obtient la longueur.** Une page longue n'est pas bavarde — elle traite huit objections au lieu de trois.

## Anatomie canonique

### Contenu obligatoire (indépendant de la séquence)

Identité visible et cliquable vers l'accueil · promesse · CTA primaire · preuve · démonstration visuelle du produit · bénéfices · objections traitées · CTA final · coordonnées et pages légales. Le **prix** est optionnel selon l'archétype — indispensable en SaaS et e-commerce, souvent hors sujet en service sur mesure.

### Séquences par archétype

Grammaire de départ, **pas une vérité mesurée** : aucune source ne publie de séquence validée par archétype. On s'en écarte dès que les objections le justifient.

- **SaaS / self-serve** — Hero (claim + démo produit) → logos clients → problème/statu quo → 3-5 fonctionnalités en narration → comment ça marche (3 étapes) → preuve profonde (cas client chiffré) → prix → objections → CTA final.
- **Service / agence (lead-gen)** — Hero (le **résultat** promis, pas la méthode) → preuve immédiate → problème → process/méthode → cas clients → l'équipe et son visage → objections (prix, durée, risque) → formulaire.
- **E-commerce / DTC** — Hero (produit + prix + CTA d'achat) → bénéfices sensoriels → avis et contenu client → comparaison vs alternative → garantie et retours → objections logistiques → CTA.
- **App mobile** — Hero (mockup device + claim) → badges de stores et note moyenne → 3 écrans clés en scroll narratif → avis d'utilisateurs → CTA de téléchargement répété ou sticky.
- **Événement** — Hero (quoi / quand / où + CTA d'inscription) → intervenants → preuve de l'édition précédente → programme → tarifs et échéances → objections logistiques → CTA.

### Rythme de scroll

74 % du temps se joue dans les deux premiers écrans, 42 % dans le premier cinquième de la page. Donc : **ce qui compte remonte** — une section de témoignages en pied de page est un placement par défaut, pas une décision. Le bas de page, lui, n'est pas une poubelle : c'est la zone des visiteurs les plus engagés, on y met la levée d'objection finale et le CTA, pas les mentions.

## Brique — Hero

**Job** : mériter le deuxième écran. Un visiteur qui n'a lu que le hero doit pouvoir dire, dans ses mots, ce qu'on vend et à qui.

**Cinq rôles**, ni plus : headline descriptive (pas un slogan) · sous-headline (en quoi la promesse est crédible) · CTA primaire · visuel du produit en usage · amorce de preuve. Un sixième rôle est parfois présent : la barre d'identité — qui, sur une page de campagne, ne porte **pas** de menu.

Le visuel suit les règles du **mockup produit** : état rempli et jamais vide, données crédibles, détachement du fond, recadrage sur la zone qui porte la valeur.

### Formats d'agencement

Aucune recherche comparative publiée ne les départage.

| Format                                   | Quand                                     | Risque                                                                          |
| ---------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------- |
| **Split** — texte / visuel               | Produit visuel, SaaS, e-commerce          | Devient générique ; le visuel prend la moitié de l'écran pour peu d'information |
| **Centré, colonne étroite**              | Offre simple, lead-gen, événement         | Aucune démonstration du produit ; tout repose sur la copy                       |
| **Full-bleed** — texte en surimpression  | Marque, service émotionnel, haut de gamme | Contraste le plus souvent non accessible ; recadrage mobile catastrophique      |
| **Mockup device**                        | App mobile, produit à interface           | Dévalorisé si le mockup est un gabarit générique posé tel quel                  |
| **Vidéo ou démo animée**                 | Produit complexe à expliquer              | Retarde le CTA, demande un engagement de temps avant l'engagement d'intérêt     |
| **Produit pleine largeur sous le texte** | SaaS, montrer l'interface en grand        | Crée un _false floor_ si la coupure en bas d'écran est nette                    |

### Familles de headline

Palette, pas gabarit à remplir.

| Famille                   | Forme                                          | Va bien avec                     |
| ------------------------- | ---------------------------------------------- | -------------------------------- |
| Descriptive-catégorielle  | « [Produit], le [catégorie] pour [segment] »   | Solution-aware, catégorie connue |
| Résultat + délai          | « [Résultat] en [durée] »                      | Product-aware, offre concrète    |
| Négation de l'alternative | « [Résultat] sans [douleur de l'alternative] » | Solution-aware, marché encombré  |
| Transformation            | « De [état avant] à [état après] »             | Problem-aware, service           |
| Question de qualification | Reprise littérale du problème du lecteur       | Problem-aware, trafic froid      |
| Preuve en headline        | « Utilisé par [N] [segment] pour [tâche] »     | Marque déjà installée            |

**Test de validation** : donner la headline seule à quelqu'un d'extérieur au marché et lui demander ce qu'on vend. « Améliorez votre workflow » pourrait s'appliquer à deux cents produits — c'est raté. La sous-headline ne rattrape jamais une headline qui échoue à ce test.

**Sur la longueur** : aucun nombre de mots ici. Les valeurs qui circulent (6-12 mots, 8-12, 15-25, 15-20…) se contredisent d'une source à l'autre, ce qui suffit à montrer qu'aucune n'est mesurée. L'exigence réelle est documentée : concis, scannable, objectif.

### False floor

Le bas du premier écran doit laisser voir qu'il y a une suite : une carte à moitié coupée, un début de section, un chevauchement. Une section qui se termine pile au bas du viewport fait croire à la fin de la page — NN/g l'appelle l'_illusion de complétude_. Vérifiable : afficher le premier écran et demander « est-ce qu'il y a autre chose en dessous ? ». Vaut pour **toutes** les transitions de section, pas seulement sous le hero.

## Brique — Preuve sociale

**Job** : rendre la promesse crédible **par des tiers**. Succès = le visiteur peut nommer quelqu'un comme lui qui a obtenu le résultat promis.

Elle ne vit pas dans une section unique mais se distribue : **l'amorce** (logos, note agrégée, compteur) dans ou juste sous le hero ; **les preuves appariées**, collées à chaque section qui soulève une objection — c'est le placement le plus efficace et le plus négligé ; **la preuve profonde** (cas client chiffré, témoignage vidéo, garantie) avant le CTA final.

### Hiérarchie d'efficacité

Consensus de praticiens, **pas une mesure** : aucune méta-analyse ne classe les types de preuve avec des chiffres fiables.

| Niveau                              | Types                                                                                                                                       | Pourquoi ça porte                                    |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **1 — Spécifique et vérifiable**    | Cas client chiffré (nom, entreprise, résultat), témoignage vidéo identifiable, donnée d'usage vérifiable                                    | Le lecteur peut vérifier ; le résultat est mesurable |
| **2 — Attribuée**                   | Témoignage écrit avec photo, nom, fonction, entreprise ; note agrégée d'une plateforme tierce avec son logo ; logos clients reconnaissables | Attribuable, donc engageant pour celui qui parle     |
| **3 — Autorité empruntée**          | Logos presse, certifications, badges de sécurité                                                                                            | Transfère la confiance d'un tiers connu              |
| **4 — Faible ou contre-productive** | Témoignage anonyme, compteur vague, logos inconnus de la cible                                                                              | Signale l'absence de preuve réelle                   |

Mise en forme : visage net, cadrage épaules ; nom complet + fonction + entreprise ; **logos désaturés et réduits** pour ne pas concurrencer le CTA ; plusieurs témoignages groupés plutôt qu'un seul isolé.

## Brique — Sections de contenu

**Job** : faire passer le visiteur de « ça a l'air bien » à « ça marcherait pour moi ». Chaque section décrite ici est **optionnelle** — sa présence se justifie par une objection, jamais par l'habitude.

### Bénéfices et fonctionnalités : la fausse opposition

« Ne parlez pas de fonctionnalités, parlez de bénéfices » est une simplification qui produit des pages creuses. Un bénéfice sans preuve factuelle est une promesse invérifiable — et le style promotionnel est précisément ce que NN/g mesure comme coûteux (+27 % d'utilisabilité pour le style objectif).

| Rôle                         | Contenu                                          |
| ---------------------------- | ------------------------------------------------ |
| **Bénéfice en titre**        | Le résultat pour l'utilisateur, en langage clair |
| **Fonctionnalité en preuve** | Ce qui, concrètement, produit ce résultat        |
| **Visuel en démonstration**  | L'interface réelle en action                     |

Le trio, toujours ensemble. **3 à 6 blocs** : au-delà, on n'ajoute plus d'argument, on dilue le principal. Les verbes de brochure (« révolutionner », « sublimer », « propulser ») sont à bannir des titres.

### Comment ça marche

**Trois étapes, rarement plus** — à partir de quatre, le produit paraît compliqué, ce que la section est censée démentir. Chaque étape : un verbe + un visuel de l'interface réelle. Fonction : supprimer l'incertitude sur « ce qui se passe après que je clique ».

### Comparaison

**vs statu quo** (« sans / avec ») — universelle et sans effet de bord. **vs concurrents nommés** — puissante sur un trafic de recherche comparative, risquée en trafic froid : elle fait découvrir des alternatives. Règle : la comparaison ne fonctionne que si l'axe est celui qui compte pour l'acheteur ; sinon elle se retourne.

### Prix

Sa présence est **en soi un signal de confiance** ; son absence est l'une des objections les plus coûteuses, en B2B surtout. Une seule offre mise en avant (deux mises en avant concurrentes annulent l'ancrage). Ce qui est inclus doit être lisible sans interaction. Bascule mensuel/annuel : montrer l'économie en valeur absolue autant qu'en pourcentage. **Placer le prix avant les objections, jamais après** — elles existent pour lever ce que le prix vient de créer.

### Offre packagée

Sur les archétypes à offre construite (formation, service, DTC) : ce qui est inclus, ancrage de prix, bonus, garantie mise en évidence. **Hors sujet sur un produit self-serve** dont l'offre est un plan d'abonnement. Mise en garde : « valeur totale 997 €, votre investissement 97 € » est un registre franchement promotionnel, que l'étude sur le style objectif désigne comme coûteux en crédibilité — à n'employer que si le marché l'attend, jamais par défaut, et jamais avec des valeurs gonflées.

### Objections explicites (la « FAQ »)

La section la plus sous-exploitée. Elle ne contient pas les questions fréquentes, mais **les raisons qui font renoncer**. Méthode pour les trouver : demander aux clients existants « qu'est-ce qui a failli vous arrêter ? ».

| Catégorie               | Question sous-jacente                                 |
| ----------------------- | ----------------------------------------------------- |
| Prix / retour           | « Est-ce que ça vaut ce que ça coûte ? »              |
| Effort de mise en place | « Combien de temps avant que ça serve ? »             |
| Risque de se tromper    | « Et si je me trompe — puis-je revenir en arrière ? » |
| Compatibilité           | « Est-ce que ça marche avec ce que j'ai déjà ? »      |
| Légitimité              | « Qui êtes-vous pour faire ça ? »                     |
| Timing                  | « Pourquoi maintenant plutôt que dans six mois ? »    |

Les accordéons sont acceptables, mais les **deux ou trois objections les plus bloquantes restent dépliées par défaut** : un accordéon fermé est, pour un lecteur qui balaie, du contenu qui n'existe pas.

## Brique — CTA

**Job** : rendre l'action évidente, désirable et sans risque, à l'instant où le visiteur décide.

**Anatomie** : bouton primaire · réducteur de risque en micro-texte **adjacent** (pas dans le libellé) · CTA secondaire éventuel, visuellement subordonné · les répétitions aux points de décision.

### Attention ratio

Rapport entre le **nombre d'éléments cliquables** et le **nombre d'objectifs de conversion**. L'objectif est **1:1**. Concrètement : pas de menu complet, pas de liens vers le blog, pas d'icônes sociales en haut, pied de page réduit au nécessaire légal. Sur plus de 20 000 pages de lead-gen, la conversion décroît à mesure que le nombre de liens augmente.

**Nuance** : sur un trafic froid ou pour une marque inconnue, supprimer toute possibilité d'explorer peut nuire à la confiance — le visiteur qui ne peut rien vérifier part. Arbitrage : plus le trafic est froid, plus on tolère un chemin de vérification (une page « à propos » depuis le pied de page), jamais un menu complet.

### Nombre, répétition, wording

- **Une seule action pour toute la page.** Deux actions de poids équivalent produisent de l'hésitation, pas du choix.
- **Répéter aux points de décision** : hero, après la preuve, après le prix, après les objections. La décision tombe à un moment imprévisible. _Un seul CTA en haut puis plus rien pendant quatre écrans_ est l'erreur structurelle la plus fréquente.
- **Verbe d'action + bénéfice**, jamais la mécanique : « Obtenir mon plan » plutôt que « Envoyer ».
- **Continuité narrative** : le bouton prolonge l'histoire du hero. Sur un service de livraison de repas, « Trouver à manger » bat « Demander une démo ».
- **« Vous » dans le corps, « je / mon » dans le bouton.**
- **Pas de superlatif** : « Transformez votre vie dès aujourd'hui » coûte la crédibilité que le reste de la page a construite.

### Contraste

Réserver **la couleur la plus saturée de la page au CTA primaire**, et à lui seul : si trois éléments la portent, aucun ne ressort. Bouton nettement plus grand que le corps de texte (l'ordre de grandeur cité est le double). Espace négatif d'abord — c'est le premier levier de saillance, avant la couleur. Indices directionnels (regard, ligne, flèche) orientés vers l'action.

**Mythe à écarter** : « le rouge convertit mieux que le vert ». Ce que mesurent ces tests est le **contraste avec l'environnement**, pas la teinte.

### Sticky

Justifié surtout en mobile et sur les pages longues : l'attention décroît avec la profondeur de scroll, un bouton persistant supprime le retour en arrière. Aucune donnée agrégée ne chiffre le gain — le justifier par le raisonnement. Contraintes : ne masque aucun contenu, refermable sur petit écran, ne s'empile pas avec une bannière de cookies, un widget de discussion et une barre promotionnelle.

## Brique — Formulaire de capture

Uniquement sur une page **lead-gen**. Les règles générales de formulaire — libellés, validation, messages d'erreur, états — sont dans [form-sign-up.md](../auth/form-sign-up.md) : ne pas les redire, s'y référer. Ce qui suit est **propre à la capture de lead**.

**Job** : obtenir le minimum d'informations nécessaires à la suite de la relation, au moment où le désir est le plus haut.

**Anatomie** : titre qui reformule ce qu'on obtient (« Recevoir le diagnostic », pas « Formulaire de contact ») · les champs · le bouton · **la réassurance au point de friction** (confidentialité, ce qui se passe ensuite), adjacente au champ ou au bouton, jamais reléguée en pied de page.

### Nombre de champs

**Solide** — recherche Baymard sur le tunnel de commande, transposable : le tunnel moyen contient **11,3 champs** alors que **8 suffisent** ; **17 %** des utilisateurs abandonnent uniquement parce que le processus est trop long ou complexe ; et surtout **le nombre de champs pèse davantage que le nombre d'étapes**. Détail mesuré : **42 %** saisissent leur nom complet dans le premier champ quand prénom et nom sont séparés.

**Observationnel, à manier avec précaution** — les analyses qui font décroître la conversion de 18 % (1 champ) à 8 % (5 champs) sont des **corrélations, pas des tests** : les formulaires courts accompagnent des offres peu engageantes. D'autres analyses montrent une courbe qui se stabilise entre 4 et 7 champs et peut **remonter** ensuite, l'effort agissant comme signal de sérieux et filtre de qualification.

**Règle qui en découle, la seule défendable** : ne pas minimiser le nombre de champs à tout prix, mais **minimiser le nombre de champs affichés par défaut** — divulgation progressive, valeurs par défaut, optionnels masqués, informations déduites plutôt que demandées.

### Une étape ou plusieurs

Les gains publiés sur le multi-étapes sont spectaculaires (+59 %, +214 %, +743 %) et **aucun ne publie de taille d'échantillon**. Un seul test avec un N annoncé donne +21,4 %. Zuko note par ailleurs jusqu'à 10 % d'amélioration obtenus en corrigeant de simples bugs de persistance — une partie du gain attribué au multi-étapes est donc un gain d'exécution.

| Situation                                                          | Forme                                              |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| 2 à 5 champs, une seule nature d'information                       | **Une seule étape**                                |
| 6 champs et plus, ou natures différentes se regroupant logiquement | **Multi-étapes avec indicateur de progression**    |
| Qualification commerciale (budget, taille, échéance)               | Multi-étapes, questions engageantes **en dernier** |

### Placement

**Offre peu engageante** (livre blanc, essai gratuit) : formulaire visible dans le premier écran — il est lui-même le CTA. **Offre engageante** (devis, rendez-vous, démonstration) : bouton dans le hero, formulaire **après l'argumentation** ou en surcouche. Demander l'engagement avant d'avoir levé les objections est l'erreur la plus coûteuse de la lead-gen. On répète le point d'entrée vers le formulaire, pas le formulaire lui-même.

## Composition visuelle

Ce qui change **parce que c'est une landing page**. La direction esthétique (typographie, palette, registre) relève des skills d'exécution, pas de ce pattern.

| Écran produit                              | Landing page                                                              |
| ------------------------------------------ | ------------------------------------------------------------------------- |
| Composition stable, l'utilisateur revient  | Composition **séquentielle**, lue une fois, de haut en bas                |
| Densité forte assumée (utilisateur expert) | Alternance densité / respiration, le lecteur est un passant               |
| Plusieurs actions légitimes                | **Une** action, tout le reste lui est subordonné                          |
| L'esthétique sert la lisibilité            | Elle sert **aussi** la crédibilité : une page bâclée invalide la promesse |

- **Alterner blocs denses et respirations.** Une suite de sections de même hauteur et densité se lit comme un couloir : on la traverse sans s'arrêter.
- **Créer des points d'ancrage qui interrompent le balayage.** Le balayage en F n'est pas un modèle à épouser, c'est un **symptôme** de texte non formaté, décrit comme néfaste : l'utilisateur rate des blocs entiers. Titres, changements de fond, visuels pleine largeur et blocs de preuve sont les interruptions qui le cassent.
- **Marquer les paliers** de l'argumentaire (problème → solution → preuve → décision) par un changement visible : fond, largeur de colonne, orientation.
- **Rien ne rivalise de contraste avec le bouton** dans son voisinage immédiat.

### Marqueurs de rendu générique

Une page produite sans intention prend une allure reconnaissable, et cette allure coûte : elle signale « page générée » et affaiblit la crédibilité qui porte la promesse. Marqueurs observables : dégradé violet-bleu sur blanc en hero sans lien avec la marque · trois colonnes de bénéfices strictement égales à icônes interchangeables · tout centré sans un seul point de rupture · étoiles jaunes et cartes de témoignage identiques sans photo réelle · photographies de banque d'images · sections empilées de hauteur identique · formes floues décoratives sans rôle dans la lecture.

Ce ne sont pas des interdits esthétiques mais des **symptômes d'absence de décision** : chacun est acceptable s'il résulte d'un choix explicite.

## Règles

### MUST

- **Cadrer avant de dessiner.** Les 5 questions répondues, ou leurs hypothèses écrites.
- **Une objection par section.** Chaque section porte le nom de l'objection qu'elle lève. Vérifiable : lire la liste des sections et énoncer l'objection de chacune.
- **Message match** avec la source de trafic.
- **Un seul objectif de conversion, un seul CTA primaire.** Deux objectifs = deux pages. Vérifiable : compter les actions de poids visuel équivalent.
- **Attention ratio maîtrisé** : lister tous les éléments cliquables et justifier chacun.
- **Passer le test de la headline seule** auprès de quelqu'un d'extérieur au marché.
- **Pas de false floor** : la continuité est visible à chaque transition.
- **Le visuel montre le produit ou son résultat.** S'il est retiré, la promesse doit devenir mesurablement moins concrète.
- **Attribuer les preuves** : nom complet, fonction, entreprise, photo.
- **La couleur la plus saturée est réservée au CTA primaire.**
- **Le libellé du CTA dit le bénéfice**, pas la mécanique.
- **Ne demander que les champs qui servent la suite immédiate** — pour chacun, dire ce qu'on en fait.
- **Style objectif** : faits, chiffres et démonstration plutôt que superlatifs.
- **Sourcé, sinon signalé** : citer un chiffre de conversion sans son degré de fiabilité et sa source est une faute.

### SHOULD

- **Déduire le niveau de conscience de la source de trafic**, puis le faire confirmer.
- **Écrire les sections écartées et pourquoi** — c'est ce qui les empêche de revenir par habitude.
- **Faire remonter la preuve forte** et l'apparier à l'objection qu'elle lève.
- **3 à 6 blocs de bénéfices, 3 étapes de fonctionnement.**
- **Réducteur de risque adjacent** au bouton primaire.
- **CTA secondaire subordonné**, ou pas de CTA secondaire.
- **Comparer au statu quo** plutôt qu'à des concurrents nommés en trafic froid.
- **Commencer le formulaire par la question la plus facile**, garder les champs engageants pour la fin.
- **Vérifier la page en réduction** (vue à 20 %, sans lire) : le fil de l'argumentation et l'emplacement du CTA doivent rester lisibles.

### AVOID (anti-patterns)

**Structure** — Sections rituelles (« Nos valeurs », « Chiffres clés ») sans objection assignée · séquence copiée d'une page dont l'archétype diffère · page-catalogue qui présente tout ce que fait le produit · longueur choisie a priori.

**Hero** — Carousel · slogan à la place d'une headline · vidéo en lecture automatique avec son · vidéo « talking head » longue · image de banque d'images décorative · **le premier écran comme entrepôt** (headline + sous-headline + deux CTA + vidéo + logos + formulaire : empiler ne fait pas scroller, ça noie).

**Preuve** — Preuve qui révèle la faiblesse (« rejoignez nos 42 utilisateurs ») · chiffres de vanité invérifiables · logos que la cible ne reconnaît pas · étoiles décoratives sans note réelle.

**Contenu** — Bénéfices sans preuve · jargon de brochure · grille de douze fonctionnalités à icônes · FAQ de service client sur une page dont le visiteur n'est pas client · valeurs gonflées dans une offre packagée · paragraphes longs non formatés.

**CTA** — Menu de navigation complet · « En savoir plus », « Soumettre », « Continuer » · deux CTA concurrents de même poids · urgence fabriquée (compte à rebours qui se réinitialise) · bouton fantôme comme action primaire.

**Formulaire** — Demander maintenant ce dont on aura besoin plus tard · champ sensible en première position · placeholder tenant lieu de libellé · formulaire dans le hero sur une offre engageante · mention légale reléguée en pied de page · prénom/nom séparés sans nécessité.

**Composition** — Le couloir (dix sections de même hauteur et densité) · décoration plus saillante que le contenu · animation à l'entrée de chaque bloc · texte sur image sans traitement de fond.

## États critiques

Une landing page n'a pas d'états produit, mais quatre moments doivent être conçus :

- **Formulaire en erreur** — message textuel et non seulement coloré, associé au champ, énonçant quoi corriger.
- **Envoi en cours** — le bouton doit empêcher le double envoi sans disparaître.
- **Après conversion** — page ou état de confirmation dédié, disant ce qui se passe ensuite et sous quel délai. C'est un moment de la page, pas un détail technique.
- **Offre expirée ou indisponible** (événement complet, promotion terminée) — dire ce qui est encore possible, jamais laisser la page mentir.

## Adaptations mobile

Le viewport mobile étant beaucoup plus court, **ce qui tenait dans le premier écran desktop occupe deux à trois écrans mobiles**, alors que l'attention reste concentrée sur les premiers écrans : le budget d'attention du haut de page est **structurellement plus serré**. C'est l'argument le plus solide pour arbitrer le haut de page en mobile, puis l'étendre au desktop.

- **Colonne unique**, aucun défilement horizontal — y compris pour un tableau comparatif ou un bandeau de logos.
- **Le hero se recompose**, il ne se recadre pas : hiérarchie revue, visuel souvent après le texte, promesse tenant en deux ou trois lignes. Le full-bleed est le format qui résiste le moins.
- **CTA primaire dans la zone du pouce** (tiers bas) ou sticky, en pleine largeur, libellé tenant sur une ligne.
- **Cibles tactiles grandes et espacées** — ordre de grandeur retenu par les référentiels et les recommandations de plateformes : 44 à 48 px de côté.
- **Tableaux comparatifs** : deux colonnes maximum ou bascule entre options.
- **Blocs de bénéfices en colonne unique**, dans un ordre argumentatif (le plus fort d'abord), pas dans l'ordre de la grille.
- **Formulaire** : un champ par ligne, claviers adaptés, taille de texte suffisante pour éviter le zoom automatique à la mise au point.
- **Recréer le rythme** par les fonds, les hauteurs et l'échelle des visuels — sinon la pile en colonne unique aplatit toutes les sections.

### Accessibilité : les fautes propres au format

1. **Texte sur image pleine largeur** — la plus fréquente. Sans voile ni aplat, le contraste échoue presque systématiquement et varie selon le recadrage. Repères : 4.5:1 pour le texte courant, 3:1 pour le texte large.
2. **CTA « fantôme »** (bordure fine, texte clair) — contraste des composants insuffisant (repère 3:1) et saillance perdue pour l'action principale.
3. **Faux titres** — une landing conçue comme une affiche produit des textes gros qui ne sont pas des titres. La hiérarchie sémantique doit exister réellement.
4. **Placeholder tenant lieu de libellé** — il disparaît à la saisie, échoue au contraste, charge la mémoire de travail.
5. **Animations de scroll et vidéos de fond** ignorant la préférence système de réduction des animations — déclencheur vestibulaire connu.

Plus, sur toute la page : texte alternatif sur les visuels porteurs de sens.

### Empilement d'interface

CTA sticky + bandeau de cookies + widget de discussion + fenêtre d'intention de sortie + barre promotionnelle : aucun n'est fautif isolément, **leur cumul l'est**. Sur mobile ils consomment couramment une large part du viewport et peuvent recouvrir le CTA. Recenser tous les éléments flottants et vérifier le rendu quand ils sont **tous affichés simultanément**.

## Si la page est implémentée

Ce pattern ne prescrit ni cadre applicatif ni bibliothèque de composants. Seulement ce qui, à l'implémentation, **protège les décisions de conception** :

- **Une section = une unité nommée par son rôle** dans l'argumentaire (« le problème », « la preuve »), jamais par sa forme (« grille-3-colonnes ») — une section nommée par sa forme cesse d'être rattachable à son objection.
- **Les blocs répétés sont des données** structurées rendues en bouclant sur une liste, pas du balisage recopié. Conséquence : la limite de 3 à 6 blocs devient visible, et un témoignage sans nom d'auteur devient une donnée manquante plutôt qu'un oubli invisible. Les champs d'attribution ne doivent pas être facultatifs.
- **Les valeurs qui portent une décision** (couleur du CTA, paliers d'espacement, durées) sont centralisées : la règle « couleur réservée au CTA » n'est tenable que si cette couleur a un nom unique.
- **Hiérarchie de titres réelle**, sans saut de niveau.
- **Préférence de réduction des animations respectée** ; entrées déclenchées à la visibilité, pas au chargement.
- **Aucun texte de remplissage livré** : le texte provisoire devient définitif.

## Chiffres et mythes

Le domaine est saturé de chiffres recopiés dont la source primaire n'existe pas. **Citer un chiffre sans son degré de fiabilité et sa source est une faute** : il fait trancher au hasard tout en donnant l'illusion du contraire. Quand aucun chiffre fiable n'existe, le dire et raisonner — la plupart des règles ci-dessus tiennent sans chiffre.

Échelle : 🔬 recherche avec méthode publiée (peut fonder un MUST) · 📊 données agrégées d'un acteur, biais d'échantillon (ordre de grandeur, jamais une cible) · 🧪 test isolé (illustration, toujours annoncée comme telle) · 💬 opinion de praticien (grammaire, jamais une mesure).

### Citables

| Chiffre                                                                                | Contexte                                             | Fiab. |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----- |
| 57 % du temps au-dessus de la ligne de flottaison                                      | Eye-tracking NN/g, màj 2018                          | 🔬    |
| 74 % dans les deux premiers écrans (~2160 px)                                          | idem                                                 | 🔬    |
| 81 % dans les trois premiers écrans                                                    | idem                                                 | 🔬    |
| 42 % du temps dans le premier cinquième de la page                                     | idem                                                 | 🔬    |
| 80 % au-dessus de la ligne de flottaison en 2010                                       | Étude originale — **historique**, la valeur a évolué | 🔬    |
| Écriture concise +58 %, scannable +47 %, objective +27 %, cumul +124 % d'utilisabilité | 51 utilisateurs, 5 versions d'un même site           | 🔬    |
| Tunnel moyen 11,3 champs, 8 suffisent ; nombre de champs > nombre d'étapes             | Baymard                                              | 🔬📊  |
| 17 % abandonnent pour processus trop long ou complexe                                  | Baymard                                              | 🔬📊  |
| 42 % saisissent leur nom complet dans un champ « prénom »                              | Baymard                                              | 🔬    |
| La conversion décroît quand le nombre de liens augmente                                | 20 000+ pages de lead-gen                            | 📊    |
| Paid search convertit mieux sur pages courtes, organique sur longues                   | CXL                                                  | 📊    |

**Ordres de grandeur par industrie** (médiane / 75ᵉ centile, corpus de 41 000+ pages). 📊 — biais à annoncer : ce sont les clients d'une plateforme de landing pages, pas le web entier. Jamais un objectif contractuel.

Toutes industries 6,6 % · SaaS 3,8 / 11,6 % · E-commerce 4,2 / 11,4 % · Voyage 4,8 / 15,6 % · Services professionnels 6,1 / 14,1 % · Juridique 6,3 / 13,1 % · Services financiers 8,3 / 26,1 % · Éducation 8,4 / 20,0 % · Événementiel 12,3 / 40,8 %.

Lecture utile : **l'écart entre archétypes est plus grand que l'effet de la plupart des optimisations**. Un SaaS à 4 % et un événementiel à 12 % ne sont pas comparables.

### Anecdotes 🧪 — n'ont jamais valeur de règle

Basecamp, photo de personne : +102,5 % · ContentVerve, « mon » plutôt que « votre » : +90 % de clics · Crazy Egg, page allongée d'un facteur 20 : +30 % · multi-étapes : HubSpot +59,2 %, Vendio +214 %, jusqu'à +743 % (un seul de cette famille publie son N : +21,4 %) · Unbounce, suppression des liens : +40 %.

### ⚠️ À refuser de citer

| Chiffre circulant                                                     | Pourquoi il est écarté                                                                                                                                                                          |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| « 8 secondes d'attention, moins qu'un poisson rouge »                 | Document marketing d'entreprise (2015) citant un agrégateur qui n'a jamais fourni de source. Réfuté publiquement. Aucune étude évaluée par les pairs n'établit de durée d'attention généralisée |
| « Passer de 11 à 4 champs = +120 % »                                  | Source primaire introuvable, méthode jamais publiée                                                                                                                                             |
| « Chaque champ au-delà de 5 coûte 20 à 30 % »                         | Aucune étude primaire ; contredit par les analyses à courbe non monotone                                                                                                                        |
| « Les taux de complétion chutent de 4 à 6 % par champ au-delà du 8ᵉ » | Attribué à Baymard par des relais secondaires ; absent de leurs publications                                                                                                                    |
| « Le rouge convertit mieux que le vert »                              | Confusion entre teinte et contraste ; jamais généralisé                                                                                                                                         |
| « 1 € investi en UX en rapporte 100 »                                 | Chiffre ancien, contexte perdu, jamais reproduit                                                                                                                                                |
| « Les études de cas augmentent la conversion de 30 à 70 % »           | Fourchette de blog, aucune méthode                                                                                                                                                              |
| « 83 % des visites de landing pages se font sur mobile »              | Aucune étude source liée ; les autres sources donnent 65 à 80 % selon l'industrie — parler d'ordre de grandeur                                                                                  |
| « La vidéo augmente la conversion de 80 % »                           | Origine ancienne, jamais reproduite                                                                                                                                                             |
| « 75 % des utilisateurs ne savaient pas qu'ils pouvaient scroller »   | Relayé de seconde main. Le **principe** de l'illusion de complétude est établi ; ce chiffre ne l'est pas                                                                                        |

## Checklist de revue

**Cadrage**

- [ ] Archétype, type (lead-gen / click-through), source de trafic et niveau de conscience posés
- [ ] Liste d'objections écrite et ordonnée ; chaque section rattachée à l'une d'elles
- [ ] Longueur justifiée par le nombre d'objections, pas par un parti pris
- [ ] Message match vérifié contre le texte de la source de trafic
- [ ] Sections écartées consignées avec leur raison

**Hero**

- [ ] La headline seule permet de dire ce qu'on vend et à qui
- [ ] Une seule promesse dominante, un seul CTA primaire
- [ ] Visuel montrant le produit ou son résultat, en état rempli et crédible
- [ ] Pas de false floor, ici ni ailleurs

**Preuve et contenu**

- [ ] Chaque preuve attribuée, au moins une portant un résultat chiffré
- [ ] Chaque preuve appariée à une objection nommée
- [ ] Logos désaturés/réduits, ne concurrençant pas le CTA
- [ ] 3 à 6 blocs de bénéfices avec le trio complet ; 3 étapes de fonctionnement
- [ ] Aucun superlatif ni verbe de brochure dans les titres
- [ ] Prix présent si l'archétype l'exige, une seule mise en avant, avant les objections
- [ ] FAQ composée d'objections, 2-3 dépliées par défaut

**Conversion**

- [ ] Tous les éléments cliquables recensés et justifiés
- [ ] CTA présent à chaque point de décision
- [ ] Libellé = verbe + bénéfice ; réducteur de risque adjacent
- [ ] Couleur la plus saturée réservée au CTA primaire
- [ ] Chaque champ du formulaire a un usage nommé ; champs engageants en dernier
- [ ] Ce qui se passe après l'envoi est explicite

**Transverse**

- [ ] Les quatre états critiques traités
- [ ] Haut de page arbitré sur un viewport mobile réel ; colonne unique, aucun défilement horizontal
- [ ] Contraste vérifié sur le texte en surimpression d'image, dans les deux recadrages
- [ ] Hiérarchie de titres réelle ; préférence de réduction des animations respectée
- [ ] Rendu vérifié avec **tous** les éléments flottants affichés simultanément
- [ ] Vue en réduction : le fil de l'argument et le CTA restent identifiables
- [ ] Aucun chiffre cité sans sa source et son degré de fiabilité ; aucun chiffre de la table « à refuser »

## Sources

- Julian Shapiro — Landing pages (séquence, `Conversion = Désir − (Effort + Confusion)`, test de la headline seule, structure d'un bloc de fonctionnalité, « qu'est-ce qui a failli vous arrêter ? », continuité narrative du bouton) — https://julian.com/guide/growth/landing-pages
- NN/g — Scrolling and Attention (57 / 74 / 81 %, 42 % dans le premier cinquième, false floors) — https://www.nngroup.com/articles/scrolling-and-attention/
- NN/g — Scrolling and Attention, original research (valeur historique de 2010) — https://www.nngroup.com/articles/scrolling-and-attention-original-research/
- NN/g — Concise, Scannable, and Objective (+58 / +47 / +27 / +124 %) — https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/
- NN/g — F-Shaped Pattern for Reading Web Content (symptôme, pas modèle) — https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
- Unbounce — Landing page best practices — https://unbounce.com/landing-page-articles/landing-page-best-practices/
- Unbounce — 7 Principles of Conversion-Centered Design (attention ratio, _Draw Attention_, _Reduce Friction_, message match) — https://unbounce.com/conversion-centered-design/
- Unbounce — Attention Ratio (définition, objectif 1:1) — https://unbounce.com/conversion-glossary/definition/attention-ratio/
- Unbounce — What's a good conversion rate? — https://unbounce.com/landing-pages/whats-a-good-conversion-rate/
- Unbounce — Average conversion rates for landing pages — https://unbounce.com/average-conversion-rates-landing-pages/
- Unbounce — Autoplay on landing pages — https://unbounce.com/landing-pages/autoplay-landing-page-best-practices/
- Baymard Institute — Checkout flow average form fields — https://baymard.com/blog/checkout-flow-average-form-fields
- Baymard Institute — From 16 form fields to 8 — https://baymard.com/blog/checkout-optimization-from-16-fields-to-8
- CXL — Long form or short form? — https://cxl.com/blog/long-form-or-short-form/
- CXL — Should you really reduce the number of form fields? — https://cxl.com/blog/reduce-form-fields/
- CXL — Using navigation on landing pages — https://cxl.com/blog/use-navigation-landing-pages-data-driven-consideration/
- Cobloom — Form fields and conversion rates: is less really more? — https://www.cobloom.com/blog/form-fields-and-conversion-rates-is-less-really-more
- Zuko — Single page or multi-step form? — https://www.zuko.io/blog/single-page-or-multi-step-form
- Venture Harbour — How form length impacts conversion rates — https://ventureharbour.com/how-form-length-impacts-conversion-rates/
- Wynter — Website messaging framework — https://wynter.com/post/website-messaging
- Fast Company — The 8-second attention span is BS — https://www.fastcompany.com/91023619/8-second-attention-span-is-bs-this-is-why
- W3C — WCAG (contraste, cibles, mouvement, structure de titres) — https://www.w3.org/WAI/WCAG22/quickref/
