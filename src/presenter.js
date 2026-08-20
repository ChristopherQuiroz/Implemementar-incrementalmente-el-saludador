import sumar from "./sumador";

const name = document.querySelector("#name");
const form = document.querySelector("#form-saludo");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const greeting = `¡Hola, ${name.value}!`;
  div.innerHTML = `<p>${greeting}</p>`;
});
