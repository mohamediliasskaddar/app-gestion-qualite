import { Router } from 'express';
import * as MouleController from '../controllers/moule.controller.js';

const router = Router();

router.post('/', MouleController.createMoule);
router.get('/', MouleController.getMoules);
router.get('/:id', MouleController.getMouleById);

export default router;



