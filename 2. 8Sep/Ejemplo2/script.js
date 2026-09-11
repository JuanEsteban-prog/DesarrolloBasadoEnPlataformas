const volumen = document.getElementById("volumen");
const valorVolumen = document.getElementById("valor-volumen");
const botonEjemplo = document.getElementById("boton-ejemplo");
const formulario = document.getElementById("formulario");
const mensajeFormulario = document.getElementById("mensaje-formulario");

volumen.addEventListener("input", () => {
  valorVolumen.value = volumen.value;
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  mensajeFormulario.textContent =
    "Formulario completado. Esta demostración no guarda los datos.";
});

botonEjemplo.addEventListener("click", () => {
  alert("Este es un botón de ejemplo");
});
