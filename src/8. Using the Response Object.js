/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const url = "https://swapi.dev/api/";

// FETCH - Uses promises under the hood.
window.onload = function() {
  fetch(`${url}people`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        console.log(response);
        return response.json();
      }
    })
    .then(data => console.log(data.results))
    .catch(error => console.log("Aw snap!", error));
};