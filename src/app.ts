import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', )

const getAController = (req: Request, res: Response) => {
    const a = 'Assignment -2 is running on the port';
    res.send(a);
  };
  app.get('/', getAController);

export default app;
