import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductsFromDB = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

const updateProductIntoDB = async (_id: string, updateData: TProduct) => {
  const result = await Product.findByIdAndUpdate(
    { _id },
    [{ $set: updateData }],
    {new: true },
  );
  return result;
};

const deleteProductIntoDB = async (_id: string) => {
  const result = await Product.deleteOne({ _id });
  console.log(result);
  return result;
};

const searchProductIntoDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await Product.find({
    $or: [
      { name: regex },
      { description: regex },
      { category: regex },
      { tags: regex },
    ],
  });
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductsFromDB,
  updateProductIntoDB,
  deleteProductIntoDB,
  searchProductIntoDB,
};
