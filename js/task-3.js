"use strict";

const inputEl = document.querySelector("#name-input");
const spanEL = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (event.target.value.trim() !== "") {
    spanEL.textContent = event.target.value.trim();
  } else {
    spanEL.textContent = "Anonymous";
  }
});
