/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// FETCH - Uses promises under the hood.

window.onload = function() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => console.log(data));
};
