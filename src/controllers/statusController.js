import * as statusModel from "../models/statusModel.js";

export const getAllStatus = async (req, res) => {
    const status = statusModel.findAllStatus();

    res.status(200).json({
        total: status.length,
        mensagem: status === 0
            ? "Não há nenhum status na lista"
            : "Status encontrados na lista",
        status: status
    });
}