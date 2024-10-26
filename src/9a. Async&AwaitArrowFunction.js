/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// FETCH - Uses promises under the hood.

window.onload = function() {
  const url = "https://swapi.dev/api/";

  // async/await

  const fetchData = async () => {
    const response = await fetch(`${url}people`);
      if(!response.ok) {
        console.log("error: ", response.status);

      }

      const data = await response.json();
      console.log(data.results);
  }

  fetchData();
};
