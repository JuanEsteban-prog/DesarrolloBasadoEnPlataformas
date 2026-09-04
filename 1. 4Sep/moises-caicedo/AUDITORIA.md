# Auditoría de `moises-caicedo`

**Fecha:** 4 de septiembre de 2026
**Alcance:** `index.html`, `styles.css` y `script.js`
**Resultado:** La web es funcional y visualmente consistente, pero tiene algunos riesgos de mantenimiento, accesibilidad y precisión de contenido.

**Estado posterior a la mejora:** Se aplicaron las recomendaciones principales: fallback para la foto remota, dimensiones explícitas, fecha de actualización, fuentes visibles, foco de teclado y navegación con `IntersectionObserver`.

> Nota: Claude está configurado en Continue con el rol de conversación para auditorías, pero no existe una herramienta de ejecución de Claude disponible en esta sesión. Este informe contiene una auditoría técnica equivalente sobre el estado actual de la carpeta.

## Hallazgos prioritarios

### Medio — La foto depende de una URL externa

**Archivo:** `index.html`, imagen principal.

La fotografía se carga desde Wikimedia mediante `Special:FilePath`. Si el servicio cambia la redirección, aplica límites o no hay conexión, la portada queda sin su imagen principal. También se depende de Google Fonts para la tipografía.

**Recomendación:** descargar una copia con licencia compatible dentro de `assets/`, añadir crédito y mantener un `background-color` o imagen alternativa local. Si se conserva la URL remota, agregar un tratamiento visual de error para la imagen.

### Medio — La imagen no reserva espacio explícito

**Archivo:** `index.html` y `.image-frame img` en `styles.css`.

El contenedor sí tiene una altura estable, pero la imagen no declara `width`, `height` ni `aspect-ratio`. Esto puede producir un cambio de composición mientras la imagen remota termina de cargar, especialmente en conexiones lentas.

**Recomendación:** añadir `width="1200" height="1500"` con las dimensiones reales del archivo o definir un `aspect-ratio` coherente en el elemento visual.

### Medio — Las estadísticas no tienen fecha de corte

**Archivo:** bloque `stats-strip` en `index.html`.

Los valores `65` partidos con Ecuador y `1` Copa del Mundo de clubes se presentan como actuales, pero no indican temporada ni fecha de actualización. En una página sobre un jugador activo pueden quedar obsoletos y confundir al visitante.

**Recomendación:** mostrar una nota como `Datos actualizados: septiembre de 2026`, enlazar a una fuente verificable y revisar los valores antes de publicar.

## Hallazgos de calidad

### Bajo — La navegación activa depende solo de scroll

**Archivo:** `script.js`.

El enlace activo se calcula comparando la posición de las secciones con `window.innerHeight`. Funciona para el desplazamiento normal, pero no contempla cambios por carga tardía de fuentes o por navegación directa a un ancla antes de que el layout termine de estabilizarse.

**Recomendación:** usar `IntersectionObserver` para observar las secciones y actualizar el estado activo con menos trabajo durante el scroll.

### Bajo — Falta un estado de foco visible personalizado

**Archivo:** `styles.css`.

Los enlaces tienen estilos de hover, pero no un estilo `:focus-visible`. La navegación con teclado puede perder el indicador visual dependiendo del navegador y del estilo por defecto.

**Recomendación:** añadir un `outline` de alto contraste para `.main-nav a:focus-visible`, botones y enlaces del pie.

### Bajo — Hay valores de letter-spacing negativos

**Archivo:** `styles.css`, reglas de `h1` y `.section-heading h2`.

El uso de `letter-spacing: -.04em` y `-.025em` puede dificultar la lectura en tamaños pequeños y no es necesario para conservar la personalidad tipográfica.

**Recomendación:** probar `letter-spacing: 0` y ajustar el tamaño o el peso de la fuente si se necesita un titular más compacto.

### Bajo — Contenido factual sin fuentes visibles

**Archivo:** `index.html`.

La página acredita la fotografía, pero no enlaza las fuentes de los datos biográficos, trayectoria, partidos o títulos.

**Recomendación:** agregar una sección breve de fuentes al pie con enlaces a Chelsea FC, FIFA o una base estadística confiable, indicando la fecha de consulta.

## Comprobaciones realizadas

- `node --check "1. 4Sep/moises-caicedo/script.js"`: correcto.
- La página se sirvió localmente en `http://localhost:4173`.
- La estructura accesible contiene título, navegación, encabezados, texto alternativo para la foto y regiones de contenido.
- No se encontraron formularios, almacenamiento local ni código que procese datos personales.

## Conclusión

La web puede presentarse como una página estática funcional. Antes de publicarla, la prioridad es hacer local o tolerante la carga de la fotografía, documentar la fecha y fuente de las estadísticas y mejorar el foco de teclado. Estos cambios reducen los riesgos más visibles sin alterar la dirección visual del proyecto.
