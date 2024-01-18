import Produto from "../../models/Produto";

export const AllProductsService = async () => {

    const product = await Produto.findAll({ raw: true });
    return product;
}