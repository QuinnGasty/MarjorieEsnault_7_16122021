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
    let tagIngrHTML = ""

    ingList.forEach(ing => {
        tagIngrHTML += `<li><span class="tag-elt" data-bg='ing'>${ing}</span></li>`
    });

    tagsIngr.innerHTML = tagIngrHTML;
}


