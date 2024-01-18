import Produto from "../../models/Produto";


export const DeleteProductService = async ({ id_produto }: { id_produto: number }) => {
    if (!id_produto) return {error: 'Id produto é requerido!'  }

    const product = await Produto.destroy({
        where: {
            id_produto
        }
      });
    return product;
}