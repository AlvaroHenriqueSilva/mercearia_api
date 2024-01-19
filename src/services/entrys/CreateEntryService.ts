import EntradaEstoque from "../../models/EntradaEstoque";

interface Entry {
    id_produto: number;
    quantidade: number;
}

export const CreateEntryService = async ({ id_produto, quantidade }: Entry) => {

    const entry = await EntradaEstoque.create({ quantidade, id_produto })
    return entry
}