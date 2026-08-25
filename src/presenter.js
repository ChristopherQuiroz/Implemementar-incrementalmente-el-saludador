import prepararSaludo from './prepararSaludo.js';

const name = document.querySelector('#name');
const genero = document.querySelector('#genero');
const edad = document.querySelector('#edad');
const idioma = document.querySelector('#idioma');
const formSaludo = document.querySelector('#form-saludo');
const div = document.querySelector('#resultado-div');

formSaludo.addEventListener('submit', (event) => {
  event.preventDefault();

  let greeting = '';
  greeting = prepararSaludo(
    name.value,
    genero.value,
    parseInt(edad.value),
    idioma.value
  );

  div.innerHTML = `<p>${greeting}</p>`;
});
