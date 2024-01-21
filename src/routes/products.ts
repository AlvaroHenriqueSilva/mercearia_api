import { Router } from "express";
import CreateProductController from "../controllers/products/CreateProductController";
import UpdateProductController from "../controllers/products/UpdateProductController";
import DeleteProductController from "../controllers/products/DeleteProductController";
import AllProductsController from "../controllers/products/AllProductsController";
import ListProductController from "../controllers/products/ListProductController";

import auth from "../middlewares/auth";

const products = Router()

products.get('/products', auth, AllProductsController)
products.get('/products/:id', auth, ListProductController)
products.post('/products', auth, CreateProductController)
products.put('/products/:id', auth, UpdateProductController)
products.delete('/products/:id', auth, DeleteProductController)


export default products 