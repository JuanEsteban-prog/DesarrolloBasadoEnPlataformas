### ¿Qué es Fetch API?

Es una interfaz moderna basada en promesas que permite realizar solicitudes HTTP para recuperar (GET) o enviar (POST, PUT, DELETE, etc.) datos de forma asíncrona.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### Fetch API con async/await

El mismo código se puede escribir de forma más secuencial y limpia utilizando async/await:

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

### Métodos y opciones en Fetch

fetch() admite un segundo paramétro con opciones de configuración cómo método, encabezados o cuerpo:

```javascript
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ usuario: "Doe", clave: "1234" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### Aplicaciones Offline

Son aplicaciones progresivas, es decir, pueden funcionar sin tener conexión a internet.
**Tarea:** Investigar sobre una página web offline. Si no tenemos internet y intentamos ingresar un nuevo cliente lo debemos poder hacer, cuando regrese la conexión a internet se vuelve a sincronizar con el servidor. Traer ejemplo y informe a mano(en el cuaderno, título, objetivo general, objetivos específicos, resumen, introducción, metodología, resultados, conclusiones y bibliografía). INDIVIDUAL

### Sincronización entre fetch y IndexDB

Para lograr una sincronización progresiva: intentar obtener datos del servidor(fetch), si falla, recuperar los datos guardados en el IndexDB, mostrar los resultados en la interfaz, garantizando continudad.

[link donde hay apis de practicas](https://jsonplaceholder.typicode.com/#nested)
