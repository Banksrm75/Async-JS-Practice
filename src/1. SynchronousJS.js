/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Synchrounous JS
  function runFirst(anyFunction) {
    console.log("first");
    anyFunction();
    runSecond();
    console.log("I execute after runSecond()");
  }

  function runSecond() {
    console.log("second");
  }

  // passing a function by putting just the name of the function (no parentheses)
  runFirst(runThird);

  function runThird() {
    console.log("third");
  }
};
