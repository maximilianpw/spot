# Synthèse de la collecte d'information

> Client et entretiens fictifs (projet pédagogique). Les chiffres de marché sont réels : voir l'[étude de marché](etude-de-marche.md).

**Client :** Pinède Workspace (fictif), coworking de 110 membres et 15 salles à Sophia Antipolis. Deuxième site prévu à Nice en 2027.

## Entretiens réalisés

| Date       | Personne                                                        | Profil            |
| ---------- | --------------------------------------------------------------- | ----------------- |
| 06/10/2026 | [Hélène Garnier, gérante](entretiens/01-gerante.md)             | Décide et paie    |
| 06/10/2026 | [Karim Benali, accueil](entretiens/02-responsable-accueil.md)   | Gère au quotidien |
| 06/10/2026 | [Julie Moreau, freelance](entretiens/03-freelance-membre.md)    | Membre, réserve   |
| 06/10/2026 | [Thomas Leroy, entreprise](entretiens/04-entreprise-externe.md) | Externe, loue     |

## 1. Problèmes constatés

| Problème                                                | Cité par                  |
| ------------------------------------------------------- | ------------------------- |
| Salles réservées mais vides (occupation réelle ~35 %)   | Gérante, accueil          |
| Doubles réservations (3 le mois dernier)                | Gérante, accueil, membre  |
| Salles invisibles en ligne : les externes vont ailleurs | Gérante, accueil, externe |
| Règles floues : qui peut réserver quelle salle ?        | Gérante, accueil          |
| Grandes salles prises par 2 personnes                   | Gérante, accueil          |
| Temps perdu : ~6 h/semaine pour l'accueil               | Accueil                   |

Ces chiffres sont cohérents avec le marché : 30 % d'occupation moyenne des salles et 29 à 36 % de réservations non honorées.

## 2. Rôles et règles de réservation

→ Entrée pour le modèle des rôles et autorisations

| Rôle            | Peut réserver                                | Restrictions                                 |
| --------------- | -------------------------------------------- | -------------------------------------------- |
| Gérante         | Tout                                         | —                                            |
| Accueil         | Tout, pour le compte des autres              | Valide les demandes                          |
| Membre résident | Toutes les salles sauf la salle de formation | —                                            |
| Membre nomade   | Petites et moyennes salles                   | 4 h/mois incluses, puis payant               |
| Externe         | Toutes les salles                            | Validation de l'accueil et paiement d'avance |

- Les grandes salles et la salle de formation demandent toujours une validation de l'accueil.
- **Multi-organisation :** une personne peut être membre à titre personnel et salariée d'une startup résidente. Elle choisit pour qui elle réserve, et les droits et la facturation de ce compte s'appliquent.

## 3. Informations attendues sur une salle

→ Entrée pour le schéma de données des salles

Nom, capacité, équipements (écran, visio, paperboard), accessibilité PMR, 3 photos, prix à l'heure, à la demi-journée et à la journée, rôles autorisés, validation requise ou non.

## 4. Fonctionnalités demandées

→ [Fiche Besoins](../../../cours/cahier-des-charges/07-besoins-techniques.pdf)

| Fonctionnalité                                        | MoSCoW | Citée par                 |
| ----------------------------------------------------- | ------ | ------------------------- |
| Fiche de chaque salle (capacité, équipements, photos) | Must   | Tous                      |
| Planning en temps réel, sans double réservation       | Must   | Tous                      |
| Rôles et droits de réservation                        | Must   | Gérante, accueil          |
| Réservation en ligne pour les membres et les externes | Must   | Membre, externe           |
| Validation des demandes par l'accueil                 | Must   | Accueil                   |
| Synchronisation avec Google Agenda                    | Must   | Gérante, membre           |
| Libération auto si personne n'arrive sous 15 min      | Should | Accueil                   |
| Paiement en ligne et facture pour les externes        | Should | Gérante, externe          |
| Suggestion de la salle adaptée à la taille du groupe  | Should | Gérante, membre           |
| Options à la réservation (café, repas, matériel)      | Should | Gérante, accueil, externe |
| Tableau de bord : occupation et chiffre d'affaires    | Should | Gérante                   |
| Tarifs heures creuses                                 | Could  | Gérante, membre           |
| Annonce des invités à l'accueil                       | Could  | Membre, externe, accueil  |
| Plusieurs sites (Nice)                                | Won't  | Gérante (V2, 2027)        |

## 5. Objectifs et critères de succès

→ [Fiche Objectifs](../../../cours/cahier-des-charges/04-objectifs.pdf)

| Objectif                              | Aujourd'hui | Cible à 12 mois |
| ------------------------------------- | ----------- | --------------- |
| Remplir les salles                    | ~35 %       | 50 %            |
| Réduire les réservations non honorées | ~25 %       | Moins de 15 %   |
| Supprimer les doubles réservations    | 3 par mois  | 0               |
| Libérer du temps à l'accueil          | 6 h/semaine | 3 h/semaine     |
| Réserver en ligne pour un externe     | 24 à 48 h   | Immédiat        |

## 6. Modèle économique

- **Abonnement :** 99 €/mois pour un site de 15 salles, +50 €/mois par site supplémentaire. Accepté par la gérante si l'occupation augmente.
- **Pack photo :** offert pour un engagement d'un an. Jugé trop cher à 1 000 € s'il est vendu seul.
- **Rentabilité pour le client :** 2 heures louées en plus par jour rapportent ~1 700 €/mois, sans compter le temps gagné à l'accueil.

## 7. Contraintes

- **Appareils :** ordinateur pour l'accueil, la gérante et les externes ; téléphone pour les membres.
- **Outils à connecter :** Google Agenda, paiement en ligne.
- **Location à des externes :** conditions de location à accepter avant de réserver.
- **Données personnelles :** membres, invités et participants (RGPD).
- **Calendrier :** mise en service souhaitée avant janvier 2027.

## 8. Réponses aux points ouverts

| Point ouvert                               | Ce que l'enquête montre                                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Prix de l'abonnement et du pack photo      | 99 €/mois par site, pack photo offert avec un engagement d'un an                                 |
| Règles selon école, coworking, entreprise  | Enquête limitée au coworking : 3 profils (résident, nomade, externe). Les écoles restent hors V1 |
| Droits multi-organisation                  | La personne choisit pour qui elle réserve : droits et facture de ce compte                       |
| Conformité, assurance, responsabilité      | Conditions de location acceptées en ligne ; l'assurance du coworking couvre les locaux           |
| Intérêt pour plusieurs établissements (V2) | Confirmé : site de Nice en 2027, +50 €/mois accepté                                              |

## 9. Citations marquantes

> « Mes salles sont pleines dans l'agenda et vides dans la réalité. » (gérante)

> « Je passe plus de temps dans Excel qu'avec les membres. » (accueil)

> « Si je ne vois pas la disponibilité en ligne, je passe au suivant. » (entreprise externe)

## 10. Recommandations pour le cadrage V1

- Centrer la V1 sur **le planning, les rôles et la réservation en ligne** : c'est ce qui règle les doubles réservations et rend les salles visibles.
- Prévoir dès la V1 la **libération automatique** des salles non occupées : c'est le levier le plus direct sur le taux d'occupation.
- Garder les services (options, heures creuses, invités) pour la fin de la V1 ou une V1.1.
- Concevoir les données pour **plusieurs sites**, sans les afficher en V1.
