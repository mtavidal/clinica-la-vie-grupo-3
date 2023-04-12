import express from 'express';
import PacientesController from '../../controllers/pacientes/pacientesController.js';
import verifyToken from '../../middlewares/auth/verifyToken.js';

const routes = express.Router();

routes.get('/', PacientesController.findAllPacientes);
routes.get('/:id', PacientesController.findPaciente);
routes.post('/', verifyToken, PacientesController.addPaciente);
routes.put('/:id', verifyToken, PacientesController.uptadePaciente);
routes.delete('/:id', verifyToken, PacientesController.deletePaciente);

export default routes;
