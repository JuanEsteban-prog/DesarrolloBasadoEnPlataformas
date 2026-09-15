# Auditoría de EjemploEnClase

## Alcance

Se revisaron los archivos actuales de esta carpeta:

- `index.html`
- `styles.css`

La revisión considera estructura HTML, accesibilidad, diseño responsive, mantenibilidad de CSS y experiencia de usuario. No se evaluó un backend porque el ejercicio es una página estática.

## Resumen

La página funciona como una galería sencilla de servicios y tiene una base correcta para un ejercicio inicial: usa HTML semántico básico, define el idioma del documento, incluye `viewport`, separa el CSS y adapta la cuadrícula a pantallas grandes.

Los puntos críticos de mejora son:

1. **Alta:** convertir las tarjetas en contenido accesible y accionable, o dejar claro que son únicamente informativas.
2. **Alta:** mejorar la accesibilidad de los iconos emoji y comprobar el contraste en todos los estados visuales.
3. **Media:** organizar los colores, medidas y estilos repetidos mediante variables CSS y selectores más mantenibles.
4. **Media:** probar más tamaños de pantalla y completar la experiencia de la página con contenido y acciones reales.

## Hallazgos y propuestas

### Alta: tarjetas sin acción ni destino

**Problema:** las tres tarjetas describen servicios, pero no contienen enlaces, botones ni otra acción. Si el objetivo es presentar servicios para que una persona los consulte o solicite, la interfaz no ofrece un siguiente paso.

**Impacto:** el usuario puede leer la información, pero no puede ampliar detalles, contactar a la empresa ni solicitar un servicio desde esta página.

**Propuesta:** decidir primero el propósito de la galería:

- Si es solo informativa, conservar `article` y añadir información útil como alcance, precio o duración.
- Si cada servicio tiene una página, usar un enlace visible dentro de cada `article`.
- Si inicia un proceso, usar un botón con un texto específico, por ejemplo `Solicitar desarrollo web`.

Los enlaces deben tener destinos reales y textos descriptivos; no conviene convertir toda la tarjeta en un elemento interactivo sin cuidar la navegación con teclado.

### Alta: accesibilidad de los iconos emoji

**Problema:** los iconos están dentro de `div` sin indicar si aportan información. Un lector de pantalla podría anunciar el emoji de forma inesperada o redundante junto con el título del servicio.

**Propuesta:** si los emojis son decorativos, marcarlos como ocultos para tecnologías de asistencia:

```html
<div class="tarjeta-icono" aria-hidden="true">💻</div>
```

Si un icono comunica información indispensable, debe tener una alternativa textual clara y no depender únicamente del emoji. También conviene revisar la apariencia en los sistemas operativos donde los emojis pueden cambiar.

### Alta: verificar contraste y estados de interacción

**Problema:** el CSS define colores para el modo claro y oscuro, pero no hay controles interactivos que permitan comprobar estados como `:hover`, `:focus-visible` o `:active`. Además, el contraste debe comprobarse con una herramienta, especialmente para el texto dentro de las tarjetas en modo oscuro.

**Impacto:** las futuras acciones podrían ser difíciles de localizar o usar con teclado. Un cambio de color aparentemente pequeño puede hacer que el texto deje de cumplir accesibilidad.

**Propuesta:** añadir estados visibles cuando existan enlaces o botones y validar el contraste con WCAG. Por ejemplo:

```css
.tarjeta a:focus-visible,
.tarjeta button:focus-visible {
  outline: 3px solid #f4c95d;
  outline-offset: 3px;
}
```

No se debe eliminar el indicador de foco del navegador sin reemplazarlo por uno equivalente o mejor.

### Media: centralizar el sistema visual

**Problema:** los colores aparecen directamente en varios selectores (`#2f6fed`, `#1c2333`, `#f7f8fb`, entre otros). El selector universal también reinicia márgenes y rellenos de todos los elementos, aunque algunos podrían necesitar valores distintos al crecer la página.

**Impacto:** cambiar la identidad visual o mantener el modo oscuro será más difícil y aumenta la probabilidad de inconsistencias.

**Propuesta:** definir variables en `:root` y sobrescribir solo las necesarias en el modo oscuro:

```css
:root {
  --color-texto: #1c2333;
  --color-fondo: #ffffff;
  --color-principal: #2f6fed;
  --color-superficie: #f7f8fb;
  --color-borde: #e2e5ec;
}
```

Después, usar `var(...)` en los componentes. También conviene corregir el formato de `.tarjeta {` para mantener un estilo uniforme.

### Media: ampliar la validación responsive

**Problema:** la cuadrícula cambia de una columna a tres a partir de `700px`, pero solo existe un punto de ruptura. En anchos intermedios, la distribución puede no ser la más cómoda y no se documenta ninguna prueba en móvil, tablet o escritorio.

**Propuesta:** comprobar como mínimo estos escenarios:

- móvil estrecho, alrededor de `320px`;
- móvil ancho y tablet;
- escritorio a partir de `700px`;
- zoom del navegador al `200%`;
- modo claro y modo oscuro.

Si el contenido de las tarjetas crece, considerar una cuadrícula flexible como `repeat(auto-fit, minmax(220px, 1fr))`, siempre verificando que el resultado conserve buena legibilidad.

### Media: mejorar estructura y contenido futuro

**Problema:** `header`, `main` y `footer` están presentes, pero la página tiene muy poco contenido y no existe una sección introductoria ni información de contacto. Esto no rompe el ejercicio, pero limita su utilidad fuera del aula.

**Propuesta:** mantener la estructura semántica y añadir, según el objetivo del proyecto:

- una introducción breve a la empresa;
- información concreta de cada servicio;
- una llamada a la acción accesible;
- contacto o navegación secundaria en el `footer`;
- enlaces a políticas o redes solo si son realmente necesarios.

Si el pie de página seguirá siendo solo visual, puede mantenerse como está; no es un problema crítico.

## Aspectos positivos

- `<!doctype html>` y `<meta charset="UTF-8">` están definidos.
- El documento declara correctamente `lang="es"`.
- Existe un único encabezado principal `h1`.
- Se usa `main` para el contenido principal y `article` para cada servicio.
- El CSS está separado del HTML.
- La página incluye `meta name="viewport"`.
- La cuadrícula se adapta de una columna a tres columnas.
- `h1` usa `clamp()` para limitar su tamaño de forma responsive.
- Existe una variante inicial para `prefers-color-scheme: dark`.

## Orden sugerido de trabajo

1. Definir si las tarjetas serán informativas o interactivas.
2. Ocultar los emojis decorativos con `aria-hidden` o proporcionarles texto alternativo.
3. Añadir enlaces o botones reales si el flujo los necesita.
4. Incorporar variables CSS y estados de foco para los controles.
5. Probar la página con teclado, lector de pantalla, zoom y varios anchos.
6. Completar el contenido del servicio y el contacto cuando se convierta en una página real.

## Conclusión

El ejercicio cumple su objetivo como demostración de una galería responsive. No se observan errores que impidan cargar la página. La mejora más importante es aclarar y completar la interacción de las tarjetas; después conviene reforzar la accesibilidad y la mantenibilidad del CSS antes de ampliar el diseño.
