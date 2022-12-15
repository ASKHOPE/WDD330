import * as e from "./ls.js";
export default class t {
  constructor(e) {
    (this.element = document.getElementById(e)),
      (this.key = e),
      (this.error = document.getElementById("error"));
  }
  showTimeCurrent() {
    currentTime();
  }
  startCountDown(e) {
    countowntimers(e);
  }
}
function getLocaltime() {
  return new Date().toLocaleTimeString();
}
function currentTime() {
  let e = new Date(),
    t = e.getHours(),
    n = e.getMinutes(),
    o = e.getSeconds(),
    r = "AM";
  0 === t && (t = 12), t > 12 && ((t -= 12), (r = "PM"));
  let i =
    (t = t < 10 ? "0" + t : t) +
    ":" +
    (n = n < 10 ? "0" + n : n) +
    ":" +
    (o = o < 10 ? "0" + o : o) +
    " " +
    r;
  (document.getElementById("clock").innerText = i),
    setTimeout(function () {
      currentTime();
    }, 1e3);
}
function timenowis() {
  var e = new Date(),
    t = e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate(),
    n = e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
  console.log(t + " " + n);
}
function countowntimers(e) {
  let t = e,
    n = parseInt(t);
  console.log(n + "this is from countdown timer");
  var o,
    r = n,
    i = document.getElementById("clocks"),
    m = setInterval(function () {
      o();
    }, 1e3);
  function o() {
    var e = Math.floor(r / 60),
      t = r % 60;
    t < 10 && (t = "0" + t),
      e < 10 && (e = "0" + e),
      (i.innerHTML = "Time remaining :" + e + ":" + t),
      (document.getElementById("clocks").style.display = "block"),
      r > 0
        ? (r -= 1)
        : (clearInterval(m),
          (i.innerHTML = "countdown done"),
          localStorage.removeItem("counter"),
          localStorage.removeItem("mytime"),
          window.location.reload());
  }
  localStorage.setItem("counter", t),
    localStorage.setItem("mytime", Date.now());
}
timenowis();
