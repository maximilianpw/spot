# SPOT

SPOT est une application web de réservation de salles et d'espaces partagés pour les écoles, les entreprises et les espaces de coworking.

L'objectif est simple : savoir quelles salles sont disponibles, réserver un créneau et éviter les doubles réservations, sans passer par des e-mails ou des tableurs.

## Fonctionnalités prévues

- Consulter les salles disponibles, leur capacité et leurs équipements.
- Réserver un créneau et retrouver ses réservations.
- Annuler une réservation avant le début du créneau.
- Permettre aux administrateurs de gérer les salles et les règles de réservation.
- Empêcher deux réservations sur des créneaux qui se chevauchent pour une même salle.

Le projet vise d'abord un déploiement pilote dans une école. Les réservations récurrentes, les notifications et l'intégration avec des calendriers sont des évolutions possibles, hors du périmètre initial.

## Équipe

| Rôle           | Membres                             |
| -------------- | ----------------------------------- |
| Chef de projet | Maximilian PINDER-WHITE             |
| Front-end      | Benoit Bremaud, Kevin Vitali        |
| Back-end       | Clement Machtelinckx, Valentin SALA |

Les équipes front-end et back-end définiront ensemble un contrat d'API commun pour développer et tester les deux parties en parallèle.

## État du projet

Le dépôt contient actuellement le socle technique : une interface React et une API Node.js avec une route de vérification de disponibilité (`/api/health`). Les fonctionnalités métier décrites ci-dessus restent à développer ; l'authentification et la base de données ne sont pas encore configurées.

## Technologies

- **Front-end :** React, React Router, TypeScript et Tailwind CSS.
- **Back-end :** Node.js et TypeScript.
- **Organisation :** un dépôt commun avec npm workspaces (`frontend/` et `backend/`).
- **Tests et déploiement :** Vitest et Docker.

## Lancer le projet

Prérequis : **Node.js 24+** et **npm 11+**.

```bash
npm ci
npm run dev
```

- Interface : http://localhost:5173
- API : http://localhost:3001/api/health

## Vérifier le projet

```bash
npm run verify
npm test
npm run build
```

Les instructions détaillées de développement, de configuration et de déploiement sont disponibles dans [docs/development.md](docs/development.md).
