function verTabla() {
    let num = parseInt(document.getElementById("num").value);
    let numT = 0;
    let indice = 0;
    for (let index =1; index < 11; index++) {
        numT++;
        let resul = num + ' X ' + numT + ' = ' + numT * num;
        indice++;
        document.getElementById("resultado"+indice).innerText = (resul);
    }
}