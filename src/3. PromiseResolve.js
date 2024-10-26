/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//PROMISE = (an OBJECT) the result of an asynchronous operation. It is a placeholder for a value that is not necessarily known when the promis is created. (Someone promises to get back to you with an answer tp a question. You continue on while your friend works on the answer and returns to you with the answer.)

window.onload = function() {
  // asynchronous JS

  // RESOLVE
  // create a new object of the "Promise" class
  let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("I was resolved");
    }, 3000);
  });

  console.log(myPromise);

  // promises come in 3 different states
  //      1. pending - the promise obj's results are not determined yet.
  //            The asynch operation has not completed yet.
  //      2. fulfilled - the asynch operation was completed and a value as
  //            an object was returned
  //      3. rejected - the asynch operation failed
};

