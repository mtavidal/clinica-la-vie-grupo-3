import express from 'express';
import psicologosValidations from '../../middlewares/validations/psicologos/psicologosValidations.js';
import PsicologosController from '../../controllers/psicologos/psicologosController.js';
import verifyToken from '../../middlewares/auth/verifyToken.js';

const routes = express.Router();

routes.get('/', PsicologosController.findAllPsicologos);
routes.get('/:id', PsicologosController.findPsicologo);
routes.post(
    '/',
    verifyToken,
    psicologosValidations,
    PsicologosController.addPsicologo
);
routes.put('/:id', verifyToken, PsicologosController.updatePsicologo);
routes.delete('/:id', verifyToken, PsicologosController.deletePsicologo);

export default routes;
