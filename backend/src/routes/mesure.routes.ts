import { Router } from 'express';
import * as MesureController from '../controllers/mesure.controller.js';

const router = Router();

// POST /api/mesures
router.post('/', MesureController.createMesure)

// POST /api/mesures/:id for updating an existing mesure
router.patch('/:id', MesureController.updateMesure)

// GET /api/mesures
router.get ('/', MesureController.getMesures) 

export default router
