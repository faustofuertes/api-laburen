\# 🛠️ API Laburen · Arquitectura & Endpoints

\#\# 1\. Arquitectura de Alto Nivel

La \*\*API Laburen\*\* es un backend de ecommerce hecho en \*\*Node.js \+ Express \+ PostgreSQL (Neon)\*\*.  

Su función es proveer endpoints REST al \*\*Agente Laburen\*\* para consultar productos y manejar carritos.

\*\*Componentes:\*\*

\- \*\*Servidor Express (Render):\*\* expone rutas REST.  

\- \*\*Controladores:\*\* lógica de negocio (productos / carritos).  

\- \*\*DB (PostgreSQL en Neon):\*\*  

  \- \`products\`: catálogo.  

  \- \`carts\`: carritos.  

  \- \`cart\_items\`: ítems de cada carrito.  

\- \*\*Config:\*\* variables en \`.env\` para conexión a DB.


\*\*Despliegue:\*\*  

\- API → Render  

\- DB → Neon


\---

\#\# 2\. Endpoints principales

\#\#\# 📦 Products

\- \`GET /products\` → lista todos los productos.  

\- \`GET /products/:productId\` → detalle de un producto.


\#\#\# 🛒 Carritos

\- \`POST /carts\` → crea un carrito con items iniciales.  

\- \`PATCH /carts/:cartId\` → modifica un carrito (agregar / actualizar / eliminar).


\---

\#\# 3\. Resumen

La API es la \*\*capa de negocio\*\* del sistema:  

1\. El \*\*Agente\*\* procesa lenguaje natural.  

2\. La \*\*API\*\* responde con datos estructurados (productos y carritos).  

3\. La \*\*DB en Neon\*\* asegura persistencia de la información.


