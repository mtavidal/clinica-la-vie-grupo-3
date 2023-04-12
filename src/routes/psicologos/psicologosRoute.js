import express from 'express';
import {
    psicologosValidationsBody,
    psicologosValidationsBodyPost,
    psicologosValidationsBodyPut,
    psicologosValidationsParam,
} from '../../middlewares/validations/psicologos/psicologosValidations.js';
import PsicologosController from '../../controllers/psicologos/psicologosController.js';
import verifyToken from '../../middlewares/auth/verifyToken.js';

const routes = express.Router();

routes.get('/', PsicologosController.findAllPsicologos);
routes.get(
    '/:id',
    psicologosValidationsParam,
    PsicologosController.findPsicologo
);
routes.post(
    '/',
    psicologosValidationsBody,
    psicologosValidationsBodyPost,
    PsicologosController.addPsicologo
);
routes.put(
    '/:id',
    verifyToken,
    psicologosValidationsBody,
    psicologosValidationsBodyPut,
    PsicologosController.updatePsicologo
);
routes.delete(
    '/:id',
    verifyToken,
    psicologosValidationsParam,
    PsicologosController.deletePsicologo
);

export default routes;
