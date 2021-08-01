import express from 'express';
import cors from 'cors';

// Routes
import subjectRouter from 'src/routes/subjects';
import professorRouter from 'src/routes/professors';

export const app = express();

app.use(express.json());
app.use(cors());

app.use(professorRouter);
app.use(subjectRouter);
