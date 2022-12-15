import todos from "./todos.js";
const todo = new todos("tasks");

//  import clocks from "./clock.js";
//  const clock = new clocks("tasks");
 

export default class calculatem {
  constructor(id) {
    this.element = document.getElementById(id); //  save the reference to the UL
    this.key = id; //  LS key this also matches the UL id
    this.error = document.getElementById("error"); //  reference to an error div
    // todoList = getToDo(this.key); //  get list of todos from LS and empty array if LS is not there
  }
    solve(a, op, b, task){
      solve(a, op, b, task);
    }
  
  }

//   calculate() {
//     const tasks = document.getElementById("new-task").value;
//     let task = tasks.trim();
//     //console.log(task);
//     if (task === "") {
//       this.error.innerHTML = "No text entered for task"; //  show when field is empty
//       return;
//     } else {
//       const expression = /[^\d()]+|[\d.]+/g;
//       const matchses = task.match(expression);
//       //console.log(matchse);

//       // Array destructuring [0,1,2,3] results in a=1, op=2, b=3
//       //const [a, op, b] = matchs;
//      // let matchses = [c, a, op, b];
//       // const [c, a, op, b] = matchse;
//       // console.log("a", a);
//       // console.log("op", op);
//       // console.log("b", b);

//       console.log("matchses", matchses);
//       console.log("a", matchses[0]);
//       console.log("op", matchses[1]);
//       console.log("b", matchses[2]);
//       let a = matchses[0];
//       let op = matchses[1];
//       let b = matchses[2];
//       //let multipliers = 0;
//       //a=a.trimEnd();
//       //b=b.trimStart();
//       // if (op == !null && b == !null) {

//       //   if ((b === " minute" ||b === " minutes") && a === "countdown " ) {
//       //     //console.log("it worked finally");
//       //     //let op = op;
//       //     let ope = parseInt(op)*60;
//       //     clock.startCountDown(ope);
//       //   }
//       //   if ((b === " second" ||b === " seconds") && a === "countdown " ) {  
//       //     let ops = op;
//       //     clock.startCountDown(ops);
//       //   }

//       //   if (a.length > 1 || b === "" || op === "" ){
//       //     //console.log(a.length);
//       //     todo.addToDo();
//       //   }
//       //   else{

//       //      solve(a, op, b, task);

//       //  }
//     }
//   }
// }


function solve( a, op, b, task) {
  
    switch (op) {
      case "+":
        // code block
        let result1 = parseFloat(a) + parseFloat(b);
        console.log(result1);
        console.log("This is addition");
        document.getElementById("resultmath").innerText = task + "=" + result1;
        document.getElementById("resultmath").style.display = "block";

        break;

      case "-":
        // code block
        let result2 = parseFloat(a) - parseFloat(b);
        console.log(result2);
        console.log("This is subtraction");
        break;

      case "*":
        // code block
        let result3 = parseFloat(a) * parseFloat(b);
        console.log(result3);
        console.log("This is multiplication");
        break;

      case "/":
        // code block
        let result4 = parseFloat(a) / parseFloat(b);
        console.log(result4);
        console.log("This is division");
        break;


      default:
        // code block
        // todo.addToDo();
        break;
    }
  }
