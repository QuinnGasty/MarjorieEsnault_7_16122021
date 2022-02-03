// Création tableau d'ustensiles

export const listofUstensils = (mealsList) => {
    let ustensilsList = [];

    mealsList.map((meal) => {
        let ustensils = (meal.ustensils)

        ustensils.map(ust => ustensilsList.push(ust))

        ustensilsList = Array.from(new Set(ustensilsList))
        ustensilsList.sort()
    })

    return ustensilsList;
}

// Affichage ustensiles

export const ustensilsDisplay = (ustList) => {
    const tagsUst = document.querySelector(".tags-drop-ustensils");
    let tagUstHTML = "";

    ustList.forEach(ust => {
        tagUstHTML += `<li><span class="tag-elt" data-bg='ust'>${ust}</span></li>`
    });

    tagsUst.innerHTML = tagUstHTML;
}