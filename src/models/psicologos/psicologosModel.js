import { Sequelize } from 'sequelize';
import db from '../../db/db.js';

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
                notEmpty: {
                    args: true,
                    msg: 'Obrigatório',
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
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Obrigatório',
                },
                isEmail: {
                    args: true,
                    msg: 'Dados do tipo e-mail inválidos',
                },
            },
        },
        senha: {
            type: Sequelize.CHAR(64),
            allowNull: false,
            validate: {
                is: /^[0-9a-f]{64}$/i,
            },
        },
        apresentacao: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Obrigatório',
                },
                min: {
                    args: [20],
                    msg: 'A apresentação deve ter mais de 20 caracteres',
                },
            },
        },
    },
    {
        tableName: 'psicologos',
    }
);

psicologo.associate = function (models) {
    psicologo.hasMany(models.atendimento, {
        foreignKey: 'psicologo_id',
    });
};

export default psicologo;
