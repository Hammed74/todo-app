import "./styles.css";
import { makeList, makeProjects } from "./addtodo";
import { addToDom } from "./addToDom.js";
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
  const todoTabTitle = document.querySelector(".todo-tab")
const todoTab = document.querySelector(".todo-tab-container")
    const projectTabTitle = document.querySelector(".project-tab");
     const itemList = document.querySelector(".item-list");
     const projectList = document.querySelector(".project-list");
     const projectButton = document.querySelector(".add-projects")
     const projectForm = document.querySelector(".project-form")
     const deleteProjectButton = document.querySelector(".close-project-form")

todoTab.addEventListener("click", () =>{
    projectList.style.display = "none"
    itemList.style.display = "grid"
    todoTabTitle.style.color = "gold"
    projectTabTitle.style.color = "white"
})

deleteProjectButton.addEventListener("click", () => {
    projectForm.style.display = "none"
})
projectButton.addEventListener("click", () => {
    projectForm.style.display = "flex"
})
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

let projectPage = () =>{
    const projectTab = document.querySelector(".project-tab-container")
    const itemList = document.querySelector(".item-list")
    const projectList = document.querySelector(".project-list")
    const projectTabTitle = document.querySelector(".project-tab")
    const todoTabTitle = document.querySelector(".todo-tab")

    projectTab.addEventListener("click", () => {
        itemList.style.display = "none"
        projectList.style.display = "flex"
        projectTabTitle.style.color = "gold"
        todoTabTitle.style.color = "white"
    })
}

page()
projectPage()
makeList()
makeProjects()
