import prepararSaludo from "/src/prepararSaludo.js";

const name = document.querySelector("#name");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const form = document.querySelector("#form-saludo");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let greeting = '';
  greeting = prepararSaludo(name.value, genero.value, parseInt(edad.value));
  
  div.innerHTML = `<p>${greeting}</p>`;
});
