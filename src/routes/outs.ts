import { Router } from "express";
import CreateOutController from "../controllers/outs/CreateOutController";
import auth from "../middlewares/auth";

const outs = Router()

outs.post('/products/outs/:id', auth, CreateOutController)

export default outs