# 🛒 API Laburen
Backend de ecommerce desarrollado con **Node.js + Express + PostgreSQL** (hosteado en **Neon**).  
Provee los endpoints REST que consume el [Agente Laburen.com](https://github.com/faustofuertes/agent-laburen).

---

## 🚀 Demo
- **API Backend (Render):** [https://api-laburen.onrender.com]
- **Agente con UI:** [https://agent-laburen.onrender.com]

---

## 📂 Estructura
src/
    controllers/ # Controladores de cada recurso
    routes/      # Endpoints de productos y carritos
    config.js    # Variables de entorno
    db.js        # Configuración de conexión a Postgres (Neon)
    index.js     # Servidor Express 

---

## ⚡ Instalación local
1. Clonar este repo:
    git clone https://github.com/faustofuertes/api-laburen.git
    cd api-laburen

2. Instalar dependencias:
    npm install

3. Crear archivo .env en la raíz con la configuración de DB:
    DB_USER=postresql
    DB_HOST=localhost
    DB_PASSWORD=tu_password
    DB_DATABASE=tu_db
    DB_PORT=5432
    DB_SSL=true
    PORT=4000

4. Levantar servidor:
    npm run dev
    La API quedará disponible en: http://localhost:4000

---

## 🔌 Endpoints principales


📦 Productos
    GET /products → Lista todos los productos.
    GET /products/:id → Obtiene un producto por ID.

🛒 Carritos
    POST /carts → Crea un carrito con items iniciales.
    PATCH /carts/:id → Modifica un carrito existente (agregar, actualizar, eliminar items).

---

## 🗄️ Base de datos
    Tabla products: catálogo de productos.
    Tabla carts: carrito principal.
    Tabla cart_items: items asociados a cada carrito.

---

## 📝 Notas
Este repo contiene solo la API.
El Agente con UI está en un repo separado: agent-laburen
DB deployada en Neon con datos iniciales (seed.sql).