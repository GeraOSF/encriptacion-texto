// Declaracion de constante para el boton encriptar y de las llaves de encriptacion
const botonEncriptar = document.querySelector("#boton-encriptar");
const llaves = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

// Event listener para el boton de encriptar al hacer click en el
botonEncriptar.addEventListener("click", () => {
    // Declaracion de constantes del texto de entrada y su tamaño
    const textIn = document.querySelector(".text-in").value;
    const len = textIn.length;
    
    // Iterando por cada caracter del texto entrada
    let textoBuffer = "";
    for (let i = 0; i < len; i++) {
        // Si el caracter esta en llaves, concatenar el valor de esa llave en textoBuffer
        if (textIn[i] in llaves) {
            textoBuffer += llaves[textIn[i]];
        }
        // Si no esta en llaves, concatenar el caracter sin modificarlo 
        else {
            textoBuffer += textIn[i];
        }
    }
    
    // Poner el texto codificado a textOut (p)
    const textOut = document.querySelector(".text-out");
    textOut.textContent = textoBuffer;
});