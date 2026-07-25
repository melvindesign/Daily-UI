# Exemple — landing page lead-gen pour un service (agence)

Cas déroulé bout-en-bout du pattern [references/acquisition/landing-page.md](../../references/acquisition/landing-page.md), du cadrage aux contrôles. Le document de travail correspondant est [templates/acquisition/landing-page.md](../../templates/acquisition/landing-page.md).

**Brief reçu** : « Une landing page pour notre offre d'audit de performance logistique. On envoie du trafic depuis LinkedIn, on veut des rendez-vous. »

## 1. Cadrage

Trois des cinq questions sont dans le brief, deux manquent — on les pose, et on écrit les hypothèses en attendant la réponse.

- **Archétype** : service / agence.
- **Type** : **lead-gen** — la conversion est une prise de rendez-vous, le formulaire vivra dans la page. Conséquence immédiate : la page se construit autour d'un point de gravité unique, et le CTA du hero ouvrira le formulaire plutôt que de le contenir (l'offre est engageante).
- **Source de trafic** : publications et publicités LinkedIn. Le texte exact de l'annonce est demandé — il donnera le message à reprendre.
- **Niveau de conscience** — *déduit, pas demandé* : un trafic social est froid ; la cible sait qu'elle a un problème de coûts logistiques mais ne connaît pas la catégorie « audit de performance ». → **problem-aware**. Conséquence : ouvrir sur la douleur, éduquer sur ce qu'est un audit avant de parler de la méthode, page plutôt longue.
- **Objections** : le brief n'en contient aucune. On passe la grille psychologique avec le commanditaire, qui fait remonter six objections, ordonnées par coût :

| # | Objection | Réponse de la page |
|---|---|---|
| 1 | « Un audit, c'est un rapport qui finit dans un tiroir » | Montrer le livrable réel et un résultat mis en œuvre |
| 2 | « Ça va me coûter cher et je ne sais pas combien » | Afficher le principe tarifaire et la durée |
| 3 | « Je n'ai pas le temps de mobiliser mes équipes » | Détailler la charge réelle côté client, en heures |
| 4 | « Vous ne connaissez pas mon secteur » | Cas clients du même secteur, nommés |
| 5 | « Qui êtes-vous ? » | Visages, parcours, références |
| 6 | « Pourquoi maintenant ? » | Coût d'un trimestre d'attente, chiffré par le client |

**Longueur** : six objections à lever, sur un public froid et une décision rationnelle → page longue. Ce n'est pas un parti pris, c'est une conséquence.

## 2. Séquence de sections

| # | Section | Objection levée |
|---|---|---|
| 1 | Hero — le résultat promis, pas la méthode | — (mérite le scroll) |
| 2 | Amorce de preuve : logos clients + un chiffre | 5 |
| 3 | Le problème : où part la marge en logistique | — (contexte, problem-aware) |
| 4 | Ce que vous obtenez : le livrable, montré | 1 |
| 5 | Comment ça se passe, en 3 étapes + charge côté client | 3 |
| 6 | Cas clients du secteur, chiffrés | 4 |
| 7 | Principe tarifaire et durée | 2 |
| 8 | L'équipe | 5 |
| 9 | Objections restantes (FAQ) | 6 |
| 10 | Formulaire de prise de rendez-vous | — (conversion) |

**Sections écartées, avec la raison** : « Nos valeurs » (aucune objection assignée), « Chiffres clés de l'agence » (redondant avec la preuve appariée), carrousel de témoignages en pied de page (les preuves sont remontées et appariées).

## 3. Spec de copy avant tout dessin

Le `LANDING.md` est rempli. Points d'arbitrage réels :

- **Message match** : l'annonce LinkedIn dit « où part vraiment votre marge logistique ». La headline reprend « marge logistique » — sans ça, le visiteur ne reconnaît pas ce qu'il vient chercher.
- **Famille de headline** retenue : *transformation*, cohérente avec un public problem-aware.
- **Test de la headline seule** : passé à quelqu'un d'extérieur au secteur, qui reformule correctement l'offre. Une première version — « Optimisez vos flux » — échouait au test et a été écartée.
- **CTA** : « Voir mes 3 postes de perte » plutôt que « Demander un audit » — verbe + bénéfice, dans la continuité de la headline. Réducteur de risque adjacent : « 30 min, sans engagement ».

## 4. Composition brique par brique

Toutes les briques sont dans [references/acquisition/landing-page.md](../../references/acquisition/landing-page.md).

- **[Hero](../../references/acquisition/landing-page.md#brique--hero)** : format split, le visuel montre une page du livrable réel — c'est déjà une réponse à l'objection n°1. Le bas du premier écran laisse dépasser le bandeau de logos : pas de *false floor*.
- **[Preuve](../../references/acquisition/landing-page.md#brique--preuve-sociale)** : logos désaturés en amorce ; les cas clients de niveau 1 (nommés, chiffrés) sont placés en section 6, collés à l'objection sectorielle, et non regroupés en fin de page.
- **[Contenu](../../references/acquisition/landing-page.md#brique--sections-de-contenu)** : la section 5 tient en trois étapes ; la charge côté client est donnée en heures, parce qu'un chiffre lève l'objection n°3 mieux qu'un adjectif rassurant.
- **[CTA](../../references/acquisition/landing-page.md#brique--cta)** : attention ratio — le menu complet du site est retiré ; seul subsiste un lien « à propos » dans le pied de page, parce que le trafic est froid et la marque inconnue. Le CTA se répète après les sections 4, 6, 7 et 9.
- **[Formulaire](../../references/acquisition/landing-page.md#brique--formulaire-de-capture)** : cinq champs, chacun avec un usage nommé. Le champ « volume expédié » — le plus engageant — passe en dernier. Une seule étape, puisque les cinq champs sont de même nature. Les règles générales de formulaire viennent en plus de [form-sign-up.md](../../references/auth/form-sign-up.md).

## 5. Contrôles

La checklist du pattern est passée, y compris sa grille [mobile et accessibilité](../../references/acquisition/landing-page.md#adaptations-mobile) : le hero a une variante mobile (le visuel du livrable passe sous le texte, recadré sur une seule page), le CTA devient sticky, et le cumul CTA sticky + bandeau de cookies est vérifié sur un viewport réel.

Un dernier contrôle porte sur les chiffres : le commanditaire voulait afficher « +30 % de performance en moyenne ». Sans méthode ni périmètre, c'est un chiffre de vanité invérifiable — il est remplacé par un résultat client nommé et daté.

---

### Variante — même offre, en click-through SaaS

Si le même service était vendu comme un produit en libre-service, avec du trafic de recherche de marque :

- **Niveau de conscience** : product-aware → page **courte**, priorité à la preuve et aux objections, ouverture sur l'offre et non sur la douleur.
- **Type** : click-through → pas de formulaire dans la page ; le CTA envoie vers le parcours d'inscription, et peut donc se répéter librement.
- **Séquence** : hero → logos → 3 fonctionnalités en narration → comment ça marche → preuve profonde → prix → FAQ → CTA. Les sections « problème » et « équipe » disparaissent : sur un public qui nous connaît déjà, elles ne lèvent plus rien.
- **Prix** : obligatoire ici, alors qu'il restait un « principe tarifaire » dans la version service.

Le cadrage a changé, donc la page a changé — la méthode, elle, est identique.
