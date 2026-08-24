import verificarGenero from "./verificarGenero.js";

const name = document.querySelector("#name");
const genero = document.querySelector("#genero");
const form = document.querySelector("#form-saludo");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let greeting = '';
  greeting = verificarGenero(genero.value, name.value);
  
  div.innerHTML = `<p>${greeting}</p>`;
});
