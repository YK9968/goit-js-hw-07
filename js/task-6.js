"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const addBoxes = document.querySelector("#boxes");
const inputAdd = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

console.log(addBoxes);
console.log(inputAdd);
console.log(createButton);
console.log(destroyButton);

const value = inputAdd.addEventListener("input", (event) => {
  event.target.value;
  if (event.target.value >= 1 && event.target.value <= 100) {
    console.log(event.target.value);
  } else {
    console.log(0);
  }
});
