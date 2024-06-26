# Présentation de notre App 

Notre application de bookstore fournit une architecture robuste basée sur React Native, utilisant Firebase pour l'authentification des utilisateurs et la gestion des données. Elle offre une mise en page responsive adaptée aux appareils mobiles, avec une gestion efficace du panier d'achats et des fonctionnalités de mise à jour de profil utilisateur. L'application utilise également une base de données Firebase pour stocker les informations des utilisateurs et des livres.

Vous pouvez trouver le projet sur GitHub 
https://github.com/najoukou8/Bookstore-App.git

# Les fonctionnalités de notre application : 
Connexion avec Email et Mot de Passe : on a utilisé le Firebase Auth pour authentifier l'utilisateur avec auth().signInWithEmailAndPassword(email, password). 

Création de Compte : on a utilisé le Firebase Auth pour créer un nouvel utilisateur avec auth().createUserWithEmailAndPassword(email, password). 

Sauvegarde des Données Utilisateur : on a utilisé le  Firebase Realtime Database pour enregistrer les informations de l'utilisateur (nom complet et email) dans la base de données sous la référence users/user.uid. Pour les afficher après dans le screen profile. 

Gestion des Erreurs : Affichage des alertes en cas d'erreur ou de succès via Alert.alert. 

Affichage des détails de livre : Lorsqu'un utilisateur clique sur un livre, il est redirigé vers l'écran de détails du livre (BookDetails) avec la fonction useNavigation . 

Recherche de Livres : Pour la fonctionnalité de recherche, nous avons utilisé Firebase Database pour récupérer et filtrer les livres. Lorsqu'un utilisateur saisit une requête de recherche ou sélectionne une catégorie, nous utilisons database().ref('/books').once('value') pour récupérer tous les livres de la base de données. Ensuite, nous filtrons ces livres en fonction de la requête de recherche (titre ou auteur) ou de la catégorie sélectionnée. Les résultats filtrés sont affichés sous forme de grille de cartes de livres, et l'utilisateur peut cliquer sur une carte pour voir les détails du livre. 

Ajout au Panier : Pour la fonctionnalité d'ajout au panier, Lorsque l'utilisateur sélectionne un livre à partir de l'écran de détail du livre, nous ajoutons ce livre à notre liste cartItems en utilisant useState. 

Affichage du panier : L'écran du panier (Cart) affiche tous les articles actuellement ajoutés. Nous utilisons une ScrollView avec une liste de composants CartList pour afficher chaque élément du panier. 

Profile : L'écran de profil affiche les informations personnelles de l'utilisateur telles que son nom, son email et son adresse. Les données sont récupérées depuis Firebase au chargement de l'écran. L'utilisateur peut également mettre à jour son adresse. Un bouton de déconnexion est disponible pour se déconnecter de l'application.  

# Les composants de notre application :  

ScrollableBookListDeal : ce composant est pour récupérer les livres avec la fonction fetchBooks. Après la récupération des données, les livres ayant une réduction sont filtrés et enregistrés dans l'état books. 

ScrollableBook : Comme le composant précédent, il récupère les livres mais uniquement les 10 livres ayant le rating les plus élevées.  

ScrollableAllBooks : il récupère tous les livres. 

NavBar: une barre de navigation inférieure qui permet de naviguer entre différentes sections (la page d'accueil, la recherche, le compte et le panier). Les fontions utilisés ‘createBottomTabNavigator’ pour la barre de navigation inférieure, ‘Ionicons’ pour les icônes, et ‘createStackNavigator’ pour les piles de navigation. 

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
