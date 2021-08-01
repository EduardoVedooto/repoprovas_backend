import express from 'express';
import * as controller from '@controllers/subjectsController';

const router = express.Router();

router.get('/exams/subjects', controller.getSubjects);

export default router;
