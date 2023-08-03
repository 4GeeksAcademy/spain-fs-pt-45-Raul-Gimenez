export const list = ({ulId, clas, components}) => {
    const list = document.createElement(`ul`);
    list.id = ulId;
    list.className = clas;
    for (const component of components) {
      list.append(component);
    }
   
    
    return list;
  };