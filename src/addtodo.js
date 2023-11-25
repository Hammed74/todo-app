import addToDom from "./addToDom";
class ListItem{
    constructor(title, description, date, priority){
        this.title = title,
        this.description = description, 
        this.date = date,
        this.priority = priority
    }
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
        makeList
};