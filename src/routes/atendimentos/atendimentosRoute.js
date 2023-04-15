import express from 'express';
import AtendimentosController from '../../controllers/atendimentos/atendimentosController.js';
import verifyToken from '../../middlewares/auth/verifyToken.js';
import atendimentosValidations from '../../middlewares/validations/atendimentos/atendimentosValidations.js'

const routes = express.Router();

routes.get('/', verifyToken, AtendimentosController.findAllAtendimentos);
routes.get('/:id', verifyToken, AtendimentosController.findAtendimento);
routes.post('/', verifyToken, atendimentosValidations, AtendimentosController.addAtendimento);

export default routes;
