import 'reflect-metadata';
import func from '@controllers/func';
import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';

const app = express();

app.get('/', (req: Request, res: Response) => {
  console.log(`${func} teste`);
  res.sendStatus(501).end();
});

export async function init(): Promise<void> {
  await createConnection();
}

export default app;
