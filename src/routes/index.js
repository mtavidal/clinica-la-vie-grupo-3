import health from './health/healthRoute.js';
import psicologos from './psicologos/psicologosRoute.js';

export default (app) => {
    app.use(health);
    app.use(psicologos);
};
