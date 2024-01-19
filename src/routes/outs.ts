import { Router } from "express";
import CreateOutController from "../controllers/outs/CreateOutController";

const outs = Router()

outs.post('/products/outs/:id', CreateOutController)

export default outs