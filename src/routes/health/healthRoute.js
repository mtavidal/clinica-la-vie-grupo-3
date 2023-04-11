import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    response.json({
        message: 'Operação bem sucedida!',
        data: 'API em funcionamento',
    });
});

export default routes;
