import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const jwtsecret = process.env.JWT_SECRET;

export default function verifyToken(request, response, next) {
    const token = request.headers['authorization'].split(' ')[1];

    if (!token) {
        return response.status(403).json({
            message: 'Falha na operação',
            data: 'Nenhum token informado',
        });
    }

    jwt.verify(token, jwtsecret, function (error, decoded) {
        if (error) {
            return response.status(401).json({
                message: 'Falha na operação',
                data: 'Não foi possível autenticar o token enviado',
            });
        }

        request.id = decoded.id;
        next();
    });
}

// const auth = jwt({
//     secret: process.env.JWT_SECRET,
//     algorithms: ['HS256'],
// });

//export default auth;
