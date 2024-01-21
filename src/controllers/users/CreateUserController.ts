import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";


const CreateUserController = async (req: Request, res: Response) => {
    const { name, email, password } = req.body
    await CreateUserService({ name, email, password })
    return res.json({ message: 'Usuário criado com sucesso!' })
}

export default CreateUserController