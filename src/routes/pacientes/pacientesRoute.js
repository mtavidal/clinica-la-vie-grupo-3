import express from 'express';
import PacientesController from '../../controllers/pacientes/pacientesController.js';

import verifyToken from '../../middlewares/auth/verifyToken.js';
import pacientesValidations from '../../middlewares/validations/pacientes/pacientesValidations.js';

const routes = express.Router();

routes.get('/', PacientesController.findAllPacientes);
routes.get('/:id', verifyToken, PacientesController.findPaciente);
routes.post('/', pacientesValidations, PacientesController.addPaciente);
routes.put('/:id', pacientesValidations, verifyToken, PacientesController.uptadePaciente);
routes.delete('/:id', verifyToken, PacientesController.deletePaciente);

export default routes;
