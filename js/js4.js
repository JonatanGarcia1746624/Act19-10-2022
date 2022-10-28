//Funciones

function divisores(numero) {
    let total =0;
    for (let i = 1; i <= numero; i++) {
        if(numero % 1 == 0) {
            total++;
        } 
    }
    return total;
}

//Llamar a la función

console.log("Divisores:",divisores(33));

//Función anonima

const divisoresV2 = function(numero) {
    let total =0;
    for (let i = 1; i <= numero; i++) {
        if(numero % 1 == 0) {
            total++;
        } 
    }
    return total;
}

//Llamar a la función 
console.log("DivisoresV2:",divisoresV2(33));

/* Las funciónes flechas cuando solo tienen un valor no necesitan cerrar parentesís 
sus valores (numero) > numero y si tienen solo una línea de codigo no necesitan un 
return  */

const divisoresV3 = numero => {
    let total =0;
    for (let i = 1; i <= numero; i++) {
        if(numero % 1 == 0) {
            total++;
        } 
    }
    return total;
}

//Lammar a la función

console.log("DivisoresV3:",divisoresV3(33));

/* Llamar a la función para calcular lo que esta en el html (ver valor dentro de la función)
llamar al documento y transformar en caso de ser un número con la función 'parseInt' y poder
utilizar ese valor para nuestra función que utiliza números  */

function calcular(){
    let numero = parseInt(document.getElementById("num").value);

    let resultado = document.getElementById("resul");
    resultado.value = divisores(numero);
}