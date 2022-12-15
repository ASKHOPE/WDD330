import e from "./todos.js";
let todo = new e("tasks");
export default class t {
  constructor(e) {
    (this.element = document.getElementById(e)),
      (this.key = e),
      (this.error = document.getElementById("error"));
  }
  solve(e, t, s, l) {
    solve(e, t, s, l);
  }
}
function solve(e, t, s, l) {
  switch (t) {
    case "+":
      let o = parseFloat(e) + parseFloat(s);
      console.log(o),
        console.log("This is addition"),
        (document.getElementById("resultmath").innerText = l + "=" + o),
        (document.getElementById("resultmath").style.display = "block");
      break;
    case "-":
      let i = parseFloat(e) - parseFloat(s);
      console.log(i), console.log("This is subtraction");
      break;
    case "*":
      let r = parseFloat(e) * parseFloat(s);
      console.log(r), console.log("This is multiplication");
      break;
    case "/":
      let a = parseFloat(e) / parseFloat(s);
      console.log(a), console.log("This is division");
  }
}
