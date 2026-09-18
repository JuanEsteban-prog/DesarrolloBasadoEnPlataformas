## FrameWorks css modernos: Bootstarp y tailwind

Para poder desarrollar interfaces web, tenemos que saber aprovechar frameworks css modernos, que aceleran el trabajo y garantizan coherencia visual.

### ¿Qué es un framework CSS?

Es un conjunto predefinido de reglas, componentes y utilidades que simplifica el diseño de las páginas webs.
Ventajas: - Ahorra tiempo(Ya trae botones, formularios, rejillas y tipografía).

### Bootstrap: Rejilla y componentes listos.

Es el framework más popular del mundo.
Ventajas: - Gran comunidad y documentación. - Componentes listos: menus, botones, modales. - Rejilla responsiva fácil de usar.

Desventajas: - Puede sentirse rígido si no se personaliza. - CSS algo pesado si no se optimiza. - El diseño puede lucir genérico si no se adopta.

### Tailwind CSS: utilidades primero

A diferencia de Bootstrap. Tailwind CSS no trae componentes listos. Tiene un enfoque utility first: ofrece clases pequeñas y especficas para estilos que el dearollador combina para crear interfaces personalizadas.

Ventajas: - Gran flexibilidad, diseños únicos. - Código más ligero(si se usa purge). - Excelente integración con React, Vue, etc.

Desventajas: - Curva de aprendizaje inicial. - Puede verse sobrecargado de clases. - No trae componentes listos.

### Buenas prácticas con frameworks

    - No depender 100% del framework. Primero debemos aprender CSS.
    - Personalizar colores, tipografías y variables para que el sitio no se vea genérico.
    - Optimizar: En producción, elimina las clases y componentes que no utilicemos.
    - Revisa accesibilidad: contraste, foco visible y compatibilidad con lectores de pantalla.
    - Combinar lo mejor: Usar tailwind para la base y bootstrap para algunos componentes si el proyecto lo permite.
