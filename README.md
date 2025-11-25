# EXAMEN DE PROGRAMACION  - KATTY MERO

5 de Agosto – Asistencia (Backend)

Este proyecto corresponde al backend del sistema de Asistencia “5 de Agosto”, desarrollado utilizando Node.js, Express y MongoDB. Su función principal es administrar los registros de asistencia generados dentro del sistema, proporcionar una estructura API clara y organizada, y sostener la comunicación con la base de datos para garantizar un funcionamiento correcto y estable.

La arquitectura del proyecto se encuentra distribuida en módulos, con rutas organizadas en archivos independientes y controladores específicos para cada funcionalidad. Existe un archivo principal que centraliza todas las rutas, lo que permite mantener una estructura ordenada, escalable y fácil de mantener. Del mismo modo, el repositorio conserva un historial de commits significativo, lo que refleja el proceso de desarrollo y las mejoras realizadas a lo largo del tiempo.


---

Instalación y Ejecución

Para ejecutar el backend del proyecto, es necesario instalar previamente todas las dependencias y luego iniciar el servidor. El proyecto utiliza la herramienta nodemon para facilitar el proceso de desarrollo, ya que permite reiniciar el servidor automáticamente cuando se detectan cambios en el código.

Pasos esenciales

1. Instalar dependencias

npm install

2. Ejecutar el servidor con nodemon

nodemon src/index.js

O también puede iniciarse mediante el script definido en el archivo package.json:

npm run dev

3. Servidor activo

Una vez iniciado, el servidor estará disponible en el puerto definido por la variable de entorno o, en su defecto, en el puerto 3000. La ruta base del proyecto es:

/5deAgosto/

Durante su ejecución, el servidor establece una conexión inicial con MongoDB, activa los middlewares necesarios para el funcionamiento del sistema (como el manejo de JSON, CORS y archivos estáticos) y carga todas las rutas del proyecto para su uso.


---

Descripción de las Rutas de la API

El sistema organiza su grupo de rutas mediante un archivo central denominado index.routes.js, donde se importan y registran las rutas principales. Su estructura es la siguiente:

indexRoutes.use('/ejemplo', ejemplo);
indexRoutes.use('/asistencia', asistencia);

Todas estas rutas quedan agrupadas bajo la ruta global:

/5deAgosto/

A continuación, se describen las rutas principales del proyecto:


---

1. Rutas de Asistencia

Ruta base:

/5deAgosto/asistencia

Estas rutas permiten la administración y gestión completa de los registros de asistencia.

Operaciones generales:

GET / → Obtiene todos los registros de asistencia almacenados en la base de datos.

GET /:id → Obtiene un registro de asistencia específico mediante su ID.

POST / → Crea un nuevo registro de asistencia.

PUT /:id → Actualiza la información de un registro existente.

DELETE /:id → Elimina un registro de asistencia por su ID.



---

2. Rutas de Ejemplo

Ruta base:

/5deAgosto/ejemplo

Estas rutas están destinadas principalmente para pruebas, validación de funcionamiento del servidor y verificación de la estructura inicial del proyecto.


---

Versión del Proyecto y Repositorio

El repositorio correspondiente al proyecto mantiene:

Un código organizado en carpetas específicas como routes, controllers, db y models.

Un historial de commits que evidencia el avance progresivo en el desarrollo.

Una estructura escalable, pensada para futuras extensiones o adición de nuevas funcionalidades.


Esta organización garantiza claridad, fácil mantenimiento y una base sólida para futuros desarrollos.


---

Conclusión

El desarrollo del backend “5 de Agosto – Asistencia” permitió reforzar conocimientos esenciales en las siguientes áreas:

Construcción de APIs utilizando Node.js y Express.

Diseño, segmentación y organización de rutas.

Implementación y conexión a bases de datos mediante MongoDB.

Uso de middlewares, modularidad y buenas prácticas para proyectos backend.


La experiencia adquirida durante este proceso resultó fundamental para mejorar las habilidades técnicas y comprender de manera más profunda cómo estructurar, desarrollar y mantener un sistema backend real. Este proyecto representa un avance significativo en el aprendizaje y constituye una base sólida para futuros trabajos profesionales y académicos.


---
