import { listOfTags } from "../app.js";

// Création tableau d'ingrédients

export const listOfIngredients = (mealsList) => {
    let ingredientslist = [];

    mealsList.map((meal) => {
        let ingredients = [...meal.ingredients];

        ingredients.map(ing => ingredientslist.push(ing.ingredient));

       ingredientslist = Array.from(new Set(ingredientslist)) 
       ingredientslist.sort()
})

    return ingredientslist;
}

// Affichage ingrédients

export const ingDisplay = (ingList) => {
    const tagsIngr = document.querySelector(".tags-drop-ing");
    let tagIngrHTML = "";
    console.log(ingList)
    console.log(listOfTags)
    ingList.forEach(ing => {
        if (listOfTags.length > 0) {
            listOfTags.forEach(tg => {
                if (ing == tg.title) {
                    tagIngrHTML += `<li><span class="tag-elt-disable" data-bg='ing'>${ing}</span></li>`;
                } else {
                    tagIngrHTML += `<li><span class="tag-elt" data-bg='ing'>${ing}</span></li>`;
                }
            })     
        } else {
            tagIngrHTML += `<li><span class="tag-elt" data-bg='ing'>${ing}</span></li>`;
        }
    });

    tagsIngr.innerHTML = tagIngrHTML;
}


