"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _todos = _interopRequireDefault(require("./todos.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
let todo = new _todos.default("tasks");
class t {
  constructor(e) {
    (this.element = document.getElementById(e)),
      (this.key = e),
      (this.error = document.getElementById("error"));
  }
  solve(e, t, s, l) {
    solve(e, t, s, l);
  }
}
exports.default = t;
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
