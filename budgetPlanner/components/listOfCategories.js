import { listItems } from "/categories-list/data.js";

/*<li id=category class> OK
    <button id=buttonOfcategory class> OK
        <i class></i> OK
        <span class=category></span> OK
        <span class=totalAmount></span> OK
    </button>
</li>*/

export const listOfCategories = (id) => {
    listItems.forEach(element => {
        const listOfCategoriesElement = document.querySelector(`#${id}`);
        listOfCategoriesElement.createElement(`li`)
        listOfCategoriesElement.className = "list-group-item";
        listOfCategoriesElement.id = element.category
        //boton
        const listButton = document.querySelector(`#${element.category}`);
        listButton.createElement(`button`);
        listButton.className = "ourListButton btn";
        listButton.id = `buttonOf${element.category}`
        const listElementContent = document.querySelector(`#buttonOf${element.category}`)
        //icono boton
        listElementContent.createElement(`i`);
        listElementContent.className = `${element.icon} ${element.category}`;
        //Nombre categoria
        listElementContent.createElement(`span`);
        listElementContent.className = `${element.category}`;
        listElementContent.append(element.category);
        //Total amount categoria
        listElementContent.createElement(`span`);
        listElementContent.className(element.totalAmount);
        listElementContent.append(element.totalAmount);
    });
/*
export const listOfCategories = () => {
    listItems.forEach(element => {
        const listOfCategoriesElement = document.createElement(`li`);
        listOfCategoriesElement.className = "list-group-item";
        //button
        const listButton = listOfCategoriesElement.createElement(`button`);
        listButton.className = "ourListButton btn";
        const listIcon = listButton.createElement(`i`);
        listIcon.className = `${element.icon} ${element.category}`;
        const listCategory = listButton.createElement(`span`);
        listCategory.className = `${element.category}`;
        listCategory.append(element.category);
        const listTotalAmount = listButton.createElement(`span`);
        listTotalAmount.className(element.totalAmount);
        listTotalAmount.append(element.totalAmount);
    });*/
}