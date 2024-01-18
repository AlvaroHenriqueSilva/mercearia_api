import { Request, Response } from "express";
import { AllProductsService } from "../../services/products/AllProductsService";

const AllProductsController = async (req: Request, res: Response) => {

    const product = await AllProductsService()
    return res.json(product) 
}

export default AllProductsController;