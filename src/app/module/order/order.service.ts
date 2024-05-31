import TOrder from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (orderData: TOrder) => {
  const order = new Order(orderData);
  const result = await order.save();
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await Order.find();
  return result;
};

const getOrderByEmailFromDB = async (email: string) => {
  const result = await Order.find({ email });
  return result;
};

export const orderService = {
  createOrderIntoDB,
  getAllOrderFromDB,
  getOrderByEmailFromDB,
};
