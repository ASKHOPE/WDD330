import * as lsH from "./ls.js";

export default class clocks {
  constructor(id) {
    this.element = document.getElementById(id); //  save the reference to the UL
    this.key = id; //  LS key this also matches the UL id
    this.error = document.getElementById("error"); //  reference to an error div
    // todoList = getToDo(this.key); //  get list of todos from LS and empty array if LS is not there
  }
  showTimeCurrent() {
    currentTime(); //
  }
  startCountDown(minutes) {
    countowntimers(minutes);
  }

}



function getLocaltime() {
  return new Date().toLocaleTimeString();
}
// console.log(getLocaltime());

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  // const offset = date.getTimezoneOffset();
  // console.log(offset);

  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // console.log(timezone);

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time;
  // document.getElementById("clocks").innerText = time;

  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}





function timenowis() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  console.log(dateTime);
}
timenowis();






function countowntimers(minutes) {
  let tr = minutes;
  // tr takes everthing in seconds before hand
  // if (multiplier == "minute"||"minutes"){
  //   multiplier = 60;
  //   return multiplier;
  // }
  // let tt = parseInt(tr) * parseInt(multiplier);

  let tt = parseInt(tr);
  console.log(tt + "this is from countdown timer");
  var sec = tt,
    countDiv = document.getElementById("clocks"),
    secpass,
    countDown = setInterval(function () {
      secpass();
    }, 1000);


        localStorage.setItem("counter", tr);
        localStorage.setItem("mytime", Date.now());


  function secpass() {
    var min = Math.floor(sec / 60),
      remSec = sec % 60;

    if (remSec < 10) {
      remSec = "0" + remSec;
    }

    if (min < 10) {
      min = "0" + min;
    }

    countDiv.innerHTML ="Time remaining :" + min + ":" + remSec;
    document.getElementById("clocks").style.display = "block";

    // st = localStorage.setItem("counter"s, min);

    if (sec > 0) {
      sec = sec - 1;
    } else {
      clearInterval(countDown);

      countDiv.innerHTML = "countdown done";
      localStorage.removeItem("counter");
      localStorage.removeItem("mytime");
      window.location.reload(); 

    }
  }
}

//currentTime();

// function countowntimers(minutes) {
//   let tr = minutes;
//   if (localStorage.getItem("count_timer")) {
//     var count_timer = localStorage.getItem("count_timer");
//   } else {
//     var count_timer = tr;
//   }
//   var minutes = parseInt(count_timer / 60);
//   var seconds = parseInt(count_timer % 60);
//   setTimeout(countDownTimer(), 1000);

//   function countDownTimer() {
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     document.getElementById("clocks").innerHTML =
//       "Time Left : " + minutes + " Minutes " + seconds + " Seconds";
//     if (count_timer <= 0) {
//       localStorage.clear("count_timer");
//     } else {
//       count_timer = count_timer - 1;
//       minutes = parseInt(count_timer / 60);
//       seconds = parseInt(count_timer % 60);
//       localStorage.setItem("count_timer", count_timer);
//       setTimeout("countDownTimer()", 1000);
//     }
//   }
// }

