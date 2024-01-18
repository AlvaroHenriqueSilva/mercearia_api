import Product from "../../models/products/Produto";

export const AllProductsService = async () => {

    const product = await Product.findAll({ raw: true });
    return product;
}