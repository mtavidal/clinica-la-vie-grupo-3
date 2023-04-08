import express from 'express';
import db from './db/db.js';
import routes from './routes/index.js';

const app = express();
const port = 3333;

app.use(express.json());
routes(app);

try {
    await db.sync({ alter: true });
    console.log('A conexão com banco de dados bem sucedida.');

    app.listen(port, () => {
        console.log(`Servidor iniciado na porta ${port}`);
    });
} catch (error) {
    console.log('Não foi possível se conectar com banco de dados', error);
    process.exit(1);
}
