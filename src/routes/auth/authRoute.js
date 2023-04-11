import express from 'express';
import AuthController from '../../controllers/auth/authController.js';

const routes = express.Router();

routes.post('/', AuthController.login);

export default routes;
