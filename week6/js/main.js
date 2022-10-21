import Todos from './Todos.js';

//  create our Todos object
const todo = new Todos('tasks');

// Display the todo list and add to it
window.addEventListener('load', () => {
    todo.showToDoList();
    todo.addTabListeners();
//  when the ADD button is pressed...
    const nTask= document.getElementById('add');
    nTask.addEventListener('click', () =>  todo.addToDo() );
});
