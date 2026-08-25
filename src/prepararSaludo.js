import getHora from './getHora.js';
import getEdad from './getEdad.js';
import i18next from 'i18next';

i18next.init({
    fallbackLng: 'es',
    initImmediate: false,
    resources: {
        es: {
            translation: {
                morning: 'Buenos días, {{pronombre}} {{nombre}}',
                afternoon: 'Buenas tardes, {{pronombre}} {{nombre}}',
                evening: 'Buenas noches, {{pronombre}} {{nombre}}',
                young: 'joven',
                youngFemale: 'jovencita',
                mr: 'Sr.',
                mrs: 'Sra.',
                visitante: 'visitante',
                error: 'Error: Ingrese un valor válido para la edad'
            }
        },
        en: {
            translation: {
                morning: 'Good morning, {{pronombre}} {{nombre}}',
                afternoon: 'Good afternoon, {{pronombre}} {{nombre}}',
                evening: 'Good evening, {{pronombre}} {{nombre}}',
                young: 'young',
                youngFemale: 'young',
                mr: 'Mr.',
                mrs: 'Mrs.',
                visitante: 'visitor',
                error : 'Error: Please enter a valid value for age' 
            }
        }
    }
});

function saludar(nombre, genero, edad, idioma = 'es') {
    const pronombre = getEdad(edad, genero);
    const traduccionPronombre = {
        joven: 'young',
        jovencita: 'youngFemale',
        'Sr.': 'Mr.',
        'Sra.': 'Mrs.'
    }[pronombre];

    const hora = getHora();
    let claveSaludo = 'evening';
    if(hora < 12) {
        claveSaludo = 'morning';
    } else if(hora < 18) {
        claveSaludo = 'afternoon';
    }

    const nombreTraducido = nombre == 'visitante'
        ? i18next.t('visitante', { lng: idioma })
        : nombre;

    return i18next.t(claveSaludo, {
        lng: idioma,
        pronombre: traduccionPronombre ? i18next.t(traduccionPronombre, { lng: idioma }) : '',
        nombre: nombreTraducido
    });
}

export default saludar;