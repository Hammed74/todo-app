function addToDom(obj){
const todoItem = document.createElement("li")
todoItem.classList.add("item")
const unorderedList = document.querySelector(".item-list")
unorderedList.appendChild(todoItem)
const listTitle = document.createElement("p")
listTitle.classList.add("title")

listTitle.textContent = obj.title
}

export default addToDom