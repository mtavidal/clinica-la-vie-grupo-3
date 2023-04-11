'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('atendimentos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER.UNSIGNED,
            },
            data_atendimento: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            observacao: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            psicologo_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                references: {
                    model: 'psicologos',
                    key: 'id',
                    as: 'psicologo_id',
                },
            },
            paciente_id: {
                type: Sequelize.INTEGER.UNSIGNED,
                references: {
                    model: 'pacientes',
                    key: 'id',
                    as: 'paciente_id',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('atendimentos');
    },
};
