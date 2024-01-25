import { hashSync } from "bcryptjs";
import Usuario from "../../models/Usuario";

interface User {
    nome: string,
    email: string,
    password: string,
  
}

export const CreateUserService = async ({ nome, email, password }: User) => {
    if (!nome) return { error: 'Nome é requerido!' }
    if (!email) return { error: 'Email é requerido!' }
    if (!password) return { error: 'Password é requerido!' }
   
    const passwordHash = hashSync(password, 8)
    const user = await Usuario.create({ nome, email, password: passwordHash})

    return user

}