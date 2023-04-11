import {
    Psicologos as PsicologoRepository,
    Pacientes as PacienteRepository,
    Atendimentos as AtendimentoRepository,
} from '../../models/index.js';

export default class AtendimentosController {
    static async findAllAtendimentos(request, response) {
        try {
            const allAtendimentos = await AtendimentoRepository.findAll({
                // include: 'psicologo',
                // include: 'paciente',
                include: [
                    {
                        model: PsicologoRepository,
                        attributes: ['id', 'nome', 'email', 'apresentacao'],
                    },
                    {
                        model: PacienteRepository,
                        attributes: ['id', 'nome', 'email', 'idade'],
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
            response
                .status(500)
                .json({ message: 'Falha na operação', data: [] });
        }
    }
}
