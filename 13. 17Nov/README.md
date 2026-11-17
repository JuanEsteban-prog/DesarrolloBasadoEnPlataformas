### ORM

ORM es un framwork que nos permite conectarnos a nuestra base de datos. Hay dos tipos
- Prisma -> Postgres (Utiliza esquemas, los esquemas son las clases/diagrama de clases)
- Servelize -> Oracle (Utiliza modelos)
Los ORM nos permite a través de las migraciones trabajar a partir del diagrama de clases si utilizamos el prisma nos genera automáticamente la base de datos, y viciversa si hacemos una actualización en la base de datos el ORM detecta el cambio y actualiza los esquemas. Las migraciones nos permite hacer solamente los ORM.

La ventaja que presenta es que del lado de la aplicación ya trabajamos con clases, objetos, programación orienteada a objetos, etc. 

Sus ventaas son:
- Mejora de productividad
- Mejora de rendimiento de las aplicaciones
- No necesitamos saber SQL.
- Podemos seguir programando en nuestro lenguahe de progrmación de preferencia.
- Agrega seguridad a la aplicación.

Para evitar la pérdida de datos tenemos que seguir la integridad referencial, esto añade una capa extra de proteccíón a la base de datos. Siempre que se hacen migraciones las empresas suelen tener un ambiente de desarrollo(copia del ambiente de producción) y otro de producción. De esta forma logramos asegurar la integridad de la información de la base de datos.

Cuando intentemos desplegar esto GitHub-Pages no lo soporta ya que tiene una base de datos, por lo que tendremos que utilizar otros hostings como:
- Vercel
- Netlify
- Render -> Gratis


### Proceso de despliegue
Podemos desplegar en hostings especializados, aws, google cloud, etc. 

Las herramientas más popularizadas para despliegue es todo lo que esta montado sobre aws, google cloud, etc.

Tenemos que seguir la siguiente secuencia: DevSecOps -> CI-CD 

[Herramienta utilizada para el despliegue](render.com)

Prompt para el agente: Vamos a desplegar usando CI-CD coge el backend súbele al repositorio de github (URL repo) y vas a ir a github actions dentro de actions avs a hacer pruebas de api, validaciones de api, seguridad de api, verificar paquetes y sus versiones. Una vez que todas las pruebas y validaciones sean ok, vas sa desplegar en el render en la siguiente url(url de render) considerando que la base de datos esta en postgres y las APIs están cosntruidas en node.js (su respectiva versión) y en express(versión de express). 
