import { Router } from 'express'
import { getCartById } from '../controllers/carts.controllers.js';
import { postCart } from '../controllers/carts.controllers.js';
import { patchCart } from '../controllers/carts.controllers.js';

const router = Router();

router.get('/carts/:cartId', getCartById);
router.post('/carts', postCart);
router.patch('/carts/:cartId', patchCart);

export default router;