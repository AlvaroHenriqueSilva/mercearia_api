import { Request, Response } from "express";
import { DeleteProductService } from "../../services/products/DeleteProductService";

const DeleteProductController = async (req: Request, res: Response) => {

    const id_produto = +req.params.id
    const product = await DeleteProductService({ id_produto })
    return res.json({ message: 'Produto excluido com sucesso!' })
}

export default DeleteProductController;