# 🛒 API Laburen

Backend de ecommerce desarrollado con **Node.js + Express + PostgreSQL** (DB hosteada en **Neon**).  
Provee los endpoints REST que consume el [Agente Laburen.com](https://github.com/faustofuertes/agent-laburen).

---

## 🚀 Demo

- **API Backend (Render):** [https://api-laburen.onrender.com](https://api-laburen.onrender.com)  
- **Agente con UI:** [https://agent-laburen.onrender.com](https://agent-laburen.onrender.com)

---

## 📂 Estructura

src/
├── controllers/ # Controladores de cada recurso
├── routes/ # Endpoints de productos y carritos
├── config.js # Variables de entorno
├── db.js # Configuración de conexión a Postgres (Neon)
└── index.js # Servidor Express

---

## ⚡ Instalación local

1. **Clonar este repo:**
   ```bash
   git clone https://github.com/faustofuertes/api-laburen.git
   cd api-laburen
Instalar dependencias:

npm install
Configurar variables de entorno:
Crear un archivo .env en la raíz con la configuración de la DB:

env
DB_USER=tu_user
DB_HOST=localhost
DB_PASSWORD=tu_password
DB_DATABASE=tu_db
DB_PORT=5432
DB_SSL=true
PORT=4000
Levantar servidor:

npm run dev
La API quedará disponible en: http://localhost:4000

🔌 Endpoints principales
📦 Productos
GET /products → Lista todos los productos.

GET /products/:id → Obtiene un producto por ID.

🛒 Carritos
POST /carts → Crea un carrito con items iniciales.

PATCH /carts/:id → Modifica un carrito existente (agregar, actualizar o eliminar items).

🗄️ Base de datos
products → catálogo de productos.

carts → carritos creados por los usuarios.

cart_items → items asociados a cada carrito.

📝 Notas
Este repo contiene solo la API.

El Agente con UI está en un repo separado: agent-laburen.

Base de datos deployada en Neon, con datos iniciales (seed.sql).