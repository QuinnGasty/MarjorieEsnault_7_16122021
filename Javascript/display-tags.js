import { listOfTags } from "../app.js";
import { mainSearch } from "./main-search.js";
import { recipes } from "./recipes.js";

// Remplissage tableau de tags

export const fillArrayofTags = (arrayOfTags) => {
    const tagsElt = document.querySelectorAll(".tag-elt");
    tagsElt.forEach(tagElt => {
        tagElt.addEventListener('click', (e) => {
            const currentTag = {title: e.currentTarget.textContent, bg: e.currentTarget.dataset.bg}
            arrayOfTags.push(currentTag);
            mainSearch(recipes, listOfTags);
            e.currentTarget.classList.remove("tag-elt");
            e.currentTarget.classList.add("tag-elt-disable");
            tagDisplay(arrayOfTags);
        })  
    })
}

export const disabledTag = (arrayOfTags) => {
    console.log(arrayOfTags)
    const tagsElt = document.querySelectorAll(".tag-elt");
    //tagsElt.forEach(tagElt => {
        arrayOfTags.forEach(tag => {
            console.log(tag)
            /*console.log("from tagArray :" + tag.title, "ingredientsArray: " + tagElt.textContent)
            if (tag.title == tagElt.textContent) {
                console.log("Hello")
                tagElt.classList.remove("tag-elt");
                tagElt.classList.add("tag-elt-disable");
            }*/
        })
    //})
}

// Supression tableau de tags

const pullArrayofTags = (arrayOfTags) => {
    const closeTag = document.querySelectorAll(".close-tag");
    const tagElt = document.querySelectorAll(".tag-elt-disable");

    closeTag.forEach((closedElt, index) => {
        closedElt.addEventListener('click', () => {
            tagElt.forEach(elt => {
                if (elt.textContent === closedElt.previousSibling.textContent) {
                    elt.classList.add("tag-elt");
                    elt.classList.remove("tag-elt-disable");   
                }
            })
            arrayOfTags.splice(index, 1);
            tagDisplay(arrayOfTags)
        })
    })
}

// Affichage tableau de tags

const tagDisplay = (arrayOfTags) => {
    const tagsList = document.querySelector(".list-of-tags");
    let tagsListHTML = ""

    arrayOfTags.forEach(tag => {
        tagsListHTML += `<div class="tags-placeholder ${tag.bg}-bg-color"><span>${tag.title}</span><span class="close-tag"><i class="far fa-times-circle"></i></span></div>`
    })  

    tagsList.innerHTML = tagsListHTML;
    pullArrayofTags(arrayOfTags)
}


