import { default as PsicologoRepository } from '../../models/psicologos/psicologosModel.js';
import { UniqueConstraintError } from 'sequelize';
import bcrypt from 'bcrypt';

export class PsicologosController {
    static async findAllPsicologos(request, response) {
        try {
            const allPsicologos = await PsicologoRepository.findAll({
                attributes: {
                    exclude: ['senha'],
                },
            });
            return response.status(200).json(allPsicologos);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static async findPsicologo(request, response) {
        const { id } = request.params;

        try {
            const onePsicologo = await PsicologoRepository.findByPk(
                Number(id),
                {
                    attributes: {
                        exclude: ['senha'],
                    },
                }
            );

            if (!onePsicologo)
                return response.status(404).json({
                    message: `Psicólogo com id: ${id} não encontrado`,
                });

            return response.status(200).json(onePsicologo);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static async addPsicologo(request, response) {
        const { nome, email, senha, apresentacao } = request.body;

        try {
            const createPsicologo = await PsicologoRepository.create(
                {
                    nome: nome,
                    email: email,
                    senha: senha === undefined ? '' : bcrypt.hashSync(senha, 8),
                    apresentacao: apresentacao,
                },
                {
                    attributes: {
                        exclude: ['senha'],
                    },
                }
            );

            return response.status(201).json(createPsicologo);
        } catch (error) {
            if (error instanceof UniqueConstraintError) {
                return response.status(400).json({
                    message: error.errors.map((e) => e.message),
                });
            }

            if (error.name === 'UnauthorizedError') {
                console.log('a');
            }

            if (error.name === 'SequelizeValidationError') {
                return response.status(400).json({
                    message: error.errors.map((e) => e.message),
                });
            }

            return response.status(500).json(error.message);
        }
    }

    static async updatePsicologo(request, response) {
        const { id } = request.params;
        const { nome, email, senha, apresentacao } = request.body;

        try {
            await PsicologoRepository.update(
                {
                    nome: nome,
                    email: email,
                    senha: senha === undefined ? '' : bcrypt.hashSync(senha, 8),
                    apresentacao: apresentacao,
                },
                {
                    where: { id: Number(id) },
                }
            );

            if (!nome || !email || !apresentacao)
                return response.status(400).json({
                    message: `É necessario preenhecer nome, e-mail e apresentação`,
                });

            const psicologoUpdated = await PsicologoRepository.findByPk(
                Number(id),
                {
                    attributes: {
                        exclude: ['senha'],
                    },
                }
            );

            return response.status(200).json(psicologoUpdated);
        } catch (error) {
            if (error instanceof UniqueConstraintError) {
                return response.status(400).json({
                    message: error.errors.map((e) => e.message),
                });
            }

            if (error.name === 'SequelizeValidationError') {
                return response.status(400).json({
                    message: error.errors.map((e) => e.message),
                });
            }

            return response.status(500).json(error.message);
        }
    }

    static async deletePsicologo(request, response) {
        const { id } = request.params;

        try {
            const isDeletePsicologo = await PsicologoRepository.destroy({
                where: { id: Number(id) },
            });

            if (!isDeletePsicologo)
                return response.status(404).json({
                    message: `Psicólogo com id: ${id} não encontrado`,
                });

            return response.status(200).json({
                message: `Psicólogo com id: ${id} excluída com sucesso.`,
            });
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }
}
