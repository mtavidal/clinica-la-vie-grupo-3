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
            return response.status(200).json(allPsicologos);
        } catch (error) {
            console.log('Erro ao recuperar os registros de pacientes: ', error);
            return response
                .status(500)
                .json({ message: 'Falha na operação', data: [] });
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

            return response.status(200).json(onePsicologo);
        } catch (error) {
            console.log(
                `Erro ao recuperar o registro de paciente com id ${id}: `,
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
            const createPsicologo = await PsicologoRepository.create({
                nome: nome,
                email: email,
                senha: bcrypt.hashSync(senha, 8),
                apresentacao: apresentacao,
            });

            return response.status(201).json(createPsicologo);
        } catch (error) {
            console.log('Erro ao criar paciente: ', error);

            return response
                .status(500)
                .json({ message: 'Falha na operação', data: {} });
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
            console.log(
                `Erro ao tentar excluir o registro de paciente com id ${id}: `,
                error
            );
            return response
                .status(500)
                .json({ message: 'Falha na operação', data: [] });
        }
    }
}
