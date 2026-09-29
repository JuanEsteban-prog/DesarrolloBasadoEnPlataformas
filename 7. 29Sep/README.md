    - Ventajas de utilizar el almancenamiento local(LocalStorage):
        - Liberamos recursos del servidor.
        - Su capacidad es lmitada a 5MB por origen(domino.)
    - SessionStorage:
        - Son datos que se alamacenan dentro del servidor de la empresa de una sesión.   
    Tenemos que entender que tipo de almacenamiento tenemos que ocupar para evitar errores de diseño y por tanto errores en la seguridad de nuestra web.

## IndexDB(Base de Datos NoSQL)
    - Puede almacenar cientos de megabytes o hasta el 50% del espacio libre en el  disco del dispositivo  

## Estructura DOM
    - DOM permite crear y agregar elementos nuevos dinámicamente: 

``` javascript
const nuevo = document.createElement("div");
nuevo.textContent = "Elemento generado desde JS";
document.body.appendChild(nuevo)
//También se pueden modificar atributos o estilos
nuevo.setAttribute("class","alerta");
nuevo.style.color = "red"
//Eliminar o reemplazar nodos
const viejo = document.getElementById("mensaje");
viejo.remove; //Elimina
```  

## Eventos: Interacción con el usuario.
    - Pueden ser click(mouse), pulsaciones, movimientos(pantallas touch/mouse/teclado) y cargas.
    - Para responder a los eventos JS utiliza manejadores de eventos o events listeners.

``` javascript
const boton = document.querySelector("button");
boton.addEventListener("click",()=> {
    alert("Has hecho click en el boton");
});
``` 

Las funciones anónimas son aquellas que no tienen nombre, se hacen en ese momento y se utiliza la sintaxis tipo flecha.

Para optmizar podemos utilizar la **delegación de eventos**, escuchando el evento en un elemento contenedor y detectando cúal hijo lo originó:

## Eventos modernos y asincronía
Los eventos también pueden combinarse con operaciones asíncronas, por ejemplo, para cargar datos al  hacer click.

## Buenas prácticas
    - Utilizar selectores claros.
    - Evitar modificaciones en bucle.
    - Delegar eventos.
    - Separar lógica y presentación.
    - Usar addEventListener.


