import { Sequelize } from 'sequelize';
import db from '../../db/db.js';

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
    },
    {
        tableName: 'atendimentos',
    }
);

// atendimento.associate = function (models) {
//     atendimento.belongsTo(models.psicologo, {
//         foreignKey: 'psicologo_id',
//     });
//     atendimento.belongsTo(models.paciente, {
//         foreignKey: 'paciente_id',
//     });
// };

export default atendimento;
