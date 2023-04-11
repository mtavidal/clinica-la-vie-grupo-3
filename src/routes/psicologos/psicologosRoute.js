import { Router } from 'express';
import { PsicologosController } from '../../controllers/psicologos/psicologosController.js';
import verifyToken from '../../middlewares/auth/verifyToken.js';

const router = Router();

router
    .get('/psicologos', verifyToken, PsicologosController.findAllPsicologos)
    .get('/psicologos/:id', PsicologosController.findPsicologo)
    .post('/psicologos', PsicologosController.addPsicologo)
    .put('/psicologos/:id', PsicologosController.updatePsicologo)
    .delete('/psicologos/:id', PsicologosController.deletePsicologo);

export default router;
