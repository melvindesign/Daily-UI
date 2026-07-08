# Lentilles d'analyse — UX (fonctionnel) & UI (visuel)

Deux lentilles séparées, activables à la carte selon le brief. Elles partagent la
même acquisition et le même gate visuel ; seule la **grille d'observation** diffère.
Ne s'appuyer que sur ce qui a été **réellement observé** au gate.

---

## Lentille UX — fonctionnel

Objectif : comprendre le **parcours** et l'**interaction**, pas l'esthétique.

Grille de capture par référence :

- **Étapes du flux** — ordre, découpage, progressive disclosure (qu'est-ce qui est
  demandé, et à quel moment).
- **Champs / données demandés** — présence, absence, regroupement, moment de la
  demande, ce qui est optionnel vs obligatoire.
- **Méthodes alternatives** — SSO, magic link, passkey, téléphone, invité…
- **Validations & états critiques** — validation temps réel vs après-coup, gestion
  d'erreur (inline, bandeau…), chargement, échec, succès, empty state.
- **Réduction de friction** — ce qui est reporté, pré-rempli, déduit, optionnel.

**À ignorer avec cette lentille** : couleurs, layout, composants, espacements,
typographie, tokens.

---

## Lentille UI — visuel

Objectif : comprendre le **traitement visuel** et les **patterns de composition**,
pas la logique du parcours.

Grille de capture par référence :

- **Layout & structure** — organisation de la page/écran, zones, grille, ce qui est
  au-dessus de la ligne de flottaison.
- **Hiérarchie visuelle** — ce qui attire l'œil en premier, poids relatif des
  éléments, traitement du CTA principal vs secondaire.
- **Densité d'information** — aéré vs dense, quantité par écran, groupement.
- **Patterns visuels récurrents** — motifs de composition qui reviennent (cartes,
  listes, hero, tabs, bottom sheet, sticky nav/CTA…).
- **Style** — registre (sobre/joueur, pro/grand public), illustration vs photo,
  clair vs sombre, arrondis, ombres/élévation.
- **Responsive / adaptation** — ce qui change entre plateformes, ce qui est masqué
  ou priorisé, éléments collants (nav/CTA sticky).

> Cette grille généralise l'approche hero / CTA / social proof / visual style des
> benchmarks de landing pages à **tout** type d'écran.

---

## Cadre transverse (les deux lentilles)

Une fois les références capturées, en extraire deux catégories :

### Conventions (à respecter)

Motif présent chez **≥ 3 références**. C'est ce que l'utilisateur attend déjà ;
s'en écarter sans raison crée de la confusion.

> Formuler : « [Convention] : [ce que c'est], présent chez [App A, App B, App C]. »

### Opportunités de différenciation (où se démarquer)

- Là où les leaders se **ressemblent tous** mais où une exécution meilleure /
  différente peut marquer.
- Une **lacune de catégorie** : personne ne fait X → peut-il être un différenciateur ?
- Un motif que les leaders exécutent **mal** → une version excellente ressortirait.

> Distinguer toujours **convention** (≥3 réfs) d'un **choix isolé** (1 réf) : un
> choix isolé n'est pas une norme, c'est un pari d'un acteur.
