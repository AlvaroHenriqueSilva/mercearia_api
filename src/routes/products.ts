import { Router } from "express";
import CreateProductController from "../controllers/products/CreateProductController";
import UpdateProductController from "../controllers/products/UpdateProductController";
import DeleteProductController from "../controllers/products/DeleteProductController";
import AllProductsController from "../controllers/products/AllProductsController";

const products = Router()

products.get('/products', AllProductsController)
products.post('/products', CreateProductController)
products.put('/products/:id', UpdateProductController)
products.delete('/produts/:id', DeleteProductController)


export default products 