import express from 'express';
import { createMesureForMoule } from '../controllers/mesure.controller.js';
const router = express.Router();
// POST /api/mesures
router.post('/', createMesureForMoule);
export default router;
//# sourceMappingURL=mesure.routes.js.map