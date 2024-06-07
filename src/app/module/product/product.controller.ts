/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { productServices } from './product.service';
import ProductValidationSchema from './product.zod.validation';

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    // zod validation
    const zodParseData = ProductValidationSchema.parse(productData);
    const result = await productServices.createProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

// get all product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    if (req?.query?.searchTerm) {
      const searchTerm = req.query.searchTerm as string;
      const result = await productServices.searchProductIntoDB(searchTerm);

      if (result.length === 0) {
        res.status(500).json({
          success: false,
          message: `Sorry! No found data!! Your provided email : ${searchTerm} is not here data`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `Products matching search term '${searchTerm}' fetched successfully!`,
          data: result,
        });
      }
    } else {
      const result = await productServices.getAllProductsFromDB();
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

// get single product by id
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductsFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

// update product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await productServices.updateProductIntoDB(
      productId,
      updateData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

// delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductIntoDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

// search product
const searchProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const result = await productServices.searchProductIntoDB(searchTerm);
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
