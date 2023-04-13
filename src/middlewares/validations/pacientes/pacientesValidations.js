import { body } from 'express-validator';
import verifyBodyFieldsErros from '../bodyValidations.js';

const pacientesValidations = [ 
    body("nome")
        .exists({ checkFalsy: true })
        .withMessage('Nome não preenchido')
        .bail()
        .isLength({ min: 3 })
        .withMessage('O nome deve ter no mínimo 3 caracteres'),

    body("email")
        .exists({ checkFalsy: true })
        .withMessage('E-mail não preenchido')
        .bail()
        .isEmail()
        .withMessage('E-mail com formato inválido'),

    body("data_nascimento")
        .exists({ checkFalsy: true })
        .withMessage('Nome não preenchido')
        .bail()
        .isDate({ format:'DD/MM/YYYY' })
        .withMessage("Valor inválido. Formato válido: dd/mm/aaaa (Ex: 21/03/1995)"),

    verifyBodyFieldsErros,
    
];

export default pacientesValidations;
