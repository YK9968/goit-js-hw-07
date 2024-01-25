"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButtonEL = document.querySelector(".change-color");
const colorSpanEL = document.querySelector(".color");
const changeBodyColorEL = document.querySelector("body");

function changeColor() {
  const newColor = getRandomHexColor();
  changeBodyColorEL.style.backgroundColor = newColor;
  colorSpanEL.textContent = newColor;

  console.log(changeBodyColorEL);
}

changeColorButtonEL.addEventListener("click", changeColor);
