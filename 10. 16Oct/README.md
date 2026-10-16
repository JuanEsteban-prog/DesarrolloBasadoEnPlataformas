## Anatomía de una plataforma digital

    - TCP: sirve para todas las aplicaciones de sistemas de información que necesitan que el servidor nos confirme que ha recibido la información o que el servidor confirme que ha procesado la petición del usuario.
    -UDP: Se utilizan en sistemas de información donde no necesitamos acuse de recibe.
Por ejemplo: Cuando nos metemos en nuestra cuenta de netflix con nuestras credenciales usamos el protocolo TCP, cuando buscamos una película seguimos con el mismo protocolo,pero cuando comenzamos a ver la película cambiamos al protocolo UDP ya que no necesitamos acuse de recibos. Hoy en día varias web trabajan con ambos protocolos(son **híbridas**).

### https
Encripta la información enviada agregando una capa extra de seguridad a la conexión. La encriptación se genera en la capa de transporte.

- La arquitectura moderna mira como mala práctica que el cliente se conecte directamente al servidor. En lugar de conectarse directo al servidor, el ciente se conecta a una capa(backend).

### CRUD
Es utilizado para trabajar(administrar) una base de datos.

# Diferencias entre estilo arquitectonico, patrón arquitectonico y los patrones de diseño
## 1. Estilo arquitectónico

Un **estilo arquitectónico** define la organización general de un sistema de software. Establece los tipos de componentes que lo conforman, cómo se relacionan entre sí y las restricciones que deben cumplir.

Describe una forma general de estructurar un sistema, sin especificar necesariamente una solución concreta para un problema particular.

**Ejemplos:**
- **Cliente-servidor:** separa las responsabilidades entre clientes que solicitan servicios y servidores que los proporcionan.
- **Arquitectura en capas:** organiza el sistema en capas con responsabilidades específicas, como presentación, lógica de negocio y acceso a datos.
- **Arquitectura orientada a eventos:** organiza la comunicación mediante la emisión y el consumo de eventos.
- **Microservicios:** estructura una aplicación en servicios pequeños e independientes que colaboran entre sí.

**Objetivo:** definir la estructura general y las reglas de organización del sistema.

## 2. Patrón arquitectónico

Un **patrón arquitectónico** es una solución reutilizable a un problema recurrente de diseño arquitectónico, considerando un contexto y un conjunto de requisitos determinados.

Proporciona una estructura o estrategia que ayuda a resolver problemas relacionados con la organización de los componentes, la comunicación entre ellos y la distribución de responsabilidades.

**Ejemplos:**
- **MVC (Modelo-Vista-Controlador):** separa las responsabilidades del modelo, la vista y el controlador.
- **Arquitectura hexagonal (Puertos y Adaptadores):** aísla la lógica de negocio de los detalles externos, como bases de datos y servicios.
- **CQRS:** separa las operaciones que modifican el estado de aquellas que consultan información.
- **Microkernel:** permite extender un núcleo funcional mediante complementos o módulos adicionales.

**Objetivo:** proporcionar una solución reutilizable para un problema recurrente de organización arquitectónica.

## 3. Patrones de diseño

Los **patrones de diseño** son soluciones reutilizables a problemas recurrentes de diseño de software, generalmente relacionados con la colaboración entre clases y objetos.

Se aplican en un nivel más específico que los estilos y patrones arquitectónicos. Ayudan a definir cómo se implementan determinadas responsabilidades y relaciones dentro de una parte del sistema.

**Ejemplos:**
- **Singleton:** restringe la creación de instancias de una clase a una única instancia accesible.
- **Factory Method:** delega en subclases la decisión de qué objeto concreto crear.
- **Observer:** permite notificar a varios objetos cuando cambia el estado de otro.
- **Strategy:** permite intercambiar diferentes algoritmos sin modificar el código que los utiliza.
- **Adapter:** permite que interfaces incompatibles puedan colaborar.

**Objetivo:** resolver problemas específicos de diseño e implementación, favoreciendo la reutilización, la flexibilidad y el mantenimiento del código.

## 4. Tabla comparativa

| Característica | Estilo arquitectónico | Patrón arquitectónico | Patrón de diseño |
|---|---|---|---|
| Nivel de abstracción | Alto | Arquitectónico | Diseño detallado |
| Enfoque | Organización general del sistema | Solución a un problema arquitectónico recurrente | Solución a un problema de diseño del software |
| Alcance | Sistema o familia de sistemas | Estructura o subsistema arquitectónico | Clases, objetos y sus interacciones |
| Propósito | Definir cómo se organiza el sistema | Guiar decisiones de diseño arquitectónico | Resolver problemas específicos de implementación |
| Ejemplos | Cliente-servidor, capas, orientado a eventos | MVC, hexagonal, CQRS | Singleton, Strategy, Observer, Adapter |

## 5. Ejemplo práctico

Imaginemos que vamos a desarrollar una aplicación de comercio electrónico.

### Estilo arquitectónico: arquitectura en capas

Organizamos la aplicación en tres capas principales:

- **Presentación:** muestra los productos y permite realizar compras.
- **Lógica de negocio:** gestiona pedidos, precios y reglas comerciales.
- **Acceso a datos:** interactúa con la base de datos.

### Patrón arquitectónico: MVC

Dentro de la aplicación, utilizamos MVC para separar las responsabilidades de una funcionalidad:

- **Modelo:** representa los datos y las reglas del dominio.
- **Vista:** muestra la información al usuario.
- **Controlador:** coordina las solicitudes y las respuestas de la funcionalidad.

### Patrón de diseño: Strategy

Para calcular los costos de envío, utilizamos Strategy y definimos diferentes estrategias:

- Envío estándar.
- Envío exprés.
- Envío internacional.

De esta manera, podemos cambiar el algoritmo de cálculo del envío sin modificar el código que lo utiliza.

> **Nota:** estos conceptos no son categorías completamente excluyentes. MVC, por ejemplo, puede clasificarse como patrón arquitectónico o patrón de diseño arquitectónico, según la fuente y el contexto.

## 6. Conclusión

La diferencia principal está en el nivel de abstracción y en el tipo de problema que se busca resolver:

- **Estilo arquitectónico:** define una forma general de organizar un sistema.
- **Patrón arquitectónico:** propone una solución reutilizable para un problema recurrente de arquitectura.
- **Patrón de diseño:** propone una solución reutilizable para un problema específico de diseño e interacción entre componentes del software.

En resumen, los estilos arquitectónicos establecen la estructura general, los patrones arquitectónicos orientan las decisiones estructurales y los patrones de diseño ayudan a resolver problemas específicos dentro de esa estructura.

**HAY QUE ENTENDER BIEN ESTOS CONCEPTOS. SON SUMAMENTE IMPORTANTES**

### DEBER
Traer el modelo de la base de datos de nuestro sistema(proyecto presentado la anterior clase). Esta base de datos debe de soportar todos los requerimientos funcionales de los negocios que escogimos.