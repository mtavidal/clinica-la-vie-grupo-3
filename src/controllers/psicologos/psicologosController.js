import { Psicologos as PsicologoRepository } from '../../models/index.js';
import bcrypt from 'bcrypt';

export default class PsicologosController {
    static async findAllPsicologos(request, response) {
        try {
            const allPsicologos = await PsicologoRepository.findAll({
                attributes: {
                    exclude: ['senha'],
                },
            });
            return response.status(200).json({
                message: 'Operação bem sucedida!',
                data: allPsicologos,
            });
        } catch (error) {
            console.log(
                'Erro ao recuperar os registros de psicologos: ',
                error
            );
            return response
                .status(500)
                .json({ message: 'Falha na operação', data: [] });
        }
    }

    static async findPsicologo(request, response) {
        const { id } = request.params;

        try {
            const psicologoBuscado = await PsicologoRepository.findByPk(
                Number(id),
                {
                    attributes: {
                        exclude: ['senha'],
                    },
                }
            );

            if (psicologoBuscado === null) {
                return response.status(404).json({
                    message: 'Falha na operação',
                    data: `Psicologo com ID - ${id} não encontrado.`,
                });
            }

            const authId = request.id;

            if (Number(authId) === Number(id)) {
                return response.status(200).json({
                    message: 'Operação bem sucedida!',
                    data: psicologoBuscado,
                });
            } else {
                return response.status(403).json({
                    message: 'Falha na operação',
                    data: 'Usuário sem acesso a esse psicologo.',
                });
            }
        } catch (error) {
            console.log(
                `Erro ao recuperar o registro de psicologo com id ${id}: `,
                error
            );
            return response
                .status(500)
                .json({ message: 'Falha na operação', data: {} });
        }
    }

    static async addPsicologo(request, response) {
        const { nome, email, senha, apresentacao } = request.body;

        try {
            const uniquePsicologo = await PsicologoRepository.findOne({
                where: { email: email },
            });

            if (uniquePsicologo) {
                return response.status(400).json({
                    message: 'Falha na operação',
                    data: 'O e-mail já está cadastrado',
                });
            }

            const createPsicologo = await PsicologoRepository.create({
                nome: nome,
                email: email,
                senha: bcrypt.hashSync(senha, 8),
                apresentacao: apresentacao,
            });

            return response.status(201).json({
                message: 'Operação bem sucedida!',
                data: createPsicologo,
            });
        } catch (error) {
            console.log('Erro ao criar psicólogo: ', error);

            return response
                .status(500)
                .json({ message: 'Falha na operação', data: {} });
        }
    }

    static async updatePsicologo(request, response) {
        const { id } = request.params;
        const { nome, email, senha, apresentacao } = request.body;

        try {
            const authId = request.id;
            const isIdPsicologoExist = await PsicologoRepository.findByPk(id);

            if (!isIdPsicologoExist) {
                return response.status(404).json({
                    message: 'Falha na operação',
                    data: `Psicologo com ID - ${id} não encontrado.`,
                });
            } else if (Number(authId) === Number(id)) {
                const uniquePsicologo = await PsicologoRepository.findOne({
                    where: { email: email },
                });

                if (uniquePsicologo && id != uniquePsicologo.id) {
                    return response.status(400).json({
                        message: 'Falha na operação',
                        data: 'O e-mail já está cadastrado',
                    });
                }

                await PsicologoRepository.update(
                    {
                        nome: nome,
                        email: email,
                        senha: bcrypt.hashSync(senha, 8),
                        apresentacao: apresentacao,
                    },
                    {
                        where: { id: Number(id) },
                    }
                );
                const psicologoUpdated = await PsicologoRepository.findByPk(
                    id,
                    {
                        attributes: {
                            exclude: ['senha'],
                        },
                    }
                );
                return response.status(200).json({
                    message: 'Operação bem sucedida!',
                    data: psicologoUpdated,
                });
            } else {
                return response.status(403).json({
                    message: 'Falha na operação',
                    data: 'Usuário sem direito de edição desse psicologo.',
                });
            }
        } catch (error) {
            console.log(
                `Erro ao atualizar o registro do psicologo com id ${id}: `,
                error
            );

            return response
                .status(500)
                .json({ message: 'Falha na operação', data: {} });
        }
    }

    static async patchPsicologo(request, response) {
        const { id } = request.params;
        const bodyUpdate = request.body;
        try {
            const isIdPsicologoExist = await PsicologoRepository.findByPk(id);

            if (!isIdPsicologoExist) {
                return response.status(404).json({
                    message: 'Falha na operação',
                    data: `Psicologo com ID - ${id} não encontrado.`,
                });
            }

            if (bodyUpdate.email) {
                const uniquePsicologo = await PsicologoRepository.findOne({
                    where: { email: bodyUpdate.email },
                });

                if (uniquePsicologo === null) {
                    return response.status(404).json({
                        message: 'Falha na operação',
                        data: `Psicologo com ID - ${id} não encontrado.`,
                    });
                }

                if (uniquePsicologo && id != uniquePsicologo.id) {
                    return response.status(400).json({
                        message: 'Falha na operação',
                        data: 'O e-mail já está cadastrado',
                    });
                }
            }

            if (bodyUpdate.senha) {
                bodyUpdate.senha = bcrypt.hashSync(bodyUpdate.senha, 8);
            }

            const authId = request.id;

            if (Number(authId) === Number(id)) {
                await PsicologoRepository.update(bodyUpdate, {
                    where: {
                        id: id,
                    },
                });

                const psicologoUpdated = await PsicologoRepository.findByPk(
                    id,
                    {
                        attributes: {
                            exclude: ['senha'],
                        },
                    }
                );

                return response.status(200).json({
                    message: 'Operação bem sucedida!',
                    data: psicologoUpdated,
                });
            } else {
                return response.status(403).json({
                    message: 'Falha na operação',
                    data: 'Usuário sem direito de edição desse psicologo.',
                });
            }
        } catch (error) {
            console.log(
                `Erro ao atualizar o registro do paciente com id ${id}: `,
                error
            );
            return response
                .status(500)
                .json({ message: 'Falha na operação', data: {} });
        }
    }

    static async deletePsicologo(request, response) {
        const { id } = request.params;

        try {
            const authId = request.id;

            if (Number(authId) === Number(id)) {
                const deleteOk = await PsicologoRepository.destroy({
                    where: {
                        id: id,
                    },
                });
                if (deleteOk == 1) {
                    return response.status(204).send();
                } else {
                    return response.status(404).json({
                        message: 'Falha na operação',
                        data: `Psicologo com ID - ${id} não encontrado.`,
                    });
                }
            } else {
                return response.status(403).json({
                    message: 'Falha na operação',
                    data: 'Usuário sem permissão de exclusão desse psicologo.',
                });
            }
        } catch (error) {
            console.log(
                `Erro ao tentar excluir o registro de psicologo com id ${id}: `,
                error
            );
            return response
                .status(500)
                .json({ message: 'Falha na operação', data: [] });
        }
    }
}
