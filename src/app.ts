import express from 'express';
import subjectRouter from 'src/routes/subjects';
import cors from 'cors';

export const app = express();

app.use(express.json());
app.use(cors());

app.use(subjectRouter);
