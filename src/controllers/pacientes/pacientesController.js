import paciente from '../../models/pacientes/pacientesModel.js';

export default class PacientesController {
    static async findAllPacientes(request, response) {
        try {
            const pacientes = await paciente.findAll(
                //     {
                //     include: "news",
                //     attributes: {
                //         exclude: ["password"],
                //     },
                // }
            );
            response
                .status(200)
                .json({ message: "Operação bem sucedida!", data: pacientes });
        } catch (error) {
            console.log("Erro ao recuperar os registros de pacientes: ", error);
            response
                .status(500)
                .json({ message: "Falha na operação", data: [] });
        }
    }

    static async findPaciente(request, response) {
        const {id} = request.params;
        try {
            const pacienteBuscado = await paciente.findByPk(id,
                // {
                //     include: "news",
                //     attributes: {
                //         exclude: ["password"],
                //     },
                // }
            );
            response
                .status(200)
                .json({ message: "Operação bem sucedida!", data: pacienteBuscado });
        } catch (error) {
            console.log(`Erro ao recuperar o registro de paciente com id ${id}: `, error);
            response
                .status(500)
                .json({ message: "Falha na operação", data: {} });
        }
    }

    static async addPaciente(request, response) {
        try {
            const pacienteCreated = await paciente.create(
                {
                    nome: request.body.nome,
                    email: request.body.email,
                    idade: request.body.idade
                }
                // {
                //     include: "news",
                //     attributes: {
                //         exclude: ["password"],
                //     },
                // }
            );
            response
                .status(201)
                .json({ message: "Operação bem sucedida!", data: pacienteCreated });
        } catch (error) {
            console.log("Erro ao criar paciente: ", error);
            response
                .status(500)
                .json({ message: "Falha na operação", data: {} });
        }
    }

    static async uptadePaciente(request, response) {
        const {id} = request.params;
        try {
            await paciente.update({
                nome: request.body.nome,
                email: request.body.email,
                idade: request.body.idade,
            },
                {
                    where: {
                        id: id,
                    },
                });
            const pacienteUpdated = await paciente.findByPk(id,
                // {
                //     include: "news",
                //     attributes: {
                //         exclude: ["password"],
                //     },
                // }
                );
            response
                .status(200)
                .json({ message: "Operação bem sucedida!", data: pacienteUpdated });
        } catch (error) {
            console.log(`Erro ao atualizar o paciente com id ${id}: `, error);
            response
                .status(500)
                .json({ message: "Falha na operação", data: {} });
        }
    }

    static async deletePaciente(request, response) {
        const {id} = request.params;
        try {
            await paciente.destroy({
                where: {
                    id: id,
                },
            });
            response
                .status(204);
        } catch (error) {
            console.log(`Erro ao tentar excluir o registro de paciente com id ${id}: `, error);
            response
                .status(500)
                .json({ message: "Falha na operação", data: [] });
        }
    }

}
