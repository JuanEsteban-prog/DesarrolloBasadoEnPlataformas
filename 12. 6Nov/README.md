### Estilos arquitectónico que usaremos
- N-capas
- cliente-servidor
- Monolítico
- REST
### Patrón arquitectónico que estamos usando en el front end y el back end
M.V.C -> Modelo Vista Controlador
### Patrones de diseño
- Creacionales
- Comunicacionales

### Tarea
Dar un prompt usando lenguaje ténico para hacer una web de nuestro gusto. También hay quemandar el prompt de una forma cotidiana para luego comparar la web y su estructura.

## Node.js y Express
Son bastante utilizados en la actualidad.

Node.js tiene una característica importante, tiene un event loop(un lazo que espera/controla las tareas que recive) luego determina si hay tareas pendientes, si lo hay hacel callbacks, después delega el I/O a Threadpool y para nubakuzar acaba en entradas de red. Si no hay tareas pendientes, envúa todo direco a las operaciones de red. 

Mientras que express es el framework más utilizado en Node.js, en el backend nos permite trabajar con el patrón arquitectónico M.V.C(Este patrón no funciona por páginas, este funciona por rutas.). Además nos permite instalar n librerias para conectar el backend con alguna otra aplicación.

Las APIs pueden estar en diferentes tecnologías, pero la base de la API está en REST, API Rest(Como vamos a implementar la parte técnica) es la forma en la que nosotros implementamos Rest. Y también tenemos a RestFull. El formato determinado que utiliza el protocolo REST en .json, pero la ventaja que presenta este estilo es que si le pasamos una o varias URL las puede utilizar como recurso.
