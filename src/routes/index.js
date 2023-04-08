import health from './health/healthRoute.js';
import psicologos from './psicologos/psicologosRoute.js';
import pacientes from './pacientes/pacientesRoute.js';

export default (app) => {
    app.use(health);
    app.use(psicologos);
    app.use(pacientes);
};
