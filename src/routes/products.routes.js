import { Router } from 'express'
import { getProductById, getProducts } from '../controllers/products.controllers.js';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:productId', getProductById);

export default router;