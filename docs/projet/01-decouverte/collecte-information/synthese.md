# Synthèse de la collecte d'information

> Entretiens fictifs (projet pédagogique). Chiffres de référence réels et sourcés.

**Client :** l'école, représentée par son service de gestion des locaux.

## Entretiens

| Personne                                                                     | Rôle dans le projet      |
| ---------------------------------------------------------------------------- | ------------------------ |
| [Nadia Ferrand, responsable des salles](entretiens/01-responsable-salles.md) | Client, utilisatrice clé |
| [Paul Mercier, enseignant](entretiens/02-enseignant.md)                      | Utilisateur clé          |
| [Léa Martin, étudiante](entretiens/03-etudiant.md)                           | Classe pilote            |
| [Yann Lefèvre, accueil](entretiens/04-accueil-securite.md)                   | Service impacté          |

## Problèmes

| Problème                                         | Cité par                |
| ------------------------------------------------ | ----------------------- |
| Doubles réservations (2 par semaine)             | Responsable, enseignant |
| Salles réservées mais vides                      | Responsable, étudiante  |
| Aucune vue en temps réel des salles libres       | Enseignant, étudiante   |
| Demandes par e-mail, réponse lente (~30/semaine) | Responsable, enseignant |

C'est cohérent avec les études : une salle de réunion est occupée **30 % du temps** en moyenne ([Density](https://density.io/resources/space-utilization-benchmarks-150-billion-office-waste)) et **29 %** des salles réservées restent vides ([Worklytics, 2025](https://www.worklytics.co/resources/booking-vs-occupancy-2023-2025-hybrid-meeting-room-data-analysis)).

## Règles de réservation

| Rôle                   | Salles                                   | Durée maximale |
| ---------------------- | ---------------------------------------- | -------------- |
| Étudiant               | Salles de projet                         | 2 h            |
| Enseignant             | Toutes ; amphithéâtre après validation   | —              |
| Responsable des salles | Toutes, et gère les salles et les règles | —              |

- Annulation possible jusqu'au début du créneau.
- Les créneaux de cours sont bloqués.

## Fonctionnalités (MoSCoW)

- **Must :** liste des salles avec capacité et équipements, salles libres en temps réel, réservation sans double réservation, « mes réservations » avec annulation, règles par rôle, administration des salles.
- **Should :** créneaux de cours bloqués, liste du jour pour l'accueil, validation de l'amphithéâtre, connexion avec les comptes de l'école.
- **Could :** rappels, libération automatique d'une salle non occupée, statistiques d'occupation.
- **Won't (V1) :** réservations récurrentes, synchronisation avec les agendas, plusieurs établissements.

## Objectifs

| Objectif                           | Aujourd'hui         | Cible         |
| ---------------------------------- | ------------------- | ------------- |
| Supprimer les doubles réservations | 2 par semaine       | 0             |
| Réserver sans passer par e-mail    | ~30 e-mails/semaine | 0             |
| Réserver une salle                 | Jusqu'à 1 jour      | Moins d'1 min |

## Contraintes et calendrier

- **Appareils :** téléphone pour les étudiants, ordinateur pour le personnel.
- **Données personnelles :** nom, e-mail et historique des réservations, à valider avec le délégué à la protection des données.
- **Hébergement :** service informatique de l'école.
- **Sécurité :** les réservations après 19 h doivent être connues de l'accueil avant 17 h.
- **Date prévisionnelle :** pilote avec une classe en **janvier 2027**, puis généralisation.
