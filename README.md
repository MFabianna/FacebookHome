# 📘 Facebook Home Clone - React Native

Ce projet est une reproduction de l'interface d'accueil de l'application Facebook, développée avec **React Native** et **Expo**. Il a été réalisé dans le cadre d'un TP universitaire pour mettre en pratique les concepts fondamentaux du développement mobile (composants, props, state, navigation, et gestion des événements).

##  Fonctionnalités

### 🎯 Fonctionnalités Obligatoires (Conformes au TP)
- **Architecture modulaire** : Organisation stricte en dossiers `components/` et `screens/`.
- **Header** : Logo et 3 boutons d'action (Ajouter, Recherche, Menu).
- **Bottom Navigation** : 6 icônes avec gestion de l'état actif (icône bleue/grise).
- **CreatePost** : Zone de création de publication avec avatar et input flexible.
- **Stories** : Défilement horizontal d'au moins 5 stories générées dynamiquement via `.map()`.
- **Publications (Feed)** : 10 posts générés dynamiquement via `.map()` et `props`.
- **Interactions** : Boutons J'aime, Commenter et Partager.
- **Gestion d'état** : Utilisation de `useState` pour les interactions.
- **Authentification** : Écran de connexion (Login) et déconnexion fonctionnelle via le menu.

###  Défis Supplémentaires (Partie 13 du PDF)
1. **Compteur de likes dynamique** : Incrémentation (+1) et décrémentation (-1) en temps réel.
2. **Réactions Facebook** : Menu de réactions (J'aime, J'adore, Haha, Wouah, Triste, Grrr) affiché au **appui long** sur le bouton J'aime.
3. **Zone de commentaires** : Apparition d'un champ de saisie au clic sur "Commenter".
4. **Message de partage** : Alerte de confirmation au clic sur "Partager".
5. **Navigation active** : L'icône sélectionnée dans la barre du bas change de couleur.

## 🛠️ Technologies utilisées

- **React Native** (Framework mobile)
- **Expo** (Outil de développement et build)
- **JavaScript** (Langage de programmation)
- **@expo/vector-icons** (Pour les icônes Ionicons)

## 📂 Architecture du projet

Conformément à la Partie 14 du guide de TP, voici la structure finale du projet :

```text
FacebookHome/
├── assets/
├── components/
│   ├── BottomNavigation.js   # Barre de navigation inférieure
│   ├── CreatePost.js         # Zone "À quoi pensez-vous ?"
│   ├── Header.js             # En-tête avec logo et boutons
│   ├── PostCard.js           # Composant unitaire d'une publication
│   ├── Posts.js              # Liste des 10 publications
│   ├── StoryCard.js          # Composant unitaire d'une story
│   └── Stories.js            # Liste des stories + Viewer
├── screens/
│   ├── HomeScreen.js         # Écran principal assemblant les composants
│   └── Login.js              # Écran de connexion
├── App.js                    # Point d'entrée de l'application
└── package.json              # Dépendances du projet
