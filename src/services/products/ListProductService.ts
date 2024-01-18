import Produto from "../../models/Produto";

export const ListProductService = async ({id_produto}: {id_produto: number}) => {
    if (!id_produto) return {error: 'Id produto é requerido!'  }

    const product = await Produto.findByPk(id_produto);
    return product;
}