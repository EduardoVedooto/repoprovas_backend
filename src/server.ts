import func from '@controllers/func';
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  console.log(func);
  res.sendStatus(501).end();
});

app.listen(4000, () => console.info('Server running on port 4000'));
