"use strict";

const formLoginEL = document.querySelector(".login-form");

formLoginEL.addEventListener("submit", onCheckLogPas);

function onCheckLogPas(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const data = {
      email: `${email}`,
      password: `${password}`,
    };
    console.log(data);
  }
  formLoginEL.reset();
}
