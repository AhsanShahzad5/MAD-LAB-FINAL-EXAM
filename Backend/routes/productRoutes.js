import express from 'express';
const router = express.Router();
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, bulkCreateProducts } from '../controllers/productController.js';

// CRUD routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

// Bulk creation route
router.post('/bulk', bulkCreateProducts);

export default router;
