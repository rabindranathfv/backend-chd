import { ProductService } from "../repository/index.js";

export default class ProductCtrl {
  productService;
  constructor() {
    this.productService = ProductService;
  }

  getAllProducts = async (req, res) => {
    try {
      const products = await this.productService.getAllProducts(req, res);
      return res.json({ message: `getAllProducts`, products });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  getProductById = async (req, res) => {
    try {
      const product = await this.productService.getProductById(req, res);
      return res.json({ message: `method getUserById`, product });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  deleteProductById = async (req, res) => {
    try {
      console.log("IN PRODUCT CONTROLLER****");
      const product = await this.productService.deleteProductById(req, res);

      if (!product) {
        res.status(500).json({
          message: `can not delete this product`,
        });
      }

      return res.json({
        message: `method deleteUserById`,
        product,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
