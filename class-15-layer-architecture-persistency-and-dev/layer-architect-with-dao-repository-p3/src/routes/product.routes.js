import { Router } from "express";
import productModel from "../model/product.model.js";
import ProductCtrl from "../controllers/product.controller.js";

const productsRoutes = Router();
const productCtrl = new ProductCtrl();

productsRoutes.get("/", productCtrl.getAllProducts);

productsRoutes.get("/:pId", productCtrl.getProductById);

productsRoutes.delete("/:pId", productCtrl.deleteProductById);

productsRoutes.post("/", async (req, res) => {
  try {
    console.log("BODY ****", req.body);
    const { name, description, quantity, price } = req.body;

    const pAdd = {
      name,
      description,
      quantity: Number(quantity),
      price: Number(price),
    };
    const newProduct = await productModel.create(pAdd);

    return res.json({
      message: `usuario creado`,
      product: newProduct,
    });
  } catch (error) {
    console.log("🚀 ~ file: user.routes.js:49 ~ router.post ~ error:", error);
    return res.json({ message: `${error}` });
  }
});

export default productsRoutes;
