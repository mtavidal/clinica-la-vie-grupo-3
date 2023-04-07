import { Router } from 'express';
import PsicologosController from '../../controllers/psicologos/psicologosController.js';

const router = Router();

router.get('/psicologos', PsicologosController.findAllPsicologos);

export default router;
