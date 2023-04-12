import { body } from 'express-validator';
import { Psicologos as PsicologoRepository } from '../../../models/index.js';
import verifyBodyFieldsErros from '../bodyValidations.js';
import bcrypt from 'bcrypt';

const loginValidations = [
    body('email')
        .exists({ checkFalsy: true })
        .withMessage('E-mail não preenchido')
        .bail()
        .isEmail()
        .withMessage('E-mail com formato inválido')
        .bail()
        .custom((value, { req }) => {
            return PsicologoRepository.findOne({
                where: { email: value },
            }).then((user) => {
                if (!user) {
                    return Promise.reject('Usuário não autorizado');
                } else {
                    const passwordIsValid = bcrypt.compareSync(
                        req.body.senha,
                        user.senha
                    );

                    if (!passwordIsValid) {
                        return Promise.reject('Usuário não autorizado');
                    }
                }
            });
        }),
    body('senha')
        .exists({ checkFalsy: true })
        .withMessage('Senha não preenchido'),
    // .bail()
    // .custom((value, { req }) => {
    //     return PsicologoRepository.findOne({
    //         where: { email: req.body.email },
    //     }).then((user) => {
    //         const passwordIsValid = bcrypt.compareSync(value, user.senha);

    //         if (!passwordIsValid) {
    //             return Promise.reject('Usuário não autorizado');
    //         }
    //     });
    // }),
    verifyBodyFieldsErros,
];

export default loginValidations;
