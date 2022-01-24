// DOM elements
const inputIngr = document.querySelector(".ingr-btn");
const inputUnit = document.querySelector(".unit-btn");
const inputUst = document.querySelector(".ustensil-btn");
const tagsIngr = document.querySelector(".ingr-tags");
const tagsUnit = document.querySelector(".units-tags");
const tagsUst = document.querySelector(".ustensils-tags");
const chevDownIngr = document.getElementById("chevron-down-ingr");
const chevUpIngr = document.getElementById("chevron-up-ingr");
const chevDownUnit = document.getElementById("chevron-down-unit");
const chevUpUnit = document.getElementById("chevron-up-unit");
const chevDownUst = document.getElementById("chevron-down-ust");
const chevUpUst = document.getElementById("chevron-up-ust");

export const dropdownZone = () => {
    chevDownIngr.addEventListener("click", () => {
        inputIngr.classList.add('clicked-btn');
        chevDownIngr.style.display = "none";
        chevUpIngr.style.display = "initial";
        tagsIngr.style.display = "grid";
        inputIngr.placeholder = "Recherche un ingrédient";
    
        inputUnit.classList.remove("clicked-btn");
        chevUpUnit.style.display = "none";
        chevDownUnit.style.display = "initial";
        inputUnit.placeholder = "Appareil";
        tagsUnit.style.display = "none";
    
        inputUst.classList.remove("clicked-btn");
        chevUpUst.style.display = "none";
        chevDownUst.style.display = "initial";
        inputUst.placeholder = "Ustensiles";
        tagsUst.style.display = "none";
    })
    
    chevUpIngr.addEventListener("click", () => {
        inputIngr.classList.remove("clicked-btn");
        chevUpIngr.style.display = "none";
        chevDownIngr.style.display = "initial";
        tagsIngr.style.display = "none";
        inputIngr.placeholder = "Ingrédients";
    })
    
    chevDownUnit.addEventListener("click", () => {
        inputUnit.classList.add('clicked-btn');
        chevDownUnit.style.display = "none";
        chevUpUnit.style.display = "initial";
        inputUnit.placeholder = "Recherche un appareil";
        tagsUnit.style.display = "grid";
    
        inputUst.classList.remove("clicked-btn");
        chevUpUst.style.display = "none";
        chevDownUst.style.display = "initial";
        inputUst.placeholder = "Ustensiles";
        tagsUst.style.display = "none";
    
        inputIngr.classList.remove("clicked-btn");
        chevUpIngr.style.display = "none";
        chevDownIngr.style.display = "initial";
        inputIngr.placeholder = "Ingrédients";
        tagsIngr.style.display = "none";
    })
    
    chevUpUnit.addEventListener("click", () => {
        inputUnit.classList.remove("clicked-btn");
        chevUpUnit.style.display = "none";
        chevDownUnit.style.display = "initial";
        inputUnit.placeholder = "Appareil";
        tagsUnit.style.display = "none";
    })
    
    chevDownUst.addEventListener("click", () => {
        inputUst.classList.add('clicked-btn');
        chevDownUst.style.display = "none";
        chevUpUst.style.display = "initial";
        inputUst.placeholder = "Recherche un ustensile";
        tagsUst.style.display = "grid"
    
        inputUnit.classList.remove("clicked-btn");
        chevUpUnit.style.display = "none";
        chevDownUnit.style.display = "initial";
        inputUnit.placeholder = "Appareil";
        tagsUnit.style.display = "none";
    
        inputIngr.classList.remove("clicked-btn");
        chevUpIngr.style.display = "none";
        chevDownIngr.style.display = "initial";
        inputIngr.placeholder = "Ingrédients";
        tagsIngr.style.display = "none";

    })
    
    chevUpUst.addEventListener("click", () => {
        inputUst.classList.remove("clicked-btn");
        chevUpUst.style.display = "none";
        chevDownUst.style.display = "initial";
        inputUst.placeholder = "Ustensiles";
        tagsUst.style.display = "none";
    })
}


