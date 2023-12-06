import { Router } from "express";
import { createProduct, deleteProduct, readProduct, readSpecificProduct, updateProduct } from "../Controllers/productController.js";


let productRouter = Router();

productRouter
.route("/")
.post(createProduct)
.get(readProduct)

productRouter
.route("/:productId")
.patch(updateProduct)
.delete(deleteProduct)
.get(readSpecificProduct)

// .findById

export default productRouter;