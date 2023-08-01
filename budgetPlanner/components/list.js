export const list = ({clas}) => {
    const list = document.createElement(`ul`);
    list.className = clas;
  
    return list;
  };