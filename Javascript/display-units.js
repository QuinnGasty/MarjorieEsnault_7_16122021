export const listofUnits = (mealsList) => {
    let unitList = [];

    mealsList.map((meal) => {
        unitList.push(meal.appliance);

        unitList = [...new Set(unitList)]
        unitList.sort()
    })

    return unitList
}

export const unitDisplay = (unitList) => {
    const tagsUnit = document.querySelector(".tags-drop-units");
    let tagUnitHTML = "";

    unitList.forEach(unit => {
        tagUnitHTML += `<li><span class="tag-elt" data-bg='unit'>${unit}</span></li>`
    });

    tagsUnit.innerHTML = tagUnitHTML;
}