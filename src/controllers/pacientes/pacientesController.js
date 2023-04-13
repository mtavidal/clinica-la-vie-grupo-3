import { Pacientes as PacienteRepository } from '../../models/index.js';
import { ValidationError } from 'sequelize';

export default class PacientesController {
    static async findAllPacientes(request, response) {
        try {
            const pacientes = await PacienteRepository.findAll();
            return response
                .status(200)
                .json({ message: 'Operação bem sucedida!', data: pacientes });
        } catch (error) {
            console.log('Erro ao recuperar os registros de pacientes: ', error);
            return response
                .status(500)
                .json({ message: 'Falha na operação', data: [] });
        }
    }

    static async findPaciente(request, response) {
        const { id } = request.params;
        try {
            const pacienteBuscado = await PacienteRepository.findByPk(id);
            if (pacienteBuscado === null) {
                return response.status(404).json({
                    message: `Paciente com ID - ${id} não encontrado.`,
                });
            } else {
                return response.status(200).json({
                    message: 'Operação bem sucedida!',
                    data: pacienteBuscado,
                });
            }
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

    static async addPaciente(request, response) {
        try {
            const arrayIdade = request.body.data_nascimento.split('/');
            const pacienteCreated = await PacienteRepository.create({
                nome: request.body.nome,
                email: request.body.email,
                data_nascimento: new Date(
                    arrayIdade[2],
                    arrayIdade[1] - 1,
                    arrayIdade[0]
                ),
            });
            return response.status(201).json({
                message: 'Operação bem sucedida!',
                data: pacienteCreated,
            });
        } catch (error) {
            if (error instanceof ValidationError) {
                console.log(
                    'Erro de validação ao criar o registro do paciente: ',
                    error
                );
                return response.status(400).json({
                    message: 'Erro na requisição',
                    error: error.errors.map(function (e) {
                        return e.message;
                    }),
                });
            } else {
                console.log('Erro ao criar paciente: ', error);
                return response
                    .status(500)
                    .json({ message: 'Falha na operação', data: {} });
            }
        }
    }

    static async uptadePaciente(request, response) {
        const { id } = request.params;
        try {
            const arrayIdade = request.body.data_nascimento.split('/');
            const bodyUpdate = {
                nome:
                    request.body.nome === undefined ? null : request.body.nome,
                email:
                    request.body.email === undefined
                        ? null
                        : request.body.email,
                data_nascimento:
                    request.body.data_nascimento === undefined
                        ? null
                        : new Date(
                              arrayIdade[2],
                              arrayIdade[1] - 1,
                              arrayIdade[0]
                          ),
            };
            const updateOk = await PacienteRepository.update(bodyUpdate, {
                where: {
                    id: id,
                },
            });
            if (updateOk == 1) {
                const pacienteUpdated = await PacienteRepository.findByPk(id);
                return response.status(200).json({
                    message: 'Operação bem sucedida!',
                    data: pacienteUpdated,
                });
            } else {
                return response.status(404).json({
                    message: `Paciente com ID - ${id} não encontrado.`,
                });
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                console.log(
                    'Erro de validação ao atualizar o paciente: ',
                    error
                );
                return response.status(400).json({
                    message: 'Erro na requisição',
                    error: error.errors.map(function (e) {
                        return e.message;
                    }),
                });
            } else {
                console.log(
                    `Erro ao atualizar o registro do paciente com id ${id}: `,
                    error
                );
                return response
                    .status(500)
                    .json({ message: 'Falha na operação', data: {} });
            }
        }
    }

    static async deletePaciente(request, response) {
        const { id } = request.params;
        try {
            const deleteOk = await PacienteRepository.destroy({
                where: {
                    id: id,
                },
            });
            if (deleteOk == 1) {
                return response.status(204).send();
            } else {
                return response.status(404).json({
                    message: `Paciente com ID - ${id} não encontrado.`,
                });
            }
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
