import { Request, Response } from "express";
import { CreateOutService } from "../../services/outs/CreateOutService";

const CreateOutController = async (req: Request, res: Response) => {
    const id_produto = +req.params.id
    const { quantidade } = req.body
    const outs = await CreateOutService({ id_produto, quantidade })
    return res.json(outs)
}

export default CreateOutController;