export function createButtonAmount(totalAmount){
    //Total amount categoria
    const listAmountElement = document.createElement(`span`)
    listAmountElement.className = totalAmount;
    listAmountElement.textContent = totalAmount;
    return listAmountElement;
}
