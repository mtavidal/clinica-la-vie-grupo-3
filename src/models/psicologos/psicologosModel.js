import { Sequelize } from 'sequelize';
import db from '../../config/database.js';
import bcrypt from 'bcrypt';

const psicologo = db.define(
    'psicologo',
    {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nome: {
            type: Sequelize.STRING(60),
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'O preenchimento do nome é obrigatório',
                },
                notEmpty: {
                    args: true,
                    msg: 'O preenchimento do nome é obrigatório',
                },
                len: {
                    args: [3, 60],
                    msg: 'O nome deve ter mais de 3 caracteres',
                },
            },
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true,
            unique: {
                args: true,
                name: 'email',
                msg: 'O e-mail já está cadastrado',
            },
            validate: {
                notNull: {
                    args: true,
                    msg: 'O preenchimento do e-mail é obrigatório',
                },
                notEmpty: {
                    args: true,
                    msg: 'O preenchimento do e-mail é obrigatório',
                },
                isEmail: {
                    args: true,
                    msg: 'Dados do tipo e-mail inválidos',
                },
            },
        },
        senha: {
            type: Sequelize.STRING(100),
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'O preenchimento do senha é obrigatório',
                },
                notEmpty: {
                    args: true,
                    msg: 'O preenchimento da senha é obrigatório',
                },
                min: {
                    args: [6],
                    msg: 'A senha deve ter mais de 6 caracteres',
                },
            },
        },
        apresentacao: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'O preenchimento da apresentação é obrigatório',
                },
                notEmpty: {
                    args: true,
                    msg: 'O preenchimento da apresentação é obrigatório',
                },
                min: {
                    args: [20],
                    msg: 'A apresentação deve ter mais de 20 caracteres',
                },
            },
        },
    },
    {
        hooks: {
            afterCreate: (record) => {
                delete record.dataValues.senha;
            },
            afterUpdate: (record) => {
                delete record.dataValues.senha;
            },
        },
    },
    {
        tableName: 'psicologos',
    }
);

export default psicologo;
