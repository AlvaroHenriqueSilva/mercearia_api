import { Router } from "express";
import CreateEntryController from "../controllers/entrys/CreateEntryController";

const entrys = Router()

entrys.post('/products/entrys/:id', CreateEntryController)

export default entrys