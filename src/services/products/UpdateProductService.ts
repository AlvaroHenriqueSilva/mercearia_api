import Product from "../../models/products/Produto";

interface Product {
    id_produto: number,
    nome_produto: string;
    descricao: string;
    preco_unitario: number;
}
export const UpdateProductService = async ({
    id_produto,
    nome_produto,
    descricao,
    preco_unitario
}: Product) => {

    if (!id_produto) return { error: 'Id produto é requerido!' }
    const product = await Product.update({ id_produto, nome_produto, descricao, preco_unitario }, {

        where: {
            id_produto
        }
    });

    return product
}