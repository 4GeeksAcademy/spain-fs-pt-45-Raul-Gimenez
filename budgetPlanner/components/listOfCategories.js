import { listItems } from "../categories-list/data.js";
import { createLiButton } from "./createLiButton.js";

/*<li id=category class> OK
    <button id=buttonOfcategory class> OK
        <i class></i> OK
        <span class=category></span> OK
        <span class=totalAmount></span> OK
    </button>
</li>*/

export function listOfCategories() {
  
    const elementsList = listItems.map(element => {

        const {category, icon, totalAmount} = element;

        const listOfCategoriesElement = document.createElement(`li`);
        listOfCategoriesElement.className = "list-group-item";
        listOfCategoriesElement.id = category;

        //boton
        listOfCategoriesElement.append(
            createLiButton(
                { 
                category, 
                icon, 
                totalAmount, 
                }
            )
        );

        return listOfCategoriesElement;
        }
    );

    return elementsList;
}