import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

const CreateProductController = async (req: Request, res: Response) => {
    const id_usuario = +req.user_id
    const { nome_produto, descricao, preco_unitario } = req.body
    const product = await CreateProductService({ nome_produto, descricao, preco_unitario, id_usuario })
    return res.json({ message: 'Produto criado com sucesso!' })
}

export default CreateProductController;