import Product from "../../models/products/Produto";

interface Product {
    nome_produto: string;
    descricao: string;
    preco_unitario: number;
}

export const CreateProductService = async ({nome_produto, descricao, preco_unitario}: Product) => {

    const product = await Product.create({ nome_produto, descricao, preco_unitario })
    return product;
}