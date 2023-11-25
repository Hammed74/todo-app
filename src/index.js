import "./styles.css";
import { makeList } from "./addtodo";
import addToDom from "./addToDom.js";
import { ListItem } from "./addtodo";
import { listArray } from "./addtodo";



let page = () => {
  const todoButton = document.querySelector(".add-todo");
  const todoForm = document.querySelector(".todo-form");
  const title = document.querySelector("#title")
  const desc = document.querySelector("#desc")
  const date = document.querySelector("#date")
  const priority = document.querySelector("#priority")
  const submitBtn = document.querySelector(".submit")
  const deleteButton = document.querySelector(".close-form")

  todoButton.addEventListener("click", () => {
    todoForm.style.display = "flex";
  })

  deleteButton.addEventListener("click", () => {
    todoForm.style.display = "none"
  })


      submitBtn.addEventListener("click", (event) => {
        event.preventDefault()
        if(title.value !== "" && desc.value !== "" && date.value !== "" && priority.value !==""){
             let item = new ListItem(
               title.value,
               desc.value,
               date.value,
               priority.value
             );
        todoForm.style.display = "none";
        addToDom(item);
        console.log(item);
        console.log(listArray);
        } else{
            alert("You must fill out ALL fields.")
        }
      
      });
}

page()
makeList();
