import { Request, Response } from "express";
import { orderService } from "./order.service";


const createOrder = async (req:Request, res: Response)=>{
    try {
        const orderData = req.body

        const result = await orderService.createOrderIntoDB(orderData)
        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
          });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
          });
    }
}

export const orderController = {
    createOrder
}