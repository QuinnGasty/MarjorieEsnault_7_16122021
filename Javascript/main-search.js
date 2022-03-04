import { mealsDisplay } from "./display-recipes.js";
import { ingDisplay, listOfIngredients } from "./display-ingredients.js";
import { disabledTag, fillArrayofTags } from "./display-tags.js";
import { listOfTags } from "../app.js";

const searchInput = document.getElementById("search");
const recipesDisplay = document.getElementById("result");
const errorMessage = document.getElementById("no-result-msg");

let newRecipesArray = [];

export const mainSearch = (listOfRecipes, tags = []) => {
    let newIngredientsList = [];

    if (tags.length > 0) {
        tags.forEach(tg => {
            const searchValue = tg.title.toLowerCase();
            globalSearch(listOfRecipes, searchValue);
            newIngredientsList = listOfIngredients(newRecipesArray);    
        })
        ingDisplay(newIngredientsList);
        fillArrayofTags(listOfTags);
    } else {
        searchInput.addEventListener('keyup', (key) => {
        const searchValue = key.target.value.toLowerCase();
        globalSearch(listOfRecipes, searchValue)
        })    
    }   
}

const globalSearch = (listOfRecipes, word) => {
    if (word.length >= 3) {
        const filteredRecipes = listOfRecipes.filter((recipe) => {
            return (
                recipe.name.toLowerCase().includes(word) ||
                recipe.ingredients.some(i => i.ingredient.toLowerCase().includes(word)) ||
                recipe.ustensils.some(u => u.toLowerCase().includes(word)) ||
                recipe.appliance.toLowerCase().includes(word) ||
                recipe.description.toLowerCase().includes(word)
            )
        })
        
        if (filteredRecipes.length > 0) {
            newRecipesArray = [...filteredRecipes];
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
}
