import { z } from 'zod';

// Order schema
const OrderValidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  productId: z.string().min(1, 'Product ID is required'),
  price: z.number().min(0, 'Price must be a non-negative number'),
  quantity: z.number().int().min(1, 'Quantity must be at least 1'),
});

export default OrderValidationSchema;
