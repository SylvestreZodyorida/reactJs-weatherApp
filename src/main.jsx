import React from 'react'; // Importation de la bibliothèque React
import ReactDOM from 'react-dom'; // Importation de la bibliothèque ReactDOM pour manipuler le DOM
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // Importation des composants nécessaires pour la gestion des routes
import App from './Layouts/App'; // Importation du composant principal de l'application
import Weather from './weatherApp/App'; // Importation du composant WeatherApp
import Movie from './movieApp/App'; // Importation du composant MovieApp
import Recipe from './recipeApp/App'; // Importation du composant RecipeApp
import Calculator from './calculatorApp/App'; // Importation du composant CalculatorApp
import TodoList from './todoListApp/App'; // Importation du composant TodoListApp
import './css/App.css'; // Importation du fichier CSS principal

// Création du routeur avec les différentes routes de l'application
const router = createBrowserRouter([
  {
    path: "/", // Chemin racine
    element: <App />, // Composant à rendre pour le chemin racine
    children: [ // Définition des routes enfants
      { path: "weather", element: <Weather /> }, // Route pour WeatherApp
      { path: "movie", element: <Movie /> }, // Route pour MovieApp
      { path: "recipe", element: <Recipe /> }, // Route pour RecipeApp
      { path: "calculator", element: <Calculator /> }, // Route pour CalculatorApp
      { path: "todolist", element: <TodoList /> }, // Route pour TodoListApp
    ],
  },
]);

// Rendu de l'application React dans l'élément avec l'ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Mode strict de React pour aider à détecter les problèmes potentiels */}
    <RouterProvider router={router} /> {/* Fournisseur de route pour l'application */}
  </React.StrictMode>
);

