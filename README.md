# 📘 Facebook Home Clone - React Native

Ce projet est une reproduction de l'interface d'accueil de l'application Facebook, développée avec **React Native** et **Expo**. Il a été réalisé dans le cadre d'un TP universitaire pour mettre en pratique les concepts fondamentaux du développement mobile (composants, props, state, navigation, et gestion des événements).

##  Fonctionnalités

### 🎯 Fonctionnalités du TP (Obligatoires)
- **Architecture modulaire** : Organisation stricte en dossiers `components/` et `screens/`.
- **Header** : Logo et 3 boutons d'action (Ajouter, Recherche, Menu).
- **Bottom Navigation** : 6 icônes avec gestion de l'état actif (icône bleue/grise).
- **CreatePost** : Zone de création de publication avec avatar et input flexible.
- **Stories** : Défilement horizontal d'au moins 5 stories générées dynamiquement via `.map()`.
- **Publications (Feed)** : 10 posts générés dynamiquement via `.map()` et `props`.
- **Interactions** : Boutons J'aime, Commenter et Partager.
- **Gestion d'état** : Utilisation de `useState` pour les interactions.

### 🚀 Fonctionnalités Bonus (Réalisme & Défis)
- **Authentification** : Écran de connexion (Login) et déconnexion fonctionnelle via le menu.
- **Réactions Facebook** : Menu flottant au **appui long** sur le bouton J'aime (J'aime, J'adore, Care, Haha, Wouah, Triste, Grrr).
- **Compteur de likes dynamique** : Incrémentation et décrémentation en temps réel.
- **Zone de commentaires** : Apparition d'un champ de saisie au clic sur "Commenter".
- **Story Viewer** : Ouverture des stories en plein écran avec **swipe horizontal** (gauche/droite).
- **Écran de Profil** : Page dédiée avec photo de couverture, détails personnels et liste d'amis.
- **Images cliquables** : Interaction sur les images des posts et des stories.

## 🛠️ Technologies utilisées

- **React Native** (Framework mobile)
- **Expo** (Outil de développement et build)
- **JavaScript** (Langage de programmation)
- **@expo/vector-icons** (Pour les icônes Ionicons)

## 📂 Architecture du projet

```text
FacebookHome/
├── assets/
├── components/
│   ├── Header.js           # En-tête avec logo et boutons
│   ├── BottomNavigation.js # Barre de navigation inférieure
│   ├── CreatePost.js       # Zone "À quoi pensez-vous ?"
│   ├── StoryCard.js        # Composant unitaire d'une story
│   ├── Stories.js          # Liste des stories + Viewer plein écran
│   ├── PostCard.js         # Composant unitaire d'une publication
│   └── Posts.js            # Liste des 10 publications
├── screens/
│   ├── HomeScreen.js       # Écran principal assemblant les composants
│   ├── Login.js            # Écran de connexion
│   └── ProfileScreen.js    # Écran de profil utilisateur
├── App.js                  # Point d'entrée de l'application
└── package.json            # Dépendances du projet
