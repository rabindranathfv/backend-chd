const { Router } = require("express");
const ProductManager = require("../productManager");
const { uploader } = require("../utils");
const path = require("path");

const productDbPath = path.join(__dirname, "../db/products.json");

class ProductRoute {
  path = "/products";
  router = Router();
  productManager = new ProductManager(productDbPath);

  constructor() {
    this.initProductRoutes();
  }

  initProductRoutes() {
    this.router.get(`${this.path}`, async (req, res) => {
      const limit = Number(req.query.limit);
      const products = await this.productManager.getProducts();
      if (limit || limit >= products.length) {
        return res.status(200).json({
          products: products.slice(0, limit ? limit : products.length),
          message: `get all products, be carefull with your ${limit}`,
        });
      }
      return res.status(200).json({ products, message: "get all products" });
    });

    this.router.get(`${this.path}/:pid`, async (req, res) => {
      const id = Number(req.params.pid);
      const product = await this.productManager.getProductById(id);
      if (!product) {
        return res.status(404).json({ message: "Product does not exist" });
      }
      return res
        .status(200)
        .json({ product, message: "get product by id success" });
    });

    this.router.post(
      `${this.path}`,
      uploader.single("thumbnail"),
      async (req, res) => {
        const { title, description, code, price, stock, category } = req.body;
        const file = req.file;
        if (!file) {
          return res
            .status(400)
            .send({ message: "can not process files, please check it" });
        }
        const newProduct = req.body;
        newProduct.thumbnail = `http://localhost:5000/public/uploads/${file.originalname}`;

        if (!title || !description || !code || !price || !stock || !category)
          return res
            .status(400)
            .json({ message: "all product files are mandatory" });
        await this.productManager.addProduct(newProduct);
        return res.status(200).json({
          message: "Add new Product successfully ",
          product: newProduct,
        });
      }
    );

    this.router.put(`${this.path}/:pid`, async (req, res) => {
      const pid = req.params.pid;
      const productUpd = await this.productManager.updateProduct(
        Number(pid),
        req.body
      );
      if (!productUpd) {
        return res.status(200).json({
          message: `product ${pid} does not exist`,
        });
      }
      return res
        .status(200)
        .json({ message: `product ${pid} updated succesfully` });
    });

    this.router.delete(`${this.path}/:pid`, async (req, res) => {
      const pid = req.params.pid;
      await this.productManager.deleteProductById(Number(pid));
      return res
        .status(200)
        .json({ message: `product ${pid} deleted successfuly` });
    });
  }
}

module.exports = ProductRoute;
