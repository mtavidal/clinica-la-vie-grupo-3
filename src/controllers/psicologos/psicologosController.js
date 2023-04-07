import psicologo from '../../models/psicologos/psicologosModel.js';

export default class PsicologosController {
    static async findAllPsicologos(request, response) {
        try {
            const allPsicologos = await psicologo.findAll({
                attributes: {
                    exclude: ['senha'],
                },
            });
            return response.status(200).json(allPsicologos);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    // static async findAuthor(req, res) {
    //     const { id } = req.params;

    //     try {
    //         const author = await dbAuthors.findOne({
    //             where: { id: Number(id) },
    //             attributes: {
    //                 exclude: ['senha'],
    //             },
    //         });
    //         return res.status(200).json(author);
    //     } catch (error) {
    //         return res.status(500).json(error.message);
    //     }
    // }

    // static async addAuthors(req, res) {
    //     try {
    //         const createAuthor = await dbAuthors.create({
    //             nome: req.body.nome,
    //             bio: req.body.bio,
    //             indenpendente: req.body.indenpendente,
    //             email: req.body.email,
    //             senha: req.body.senha,
    //         });
    //         return res.status(200).json(createAuthor);
    //     } catch (error) {
    //         return res.status(500).json(error.message);
    //     }
    // }

    // static async updateAuthor(req, res) {
    //     const { id } = req.params;
    //     const newInfos = req.body;

    //     try {
    //         await dbAuthors.update(newInfos, {
    //             where: { id: Number(id) },
    //         });
    //         const authorUpdated = await dbAuthors.findByPk(id);
    //         return res.status(200).json(authorUpdated);
    //     } catch (error) {
    //         return res.status(500).json(error.message);
    //     }
    // }

    // static async deleteAuthor(req, res) {
    //     const { id } = req.params;

    //     try {
    //         await dbAuthors.destroy({
    //             where: { id: Number(id) },
    //         });
    //         return res.status(200).json({
    //             mensagem: `Autor com id: ${id} excluída com sucesso.`,
    //         });
    //     } catch (error) {
    //         return res.status(500).json(error.message);
    //     }
    // }
}
