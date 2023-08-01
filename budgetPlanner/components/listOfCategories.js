import { listItems } from "/categories-list/data.js";

export const listOfCategories = () => {
    listItems.array.forEach(element => {
        
    });
    const listOfCategoriesElement = document.createElement(`li`);
    listOfCategoriesElement.className = "list-group-item";
    const listButton = listOfCategoriesElement.createElement(`button`);
    listButton.className = "ourButton btn";
    const listIcon = listButton.createElement(`i`);
    listIcon.className = ""
}