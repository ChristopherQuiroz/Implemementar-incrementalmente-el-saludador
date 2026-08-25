import prepararSaludo from './prepararSaludo.js';
import i18next from 'i18next';

const name = document.querySelector('#name');
const genero = document.querySelector('#genero');
const edad = document.querySelector('#edad');
const idioma = document.querySelector('#idioma');
const formSaludo = document.querySelector('#form-saludo');
const div = document.querySelector('#resultado-div');

formSaludo.addEventListener('submit', (event) => {
  event.preventDefault();

  var nombre = name.value;

  if(nombre == "")
  {
    nombre = "visitante";
  }

  const edadIngresada = Number(edad.value);
  if(edad.value === '' || Number.isNaN(edadIngresada) || edadIngresada < 0){
    div.innerHTML = `<p>${i18next.t('error', { lng: idioma.value })}</p>`;
    return;
  }

  let greeting = '';
  greeting = prepararSaludo(
    nombre,
    genero.value,
    edadIngresada,
    idioma.value
  );

  div.innerHTML = `<p>${greeting}</p>`;
});
