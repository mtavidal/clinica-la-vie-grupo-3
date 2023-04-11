import express from 'express';
import AtendimentosController from '../../controllers/atendimentos/atendimentosController.js';
import verifyToken from '../../middlewares/auth/verifyToken.js';

const routes = express.Router();

routes.get('/', AtendimentosController.findAllAtendimentos);

export default routes;
