//Función para número perfecto
function numPerfecto() {
    let numero = 0;
    let sum = 0;
    let apagador = 0;
    for (let index =0; index < 10; index++) {
    numero++;
    if (numero % index == 0) {
        sum += index; 
    }

    if (numero == sum) {
        console.log("El ",numero," es un número perfecto");
    } else
    console.log("El ",numero," no es un número perfecto");
    }
}