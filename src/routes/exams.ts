import express from 'express';
import * as controller from '@controllers/examsController';

const router = express.Router();

router.post('/exams/new', controller.insert);
