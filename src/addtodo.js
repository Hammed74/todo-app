import { addToDom } from "./addToDom";
import { addProjectToDom } from "./addToDom";
class ListItem{
    constructor(title, description, date, priority){
        this.title = title,
        this.description = description, 
        this.date = date,
        this.priority = priority
    }
}

class ProjectItem{
    constructor(title,date){
        this.title = title,
        this.date = date
    }
}

function makeProjects(){
    let project1 = new ProjectItem("Get a SWE Job.","January, 15th 2024")
    addProjectToDom(project1)

}

    let listArray = [];
function makeList() {
  let item1 = new ListItem(
    "Go jogging.",
    "Go for a jog around Kelly Drive",
    "November 30th, 2023",
    3
  );

  let item2 = new ListItem(
    "Cook Sushi",
    "Use new sushi from store",
    "November 20th, 2023",
    5
  );
  addToDom(item1);
  addToDom(item2);
}

export {ListItem,
        listArray,
        makeList,
        makeProjects
};