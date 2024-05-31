import { Request, Response } from 'express';
import { orderService } from './order.service';
import OrderValidationSchema from './order.zod.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    // zod validation
    const zodParseData = OrderValidationSchema.parse(orderData);

    const result = await orderService.createOrderIntoDB(zodParseData);
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
    // get data only email
    if (req.query.email) {
      const email: string = req.query?.email as string;
      const result = await orderService.getOrderByEmailFromDB(email);

      if (result.length === 0) {
        res.status(500).json({
          success: false,
          message: `Sorry! No found data!! Your provided email : ${email} is not correct! Please provided valid email`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `Orders fetched successfully for user email ${email}!`,
          data: result,
        });
      }
    } else {
      // get all data
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
  getAllOrder,
};
