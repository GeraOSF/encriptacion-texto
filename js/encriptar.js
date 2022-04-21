// Declaracion de constantes
const botonEncriptar = document.querySelector("#boton-encriptar");
const elementosMensajeNE = document.querySelector(".elementos-no-hay-texto");
const textOut = document.querySelector(".text-out");
const llavesEncriptar = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

// Event listener para el boton de encriptar al hacer click en el
botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    // Declaracion de constantes del texto de entrada y su tamaño
    const textIn = document.querySelector(".text-in").value;
    const len = textIn.length;

    // Validando texto de entrada
    if (!validarTextoIn(textIn, len)) {
        mostrarMensajeNoEncontrado();
        // Parpeadar nota de solo letras minusculas y sin acentos *******PENDIENTE*********
        return;
    }
    
    // Iterando por cada caracter del texto entrada
    let textoBuffer = "";
    for (let i = 0; i < len; i++) {
        // Si el caracter esta en llaves, concatenar el valor de esa llave en textoBuffer
        if (textIn[i] in llavesEncriptar) {
            textoBuffer += llavesEncriptar[textIn[i]];
        }
        // Si no esta en llaves, concatenar el caracter sin modificarlo 
        else {
            textoBuffer += textIn[i];
        }
    }
    
    // Mostrar el texto decodificado a textOut (p)
    ocultarMensajeNoEncontrado();
    textOut.textContent = textoBuffer;
});

// Esta funcion se encarga de ocultar la imagen y los mensajes de cuando no encuentra un mensaje en el textarea
function ocultarMensajeNoEncontrado() {
    elementosMensajeNE.classList.add("elementos-no-hay-texto-invisible");
}

function mostrarMensajeNoEncontrado() {
    textOut.textContent = '';
    elementosMensajeNE.classList.remove("elementos-no-hay-texto-invisible");
}

// Esta funcion se encarga que el texto de entrada no este vacio y que tenga caracteres validos
function validarTextoIn(textIn, len) {
    // Eliminando espacios del texto y almacenandolo en una variable
    let textoTemp = textIn.replace(/\s/g, '');
    // Este regex detecta el alfabeto en mayuscula, los caracteres que no son letras y los numeros
    const charsInvalidos = /[A-Z]|\W|\d/g;
    // Si el texto tiene algunos de los caracteres invalidos o si el texto esta vacio, retorna falso significando que el texto no es valido
    if (charsInvalidos.test(textoTemp) || len == 0) {
        return false;
    }
    return true;
}