//Función para número perfecto
function numPerfecto(num) {
    let apagador = 0;
    for (let index = 1; index <= num/2 ; index++) {
        if (num % index == 0) {
            apagador += index;
        }
    }

    if (apagador == num && apagador !== 0 ) {
        console.log("El ",num," es un número perfecto");
    } else 
    console.log("EL ",num," no es un número perfecto")
}