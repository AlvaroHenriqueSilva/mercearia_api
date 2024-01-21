import { hashSync } from "bcryptjs";
import Usuario from "../../models/Usuario";

interface User {
    name: string,
    email: string,
    password: string,
  
}

export const CreateUserService = async ({ name, email, password }: User) => {
   
    const passwordHash = hashSync(password, 8)

    const user = await Usuario.create({
        data: { name, email, password: passwordHash}
    })

    return user

}