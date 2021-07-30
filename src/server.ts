import 'reflect-metadata';
import func from '@controllers/func';
import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';

const app = express();

app.get('/', (req: Request, res: Response) => {
  console.log(`${func} teste`);
  res.sendStatus(501).end();
});

createConnection();

app.listen(4000, () => console.info('Server running on port 4000'));
