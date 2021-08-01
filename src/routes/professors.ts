import express from 'express';
import * as controller from '@controllers/professorsController';

const router = express.Router();

router.get('/professors', controller.getProfessors);

export default router;
