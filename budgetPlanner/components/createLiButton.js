import { createButtonIcon } from "../components/createButtonIcon.js"
import { createButtonCategory } from "../components/createButtonCaregory.js"
import { createButtonAmount } from "../components/createButtonAmount.js"

/*<li id=category class> OK
    <button id=buttonOfcategory class> OK
        <i class></i> OK
        <span class=category></span> OK
        <span class=totalAmount></span> OK
    </button>
</li>*/

export function createLiButton({category, icon, totalAmount}) {
    const listButton = document.createElement(`button`);
    listButton.className = "ourListButton btn";
    listButton.id = `buttonOf${category}`;

    listButton.append(createButtonIcon(icon, category));
    listButton.append(createButtonCategory(category));
    listButton.append(createButtonAmount(totalAmount));
    
    return listButton;
}