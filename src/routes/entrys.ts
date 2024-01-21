import { Router } from "express";
import CreateEntryController from "../controllers/entrys/CreateEntryController";
import auth from "../middlewares/auth";

const entrys = Router()

entrys.post('/products/entrys/:id', auth, CreateEntryController)

export default entrys