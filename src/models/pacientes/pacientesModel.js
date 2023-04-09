import { Sequelize } from 'sequelize';
import db from '../../db/db.js';

const paciente = db.define(
    "paciente",
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
                    msg: 'O campo nome é obrigatório.',
                },
                notNull: {
                    args: true,
                    msg: 'O campo nome é obrigatório.',
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
                    msg: 'O campo email é obrigatório.',
                },
                notNull: {
                    args: true,
                    msg: 'O campo email é obrigatório.',
                },
                isEmail: {
                    args: true,
                    msg: 'Dados do tipo e-mail inválidos',
                },
            },
        },
        idade: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'O campo idade é obrigatório.',
                },
                notNull: {
                    args: true,
                    msg: 'O campo idade é obrigatório.',
                },
                isDate: {
                    args: true,
                    msg: 'Dados do tipo data inválidos. Ex.: 2004-04-31',
                },
            },
        },
    },
    {
        tableName: 'pacientes',
    }
);

paciente.associate = function (models) {
    paciente.hasMany(models.atendimento, {
        foreignKey: 'paciente_id',
    });
};

export default paciente;
