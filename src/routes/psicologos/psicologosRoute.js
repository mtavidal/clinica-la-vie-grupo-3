import express from 'express';
import {
    psicologosValidationsBody,
    psicologosValidationsBodyPatch,
    psicologosValidationsParam,
} from '../../middlewares/validations/psicologos/psicologosValidations.js';
import PsicologosController from '../../controllers/psicologos/psicologosController.js';
import verifyToken from '../../middlewares/auth/verifyToken.js';

const routes = express.Router();

routes.get('/', PsicologosController.findAllPsicologos);
routes.get(
    '/:id',
    verifyToken,
    psicologosValidationsParam,
    PsicologosController.findPsicologo
);
routes.post('/', psicologosValidationsBody, PsicologosController.addPsicologo);
routes.put(
    '/:id',
    verifyToken,
    psicologosValidationsBody,
    psicologosValidationsParam,
    PsicologosController.updatePsicologo
);
routes.patch(
    '/:id',
    verifyToken,
    psicologosValidationsBodyPatch,
    psicologosValidationsParam,
    PsicologosController.patchPsicologo
);
routes.delete(
    '/:id',
    verifyToken,
    psicologosValidationsParam,
    PsicologosController.deletePsicologo
);

export default routes;
