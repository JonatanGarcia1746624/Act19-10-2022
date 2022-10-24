function verTabla() {
    let num = parseInt(document.getElementById("num").value);
    let numT = 0;
    for (let index =1; index < 11; index++) {
        numT++;
        console.log(numT," X ",num," = ",numT * num);
    }
}