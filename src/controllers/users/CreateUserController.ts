import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";


const CreateUserController = async (req: Request, res: Response) => {
    const { nome, email, password } = req.body
    await CreateUserService({ nome, email, password })
    return res.json({ message: 'Usuário criado com sucesso!' })
}

export default CreateUserController