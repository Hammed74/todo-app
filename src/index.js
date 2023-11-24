import "./styles.css";
import { ListItem } from "./addtodo.js";
import addToDom from "./addToDom.js";


const firstItem = document.querySelector(".item1")
let item1 = new ListItem(
  "Go jogging.",
  "Go for a jog around Kelly Drive",
  "November 30th, 2023",
  3
);

addToDom(item1)