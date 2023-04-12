import { body } from 'express-validator';
import verifyBodyFieldsErros from '../bodyValidations.js';

const psicologosValidations = [
    body('senha')
        .exists({ checkFalsy: true })
        .withMessage('Senha não preenchido')
        .bail()
        .isLength({ min: 6 })
        .withMessage('Senha deve ter mais de 6 caracteres'),
    verifyBodyFieldsErros,
];

export default psicologosValidations;
