import * as lsH from "./ls.js";
//  import * as uH from './utilities.js';       //  not using but they are a good reference for exports
let todoList = []; //  initialize the todoList to be an empty array

export default class todos {
  constructor(id) {
    this.element = document.getElementById(id); //  save the reference to the UL
    this.key = id; //  LS key this also matches the UL id
    this.error = document.getElementById("error"); //  reference to an error div
    todoList = getToDo(this.key); //  get list of todos from LS and empty array if LS is not there
  }

  showToDoList() {
    renderToDoList(this.element, todoList); //  pass a list of todos to the render function
    this.addEventListeners();
  }

  addToDo() {
    this.error.innerHTML = ""; //  clear the error message
    const task = document.getElementById("new-task"); //  get reference to task input field
    if (task.value === "") {
      this.error.innerHTML = "No text entered for task"; //  show when field is empty
      return;
    }
    saveTodo(task.value, this.key); //  save this new task to LS
    task.value = ""; //  clear the text of the input field
    this.showToDoList(); //  render all LIs to the user
  }
  
  completeToDo(itId) {
    let task = todoList.findIndex((task) => task.id === +itId); //  find the desired task using the unique timestamp for this LI
    todoList[task].completed = !todoList[task].completed; //  toggle the completed status
    lsH.writeToLS(this.key, todoList); //  update LS
    document.getElementById(itId).classList.toggle("completed"); //  change the class for this element to reflect the new status
  }

  removeItem(itID) {
    let task = todoList.findIndex((task) => task.id === +itID); //  find the matching id
    todoList.splice(task, 1); //  remove from the big list of todos
    lsH.writeToLS(this.key, todoList); //  save main list of todos to LS
    this.showToDoList(); //  show updated list on the page
  }

  addEventListeners() { // This listens if the task is completed or not.
    const ls = Array.from(this.element.children); //  get an array of the LIs in the UL (the children)
    ls.forEach((item) => {
      item.children[0].addEventListener("click", () =>
        this.completeToDo(item.id)
      );
      item.children[2].addEventListener("click", () =>
        this.removeItem(item.id)
      );
    });
  }

  addTabListeners() {
    const actionButtons = Array.from(document.querySelectorAll(".tab"));
    actionButtons.forEach((tab) => {
      tab.addEventListener("click", (event) => this.filterItems(event));
    });
  }

  filterItems(event) {
    const actionButtons = Array.from(document.querySelectorAll(".tab"));
    for (let btn of actionButtons) {
      //  loop through the action buttons
      btn.classList.remove("selected-tab"); //  clear the selected status. So none of them have it
    }
    event.currentTarget.classList.add("selected-tab"); //  selected-tab class rule will set the background text of the button
    this.filterToDos(event.currentTarget.id); //  The id of the button is 'active', 'competed', or 'all'
  }

  filterToDos(category) {
    category = filterBy(category); //  category param is the id of the button pushed convert to T/F or NULL
    const f = todoList.filter((task) =>
      category != null ? task.completed === category : task
    );
    renderToDoList(this.element, f); //  now we have a list todos of the desired type
    this.addEventListeners(); //  since we wiped out all of the old HTML we need at attach event listeners for the new LIs
  }
}

function filterBy(category) {
  switch (category) {
    case "active":
      return false;
    case "complete":
      return true;
    case "all":
      return null; //  null indicates show all todos
    default:
      return null;
  }
}

function getToDo(key) {
  let ls = lsH.readFromLS(key); //  ask LS for the value associated with the key
  return ls === null ? [] : ls; //  if nothing is returned init list to an empty array else assign it the list from LS
}

function saveTodo(value, key) {
  let timestamp = Date.now(); //  this unique value will serve as the id for our todo item
  const newTodo = { id: timestamp, content: value, completed: false }; //  default to NOT completed
  todoList.push(newTodo); //  save new task item to todos
  lsH.writeToLS(key, todoList); //  save our list of all todo items
}

function renderToDoList(ul, ls) {
  ul.innerHTML = ""; //  let's clear out all old to-dos
  ls.forEach((taskObject) => (ul.innerHTML += renderOneToDo(taskObject)));
  updateCount(ls); //  show the count of the current list
}

function renderOneToDo(task) {
  return `<li id="${task.id}" ${task.completed ? 'class="completed"' : ""}>
        <input name="${task.content}" type="checkbox" value="none" ${
    task.completed ? "checked" : ""
  }>
        <p>${task.content}</p>
        <div class="delete">X</div>
    </li>`;
}

function updateCount(ls) {
  document.getElementById("num-task").innerHTML = `${
    ls != null ? ls.length : 0
  }  tasks left`;
}
