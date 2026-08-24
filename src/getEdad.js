function getEdad(edad, genero) {
    
    if(edad < 30) {
        if(genero === 'Masculino') {
            return 'joven';
        } else if(genero === 'Femenino') {
            return 'jovencita';
        }
    }
    else
    {
        if(genero === 'Masculino') {
            return 'Sr.';
        } else if(genero === 'Femenino') {
            return 'Sra.';
        }
    }

}

export default getEdad;