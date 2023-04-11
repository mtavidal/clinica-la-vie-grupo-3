import { Router } from 'express';
import { AtendimentosController } from '../../controllers/atendimentos/atendimentosController.js';
import verifyToken from '../../middlewares/auth/verifyToken.js';

const router = Router();

router.get('/atendimentos', AtendimentosController.findAllAtendimentos);
// .get('/atendimentos/:id', PsicologosController.findPsicologo)
// .post('/atendimentos', PsicologosController.addPsicologo)
// .put('/atendimentos/:id', PsicologosController.updatePsicologo)
// .delete('/atendimentos/:id', PsicologosController.deletePsicologo);

export default router;
