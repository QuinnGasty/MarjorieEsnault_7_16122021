// Remplissage tableau de tags

export const fillArrayofTags = (arrayOfTags) => {
    const tagsElt = document.querySelectorAll(".tag-elt");
    tagsElt.forEach(tagElt => {
        tagElt.addEventListener('click', (e) => {
            const currentTag = {title: e.currentTarget.textContent, bg: e.currentTarget.dataset.bg}
            arrayOfTags.push(currentTag)
            tagDisplay(arrayOfTags)
        })  
    })
}

// Affichage tableau de tags

const tagDisplay = (arrayOfTags) => {
    const tagsList = document.querySelector(".list-of-tags");
    let tagsListHTML = ""

    arrayOfTags.forEach(tag => {
        tagsListHTML += `<div class="tags-placeholder ${tag.bg}-bg-color"><span>${tag.title}</span> <i class="far fa-times-circle"></i></div>`
    })  

    tagsList.innerHTML = tagsListHTML;
}

