import "./styles.css";
import { makeList, makeProjects } from "./addtodo";
import { addToDom } from "./addToDom.js";
import { ListItem } from "./addtodo";
import { listArray } from "./addtodo";
import { ProjectItem } from "./addtodo";
import { addProjectToDom } from "./addToDom.js";
import closeButton from "./assets/close.png";
import { todoInProject } from "./todoInProject.js";
import { projectListArray } from "./todoInProject.js";

let page = () => {
  const todoButton = document.querySelector(".add-todo");
  const todoForm = document.querySelector(".todo-form");
  const title = document.querySelector("#title");
  const desc = document.querySelector("#desc");
  const date = document.querySelector("#date");
  const priority = document.querySelector("#priority");
  const tooDoProject = document.querySelector("#project");
  const submitBtn = document.querySelector(".submit");
  const deleteButton = document.querySelector(".close-form");
  const todoTabTitle = document.querySelector(".todo-tab");
  const todoTab = document.querySelector(".todo-tab-container");
  const projectTabTitle = document.querySelector(".project-tab");
  const itemList = document.querySelector(".item-list");
  const projectList = document.querySelector(".project-list");
  const projectButton = document.querySelector(".add-projects");
  const projectForm = document.querySelector(".project-form");
  const deleteProjectButton = document.querySelector(".close-project-form");
  const projectTitle = document.querySelector("#projectTitle");
  const projectDate = document.querySelector("#projectDate");
  const projectSubmitButton = document.querySelector(".project-submit");

  todoTab.addEventListener("click", () => {
    projectList.style.display = "none";
    itemList.style.display = "grid";
    todoTabTitle.style.color = "gold";
    projectTabTitle.style.color = "white";
  });

  deleteProjectButton.addEventListener("click", () => {
    projectForm.style.display = "none";
  });
  projectButton.addEventListener("click", () => {
    projectForm.style.display = "flex";
  });
  todoButton.addEventListener("click", () => {
    todoForm.style.display = "flex";
  });

  deleteButton.addEventListener("click", () => {
    todoForm.style.display = "none";
  });

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      title.value !== "" &&
      desc.value !== "" &&
      date.value !== "" &&
      priority.value !== "" &&
      tooDoProject.value !== ""
    ) {
      let item = new ListItem(
        title.value,
        desc.value,
        date.value,
        priority.value,
        tooDoProject.value
      );
      listArray.push(item);
      console.log(listArray);
       todoForm.style.display = "none";
    } else if (
      title.value !== "" &&
      desc.value !== "" &&
      date.value !== "" &&
      priority.value !== ""
    ) {
      let item = new ListItem(
        title.value,
        desc.value,
        date.value,
        priority.value,
        tooDoProject.value
      );
      todoForm.style.display = "none";
      addToDom(item);
      console.log(item);
      console.log(listArray);
    } else {
      alert("You must fill out ALL fields.");
    }
  });

  projectSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (projectTitle.value !== "" && projectDate.value !== "") {
      let project = new ProjectItem(projectTitle.value, projectDate.value);
      projectForm.style.display = "none";
      addProjectToDom(project);
      console.log(project);
    } else {
      alert("You must fill out ALL fields.");
    }

  });

  document
    .querySelector(".project-list")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("project")) {
        const projectBox = document.createElement("div");
        projectBox.classList.add("project-box");
        projectBox.style.display = "flex";
        projectList.appendChild(projectBox);
        projectBox.textContent = "Nothng To Show Here."
        const projectId = event.target.id;

        listArray.forEach((item, index) => {
         if (item.project === projectId) {
          projectBox.textContent = ""
            todoInProject(listArray[index], projectBox);
            listArray[index].appended = true
            console.log(item);
          }
        });

        const deleteButton = document.createElement("img");
        deleteButton.src = closeButton;
        deleteButton.classList.add("project-delete");
        projectBox.appendChild(deleteButton);

        deleteButton.addEventListener("click", (event) => {
          event.stopPropagation();
          projectBox.remove()
        });
      }
    });
};

let projectPage = () => {
  const projectTab = document.querySelector(".project-tab-container");
  const itemList = document.querySelector(".item-list");
  const projectList = document.querySelector(".project-list");
  const projectTabTitle = document.querySelector(".project-tab");
  const todoTabTitle = document.querySelector(".todo-tab");

  projectTab.addEventListener("click", () => {
    itemList.style.display = "none";
    projectList.style.display = "flex";
    projectTabTitle.style.color = "gold";
    todoTabTitle.style.color = "white";
  });
};

makeList();
makeProjects();
projectPage();
page();
