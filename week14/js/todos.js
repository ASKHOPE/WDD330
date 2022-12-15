"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var e = _interopRequireWildcard(require("./ls.js"));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
let todoList = [];
class t {
  constructor(e) {
    (this.element = document.getElementById(e)),
      (this.key = e),
      (this.error = document.getElementById("error")),
      (todoList = getToDo(this.key));
  }
  showToDoList() {
    renderToDoList(this.element, todoList), this.addEventListeners();
  }
  addToDo() {
    this.error.innerHTML = "";
    let e = document.getElementById("new-task");
    if ("" === e.value) {
      this.error.innerHTML = "No text entered for task";
      return;
    }
    saveTodo(e.value, this.key), (e.value = ""), this.showToDoList();
  }
  completeToDo(t) {
    let o = todoList.findIndex((e) => e.id === +t);
    (todoList[o].completed = !todoList[o].completed),
      e.writeToLS(this.key, todoList),
      document.getElementById(t).classList.toggle("completed");
  }
  removeItem(t) {
    let o = todoList.findIndex((e) => e.id === +t);
    todoList.splice(o, 1), e.writeToLS(this.key, todoList), this.showToDoList();
  }
  addEventListeners() {
    let e = Array.from(this.element.children);
    e.forEach((e) => {
      e.children[0].addEventListener("click", () => this.completeToDo(e.id)),
        e.children[2].addEventListener("click", () => this.removeItem(e.id));
    });
  }
  addTabListeners() {
    let e = Array.from(document.querySelectorAll(".tab"));
    e.forEach((e) => {
      e.addEventListener("click", (e) => this.filterItems(e));
    });
  }
  filterItems(e) {
    let t = Array.from(document.querySelectorAll(".tab"));
    for (let o of t) o.classList.remove("selected-tab");
    e.currentTarget.classList.add("selected-tab"),
      this.filterToDos(e.currentTarget.id);
  }
  filterToDos(e) {
    e = filterBy(e);
    let t = todoList.filter((t) => (null != e ? t.completed === e : t));
    renderToDoList(this.element, t), this.addEventListeners();
  }
}
exports.default = t;
function filterBy(e) {
  switch (e) {
    case "active":
      return !1;
    case "complete":
      return !0;
    default:
      return null;
  }
}
function getToDo(t) {
  let o = e.readFromLS(t);
  return null === o ? [] : o;
}
function saveTodo(t, o) {
  let i = Date.now();
  todoList.push({
    id: i,
    content: t,
    completed: !1,
  }),
    e.writeToLS(o, todoList);
}
function renderToDoList(e, t) {
  (e.innerHTML = ""),
    t.forEach((t) => (e.innerHTML += renderOneToDo(t))),
    updateCount(t);
}
function renderOneToDo(e) {
  return `<li id="${e.id}" ${e.completed ? 'class="completed"' : ""}>
        <input name="${e.content}" type="checkbox" value="none" ${
    e.completed ? "checked" : ""
  }>
        <p>${e.content}</p>
        <div class="delete">X</div>
    </li>`;
}
function updateCount(e) {
  document.getElementById("num-task").innerHTML = `${
    null != e ? e.length : 0
  }  tasks left`;
}
