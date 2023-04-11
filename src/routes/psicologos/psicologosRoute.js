import express from 'express';
import PsicologosController from '../../controllers/psicologos/psicologosController.js';
import verifyToken from '../../middlewares/auth/verifyToken.js';

const routes = express.Router();

routes.get('/', verifyToken, PsicologosController.findAllPsicologos);
routes.get('/:id', PsicologosController.findPsicologo);
routes.post('/', PsicologosController.addPsicologo);
routes.put('/:id', PsicologosController.updatePsicologo);
routes.delete('/:id', PsicologosController.deletePsicologo);

export default routes;
