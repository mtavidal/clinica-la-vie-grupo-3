import { Router } from 'express';
import PacientesController from '../../controllers/pacientes/pacientesController.js';

const router = Router();

router.get('/pacientes', PacientesController.findAllPacientes);
router.get('/pacientes/:id', PacientesController.findPaciente);
router.post('/pacientes', PacientesController.addPaciente);
router.put('/pacientes/:id', PacientesController.uptadePaciente);
router.delete('/pacientes/:id', PacientesController.deletePaciente);

export default router;
