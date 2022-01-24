export const listOfIngredients = (mealsList) => {
    let ingredientslist = [];

    mealsList.map((meal) => {
        let ingredients = [...meal.ingredients];

        ingredients.map(ing => ingredientslist.push(ing.ingredient));

        //console.log(ingredientslist)

       ingredientslist = Array.from(new Set(ingredientslist)) 
       
})

    return ingredientslist;
}

export const ingDisplay = (ingList) => {
    const tagsIngr = document.querySelector(".tags-drop-ing");
    let tagIngrHTML = ""

    ingList.forEach(ing => {
        tagIngrHTML += `<li><span class="tag-elt" data-bg='ing'>${ing}</span></li>`
    });

    tagsIngr.innerHTML = tagIngrHTML;
}


