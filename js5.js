//Calculadora
function calculator() {
    let resultado = 0;
    let opDoc = parseInt(document.getElementById("tipo").value);
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    if (opDoc == 1) {
        resultado = numero1 + numero2;
        console.log("Resultado: ",resultado)
        return resultado;
    }
    if (opDoc == 2) {
        resultado = numero1 - numero2;
        return resultado;
    }
    if (opDoc == 2) {
        resultado = numero1 * numero2;
        return resultado;
    }
    if (opDoc == 2) {
        resultado = numero1 / numero2;
        return resultado;
    }
}