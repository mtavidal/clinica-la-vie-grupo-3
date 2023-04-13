import { body, param } from 'express-validator';
import verifyBodyFieldsErros from '../bodyValidations.js';
import verifyparmsFieldsErros from '../parmsValidations.js';
import { Psicologos as PsicologoRepository } from '../../../models/index.js';

const psicologosValidationsBody = [
    body('nome')
        .exists({ checkFalsy: true })
        .withMessage('Nome não preenchido')
        .bail()
        .isLength({ min: 3 })
        .withMessage('O nome deve ter mais de 3 caracteres'),
    body('email')
        .exists({ checkFalsy: true })
        .withMessage('E-mail não preenchido')
        .bail()
        .isEmail()
        .withMessage('E-mail com formato inválido'),
    body('senha')
        .exists({ checkFalsy: true })
        .withMessage('Senha não preenchido')
        .bail()
        .isLength({ min: 6 })
        .withMessage('Senha deve ter mais de 6 caracteres'),
    body('apresentacao')
        .exists({ checkFalsy: true })
        .withMessage('Apresentação não preenchida')
        .bail()
        .isLength({ min: 20 })
        .withMessage('Apresentação deve ter mais de 20 caracteres'),
    verifyBodyFieldsErros,
];

const psicologosValidationsBodyPatch = [
    body('nome')
        .optional()
        .isLength({ min: 3 })
        .withMessage('O nome deve ter mais de 3 caracteres'),
    body('email')
        .optional()
        .isEmail()
        .withMessage('E-mail com formato inválido'),
    body('senha')
        .optional()
        .isLength({ min: 6 })
        .withMessage('Senha deve ter mais de 6 caracteres'),
    body('apresentacao')
        .optional()
        .isLength({ min: 20 })
        .withMessage('Apresentação deve ter mais de 20 caracteres'),
    verifyBodyFieldsErros,
];

const psicologosValidationsParam = [
    param('id').custom((value) => {
        if (isNaN(value)) {
            return Promise.reject(`Preencha um ID valido`);
        } else {
            return PsicologoRepository.findByPk(Number(value)).then((user) => {
                if (user == null) {
                    return Promise.reject(
                        `Psicólogo com id: ${value} não encontrado`
                    );
                }
            });
        }
    }),
    verifyparmsFieldsErros,
];

export {
    psicologosValidationsBody,
    psicologosValidationsBodyPatch,
    psicologosValidationsParam,
};
