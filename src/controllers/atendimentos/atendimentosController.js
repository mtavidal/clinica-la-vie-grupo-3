import {
    Psicologos as PsicologoRepository,
    Pacientes as PacienteRepository,
    Atendimentos as AtendimentoRepository,
} from '../../models/index.js';

export default class AtendimentosController {
    static async findAllAtendimentos(request, response) {
        try {
            const allAtendimentos = await AtendimentoRepository.findAll({
                include: [
                    {
                        model: PsicologoRepository,
                        attributes: ['id', 'nome', 'email', 'apresentacao'],
                    },
                    {
                        model: PacienteRepository,
                        attributes: ['id', 'nome', 'email', 'data_nascimento'],
                    },
                ],
                attributes: {
                    exclude: ['psicologo_id', 'paciente_id'],
                },
            });
            return response.status(200).json({
                message: 'Operação bem sucedida!',
                data: allAtendimentos,
            });
        } catch (error) {
            console.log(
                'Erro ao recuperar os registros de atendimentos: ',
                error
            );
            return response
                .status(500)
                .json({ message: 'Falha na operação', data: [] });
        }
    }

    static async findAtendimento(request, response) {
        const { id } = request.params;
        try {
            const atendimentoBuscado = await AtendimentoRepository.findByPk(
                id,
                {
                    include: [
                        {
                            model: PsicologoRepository,
                            attributes: ['id', 'nome', 'email', 'apresentacao'],
                        },
                        {
                            model: PacienteRepository,
                            attributes: [
                                'id',
                                'nome',
                                'email',
                                'data_nascimento',
                            ],
                        },
                    ],
                    attributes: {
                        exclude: ['psicologo_id', 'paciente_id'],
                    },
                }
            );

            if (atendimentoBuscado === null) {
                return response.status(404).json({
                    message: 'Falha na operação',
                    data: `Atendimento com ID - ${id} não encontrado.`,
                });
            } else {
                return response.status(200).json({
                    message: 'Operação bem sucedida!',
                    data: atendimentoBuscado,
                });
            }
        } catch (error) {
            console.log(
                `Erro ao recuperar o registro do atendimento com id ${id}: `,
                error
            );
            return response
                .status(500)
                .json({ message: 'Falha na operação', data: {} });
        }
    }

    static async addAtendimento(request, response) {
        const { data_atendimento, observacao, paciente_id } = request.body;
        const authId = request.id;
        try {
            const pacienteBuscado = await PacienteRepository.findByPk(
                paciente_id
            );
            if (pacienteBuscado === null) {
                return response.status(404).json({
                    message: 'Falha na operação',
                    data: `Paciente com ID - ${paciente_id} não encontrado.`,
                });
            } else {
                const createAtendimento = await AtendimentoRepository.create({
                    paciente_id: paciente_id,
                    data_atendimento: data_atendimento,
                    observacao: observacao,
                    psicologo_id: authId,
                });

                const { id } = createAtendimento;
                const exibirAtendimentoCriado =
                    await AtendimentoRepository.findByPk(id, {
                        include: [
                            {
                                model: PsicologoRepository,
                                attributes: [
                                    'id',
                                    'nome',
                                    'email',
                                    'apresentacao',
                                ],
                            },
                            {
                                model: PacienteRepository,
                                attributes: [
                                    'id',
                                    'nome',
                                    'email',
                                    'data_nascimento',
                                ],
                            },
                        ],
                        attributes: {
                            exclude: ['psicologo_id', 'paciente_id'],
                        },
                    });

                return response.status(201).json({
                    message: 'Operação bem sucedida!',
                    data: exibirAtendimentoCriado,
                });
            }
        } catch (error) {
            console.log('Erro ao criar atendimento: ', error);

            return response
                .status(500)
                .json({ message: 'Falha na operação', data: {} });
        }
    }
}
