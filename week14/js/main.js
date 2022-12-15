import t from "./todos.js";
import e from "./clock.js";
import o from "./math.js";
let todo = new t("tasks"),
  calculate = new o("tasks"),
  clock = new e("tasks");
function sendig() {
  let t = document.getElementById("new-task").value,
    e = t.trim();
  if ("" === e) {
    this.error.innerHTML = "No text entered for task";
    return;
  }
  {
    let o = e.match(/[^\d()]+|[\d.]+/g);
    console.log("matchses", o),
      console.log("a", o[0]),
      console.log("op", o[1]),
      console.log("b", o[2]);
    let n = o[0],
      l = o[1],
      s = o[2];
    if ((" minute" === s || " minutes" === s) && "countdown " === n) {
      let r = 60 * parseInt(l);
      clock.startCountDown(r);
    }
    (" second" === s || " seconds" === s) &&
      "countdown " === n &&
      clock.startCountDown(l),
      n.length > 1 && void 0 == s && void 0 == l
        ? todo.addToDo()
        : calculate.solve(n, l, s, e);
  }
}
window.addEventListener("load", () => {
  if (
    (todo.showToDoList(),
    todo.addTabListeners(),
    clock.showTimeCurrent(),
    localStorage.getItem("counter"))
  ) {
    var t = localStorage.getItem("mytime"),
      e = localStorage.getItem("counter"),
      o = Date.now();
    let n = e - Math.abs(o - t) / 1e3;
    n < 0
      ? (localStorage.removeItem("counter"),
        localStorage.removeItem("mytime"),
        window.location.reload())
      : (console.log(o),
        console.log(e),
        console.log(n),
        clock.startCountDown(n));
  }
  let l = document.getElementById("mathe");
  l.addEventListener("click", () => sendig()), event.preventDefault();
});
