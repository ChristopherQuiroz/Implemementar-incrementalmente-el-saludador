import getHora from "./getHora.js";
import getEdad from "./getEdad.js";

function saludar(nombre, genero, edad) {
    let saludo = '';
    let pronombre = '';

    pronombre = getEdad(edad, genero);
    
    const hora = getHora();
    if(hora < 12) {
        saludo = `Buenos días, ${pronombre} ${nombre}`;
    } else if(hora < 18) {
        saludo = `Buenas tardes, ${pronombre} ${nombre}`;
    } else {
        saludo = `Buenas noches, ${pronombre} ${nombre}`;
    }

    return saludo;
}

export default saludar;