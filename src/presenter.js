import getHora from "./getHora.js";

const name = document.querySelector("#name");
const form = document.querySelector("#form-saludo");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let greeting = '';
  const hora = getHora();
  if(hora < 12) {
    greeting = `Buenos días, ${name.value}`;
  } else if(hora < 18) {
    greeting = `Buenas tardes, ${name.value}`;
  } else if(hora < 5) {
    greeting = `Buenas noches, ${name.value}`;
  }
  
  div.innerHTML = `<p>${greeting}</p>`;
});
