import { listArray } from "./addtodo";
import closeButton from "./assets/close.png"

function addToDom(obj) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("item");
  const unorderedList = document.querySelector(".item-list");
  unorderedList.appendChild(todoItem);
  const listTitle = document.createElement("p");
  listTitle.classList.add("list-title");
  todoItem.appendChild(listTitle);
  listTitle.textContent = "Title: " + obj.title;

  const listDesc = document.createElement("p");
  listDesc.classList.add("list-desc");
  todoItem.appendChild(listDesc);
  listDesc.textContent = "Description: " + obj.description;

  const listDate = document.createElement("p");
  listDate.classList.add("list-date");
  todoItem.appendChild(listDate);
  listDate.textContent = "Date: " + obj.date;

  const listPriority = document.createElement("p");
  listPriority.classList.add("list-priority");
  todoItem.appendChild(listPriority);
  listPriority.textContent = "Priority: " + obj.priority;
  if (obj.priority == 1) {
    todoItem.style.borderLeft = "10px solid red";
  } else if (obj.priority == 2) {
    todoItem.style.borderLeft = "10px solid orange";
  } else if (obj.priority == 3) {
    todoItem.style.borderLeft = "10px solid purple";
  } else if (obj.priority == 4) {
    todoItem.style.borderLeft = "10px solid green";
  } else if (obj.priority == 5) {
    todoItem.style.borderLeft = "10px solid blue";
  }

  const deleteButton = document.createElement("div");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete")
  todoItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", (event) => {
    for (let i = 0; i < listArray.length; i++){
        if(listArray[i] === obj){
    console.log(obj)
      listArray.splice(i,1)
      todoItem.remove()
      console.log(listArray)
      break;
        }
    };
  });
  listArray.push(obj);
}

function addProjectToDom(obj){
    const projectList = document.querySelector(".project-list")
    const projectListItem = document.createElement("li")
    projectListItem.classList.add("project");
    projectListItem.id = obj.title
    projectList.appendChild(projectListItem)
    const project = document.querySelector("#project")

    const header = document.createElement("h1")
    header.textContent = obj.title
    projectListItem.appendChild(header)

    const date = document.createElement("p")
    date.classList.add("project-date")
    date.textContent = `Due Date: ${obj.date}`
    projectListItem.appendChild(date)

    const projectInList = document.createElement("option");
    projectInList.value = obj.title;
    projectInList.textContent = obj.title;
    project.appendChild(projectInList);

    const deleteButton = document.createElement("img")
    deleteButton.src = closeButton;
    deleteButton.classList.add("project-delete")
    projectListItem.appendChild(deleteButton)

    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation()
        projectListItem.remove()

    })


}
export {addToDom,
        addProjectToDom,
}
