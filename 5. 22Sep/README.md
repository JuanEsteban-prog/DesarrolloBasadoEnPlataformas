## Clase 4
### JavaScript Moderno(ES6+)
Es el lenguaje que dota de interactividad a la web. Si HTML define la estructura y CSS el estilo, JavaScript es quien genera la lógica de navegación: Valida formularios, reacciona a eventos, manipula el contenido, comunica con servidores y permite construir aplicaciones completas.
Evento INIT(inicializa el navegador), LOAD(Carga el body).

Los modulos que creemos tienen que poder hacer solo una tarea, de esta forma nos aseguramos  de poder reutilizar el código en otras secciones.

### Buenas prácticas:
    - Usar let/const sobre var en todo código nuevo.

### Tipado dinámico
Primero se lee el valor, mira el valor que contiene, y le asigna el tipo de dato. Este sistema se utiliza en JavaScript.

### Promesas, Async/Await
En el desarrollo web moderno, muchos procesos no ocurren de inmediato. Cuando un navegador solicita datos a un servidor, lee un archivo o espera la respuesta de una API, ese tiempo de espera no debe bloquear el resto del código. Para resolver esta necesidad, JavaScript utiliza un modelo de ejecución asíncronico(se tiene que utilizar la paginación).

### ¿Qué es la asincronía?
JavaScript utiliza un modelo single-threaded(un solo hilo de ejecución), solo se puede ejecutar una tarea a la vez, pero gracias a Event Loop podemos prgrama rtareas que se ejecutan más adelante una vez se haya terminado de ejecutar otras tareas.

Cuando trabajemos con funciones asincrónicas, tenemos que utilizar `try` y `catch`

### API
[Web para tener apis para practicar](jsonplaceholder.typicode.com)

### Manejo de errores y buenas prácticas
Tenemos que no solo enfocarnos en escribir código que funcione, sino también código que sepa fallar correctamente. 

### Registro y trazabilidad:
    - Registro: guardamos los errores en un log.
    - Trazabilidad: Guardamos la hora, la ip(la del proveedor de servicios de internet). 
Esto es oblgitorio de hacer en la actualidad, toda la infomraciión recopilada tiene que ser almacenada en un archivo  `.log`, `.txt`, `.json`, etc.

 