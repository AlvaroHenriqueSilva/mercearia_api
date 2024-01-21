import { Router } from "express"
import CreateUserController from "../controllers/users/CreateUserController"

const users = Router()

users.post('/users', CreateUserController)

export default users