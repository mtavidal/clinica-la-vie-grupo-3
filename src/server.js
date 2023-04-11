import app from './app.js';
import db from './config/database.js';

try {
    await db.sync({ alter: true, force: false });
    // coloquei o force, pois após alguns testes,
    // pode dar o erro ('Too many keys specified; max 64 keys allowed), aí coloquei o force
    // como true e resolve
    console.log('A conexão com banco de dados bem sucedida.');

    app.listen(3333, () => {
        console.log(`Servidor iniciado na porta ${3333}`);
    });
} catch (error) {
    console.log('Não foi possível se conectar com banco de dados', error);
    process.exit(1);
}
