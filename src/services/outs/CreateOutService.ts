import SaidaEstoque from "../../models/SaidaEstoque"

interface Out {
    id_produto: number;
    quantidade: number;
}

export const CreateOutService = async ({ id_produto, quantidade }: Out) => {

    const outs = await SaidaEstoque.create({ id_produto, quantidade }) 
    return outs   
}