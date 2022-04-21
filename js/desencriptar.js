// Declaracion de constantes
const botonDesencriptar = document.querySelector("#boton-desencriptar");

botonDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    // Declaracion de constantes del texto de entrada y su tamaño
    const textIn = document.querySelector(".text-in").value;
    const len = textIn.length;

    if (!validarTextoIn(textIn, len)) {
        mostrarMensajeNoEncontrado();
        // Parpeadar nota de solo letras minusculas y sin acentos *******PENDIENTE*********
        return;
    }

    // Reemplazando cada patron por sus vocales correspondientes
    let textoBuffer = textIn;
    textoBuffer = textoBuffer
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Mostrar el texto decodificado a textOut (p)
    ocultarMensajeNoEncontrado();
    textOut.textContent = textoBuffer;    
})