import express from 'express';
import loginValidations from '../../middlewares/validations/login/loginValidations.js';
import AuthController from '../../controllers/auth/authController.js';

const routes = express.Router();

routes.post('/', loginValidations, AuthController.login);

export default routes;
