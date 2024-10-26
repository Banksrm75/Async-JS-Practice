/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//PROMISE = (an OBJECT) the result of an asynchronous operation. It is a placeholder for a value that is not necessarily known when the promis is created. (Someone promises to get back to you with an answer tp a question. You continue on while your friend works on the answer and returns to you with the answer.)

window.onload = function() {
  // asynchronous JS

  // create a new object of the "Promise" class
  let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("I was resolved");
    }, 3000);
  });

  console.log(myPromise);

  // .THEN
  myPromise.then(result => alert(result));

  // .then is for successful results(resolve) - PromiseResolve.js
  // .catch is for unsuccessful results(reject) - PromiseReject.js
  myPromise
    .then(result => console.log(`Hey Rebekah! ${result}`))
    .catch(error => alert(error));

}