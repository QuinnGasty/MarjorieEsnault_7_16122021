import { mealsDisplay } from "./display-recipes.js";
import { recipes } from "./recipes.js";


const searchInput = document.getElementById("search");
const recipesDisplay = document.getElementById("result");
const errorMessage = document.getElementById("no-result-msg");

export const mainSearchV2 = (listOfRecipes) => {
    searchInput.addEventListener('keyup', (key) => {
        const searchValue = key.target.value.toLowerCase();
    
        if (searchValue.length >= 3) {
            let filteredRecipes = [];

            for (let i = 0; i < listOfRecipes.length; i++) {
                const recipeNames = listOfRecipes[i].name.toLowerCase();
                const recipeDescription = listOfRecipes[i].description.toLowerCase();
                const recipeAppliance = listOfRecipes[i].appliance.toLowerCase();
                const recipeIngredients = listOfRecipes[i].ingredients;
                const recipeUstensils = listOfRecipes[i].ustensils.join(" ").toLowerCase();

                if (recipeNames.indexOf(searchValue) >= 0) {
                    filteredRecipes.push(listOfRecipes[i])
                } 

                if (recipeDescription.indexOf(searchValue) >= 0) {
                    filteredRecipes.push(listOfRecipes[i])
                } 
                
                if (recipeAppliance.indexOf(searchValue) >= 0) {
                    filteredRecipes.push(listOfRecipes[i])
                } 

                for (let ing = 0; ing < recipeIngredients.length; ing++) {
                    let newIngredients = "";
                    newIngredients += recipeIngredients[ing].ingredient.toLowerCase() + " ";

                    if (newIngredients.indexOf(searchValue) >= 0) {
                        filteredRecipes.push(listOfRecipes[i])
                    }
                }
                
                if (recipeUstensils.indexOf(searchValue) >= 0) {
                    filteredRecipes.push(listOfRecipes[i])
                } 
                
                filteredRecipes = [... new Set(filteredRecipes)]
            }

            mealsDisplay(filteredRecipes)

            if (filteredRecipes <= 0) {
                errorMessage.style.display = "block";
            } else {
                errorMessage.style.display = "none";
            }

        } else {
            recipesDisplay.style.display = "grid";
            mealsDisplay(recipes);
            errorMessage.style.display = "none";
        }
    })
}
