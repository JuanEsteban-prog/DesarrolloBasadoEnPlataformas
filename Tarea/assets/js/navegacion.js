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

  const vistaYaActiva = panelActivo.classList.contains("activa");

  panelesVista.forEach((panel) => {
    const estaActivo = panel === panelActivo;
    panel.classList.remove("vista-entrante");
    panel.classList.toggle("activa", estaActivo);
    panel.hidden = !estaActivo;
  });

  if (!vistaYaActiva) {
    void panelActivo.offsetWidth;
    panelActivo.classList.add("vista-entrante");
  }

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
