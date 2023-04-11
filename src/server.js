import express from 'express';
import db from './db/db.js';
import routes from './routes/index.js';

const app = express();
const port = 3333;

app.use(express.json());
routes(app);

try {
    await db.sync({ alter: true, force: false });
    //coloquei o force, pois após alguns testes,
    // pode dar o erro ('Too many keys specified; max 64 keys allowed), aí coloquei o force
    //como true e resolve
    console.log('A conexão com banco de dados bem sucedida.');

    app.listen(port, () => {
        console.log(`Servidor iniciado na porta ${port}`);
    });
} catch (error) {
    console.log('Não foi possível se conectar com banco de dados', error);
    process.exit(1);
}
