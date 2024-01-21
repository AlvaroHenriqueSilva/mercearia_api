import { Router } from "express"
import CreateUserController from "../controllers/users/CreateUserController"
import AuthUserController from "../controllers/users/AuthUserController"

const users = Router()

users.post('/users', CreateUserController)
users.post('/login', AuthUserController)

export default users