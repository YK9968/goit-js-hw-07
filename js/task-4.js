"use strict";

const formLoginEL = document.querySelector(".login-form");

formLoginEL.addEventListener("submit", onCheckLogPas);

function onCheckLogPas(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  }
  const data = {
    Email: `${email}`,
    Password: `${password}`,
  };
  console.log(data);
  formLoginEL.reset();
}
