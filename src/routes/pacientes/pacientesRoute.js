import express from 'express';
import PacientesController from '../../controllers/pacientes/pacientesController.js';

const routes = express.Router();

routes.get('/', PacientesController.findAllPacientes);
routes.get('/:id', PacientesController.findPaciente);
routes.post('/', PacientesController.addPaciente);
routes.put('/:id', PacientesController.uptadePaciente);
routes.delete('/:id', PacientesController.deletePaciente);

export default routes;
