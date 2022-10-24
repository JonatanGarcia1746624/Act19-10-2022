//Función Ver Imagen
function verImagen() {
    let opDoc = parseInt(document.getElementById("tipo").value);
    let img = document.getElementById("imagen"); 
    if (opDoc == 1) {
        img.outerHTML='<img id="imagen" src="Recursos/Imagen1.jpg" alt="Paisaje en caricatura">';
    } else if (opDoc == 2) {
        img.outerHTML='<img id="imagen" src="Recursos/Imagen2.jpg" alt="Mar con tormenta">';
    } else if (opDoc == 3) {
        img.outerHTML='<img id="imagen" src="Recursos/Imagen3.jpg" alt="Planeta">';
    } else if (opDoc == 4) {
        img.outerHTML='<img id="imagen" src="Recursos/Imagen4.jpg" alt="Soldado">';
    } else 
    img.outerHTML='<img id="imagen" src="Recursos/Imagen5.jpg" alt="Espacio">';
}

