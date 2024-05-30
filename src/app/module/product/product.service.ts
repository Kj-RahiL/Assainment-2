import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async(productData: TProduct)=>{

    const result = await Product.create(productData)
    return result
}

const getAllProductsFromDB = async()=>{

    const result = await Product.find()
    return result
}

const getSingleProductsFromDB = async(_id: string)=>{

    const result = await Product.findOne({_id})
    return result
}

const updateProductIntoDB = async(_id: string, updateData:any)=>{

    const result = await Product.updateOne({_id}, [{$set: updateData}])
    console.log(result)
    return result;
}

const deleteProductIntoDB = async(_id: string)=>{

    const result = await Product.deleteOne({_id})
    console.log(result)
    return result;
}


const searchProductIntoDB = async(searchTerm : string)=>{

    const result = await Product.deleteOne()
    console.log(result)
    return result;
}

export const productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    updateProductIntoDB,
    deleteProductIntoDB,
    searchProductIntoDB

}