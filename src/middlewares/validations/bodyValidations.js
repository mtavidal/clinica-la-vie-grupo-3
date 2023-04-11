import { validationResult } from 'express-validator';

export default function verifyBodyFieldsErros(request, response, next) {
    const erros = validationResult(request);

    if (!erros.isEmpty) {
        return response.status(400).json({
            message: 'Falha na operação',
            data: erros.array(),
        });
    }
}
