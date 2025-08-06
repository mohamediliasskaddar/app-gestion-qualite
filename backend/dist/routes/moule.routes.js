import { Router } from 'express';
import * as MouleController from '../controllers/moule.controller.js';
const router = Router();
router.post('/', MouleController.createMoule);
export default router;
//# sourceMappingURL=moule.routes.js.map