'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'pacientes',
            [
                {
                    nome: 'João da Silva',
                    email: 'joao.silva@email.com',
                    idade: '1985-03-15',
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
                    nome: 'Maria dos Santos',
                    email: 'maria.santos@email.com',
                    idade: '1990-08-21',
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
                    nome: 'Pedro Souza',
                    email: 'pedro.souza@email.com',
                    idade: '1978-11-07',
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
                    nome: 'Ana Clara Pereira',
                    email: 'anaclara.pereira@email.com',
                    idade: '2001-02-28',
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
                    nome: 'Lucas Rodrigues',
                    email: 'lucas.rodrigues@email.com',
                    idade: '1995-06-12',
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
        await queryInterface.bulkDelete('pacientes', null, {});
    },
};
