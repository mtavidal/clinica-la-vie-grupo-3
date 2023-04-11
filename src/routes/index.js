import express from 'express';
import healthRoute from './health/healthRoute.js';
import loginRoute from './auth/authRoute.js';
import psicologosRoute from './psicologos/psicologosRoute.js';
import pacientesRoute from './pacientes/pacientesRoute.js';
import atendimentoRoute from './atendimentos/atendimentosRoute.js';
import dashboardRoute from './dashboard/dashboardRoute.js';

const routes = express.Router();

routes.use('/health', healthRoute);
routes.use('/login', loginRoute);
routes.use('/psicologos', psicologosRoute);
routes.use('/pacientes', pacientesRoute);
routes.use('/atendimentos', atendimentoRoute);
routes.use('/dashboard', dashboardRoute);

export default routes;
