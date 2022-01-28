// Remplissage tableau de tags

export const fillArrayofTags = (arrayOfTags) => {
    const tagsElt = document.querySelectorAll(".tag-elt");
    tagsElt.forEach(tagElt => {
        tagElt.addEventListener('click', (e) => {
            const currentTag = {title: e.currentTarget.textContent, bg: e.currentTarget.dataset.bg}
            arrayOfTags.push(currentTag);
            e.currentTarget.classList.remove("tag-elt");
            e.currentTarget.classList.add("tag-elt-disable");
            tagDisplay(arrayOfTags)
        })  
    })
}

const pullArrayofTags = (arrayOfTags) => {
    const closeTag = document.querySelectorAll(".close-tag");
    const tagElt = document.querySelectorAll(".tag-elt-disable");

    closeTag.forEach((closedElt, index) => {
        closedElt.addEventListener('click', () => {
            tagElt.forEach(elt => {
                if (elt.textContent === closedElt.previousSibling.textContent) {
                    //console.log(elt.classList)     
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


