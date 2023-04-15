import { body } from 'express-validator';
import verifyBodyFieldsErros from '../bodyValidations.js';

const atendimentosValidations = [ 
    body("paciente_id")
        .exists({ checkFalsy: true })
        .withMessage('Id do paciente não preenchido'),

    body("data_atendimento")
        .exists({ checkFalsy: true })
        .withMessage('Data atendimento não preenchida')
        .bail()
        .isISO8601()
        .withMessage("Formato de data inválido. Formato válido: aaaa-mm-dd hh:mm:ss (Ex.: 2038-01-19T03:14:07z)")
        .isAfter((new Date()).toISOString())
        .withMessage("A data precisa ser no futuro, depois da data atual."),

    body("observacao")
        .exists({ checkFalsy: true })
        .withMessage('Observação não preenchida')
        .bail()
        .isLength({ min: 10 })
        .withMessage('A observação deve ter no mínimo 10 caracteres'),
    
    verifyBodyFieldsErros,
    
];

export default atendimentosValidations;
