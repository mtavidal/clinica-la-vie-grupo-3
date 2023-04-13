import { validationResult } from 'express-validator';

export default function verifyparmsFieldsErros(request, response, next) {
    const erros = validationResult(request);

    if (!erros.isEmpty()) {
        return response.status(404).json({
            message: 'Falha na operação',
            data: erros.array(),
        });
    }

    next();
}
