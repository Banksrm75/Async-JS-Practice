/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// FETCH - Uses promises under the hood.

window.onload = function() {
  const url = "https://swapi.dev/api/";

  // ASYNC / AWAIT

  // create variable response
  async function fetchData() {
    const response = await fetch(`${url}people`);
    console.log(response);
    let data = await response.json();
    console.log(data.results);
  }
  
  fetchData();
};
