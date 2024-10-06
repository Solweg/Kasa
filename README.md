# Kasa - Application de Location Immobilière 🏡

Ce projet est une application de location immobilière développée avec **React** et **Vite**, conçue pour offrir une expérience utilisateur fluide et réactive. L'application intègre des fonctionnalités modernes telles que la gestion des routes, la gestion des états et le responsive design, garantissant une utilisation optimale sur tous types d'appareils.

## 🛠️ Technologies Utilisées

- **React** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur réactives.
- **Vite** : Un environnement de développement rapide et moderne pour les applications React.
- **React Router** : Gestion des routes pour une navigation fluide entre les différentes pages de l'application.
- **SCSS** : Préprocesseur CSS pour un style personnalisé et maintenable.
- **JavaScript (ES6+)** : Utilisation de la syntaxe moderne de JavaScript pour une meilleure performance et lisibilité du code.
  
## 🚀 Fonctionnalités

- **Navigation fluide** : Gestion des erreurs 404 et des URL non valides.
- **Responsive design** : Adaptation du design sur tous types d'appareils (mobile, tablette, desktop).
- **Performance optimisée** : L'utilisation de Vite et du chargement rapide des modules permet une meilleure performance.
- **Composants réutilisables** : Le projet est structuré avec des composants React modulaires pour faciliter la réutilisation du code.

## 📦 Installation et Lancement du Projet

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn installé sur votre machine

### Étapes d'installation

1. Clonez ce repository :
    ```bash
    git clone https://github.com/Solweg/Kasa.git
    ```

2. Accédez au dossier du projet :
    ```bash
    cd Kasa
    ```

3. Installez les dépendances :
    ```bash
    npm install
    # ou
    yarn install
    ```

4. Lancez l'application en mode développement :
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

5. Ouvrez votre navigateur et accédez à l'application à l'adresse suivante :
    ```bash
    http://localhost:3000
    ```

## 🧰 Plugins utilisés

Le projet utilise les plugins officiels de Vite pour améliorer l'expérience de développement :

- **@vitejs/plugin-react** : Utilise Babel pour fournir un **Fast Refresh** lors du développement.
- **@vitejs/plugin-react-swc** : Utilise SWC (un compilateur plus rapide que Babel) pour un **Fast Refresh** encore plus performant.

## 📂 Structure du Projet

Voici un aperçu de la structure du projet :

```bash
Kasa/
│
├── public/               # Fichiers statiques
├── src/                  # Dossier principal de l'application
│   ├── assets/           # Images, fichiers CSS, etc.
│   ├── components/       # Composants React réutilisables
│   ├── pages/            # Pages principales de l'application
│   ├── styles/           # Fichiers SCSS pour la gestion du style
│   ├── App.jsx           # Composant principal
│   ├── index.jsx         # Point d'entrée du projet
│   └── ...               # Autres fichiers
├── .eslintrc.js          # Configuration ESLint pour les bonnes pratiques de code
├── vite.config.js        # Configuration de Vite
└── package.json          # Dépendances du projet
