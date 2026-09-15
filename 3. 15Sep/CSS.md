## CSS y diseño adaptable

- Box Model define la estructura básica de todo elemento HTML.
- Media Query: Regla de CSS3 que nos permite identificar el ancho de la pantalla en donde se está viendo la página web, la medción que noes da es en pixeles. 

### CSS3 y diseño adaptable
El CSS3 es el estándar utilizao para definir la presentación visual de los documentos HTML. Su importancia radica en que permite separar la estructura del contenido (HTML)de la forma en la que se muestra (CSS), facilitando la creación de sitios web modernos, accesibles y visualmente atractivos. 

Uno de los conceptos más importantes que presenta este idioma es el diseño adaptable(adpative design), que consiste en lograr que una interfaz pueda ajustarse a distintos dispositivos y tamaños de pantalla de manera automática, sin sacrificar usabilidad ni estética. 

La forma más eficiente de trabajar con CSS es crear un archivo CSS aparte, de esta forma seguimos las reglas del código limpio.

### Principios del diseño adaptable
- Mobile First: El primer diseño que hago de mi web tiene que estar pensada para los celulares(Siempre comenzamos diseñando para el peor escenario), después por medio de los media queries vamos adaptando el diseño.

Contenido en HTML -> CSS base: estilos móviles -> Media Queries para pantallas más grandes -> Layout fluido con Flexbox/Grid -> Diseño adaptable en distintos dispositivos

- Diseño responsivo: Un solo layout fluido. Se estira o reduce progresivamente según la pantalla
- Disseño adptable: Tres layout distintos.

### Buenas prácticas para un diseño adaptable
- Evitar anchos fijos.
- Imñagenes flexibles.
- Sistemas de espaciado con variables.
- Legibilidad. 

### Errores frecuentes
- Medidas rígidas.
- Olvidar de probar en distintos dispositivos.
- No usar media queries.
- Abusar de píxeles.
- Ignorar accesibilidad.
