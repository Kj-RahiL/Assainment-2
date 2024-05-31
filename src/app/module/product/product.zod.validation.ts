import { z } from 'zod';

// Variant schema
const VariantSchema = z.object({
  type: z.string().min(1, 'Type is required'),
  value: z.string().min(1, 'Value is required'),
});

// Inventory schema
const InventorySchema = z.object({
  quantity: z.number().int().min(0, 'Quantity must be a non-negative integer'),
  inStock: z.boolean(),
});

// Product schema
const ProductValidationSchema = z.object({
  name: z.string().min(3, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(0, 'Price must be a non-negative number'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string().min(1, 'Tag must be a non-empty string')),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
});

export default ProductValidationSchema;
