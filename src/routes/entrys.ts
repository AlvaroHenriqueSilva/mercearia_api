import { Router } from "express";
import CreateEntryController from "../controllers/entrys/CreateEntryController";

const entrys = Router()

entrys.post('/products/entry/:id', CreateEntryController)

export default entrys