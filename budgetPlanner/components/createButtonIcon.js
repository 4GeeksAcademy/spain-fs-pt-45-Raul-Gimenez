//icono boton
export function createButtonIcon(icon, category){
    const listIconElement = document.createElement(`i`);
    listIconElement.className = `${icon} ${category}`;
    return listIconElement;
}