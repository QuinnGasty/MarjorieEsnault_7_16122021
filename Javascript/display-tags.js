import { listOfTags } from "../app.js";
import { mainSearch, newRecipesArray } from "./main-search.js";
import { recipes } from "./recipes.js";

// Remplissage tableau de tags

export const fillArrayofTags = (arrayOfTags) => {
  const tagsElt = document.querySelectorAll(".tag-elt");

  tagsElt.forEach((tagElt) => {
    tagElt.addEventListener("click", (e) => {
      const currentTag = {
        title: e.currentTarget.textContent,
        bg: e.currentTarget.dataset.bg,
      };
      arrayOfTags.push(currentTag);
      console.log(listOfTags);
      mainSearch(recipes, listOfTags);
      e.currentTarget.classList.remove("tag-elt");
      e.currentTarget.classList.add("tag-elt-disable");
      tagDisplay(arrayOfTags);
    });
  });
};

export const updateArrayofTags = () => {
    const tagsElt = document.querySelectorAll(".tag-elt");
  
    tagsElt.forEach((tagElt) => {
      tagElt.addEventListener("click", (e) => {
        const currentTag = {
          title: e.currentTarget.textContent,
          bg: e.currentTarget.dataset.bg,
        };
        arrayOfTags.push(currentTag);
        console.log(listOfTags);
        e.currentTarget.classList.remove("tag-elt");
        e.currentTarget.classList.add("tag-elt-disable");
        tagDisplay(arrayOfTags);
      });
    });
  };

export const disabledTag = (arrayOfTags, typetag) => {
  const tagsElt = document.querySelectorAll(".tag-elt-" + typetag);
  tagsElt.forEach((tagElt) => {
    arrayOfTags.forEach((tag) => {
      if (tag.title == tagElt.textContent) {
        tagElt.classList.remove("tag-elt");
        tagElt.classList.add("tag-elt-disable");
      }
    });
  });
};

// Supression tableau de tags

const pullArrayofTags = (arrayOfTags) => {
  const closeTag = document.querySelectorAll(".close-tag");
  const tagElt = document.querySelectorAll(".tag-elt-disable");

  closeTag.forEach((closedElt, index) => {
    closedElt.addEventListener("click", () => {
      tagElt.forEach((elt) => {
        if (elt.textContent === closedElt.previousSibling.textContent) {
          elt.classList.add("tag-elt");
          elt.classList.remove("tag-elt-disable");
        }
      });
      arrayOfTags.splice(index, 1);
      tagDisplay(arrayOfTags);

      if (arrayOfTags.length > 0) {
        mainSearch(recipes, arrayOfTags);
      } else {
        window.location.reload();
      }
    });
  });
};

// Affichage tableau de tags

const tagDisplay = (arrayOfTags) => {
  const tagsList = document.querySelector(".list-of-tags");
  let tagsListHTML = "";

  arrayOfTags.forEach((tag) => {
    tagsListHTML += `<div class="tags-placeholder ${tag.bg}-bg-color"><span>${tag.title}</span><span class="close-tag"><i class="far fa-times-circle"></i></span></div>`;
  });

  tagsList.innerHTML = tagsListHTML;
  pullArrayofTags(arrayOfTags);
};