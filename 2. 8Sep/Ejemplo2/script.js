const volumen = document.getElementById("volumen");
const valorVolumen = document.getElementById("valor-volumen");
const botonEjemplo = document.getElementById("boton-ejemplo");

volumen.addEventListener("input", () => {
  valorVolumen.value = volumen.value;
});

botonEjemplo.addEventListener("click", () => {
  alert("Este es un botón de ejemplo");
});
