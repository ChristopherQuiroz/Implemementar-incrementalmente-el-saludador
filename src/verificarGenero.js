import getHora from "./getHora.js";

function verificarGenero(genero, name) {
    let greeting = '';
    let pronombre = '';

    if(genero === 'Masculino') {
        pronombre = 'joven ';
    } else if(genero === 'Femenino') {
        pronombre = 'jovencita ';
    }
    
    const hora = getHora();
    if(hora < 12) {
        greeting = `Buenos días, ${pronombre} ${name}`;
    } else if(hora < 18) {
        greeting = `Buenas tardes, ${pronombre} ${name}`;
    } else {
        greeting = `Buenas noches, ${pronombre} ${name}`;
    }

    return greeting;
}

export default verificarGenero;