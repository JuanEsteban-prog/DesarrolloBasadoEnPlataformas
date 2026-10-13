# Teoría semana 6

## MVC(Modelo vista controlador)

- La petición del cliente entra al controlador, el controlador mira la petición del usuario y llama al modelo solicitado ´getClientes()´, también el modelo agarra la vista del cliente y se los envía al naegador del usario para que estos se rendericen en el mismo. 
- MVC -> RUTAS, Apuntan primero al controlador, este se encarga de ver y seleccionar el modelo que corresponda junto con su correspondiente lista, para enviar estos datos al navegaador y se renderice la web ahí mismo.


### Taller
- Hacer una página que utilice los dipositivos del celular, para poder leer en tiempo real la posición, esto se mandará a una base de datos en la nube, los datos tienen que llegar a la nube en tiempo real.

Celular:
- Debe capturar en tiempo real GPS(latitud y longuitud).
- Debe enviar al FireBase(A la base de datos como servicio).
- Debo poder mirar en el mapa API google maps en tiempo real como me muevo(Oo. Podemos mostrar la latitud y longuitud).
- Se debe de actualizar los datos cada 1000ms.

Interfaz gráfica:
- Se puede incorporar cualquier interfaz gráfica.

Web:
- Debe permitir el monitoreo en tiempo real. 
- Tiene que leer los datos de la base de datos(FireBase).
- Mostrar en tiempo real en el mapa de Google Maps cómo se mueve el dispositivo celular.
- Se puede mostrar todos los elementos adicionales que consideremos. 


### Taller solucionado
- [URL base datos](https://trackergps-taller-default-rtdb.firebaseio.com/)
- [URL taller resuelto](https://juanfercaicedo.github.io/DesarrolloBasadoEnPlataformas_PUCE/Clases/11_OCT13/proyectoEnClase/index.html)