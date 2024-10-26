/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// FETCH - Uses promises under the hood.

window.onload = function() {
  const url = "https://goweather.herokuapp.com/weather/Miami";

  // async/await

  const fetchData = async () => {
    const response = await fetch(`${url}`);
    if (!response.ok) {
      console.log("error: ", response.status);
    }

    console.log(response);
    const data = await response.json();
    console.log(data);
  };

  fetchData();
};
