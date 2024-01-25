import { compareSync } from "bcryptjs"
import { sign } from "jsonwebtoken";
import Usuario from '../../models/Usuario'
import dotenv from 'dotenv';

dotenv.config()


interface User {
    email: string;
    password: string; 
}

export interface UsuarioAttributes {
    id_usuario: number;
    nome: string;
    email: string;
    password: string;
}

export const AuthUserService = async ({ email, password }: User) => {
    if (!email) return { error: 'Email/password incorretos!'  }
    if (!password) return { error: 'Email/password incorretos!'  }

    const user: UsuarioAttributes | any = await Usuario.findOne({
        where: { email: email },
        raw: true
    })

    if (!user) return { error: 'Email/password incorretos!' }

    const passwordMatch = compareSync(password, user.password) 
    if (!passwordMatch) return { error: 'Email/password incorretos!' }
   
    
    const token = sign({ name: user.nome, email: user.email }, process.env.JWT_SECRET, {
        subject: String(user.id_usuario),
        expiresIn: '30d'
    })

    return{ id: user.id_usuario, name: user.nome, token: token}
}