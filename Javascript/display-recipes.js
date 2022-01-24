// console.log(recipes);

const result = document.getElementById("result");

export const mealsDisplay = (mealsList) => {

  result.innerHTML = "";

  mealsList.map((meal) => {
    let ingredients = [...meal.ingredients];
    //console.log(ingredients)
    let ingredientsHTML = "";

    ingredients.map((ing, i) => {
      ingredientsHTML += `
      <span class="card-ingr"><b>${ing.ingredient}:</b><small class="card-quant">${
        ing.quantity ? ing.quantity : ""
      }${
        ing.unit
          ? ing.unit.includes("cuillères")
            ? "cuillères"
            : ing.unit
          : ""
      } </small></span>
      `;
    });

    return (result.innerHTML += `
        <li class="recipe-card">
<img src="./assets/background.png" alt="">
<h2 class="card-title">${meal.name} <span class="card-time"><i class="far fa-clock"></i> ${meal.time} min</span></h2>
<div class="card-info">
    <div class="ing-list">
    ${ingredientsHTML}
    </div>
    <p class="card-recipe">${meal.description}</p>
</div>
</li>
`);
  });
};



