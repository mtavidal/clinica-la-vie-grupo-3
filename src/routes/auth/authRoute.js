import { Router } from 'express';
import { AuthController } from '../../controllers/auth/authController.js';

const router = Router();

router.post('/login', AuthController.login);

export default router;
