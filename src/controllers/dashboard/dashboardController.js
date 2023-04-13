import {
    Pacientes as PacienteRepository,
    Psicologos as PsicologoRepository,
    Atendimentos as AtendimentoRepository,
} from '../../models/index.js';

export default class DashboardController {
    static async findTotalPacientes(request, response) {
        try {
            const totalPacientes = await PacienteRepository.count();
            response.status(200).json({
                message: 'Operação bem sucedida!',
                Total_Pacientes: totalPacientes,
            });
        } catch (error) {
            console.log('Erro ao recuperar o total de pacientes: ', error);
            response
                .status(500)
                .json({ message: 'Falha na operação', data: [] });
        }
    }

    static async findTotalPsicologos(request, response) {
        try {
            const totalPsicologos = await PsicologoRepository.count();
            response.status(200).json({
                message: 'Operação bem sucedida!',
                total_Psicologos: totalPsicologos,
            });
        } catch (error) {
            console.log('Erro ao recuperar o total de psicologos: ', error);
            response
                .status(500)
                .json({ message: 'Falha na operação', data: [] });
        }
    }
    static async findTotalAtendimentos(request, response) {
        try {
            const totalAtentimentos = await AtendimentoRepository.count();
            response
                .status(200)
                .json({ message: "Operação bem sucedida!", total_Atendimentos: totalAtentimentos });
        } catch (error) {
            console.log("Erro ao recuperar o total de atendimentos: ", error);
            response
                .status(500)
                .json({ message: "Falha na operação", data: [] });
        }
    }

    static async findMediaAtendimento(request, response) {
        try {
            const totalPsicologos = await PsicologoRepository.count();
            const totalAtentimentos = await AtendimentoRepository.count();
            let media = totalAtentimentos/totalPsicologos;
            media = media || 0;
            response
                .status(200)
                .json({ message: "Operação bem sucedida!", media_Atendimentos_Por_Psicologos: media.toFixed(1) });
        } catch (error) {
            console.log("Erro ao recuperar a média de atendimentos por psicólogo: ", error);
            response
                .status(500)
                .json({ message: "Falha na operação", data: [] });
        }
    }
}
