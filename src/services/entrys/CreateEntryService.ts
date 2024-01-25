import EntradaEstoque from "../../models/EntradaEstoque";

interface Entry {
    id_produto: number;
    quantidade: number;
}

export const CreateEntryService = async ({ id_produto, quantidade }: Entry) => {
    if (!id_produto) return { error: 'Id produto é requerido' }
    if (!quantidade || quantidade === 0.00) return { error: 'Quantidade é requerido' }

    const entry = await EntradaEstoque.create({  id_produto, quantidade })
    return entry
}