import { body } from 'express-validator';
import verifyBodyFieldsErros from '../bodyValidations.js';

const authValidations = [
    body('email')
        .exists({ checkFalsy: true })
        .withMessage('E-mail não preenchido')
        .bail()
        .isEmail()
        .withMessage('E-mail com formato inválido'),
    body('senha')
        .exists({ checkFalsy: true })
        .withMessage('Senha não preenchido'),
    verifyBodyFieldsErros,
];

export default authValidations;
