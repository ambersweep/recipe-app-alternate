import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );
 
  const createRecipes = (newRecipe) =>
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);

  return (
    <div className="App">
      <header>
      <div class="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4"><i className="uil uil-utensils-alt icon-color"></i> Delicious Recipes</h1>
    <p className="lead">Track your favorites!</p>
  </div>
</div>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipes={createRecipes} />
    </div>
  );
}

export default App;
