# Empty states

Pattern **transverse** : pas un type d'écran, mais un état que tout écran de contenu peut prendre (liste, table, recherche, dashboard, boîte de réception). Il complète les autres patterns — le premier usage d'un produit vide relève aussi de [welcome.md](../onboarding/welcome.md), le dashboard sans données de [dashboard.md](../data/dashboard.md). La rédaction du message relève de l'UX writing (skill dédié s'il est disponible).

## Job de l'état

Transformer un moment mort en moment utile. Un empty state est une **impasse potentielle** : l'utilisateur arrive quelque part où il n'y a rien, et c'est le design qui décide s'il repart informé et en action, ou confus et bloqué. Succès = l'utilisateur comprend **pourquoi** c'est vide et sait **quoi faire** ensuite. La formule (NN/g) : contexte + cause + prochaine action.

## Taxonomie — identifier la cause avant de dessiner

Six causes, six réponses différentes. Traiter deux causes avec le même écran générique est l'erreur centrale du pattern.

| Type | Cause | Réponse attendue |
|---|---|---|
| **Premier usage** | Pas encore de données | Éduquer (la valeur de l'écran) + amorcer : l'action la plus simple qui crée de la donnée, un import, ou une démo. C'est de l'onboarding. |
| **Vidé par l'utilisateur** | Tout traité / tout supprimé (inbox zero, tâches finies) | C'est un **succès** : le reconnaître, ton positif. Pas de CTA de création pressant — il n'y a rien à réparer. |
| **Recherche sans résultat** | La requête ne matche rien | Écho de la requête (« Aucun résultat pour “kiwi” »), suggestions : orthographe, termes plus larges, alternatives. |
| **Filtres sans résultat** | La combinaison de filtres exclut tout | Distinct de la recherche : montrer les filtres actifs et offrir un reset en un geste. |
| **Permission / accès manquant** | Le contenu existe mais n'est pas accessible | Dire ce qui manque et comment l'obtenir (demander l'accès, contacter qui). |
| **Erreur ou indisponibilité** | Le contenu n'a pas pu être chargé | **Ce n'est pas un empty state** : c'est une erreur, avec message d'erreur et retry. Ne jamais la déguiser en vide. |

## Anatomie canonique

Du plus important au moins important :

1. **Titre** : ce qui se passe, formulé pour ce moment précis (jamais « Aucune donnée »).
2. **Explication courte** orientée cause et bénéfice : pourquoi c'est vide, ce que l'écran apportera une fois rempli.
3. **Action primaire** adaptée à la cause (créer, importer, élargir la recherche, réinitialiser les filtres) — sauf type « vidé par l'utilisateur », où il n'y a rien à corriger.
4. **Alternative** si pertinente : voir une démo, un exemple, la doc.
5. **Signal visuel** (illustration, icône) : optionnel et subordonné — il soutient le message, il ne le remplace jamais.

## Règles

### MUST

- **Identifier la cause d'abord.** Le type (taxonomie ci-dessus) détermine le message et l'action ; un écran générique partagé entre plusieurs causes est un défaut, pas une économie.
- **Jamais littéralement vide, jamais une impasse.** Un écran blanc ou un « No data » sec laisse l'utilisateur deviner si ça charge, si c'est cassé ou si c'est normal. Toujours : cause + prochaine action.
- **Vide ≠ chargement ≠ erreur.** Trois états distincts : le chargement a son skeleton, l'erreur a son message et son retry, le vide a son explication. Et ne jamais **flasher** l'empty state pendant que les données chargent — l'écran « vide » qui clignote avant l'affichage est un bug classique.
- **Recherche / filtres : toujours une porte de sortie.** Écho de ce qui a été cherché ou filtré, et un geste pour élargir (suggestions, reset des filtres visible).
- **« Vidé par l'utilisateur » se célèbre.** Inbox zero et liste de tâches terminée sont des accomplissements : ton positif, aucune pression à recréer du contenu.
- **Premier usage : amorcer, pas seulement expliquer.** L'action proposée est la plus petite qui produise de la donnée réelle (créer le premier élément, importer, brancher une source). Voir [welcome.md](../onboarding/welcome.md).
- **Chaque surface de contenu a son empty state spécifié.** Toute liste, table, recherche ou zone de données de la maquette a un état vide conçu — pas seulement l'écran principal.

### SHOULD

- **Du contenu utile plutôt que du décor** : données de démonstration, templates, exemples cliquables montrent l'état « rempli » mieux que n'importe quelle illustration.
- **Un message écrit pour ce moment précis** : nommer l'objet du produit (« Aucune facture pour l'instant »), pas le vocabulaire système (« 0 élément »).
- **L'empty state comme moment d'éducation** : c'est parfois le seul endroit où expliquer à quoi sert une fonctionnalité — une phrase sur la valeur, pas un paragraphe.
- **Illustration sobre et alignée au propos** : elle donne le ton, réduite ou supprimée si l'espace manque.
- **Cohérence entre les empty states du produit** : même structure (titre, explication, action), tons adaptés par cause.

### AVOID (anti-patterns)

- « No data » / « Aucun résultat » **sec, sans cause ni action**.
- **L'impasse** : un état vide sans aucune action possible.
- **Culpabiliser** (« Vous n'avez encore rien créé ») ou pousser un CTA de création sur un état « vidé par l'utilisateur ».
- **L'illustration géante au texte pauvre** : la décoration qui prend la place du message.
- **Le même écran générique** recyclé pour toutes les causes.
- **L'erreur déguisée en vide** : « Aucune donnée » alors que le chargement a échoué — l'utilisateur croit que c'est normal.
- **Le flash d'empty state** pendant le chargement.

## Frontières avec les états voisins

- **Chargement** : skeleton stable (la structure de l'écran ne saute pas) ; l'empty state n'apparaît qu'une fois la réponse « vraiment vide » connue.
- **Erreur** : message d'erreur + retry, visuellement distinct du vide.
- **Peu de données ≠ vide** : un écran à 2 éléments est un écran normal, pas un empty state à moitié ; ne pas mélanger contenus réels et incitations de remplissage envahissantes.

## Adaptations mobile

- Titre + action visibles **sans scroll** ; l'explication se raccourcit.
- Illustration réduite ou supprimée — l'espace vertical est compté.
- L'action primaire reste un bouton pleine largeur atteignable au pouce.

## Checklist de revue

- [ ] La cause de chaque état vide est identifiée (taxonomie) et la réponse adaptée
- [ ] Aucun état littéralement vide ni sans action (hors « vidé par l'utilisateur »)
- [ ] Vide, chargement et erreur sont trois états distincts ; pas de flash d'empty state
- [ ] Recherche/filtres : écho de la requête + porte de sortie (suggestions, reset)
- [ ] « Vidé par l'utilisateur » traité en succès, sans pression
- [ ] Premier usage : action d'amorçage la plus simple, démo/templates envisagés
- [ ] Toutes les surfaces de contenu de la maquette ont leur empty state
- [ ] Message spécifique au moment (pas de vocabulaire système), illustration subordonnée
- [ ] Mobile : titre + action sans scroll

## Sources

- NN/g — Designing Empty States in Complex Applications: 3 Guidelines — https://www.nngroup.com/articles/empty-state-interface-design/
- Pencil & Paper — Empty State UX Examples & Best Practices — https://www.pencilandpaper.io/articles/empty-states
- Eleken — Empty state UX examples and design rules — https://www.eleken.co/blog-posts/empty-state-ux
- Toptal — Empty States: The Most Overlooked Aspect of UX — https://www.toptal.com/designers/ux/empty-state-ux-design
- Mobbin — Empty State UI Design: Best practices & variants — https://mobbin.com/glossary/empty-state
- UXPin — Designing the Overlooked Empty States — https://www.uxpin.com/studio/blog/ux-best-practices-designing-the-overlooked-empty-states/
