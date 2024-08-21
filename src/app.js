/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let who = ["Mi perro", "Mi abuela", "Mi amigo", "Mi pajaro"];
let action = ["se ha comido", "ha vomitado", "se ha cagado", "ha tirado"];
let what = ["mi tarea", "mi movil", "mi coche", "mis zapatos"];
let when = [
  "después de clases",
  "mientras dormia",
  "cuando estaba cenando",
  "en la piscina"
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateExcusa() {
  return `${getRandomElement(who)} ${getRandomElement(
    action
  )} ${getRandomElement(what)} ${getRandomElement(when)}`;
}

document.getElementById("excusas").innerHTML = generateExcusa();
