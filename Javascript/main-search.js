import { mealsDisplay } from "./display-recipes.js";
import { ingDisplay, listOfIngredients } from "./display-ingredients.js";
import { disabledTag } from "./display-tags.js";
import { tagsList } from "../app.js";

const searchInput = document.getElementById("search");
const recipesDisplay = document.getElementById("result");
const errorMessage = document.getElementById("no-result-msg");

let newRecipesArray = [];

export const mainSearch = (listOfRecipes, tagValue = "") => {
    if (tagValue !== "") {
        //console.log(tagValue)
        const searchValue = tagValue.toLowerCase();
        globalSearch(listOfRecipes, searchValue);
        let newIngredientsList = listOfIngredients(newRecipesArray);
        //ingDisplay(newIngredientsList);
        let newArray = tagsList()
        disabledTag(newArray);
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
