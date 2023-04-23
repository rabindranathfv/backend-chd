import productModel from "../model/product.model.js";

export default class ProductServiceDao {
  constructor(dao) {
    this.dao = dao;
  }

  getAllProducts = async (req, res) => {
    try {
      console.log("PRODUCTS IN MONGO");
      // const products = await this.dao[model].get()
      const products = await productModel.find({});
      return products;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  getProductById = async (req, res) => {
    try {
      const productData = await productModel.findById({ _id: req.params.pId });
      return productData;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  deleteProductById = async (req, res) => {
    try {
      console.log("IN PRODUCT REPOSITORY****");
      const deleteP = await productModel.deleteOne({ _id: req.params.pId });
      return deleteP;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
