import { body } from 'express-validator';
import verifyBodyFieldsErros from '../bodyValidations.js';

const pacientesValidations = [ 
    body("nome")
        .isString()
        .withMessage("Valor inválido."),

    body("email")
        .isEmail()
        .withMessage("Valor inválido."),

    body("idade")
        .isDate({ format:'DD/MM/YYYY' })
        .withMessage("Valor inválido. Formato válido: dd/mm/aaaa (Ex: 21/03/1995)"),

    verifyBodyFieldsErros,
    
];

export default pacientesValidations;
