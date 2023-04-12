import express from 'express';
import authValidations from '../../middlewares/validations/auth/authValidations.js';
import AuthController from '../../controllers/auth/authController.js';

const routes = express.Router();

routes.post('/', authValidations, AuthController.login);

export default routes;
