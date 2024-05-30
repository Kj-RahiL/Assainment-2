import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/module/product/product.route';
import { orderRoutes } from './app/module/order/order.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes)

app.use('/api/orders', orderRoutes)

const getAController = (req: Request, res: Response) => {
    const a = 'Assignment -2 is running on the port';
    res.send(a);
  };
  app.get('/', getAController);

export default app;
