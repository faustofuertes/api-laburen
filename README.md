# 🛠️ API Laburen
Backend de **ecommerce** desarrollado con **Node.js + Express + PostgreSQL** (DB hosteada en **Neon**).  
Provee los endpoints REST que consume el [Agente Laburen](https://github.com/faustofuertes/agent-laburen).

---

## 🚀 Demo
- **API Backend:** [https://api-laburen.onrender.com](https://api-laburen.onrender.com)  
- **Agente con UI:** [https://agent-laburen.onrender.com](https://agent-laburen.onrender.com)

---

## ⚙️ Instalación local
1. **Clonar este repo**
   ```bash
   git clone https://github.com/faustofuertes/api-laburen.git
   cd api-laburen

2. **Instalar dependencias**
   ```bash
   npm install

3. **Configurar variables de entorno (.env)**
   DB_USER=tu_user
   DB_HOST=localhost
   DB_PASSWORD=tu_password
   DB_DATABASE=tu_db
   DB_PORT=5432
   DB_SSL=true
   PORT=4000

4. **Iniciar servidor**
   ```bash
   npm run dev
   La API quedará disponible en: http://localhost:4000

---

## 📖 Documentación
Toda la explicación técnica y diagramas están en /docs:
Arquitectura de la API
Arquitectura del Agente
Flujo de interacción (diagrama)

---

## 📝 Notas
Este repo contiene solo la API.
El Agente con UI está en un repo separado: agent-laburen.
La base de datos está deployada en Neon, con datos iniciales.