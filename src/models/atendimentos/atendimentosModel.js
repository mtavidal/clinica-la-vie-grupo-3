import { Sequelize } from 'sequelize';
import db from '../../db/db.js';
import Psicologos from '../psicologos/psicologosModel.js';
import Pacientes from '../pacientes/pacientesModel.js';

const atendimento = db.define(
    'atendimento',
    {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        data_atendimento: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Obrigatório',
                },
                isDate: {
                    args: true,
                    msg: 'Dados do tipo data inválidos. Ex.: 2038-01-19 03:14:07',
                },
                isAfter: {
                    args: new Intl.DateTimeFormat('pt-BR', {
                        timeZone: 'America/Sao_Paulo',
                        dateStyle: 'short',
                        hour12: false,
                        timeStyle: 'medium',
                    })
                        .format(new Date(Date.now()))
                        .split(',')
                        .join(''),
                    msg: 'Data tem que ser posterior agora',
                },
            },
        },
        observacao: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Obrigatório',
                },
                min: {
                    args: [20],
                    msg: 'A observação deve ter mais de 20 caracteres',
                },
            },
        },
        psicologo_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            references: {
                model: Psicologos,
                key: 'id',
            },
            allowNull: false,
        },
        paciente_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            references: {
                model: Pacientes,
                key: 'id',
            },
            allowNull: false,
        },
    },
    {
        tableName: 'atendimentos',
    }
);

export default atendimento;
