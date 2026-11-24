## Seguridad básica ed las APIs
- La seguridad es transversal, se aplica en todas las capas de la aplicación.
- En el middleware configuramos las partes de seguridades. El middleware tiene que hacer:
  - https
  - cors
  - validación
  - sanitización
  - autorización
  - JWT

En la actualidad de separan los usuarios de la base de datos de los usuarios de la aplicación. 

Para poder realiza una autenticación y validación e nuestra base de datos, tenemos que crear tres tablas: usuario, rol y usario_rol.

Cuando se incia sesión se verifica con las tres tablas que habíamos creado anteriormente, cuando se autentique(Autorizar) las credenciales se puede proceder a validarlas(validar) en la base da datos.

Esto genera dos afectaciones en seguridad en redimiento de la base de datos, ya quehay una mejora notable en ambas métricas.

Tenemos que implementar esta metodología para la siguiente entrega de nuestro reto. 

 Sesión mal gestionada: Forma parte de la gestión de credenciales, imaginemos que iniciamos sesión en el navegador y luego cerramos la pestaña y nos vamos, luego alguién más ocupa esa computadora y sinquerer abre el link en el que estábamos nosotros y le lanza directamente al menú principal, por lo que puede ver toda la información que tenga nuestra cuenta, este es un problema muy grande que tenemos que tomar en cuenta cuando desarrollemnos nuestra aplicación. 

 También es importante incluir logs en nuestra app para lograr tener un registro almancenado de todas las acciones realizadas en nuestra pagina web.

 JWT -> nos dice quien eres y que puedes hacer, sos partes son:
    - la firma
    - elpayload
    - Cabecera


