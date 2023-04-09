import { Router } from 'express';
import DashboardController from '../../controllers/dashboard/dashboardController.js';



const router = Router();

router.get('/dashboard/numero-paciente', DashboardController.findTotalPacientes);
router.get('/dashboard/numero-de-psicologos', DashboardController.findTotalPsicologos);
router.get('/dashboard/numero-de-atendimentos', DashboardController.findTotalAtendimentos);
router.get('/dashboard/media-de-atendimentos-por-psicologos', DashboardController.findMediaAtendimento);

export default router;