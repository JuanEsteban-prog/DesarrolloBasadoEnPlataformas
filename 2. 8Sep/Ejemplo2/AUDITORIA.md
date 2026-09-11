# Auditoría del proyecto Ejemplo2

## Alcance

Se revisaron los archivos actuales de la carpeta:

- `formulario.html`
- `styles.css`

El formulario funciona como ejercicio de HTML y contiene muchos tipos de `input`. Esta auditoría se enfoca en mejoras sencillas de HTML, accesibilidad, CSS y funcionamiento.

## Resumen

La base del proyecto es correcta para un nivel inicial. El documento tiene idioma definido, viewport, un título, un encabezado principal, etiquetas para los campos y grupos con `fieldset` y `legend`.

Las mejoras principales solicitadas se clasifican según su urgencia:

1. **Crítica:** definir a dónde se enviarán los datos del formulario.
2. **Importante:** organizar el código HTML y separar cada responsabilidad.
3. **Leve:** mejorar detalles de accesibilidad y mantenimiento.

## Clasificación y propuestas

### Crítico: definir el destino del formulario

**Problema:** el formulario usa `action="#"`, por lo que los datos no se envían a un servidor real ni se guardan.

**Por qué es crítico:** si el formulario se utiliza fuera de una práctica, la información que introduce el usuario se pierde. Además, las validaciones del navegador no reemplazan la validación del servidor.

**Propuesta para arreglarlo:** crear un archivo o servicio que reciba los datos y cambiar el atributo `action`:

```html
<form action="procesar-formulario.php" method="post"></form>
```

El servidor debe validar nuevamente los datos, comprobar el archivo subido y mostrar un mensaje de éxito o de error. Mientras todavía no exista un backend, se puede mantener `#`, pero debe entenderse que es solo una demostración.

### Importante: organizar el código HTML

**Problema:** el archivo contiene muchos tipos de campos porque es un ejercicio, pero también mezcla la estructura con comportamientos JavaScript y tiene dos controles que envían el formulario.

**Por qué es importante:** cuando el archivo crezca será más difícil leerlo, corregirlo y encontrar errores. Tener dos envíos puede confundir al usuario y provocar comportamientos distintos.

**Propuesta para arreglarlo:**

- Mantener una indentación consistente.
- Agrupar campos relacionados dentro de `fieldset`.
- Dejar un solo control principal de envío:

```html
<button type="submit">Enviar formulario</button>
```

- Conservar el `input type="image"` solo si se necesita demostrar ese tipo de input en clase.
- Mover los eventos `oninput` y `onclick` a un archivo `script.js`.
- Mantener separadas las responsabilidades: HTML para estructura, CSS para diseño y JavaScript para comportamiento.

### Leve: accesibilidad y mantenimiento

**Problema:** el formulario ya tiene una base accesible, pero todavía se pueden mejorar el autocompletado, el contenido de `header` y `footer`, la actualización del campo de rango y el mantenimiento de los colores CSS.

**Por qué es leve:** estos puntos no impiden que el formulario se muestre y se pueda completar, pero sí mejoran la experiencia de uso y facilitan futuras modificaciones.

**Propuesta para arreglarlo:**

- Agregar `autocomplete` a nombre, correo y teléfono.
- Añadir `aria-live="polite"` al elemento `output` del rango.
- Completar `header` y `footer`, o eliminarlos hasta que tengan contenido.
- Crear variables CSS para reutilizar los colores.
- Usar `:focus-visible` para destacar mejor la navegación con teclado.
- Revisar que los campos incluidos sean realmente necesarios en la versión final.

## Mejoras recomendadas

### 1. Definir el destino del formulario

Actualmente el formulario usa `action="#"`. Esto no guarda ni envía los datos a un servidor real.

```html
<form action="procesar-formulario.php" method="post"></form>
```

Si todavía no existe un servidor, se puede mantener `#` durante el aprendizaje, pero conviene dejar anotado que es solo una prueba.

**Prioridad:** alta cuando el formulario se use en un proyecto real.

### 2. Quitar el JavaScript inline

El control de rango usa un evento directamente dentro del HTML:

```html
oninput="document.getElementById('valor-volumen').value = this.value"
```

También hay un `onclick` en el botón de ejemplo. Es más ordenado crear un archivo `script.js` y colocar allí esos comportamientos. Así cada archivo tiene una responsabilidad:

- HTML: estructura.
- CSS: presentación.
- JavaScript: comportamiento.

### 3. Evitar botones de envío duplicados

Actualmente existen un botón normal de envío y un `input type="image"` que también envía el formulario. Para una interfaz sencilla, debería quedar solo uno.

```html
<button type="submit">Enviar formulario</button>
```

El `input type="image"` puede conservarse únicamente si se quiere demostrar ese tipo de control como parte de la clase.

### 4. Agregar `autocomplete`

Los navegadores pueden ayudar al usuario a completar datos si se indican valores de autocompletado:

```html
<input type="text" id="name" name="name" autocomplete="given-name" />
<input type="email" id="email" name="email" autocomplete="email" />
<input type="tel" id="telefono" name="telefono" autocomplete="tel" />
```

Esto mejora la experiencia, especialmente en teléfonos.

### 5. Revisar los campos antes de un proyecto real

El formulario incluye muchos tipos de datos porque es un ejercicio. En una aplicación real conviene dejar solo los campos necesarios. Por ejemplo, `semana`, `mes`, `hora`, `color` y `nivel de conocimiento` deberían mantenerse solo si realmente se necesitan.

También sería recomendable agregar `step` a algunos valores numéricos si se requiere una precisión concreta.

### 6. No confiar en los límites del HTML para proteger datos

Atributos como `required`, `min`, `max` y `maxlength` ayudan al usuario, pero no son una protección de seguridad. Si el formulario se conecta a un servidor, los datos deben validarse nuevamente en el backend.

El campo oculto tampoco debe considerarse seguro:

```html
<input type="hidden" name="curso" value="html" />
```

Un usuario puede modificarlo desde las herramientas del navegador.

### 7. Mejorar el contenido de `header` y `footer`

`header` y `footer` están presentes, pero actualmente están vacíos. Se pueden completar con información sencilla:

```html
<header>
  <p>Curso de desarrollo basado en plataformas</p>
</header>
```

```html
<footer>
  <p>Ejercicio de HTML - 2026</p>
</footer>
```

Si no van a contener contenido, también se pueden quitar hasta que sean necesarios.

### 8. Mejorar la actualización del campo de rango

El elemento `output` muestra el valor correctamente, pero se podría agregar `aria-live="polite"` para que algunos lectores de pantalla anuncien el cambio:

```html
<output id="valor-volumen" aria-live="polite">5</output>
```

Esto es una mejora opcional para este nivel.

### 9. Separar los colores en variables CSS

En `styles.css` se repiten algunos colores. En el futuro se pueden guardar en variables para cambiar el diseño más fácilmente:

```css
:root {
  --verde-principal: #2d6a4f;
  --verde-oscuro: #1f4d39;
  --rojo: #c44536;
}
```

Después se pueden usar con `var(--verde-principal)`.

### 10. Usar `:focus-visible`

El estilo actual de `:focus` es bueno porque hace visible el campo activo. Se puede complementar con `:focus-visible` para mostrar el contorno especialmente durante la navegación con teclado:

```css
input:focus-visible,
textarea:focus-visible,
button:focus-visible {
  outline: 3px solid #ffd166;
  outline-offset: 2px;
}
```

## Aspectos positivos

- `lang="es"` está definido correctamente.
- El documento tiene `<!doctype html>` y codificación UTF-8.
- Existe un único `h1`.
- Los campos visibles tienen etiquetas.
- Los grupos de radio y checkbox usan `fieldset` y `legend`.
- Se utilizan tipos de entrada adecuados como `email`, `url`, `date`, `number` y `file`.
- Hay validaciones nativas como `required`, `min`, `max`, `minlength` y `maxlength`.
- El CSS está separado del HTML.
- Hay estilos de foco y una adaptación básica para pantallas pequeñas.

## Orden sugerido para mejorar

1. Dejar un solo control para enviar el formulario.
2. Crear `script.js` para quitar los eventos inline.
3. Añadir `autocomplete` a nombre, correo y teléfono.
4. Completar o quitar el `header` y el `footer` vacíos.
5. Conectar `action` con un backend cuando se aprenda esa parte.
6. Añadir variables y pequeños ajustes de CSS.

## Conclusión

El proyecto cumple bien como práctica de los tipos de formularios HTML. No necesita cambios avanzados para seguir aprendiendo. La siguiente mejora más útil sería aprender a separar el JavaScript en un archivo propio y conectar el formulario a un proceso que pueda recibir y validar los datos.
