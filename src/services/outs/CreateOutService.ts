import SaidaEstoque from "../../models/SaidaEstoque"

interface Out {
    id_produto: number;
    quantidade: number;
}

export const CreateOutService = async ({ id_produto, quantidade }: Out) => {
    if (!id_produto) return { error: 'Id produto é requerido' }
    if (!quantidade || quantidade === 0.00) return { error: 'Quantidade é requerido' }
    
    const outs = await SaidaEstoque.create({ id_produto, quantidade }) 
    return outs   
}