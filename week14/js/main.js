 import todos from "./todos.js";
 import clocks from "./clock.js";
 import calculatem from "./math.js"; 

// //  create our Todos object
const todo = new todos('tasks');

const calculate = new calculatem('tasks');
// // create our clock object

const clock = new clocks('tasks');
// console.log(cclock);

// Display the todo list and add to it
window.addEventListener('load', () => {
    todo.showToDoList();
    todo.addTabListeners();
    clock.showTimeCurrent();
    // if (localStorage.getItem("counter")) {
    //   minutes = localStorage.getItem("counter");
    //   clock.startCountDown(minutes);
    // }

    if (localStorage.getItem("counter")) {
      var starttime = localStorage.getItem("mytime");
      var duration = localStorage.getItem("counter");
      var timenow = Date.now();

      let dif = Math.abs(timenow - starttime)/1000 ;
      let ccd = duration - dif;
      // var ccd = (timenow - starttime) / (1000 % 60 );  
     // var ccs = ccd.Math.floor((diff / 1000) % 60);
      if (ccd < 0){

        localStorage.removeItem("counter");
        localStorage.removeItem("mytime");
        window.location.reload(); 
      }else{
      console.log(timenow);
      console.log(duration);
      console.log(ccd);
      clock.startCountDown(ccd);
    }}

     
    //  when the ADD button is pressed...
    // const nTask= document.getElementById('add');
    // const nTask= document.getElementById('add');
    
  //  const nTask= document.getElementById('mathe');
   // nTask.addEventListener("click", () => todo.addToDo());
   const mTask = document.getElementById('mathe');

//    mTask.addEventListener('click', () => calculate.calculate());
   mTask.addEventListener('click', () => sendig());


    event.preventDefault();
});

    function sendig(){
    const tasks = document.getElementById("new-task").value;
    let task = tasks.trim();
    //console.log(task);
    if (task === "") {
      this.error.innerHTML = "No text entered for task"; //  show when field is empty
      return;
    } else {
      const expression = /[^\d()]+|[\d.]+/g;
      const matchses = task.match(expression);

      console.log("matchses", matchses);
      console.log("a", matchses[0]);
      console.log("op", matchses[1]);
      console.log("b", matchses[2]);

      let a = matchses[0];
      let op = matchses[1];
      let b = matchses[2];

      if ((b === " minute" || b === " minutes") && a === "countdown ") {
        //console.log("it worked finally");
        //let op = op;
        let ope = parseInt(op) * 60;
        clock.startCountDown(ope);
      }
      if ((b === " second" || b === " seconds") && a === "countdown ") {
        let ops = op;
        clock.startCountDown(ops);
      }

      if ((a.length > 1) && (b == undefined) && (op == undefined)) {
        //console.log(a.length);
        todo.addToDo();
      } else {
        calculate.solve(a, op, b, task);
      }
    }}