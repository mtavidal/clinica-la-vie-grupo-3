'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'atendimentos',
            [
                {
                    data_atendimento: '2023-05-01 09:00:00',
                    observacao: 'Consulta de rotina',
                    psicologo_id: 1,
                    paciente_id: 5,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-01 10:00:00',
                    observacao: 'Consulta para tratar ansiedade',
                    psicologo_id: 2,
                    paciente_id: 4,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-02 11:00:00',
                    observacao: 'Consulta para tratar depressão',
                    psicologo_id: 3,
                    paciente_id: 1,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-02 12:00:00',
                    observacao: 'Consulta para tratar fobia social',
                    psicologo_id: 4,
                    paciente_id: 2,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-03 13:00:00',
                    observacao: 'Consulta para tratar transtorno bipolar',
                    psicologo_id: 5,
                    paciente_id: 3,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-03 14:00:00',
                    observacao: 'Consulta para tratar estresse',
                    psicologo_id: 5,
                    paciente_id: 1,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-04 15:00:00',
                    observacao:
                        'Consulta para tratar transtorno obsessivo-compulsivo',
                    psicologo_id: 3,
                    paciente_id: 2,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-04 16:00:00',
                    observacao: 'Consulta para tratar insônia',
                    psicologo_id: 4,
                    paciente_id: 3,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-05 17:00:00',
                    observacao: 'Consulta para tratar transtorno alimentar',
                    psicologo_id: 2,
                    paciente_id: 4,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-05 18:00:00',
                    observacao: 'Consulta para tratar traumas',
                    psicologo_id: 1,
                    paciente_id: 5,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-06 09:00:00',
                    observacao: 'Consulta para tratar ansiedade',
                    psicologo_id: 1,
                    paciente_id: 3,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-06 10:00:00',
                    observacao: 'Consulta para tratar depressão',
                    psicologo_id: 2,
                    paciente_id: 4,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-07 11:00:00',
                    observacao: 'Consulta para tratar fobia social',
                    psicologo_id: 3,
                    paciente_id: 5,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-07 12:00:00',
                    observacao: 'Consulta para tratar transtorno bipolar',
                    psicologo_id: 4,
                    paciente_id: 2,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-08 13:00:00',
                    observacao: 'Consulta para tratar estresse',
                    psicologo_id: 5,
                    paciente_id: 1,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-08 14:00:00',
                    observacao:
                        'Consulta para tratar transtorno obsessivo-compulsivo',
                    psicologo_id: 2,
                    paciente_id: 3,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-09 15:00:00',
                    observacao: 'Consulta para tratar insônia',
                    psicologo_id: 2,
                    paciente_id: 5,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-09 16:00:00',
                    observacao: 'Consulta para tratar transtorno alimentar',
                    psicologo_id: 5,
                    paciente_id: 3,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-10 17:00:00',
                    observacao: 'Consulta para tratar traumas',
                    psicologo_id: 2,
                    paciente_id: 4,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
                {
                    data_atendimento: '2023-05-10 18:00:00',
                    observacao: 'Consulta de rotina',
                    psicologo_id: 5,
                    paciente_id: 2,
                    createdAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                    updatedAt: new Date()
                        .toISOString()
                        .slice(0, 19)
                        .replace('T', ' '),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('atendimentos', null, {});
    },
};
