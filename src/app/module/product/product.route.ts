import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// search route
// router.get('/', ProductController.searchProduct);

// create route
router.post('/', ProductController.createProduct);

// get all data
router.get('/', ProductController.getAllProduct);

// get single data
router.get('/:productId', ProductController.getSingleProduct);

// get update data
router.put('/:productId', ProductController.updateProduct);

// get delete data
router.delete('/:productId', ProductController.deleteProduct);

export const productRoutes = router;
