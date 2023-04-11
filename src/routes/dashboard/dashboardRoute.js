import express from 'express';
import DashboardController from '../../controllers/dashboard/dashboardController.js';

const routes = express.Router();

routes.get('/numero-paciente', DashboardController.findTotalPacientes);
routes.get('/numero-de-psicologos', DashboardController.findTotalPsicologos);
routes.get(
    '/numero-de-atendimentos',
    DashboardController.findTotalAtendimentos
);
routes.get(
    '/media-de-atendimentos-por-psicologos',
    DashboardController.findMediaAtendimento
);

export default routes;
