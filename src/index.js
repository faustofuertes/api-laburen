import express from 'express'
import { PORT } from "./config.js"
import productsRoutes from './routes/products.routes.js'
import cartsRoutes from './routes/carts.routes.js'

const app = express()
app.use(express.json())
app.use(productsRoutes);
app.use(cartsRoutes);

app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});