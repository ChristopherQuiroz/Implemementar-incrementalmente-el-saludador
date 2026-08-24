function getHora() {
    const fecha = new Date();
    const hora = fecha.getHours();
    return hora;
}

export default getHora;