import { Request, Response } from "express";
import { UpdateProductService } from "../../services/products/UpdateProductService";

const UpdateProductController = async (req: Request, res: Response) => {

    const { id_produto, nome_produto, descricao, preco_unitario } = req.body
    const product = await UpdateProductService({id_produto,  nome_produto, descricao, preco_unitario })
    return res.json(product) 
}

export default UpdateProductController;