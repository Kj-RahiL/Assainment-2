import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const result = await orderService.createOrderIntoDB(orderData);
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
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    if (req.query.email) {
      const email: string = req.query?.email as string;
      const result = await orderService.getOrderByEmailFromDB(email);

      if(!req.query.email){
        res.status(500).json({
            success: false,
            message: `Sorry! No found data!! Your provided email : ${email} is not correct! Please provided valid email`,
          });

      }else{
        res.status(200).json({
            success: true,
            message: `Orders fetched successfully for user email ${email}!`,
            data: result,
          });
      }
      
    } else {
      const result = await orderService.getAllOrderFromDB();
      res.status(201).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrder
};
