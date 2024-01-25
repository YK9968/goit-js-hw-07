"use strict";
const categoriesListEL = document.querySelectorAll(".item");

console.log(`Number of categories : ${categoriesListEL.length}`);

categoriesListEL.forEach((element) => {
  console.log(`Category : ${element.firstElementChild.textContent}`);
  console.log(`Elements : ${element.lastElementChild.children.length}`);
});
