import { list } from "../components/list.js";
import { navbar } from "../components/navbar.js";
import { listOfCategories } from "../components/listOfCategories.js";

const root = document.querySelector('#root');

root.append(navbar());
root.append(
    list({
      id : "listOfCategories",
      components: [listOfCategories("listOfCategories")],
      clas: "bg-dark",
  })
);