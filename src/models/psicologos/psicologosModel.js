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
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true,
        },
        senha: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        apresentacao: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
    },
    {
        hooks: {
            afterCreate: (record) => {
                delete record.dataValues.senha;
            },
        },
    },
    {
        tableName: 'psicologos',
    }
);

export default psicologo;
