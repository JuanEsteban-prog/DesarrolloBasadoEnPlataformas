"use strict";

const botonesVista = document.querySelectorAll("[data-vista]");
const panelesVista = document.querySelectorAll("[data-vista-panel]");

function mostrarVista(nombreVista) {
  const panelActivo = document.querySelector(
    `[data-vista-panel="${nombreVista}"]`,
  );

  if (!panelActivo) {
    console.error(`No existe la vista "${nombreVista}".`);
    return;
  }

  panelesVista.forEach((panel) => {
    const estaActivo = panel === panelActivo;
    panel.classList.toggle("activa", estaActivo);
    panel.hidden = !estaActivo;
  });

  botonesVista.forEach((boton) => {
    if (boton.hasAttribute("aria-pressed")) {
      boton.setAttribute(
        "aria-pressed",
        String(boton.dataset.vista === nombreVista),
      );
    }
  });

  window.scrollTo({ top: 0, behavior: "instant" });
}

botonesVista.forEach((boton) => {
  boton.addEventListener("click", () => {
    mostrarVista(boton.dataset.vista);
  });
});
