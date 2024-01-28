"use strict";

const inputEl = document.querySelector("#name-input");
const spanEL = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputValue);

function onInputValue(event) {
  const inputValue = event.target.value.trim();
  if (inputValue !== "") {
    spanEL.textContent = inputValue;
  } else {
    spanEL.textContent = "Anonymous";
  }
}
