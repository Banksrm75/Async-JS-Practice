/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // asynchronous JS
  function runFirst() {
    console.log("first");
  }

  function runSecond() {
    console.log("second");
  }

  // will run the second call while waiting for the first to complete
  setTimeout(runFirst, 1000);
  runSecond();
  runSecond();
  runSecond();
};
