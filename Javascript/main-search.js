import { mealsDisplay } from "./display-recipes.js";

const searchInput = document.getElementById("search");
const recipesDisplay = document.getElementById("result");
const errorMessage = document.getElementById("no-result-msg");

export const mainSearch = (listOfRecipes) => {
    searchInput.addEventListener('keyup', (key) => {
        const searchValue = key.target.value.toLowerCase();

        if (searchValue.length >= 3) {
            const filteredRecipes = listOfRecipes.filter((recipe) => {
                return (
                    recipe.name.toLowerCase().includes(searchValue) ||
                    recipe.ingredients.some(i => i.ingredient.toLowerCase().includes(searchValue)) ||
                    recipe.ustensils.some(u => u.toLowerCase().includes(searchValue)) ||
                    recipe.appliance.toLowerCase().includes(searchValue) ||
                    recipe.description.toLowerCase().includes(searchValue)
                )
            })

            if (filteredRecipes.length > 0) {
                mealsDisplay(filteredRecipes)
                errorMessage.style.display = "none";
                recipesDisplay.style.display = "grid";
            } else {
                errorMessage.style.display = "block";
                recipesDisplay.style.display = "none";
            }
        } else {
            mealsDisplay(listOfRecipes)
            recipesDisplay.style.display = "grid";
            errorMessage.style.display = "none";
        }
    })
}
