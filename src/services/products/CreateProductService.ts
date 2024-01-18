import Produto from "../../models/Produto";

interface Product {
    nome_produto: string;
    descricao: string;
    preco_unitario: number;
}

export const CreateProductService = async ({nome_produto, descricao, preco_unitario}: Product) => {
    if (!nome_produto)return  { error: 'Nome do produto é requerido!' }
    if (!descricao) return { error: 'Descrição é requerido!' }
    if (!preco_unitario) { error: 'Preco é requerido!' }

    const product = await Produto.create({ nome_produto, descricao, preco_unitario })
    return product;
}