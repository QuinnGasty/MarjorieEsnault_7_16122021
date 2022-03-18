import { recipes } from "./recipes.js";
import { mealsDisplay } from "./display-recipes.js";
import { ingDisplay, listOfIngredients } from "./display-ingredients.js";
import { disabledTag, fillArrayofTags } from "./display-tags.js";
import { init, listOfTags } from "../app.js";

export let  newRecipesArray =[];
const searchInput = document.getElementById("search");
const recipesDisplay = document.getElementById("result");
const errorMessage = document.getElementById("no-result-msg");

let reloadSearch = false;

export const mainSearch = (listOfRecipes, tags = []) => {
    //console.log("ttttttttttttt",listOfRecipes)
    let newIngredientsList = [];

    const eq = listOfRecipes.length === recipes.length && listOfRecipes.every(function(value, index) { return value === recipes[index]})
    
    if(eq){
        //console.log("true")
        newRecipesArray = [];
    }

    
    if (tags.length > 0) {
        tags.forEach(tg => {
            const searchValue = tg.title.toLowerCase();
            console.log(searchValue)
            // s'il y a un resultat precedent
            // la recherche par tag s'effectue sur cette base

            if(newRecipesArray.length > 0){
                 globalSearch(newRecipesArray, searchValue);
            }else{
                // ceci est appelé si c'est la première fois qu'on lance la recherche
                globalSearch(listOfRecipes, searchValue);
            }
            
            listOfRecipes = [...newRecipesArray];
            // newIngredientsList = listOfIngredients(newRecipesArray);
            newIngredientsList = listOfIngredients(listOfRecipes);
        })
        ingDisplay(newIngredientsList);
        fillArrayofTags(listOfTags);
    } else {

       
        searchInput.addEventListener('keyup', (key) => {
        const searchValue = key.target.value.toLowerCase();

         if(newRecipesArray.length > 0){
                 globalSearch(newRecipesArray, searchValue);
            }else{
                // ceci est appelé si c'est la première fois qu'on lance la recherche
                globalSearch(listOfRecipes, searchValue);
            }

       // globalSearch(listOfRecipes, searchValue)
          
        })    

    }   
}

const globalSearch = (listOfRecipes, word) => {
    if (word.length >= 3) {
        console.log(listOfRecipes)
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
            listOfRecipes = [...newRecipesArray];
            console.log(listOfRecipes)
            // mealsDisplay(filteredRecipes)
            mealsDisplay(listOfRecipes)
            const ingList = listOfIngredients(listOfRecipes);
            ingDisplay(ingList)
            errorMessage.style.display = "none";
            recipesDisplay.style.display = "grid";
        } else {
            errorMessage.style.display = "block";
            recipesDisplay.style.display = "none";
        }
    } else {
        if (listOfTags.length > 0) {
            mealsDisplay(listOfRecipes)
        } else {
            mealsDisplay(recipes)
        }
        recipesDisplay.style.display = "grid";
        errorMessage.style.display = "none";
    }
}