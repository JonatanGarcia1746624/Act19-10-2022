//Función hora de tomar medicamento
function tomarMedicina(numHora) {
    let horaInicialToma = numHora;
    let frecuencia = 6;
    let toma = 1;
    for (let index = horaInicialToma; index <= 24; index++) {
        if (index == horaInicialToma ) {
            console.log("Toma 1: ",horaInicialToma);
        }
    
        if (horaInicialToma + frecuencia == index) {
            horaInicialToma += frecuencia;
            toma++;
            console.log("Toma " + toma,":",horaInicialToma);
        } 
}
}

console.log(tomarMedicina(8));