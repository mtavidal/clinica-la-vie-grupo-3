'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'psicologos',
            [
                {
                    nome: 'João da Silva',
                    email: 'joao.silva@psicologos.com',
                    senha: '$2b$08$i.kqCwdnhlWhCp5krD0eYeqa0CdsbENbY6W90uash/dqzpsHo06Yq',
                    apresentacao:
                        'Sou psicólogo clínico com 5 anos de experiência na área. Trabalho com abordagem cognitivo-comportamental e atendo adolescentes e adultos.',
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
                    email: 'maria.santos@psicologos.com',
                    senha: '$2b$08$i.kqCwdnhlWhCp5krD0eYeqa0CdsbENbY6W90uash/dqzpsHo06Yq',
                    apresentacao:
                        'Atuo na área da psicologia há 10 anos, trabalhando com psicoterapia individual e em grupo. Meu enfoque é na abordagem humanista e existencial.',
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
                    nome: 'Pedro Almeida',
                    email: 'pedro.almeida@psicologos.com',
                    senha: '$2b$08$i.kqCwdnhlWhCp5krD0eYeqa0CdsbENbY6W90uash/dqzpsHo06Yq',
                    apresentacao:
                        'Sou psicólogo clínico e atendo adolescentes e adultos com diversos transtornos emocionais e psicológicos. Utilizo a abordagem psicanalítica em meu trabalho.',
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
                    nome: 'Ana Paula Costa',
                    email: 'ana.costa@psicologos.com',
                    senha: '$2b$08$i.kqCwdnhlWhCp5krD0eYeqa0CdsbENbY6W90uash/dqzpsHo06Yq',
                    apresentacao:
                        'Trabalho como psicóloga há 7 anos, atendendo adolescentes e adultos com problemas de ansiedade e depressão. Utilizo a abordagem cognitivo-comportamental em meu trabalho.',
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
                    nome: 'Ana Silva',
                    email: 'ana.silva@example.com',
                    senha: '$2b$08$i.kqCwdnhlWhCp5krD0eYeqa0CdsbENbY6W90uash/dqzpsHo06Yq',
                    apresentacao:
                        'Psicóloga clínica com mais de 10 anos de experiência na área de saúde mental. Meu trabalho envolve ajudar as pessoas a lidar com os desafios da vida, aperfeiçoar suas habilidades interpessoais e encontrar soluções para problemas emocionais e comportamentais. Atendo adolescentes, adultos e idosos.',
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
        await queryInterface.bulkDelete('psicologos', null, {});
    },
};
