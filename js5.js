//Calculadora

function calculator(numero1,numero2) {
    let opDoc = document.getElementById("tipo");
    if (opDoc == "op1") {
        resultado = numero1 + numero2;
        return resultado;
    }
    if (opDoc == "op2") {
        resultado = numero1 - numero2;
        return resultado;
    }
    if (opDoc == "op3") {
        resultado = numero1 * numero2;
        return resultado;
    }
    if (opDoc == "op4") {
        resultado = numero1 / numero2;
        return resultado;
    }

    console.log("Resultado:" ,resultado)
}

