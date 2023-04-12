import jwt from 'jsonwebtoken';

const jwtsecret = process.env.JWT_SECRET;

export default function verifyToken(request, response, next) {
    const token = request.headers['authorization'];

    if (!token) {
        return response.status(403).json({
            message: 'Falha na operação',
            data: 'Nenhum token informado',
        });
    }

    jwt.verify(token.split(' ')[1], jwtsecret, function (error, decoded) {
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
