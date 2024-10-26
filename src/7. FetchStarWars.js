/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// variable to hold the url  (`${url}people') is the same as:
//                      https://swapi.dev/api/people
const url = "https://swapi.dev/api/";

// FETCH makes a request from which a promise (object) is returned
// JSON - an array of objects [{}, {}, {}]
// 1. Fetch the StarWars API and returns the people element
// 2. Then, return the response in json form
// 3. Then, for each person object, print the person's name
// 4. .catch will catch any errors and display on console
window.onload = function() {
  fetch(`${url}people`)
    .then(response => response.json())
    .then(data => data.results.forEach(obj => console.log(obj.name)))
    .catch(error => console.log("We are in the catch: ", error));
};
