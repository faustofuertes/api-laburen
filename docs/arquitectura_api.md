\# 🛠️ Arquitectura de Alto Nivel · API Laburen

\#\# 1\. Arquitectura de Alto Nivel

La \*\*API Laburen\*\* es un backend de ecommerce desarrollado con \*\*Node.js \+ Express \+ PostgreSQL (Neon)\*\*.  

Su función es proveer endpoints REST al \*\*Agente Laburen\*\* para consultar productos y manejar carritos.

\#\#\# Componentes principales:

\- \*\*Servidor Express (Render):\*\* expone rutas REST.  

\- \*\*Controladores:\*\* lógica de negocio para productos y carritos.  

\- \*\*Base de Datos (PostgreSQL en Neon):\*\*  

  \- \`products\`: catálogo de productos.  

  \- \`carts\`: carritos creados por usuarios.  

  \- \`cart\_items\`: ítems asociados a cada carrito.  

\- \*\*Configuración:\*\* variables en \`.env\` para conexión a DB.


\#\#\# Despliegue:

\- \*\*API\*\* → Render  

\- \*\*DB\*\* → Neon


\---

\#\# 2\. Endpoints principales

\#\#\# 📦 Productos

\- \`GET /products\` → lista todos los productos.  

\- \`GET /products/:productId\` → detalle de un producto.


\#\#\# 🛒 Carritos

\- \`POST /carts\` → crea un carrito con items iniciales.  

\- \`PATCH /carts/:cartId\` → modifica un carrito (agregar, actualizar o eliminar).


\---

\#\# 3\. Resumen

La \*\*API Laburen\*\* representa la \*\*capa de negocio\*\* del sistema:  

\- El \*\*Agente\*\* procesa lenguaje natural.  

\- La \*\*API\*\* devuelve datos estructurados (productos y carritos).  

\- La \*\*DB en Neon\*\* asegura persistencia de la información.


