<div align="center">

# 👥 WealthHealth API

Backend d'une application de gestion des employés développé avec **Node.js**, **Express**, **TypeScript** et **MySQL**.

Cette API REST sécurisée permet de gérer les employés d'une entreprise grâce à une authentification basée sur **JWT**.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

</div>

---

# 📖 Présentation

WealthHealth API est le backend d'une application de gestion des employés.

Le projet expose une API REST permettant de gérer les employés d'une entreprise tout en proposant une authentification sécurisée basée sur **JSON Web Token (JWT)**.

Cette API a été développée avec **Node.js**, **Express** et **TypeScript** afin de mettre en œuvre une architecture backend moderne, typée et facilement maintenable.

---

# 🎯 Objectifs

Ce projet m'a permis de mettre en pratique :

- Développement d'une API REST
- Architecture Express
- TypeScript côté backend
- Authentification JWT
- Gestion des Refresh Tokens
- Sécurisation des routes
- Communication avec MySQL
- Architecture en couches (Routes / Controllers / Services)

---

# ✨ Fonctionnalités

- 🔐 Authentification avec JWT
- 🔄 Gestion des Refresh Tokens
- 👥 Consultation des employés
- ➕ Création d'un employé
- ✏️ Modification d'un employé
- ❌ Suppression d'un employé
- 🔎 Consultation d'un employé
- 🏢 Liste des départements
- 🌎 Liste des États
- 🌐 API REST sécurisée

---

# 🏗️ Architecture

```text
                React Frontend
                      │
                  REST API
                      │
                Express API
        ├── Routes
        ├── Controllers
        ├── Services
        ├── Middleware JWT
        └── MySQL
```

---

# 🛠️ Stack technique

## Backend

- Node.js
- Express
- TypeScript
- JWT
- bcrypt
- MySQL

## Outils

- Git
- VS Code
- Postman
- npm

---

# 🗄️ Base de données

L'application repose sur quatre entités principales.

```text
Users

Employees
 │
 ├─────────────┐
 │             │
 ▼             ▼
States     Departments
```

### Fonctionnement

- **Users** est utilisé pour l'authentification de l'application.
- **Employees** contient les informations des employés.
- Chaque employé est associé à un **State**.
- Chaque employé appartient à un **Department**.

Cette structure permet de normaliser les données tout en facilitant leur maintenance.

---

# 📂 Structure du projet

```text
src

├── controllers
├── middleware
├── routes
├── services
├── db
├── types
├── utils
└── server.ts
```

L'application suit une architecture permettant de séparer les routes, la logique métier et l'accès aux données.

---

# 🚀 Installation

## Cloner le projet

```bash
git clone https://github.com/jeremymillet/WealthHealth-remaster-api.git
```

## Installer les dépendances

```bash
npm install
```

## Configurer la base de données

Créer un fichier `.env` à la racine du projet.

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=*******
DB_NAME=wealth_health

ACCESS_TOKEN_SECRET=your_secret
REFRESH_TOKEN_SECRET=your_secret
```

## Lancer le projet

```bash
npm run dev
```

---

# 🔐 Authentification

L'API utilise une authentification basée sur **JWT**.

Après connexion :

- génération d'un Access Token
- génération d'un Refresh Token
- sécurisation des routes sensibles via un middleware Express

---

# 📡 Principaux endpoints

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| POST | `/login` | Connexion |
| POST | `/token` | Rafraîchir le JWT |
| POST | `/logout` | Déconnexion |
| GET | `/employees` | Liste des employés |
| GET | `/employees/:id` | Détails d'un employé |
| POST | `/employees` | Ajouter un employé |
| PUT | `/employees/:id` | Modifier un employé |
| DELETE | `/employees/:id` | Supprimer un employé |
| GET | `/states` | Liste des États |
| GET | `/departments` | Liste des départements |

---

# 🔗 Frontend

Le frontend React est disponible ici :

➡️ https://github.com/jeremymillet/WealthHealth-remaster

---

# 🚀 Évolutions prévues

- 🐳 Déploiement avec Docker

---

# 👨‍💻 Auteur

**Jérémy Millet**

Développeur Full Stack

📫 À la recherche d'un poste de développeur Backend / Full Stack.
