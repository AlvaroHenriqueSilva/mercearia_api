import { Request, Response } from "express";
import { ListProductService } from "../../services/products/ListProductService";

const ListProductController = async (req: Request, res: Response) => {

    const id_produto = +req.params.id
    const product = await ListProductService({ id_produto })
    return res.json(product) 
}

export default ListProductController;