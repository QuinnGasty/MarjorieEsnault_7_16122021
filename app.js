import { recipes } from "./JavaScript/recipes.js";
import { mealsDisplay } from "./JavaScript/display-recipes.js";
import { dropdownZone } from "./JavaScript/dropdowns.js";
import { listOfIngredients, ingDisplay } from "./JavaScript/display-ingredients.js";
import { listofUnits, unitDisplay } from "./JavaScript/display-units.js";
import { ustensilsDisplay, listofUstensils } from "./JavaScript/display-ustensils.js";
import { mainSearch } from "./JavaScript/main-search.js";
import { fillArrayofTags } from "./JavaScript/display-tags.js";

export const listOfTags = [];

mealsDisplay(recipes);
dropdownZone();

const ingList = listOfIngredients(recipes);
const unitList = listofUnits(recipes);
const ustList = listofUstensils(recipes);

ingDisplay(ingList);
unitDisplay(unitList);
ustensilsDisplay(ustList);
mainSearch(recipes);
fillArrayofTags(listOfTags);

