import { Request, Response } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";

const CreateProductController = async (req: Request, res: Response) => {

    const { nome_produto, descricao, preco_unitario } = req.body
    const product = await CreateProductService({ nome_produto, descricao, preco_unitario })
    return res.json(product) 
}

export default CreateProductController;