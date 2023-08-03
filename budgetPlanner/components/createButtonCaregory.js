 //Nombre categoria
 export function createButtonCategory(category) {
    const listCategoryElement = document.createElement(`span`);
    listCategoryElement.className = category;
    listCategoryElement.textContent = category;
    return listCategoryElement;
 }
