"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const boxesContainer = document.querySelector("#boxes");
const inputAdd = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  boxesContainer.innerHTML = "";
  let widthBox = 30;
  let heightBox = 30;
  for (let value = 0; value < amount; value++) {
    const markup = `<div style="background-color:${getRandomHexColor()}; width:${widthBox}px; height:${heightBox}px;"></div> `;
    boxesContainer.insertAdjacentHTML("beforeEnd", markup);
    widthBox += 10;
    heightBox += 10;
  }
  inputAdd.value = "";
}

const onCreateButtonClick = () => {
  if (inputAdd.value >= 1 && inputAdd.value <= 100) {
    createBoxes(inputAdd.value);
  }
};

createButton.addEventListener("click", onCreateButtonClick);

function onDestroyBoxes() {
  boxesContainer.innerHTML = "";
}

destroyButton.addEventListener("click", onDestroyBoxes);
