# 📘 Facebook Home Clone - React Native

Ce projet est une reproduction complète et fonctionnelle de l'interface d'accueil de l'application Facebook, développée avec **React Native** et **Expo**. Il a été réalisé dans le cadre d'un TP universitaire pour mettre en pratique les concepts fondamentaux du développement mobile.

## 🌟 Fonctionnalités

### ✅ Fonctionnalités Obligatoires (Conformes au TP)
- **Architecture modulaire** : Organisation stricte en dossiers `components/` et `screens/`.
- **Header** : Logo et 3 boutons d'action (Ajouter, Recherche, Menu).
- **Bottom Navigation** : 6 icônes avec gestion de l'état actif (icône bleue/grise).
- **CreatePost** : Zone de création avec avatar et input flexible.
- **Stories** : Défilement horizontal de 5 stories générées dynamiquement via `.map()`.
- **Publications (Feed)** : 10 posts générés dynamiquement via `.map()` et `props`.
- **Interactions** : Boutons J'aime, Commenter et Partager.
- **Gestion d'état** : Utilisation de `useState` pour les interactions.

### 🚀 Défis Supplémentaires & Bonus (Partie 13)
1. **Compteur de likes dynamique** : Incrémentation (+1) et décrémentation (-1) en temps réel.
2. **Réactions Facebook** : Menu de 7 réactions (J'aime, J'adore, Care, Haha, Wouah, Triste, Grrr) affiché au **appui long** sur le bouton J'aime.
3. **Zone de commentaires réaliste** : Apparition d'un champ de saisie avec bouton d'envoi. Les commentaires s'ajoutent avec la photo de profil et le compteur augmente.
4. **Menu de partage (Bottom Sheet)** : Menu glissant en bas de l'écran avec plusieurs options de partage.
5. **Stories cliquables** : Ouverture des stories en plein écran dans un Modal.
6. **Authentification** : Écran de connexion (Login) et déconnexion fonctionnelle via le menu.

## 🛠️ Technologies utilisées
- **React Native** (Framework mobile)
- **Expo** (Outil de développement)
- **JavaScript** (ES6+)
- **@expo/vector-icons** (Ionicons)

##  Architecture du projet
Conformément à la Partie 14 du guide de TP :
```text
FacebookHome/
├── assets/
├── components/
│   ├── BottomNavigation.js   
│   ├── CreatePost.js         
│   ├── Header.js             
│   ├── PostCard.js           
│   ├── Posts.js              
│   ├── StoryCard.js          
│   └── Stories.js            
├── screens/
│   ├── HomeScreen.js         
│   └── Login.js              
├── App.js                    
└── package.json              
