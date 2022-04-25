botonCopiar.addEventListener("click", () => {
    const texto = document.querySelector(".text-out").textContent;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado.")
})