import { Router } from 'express';
import { PsicologosController } from '../../controllers/psicologos/psicologosController.js';

const router = Router();

router
    .get('/psicologos', PsicologosController.findAllPsicologos)
    .get('/psicologos/:id', PsicologosController.findPsicologo)
    .post('/psicologos/', PsicologosController.addPsicologo)
    .put('/psicologos/:id', PsicologosController.updatePsicologo)
    .delete('/psicologos/:id', PsicologosController.deletePsicologo);

export default router;
