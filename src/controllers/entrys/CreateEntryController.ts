import { Request, Response } from "express"
import { CreateEntryService } from "../../services/entrys/CreateEntryService"

const CreateEntryController = async (req: Request, res: Response) => {
    const id_produto = +req.params.id
    const { quantidade } = req.body
    const entry = await CreateEntryService({ id_produto, quantidade })
    return res.json({ message: 'Entrada feita com sucesso!' })
} 

export default CreateEntryController