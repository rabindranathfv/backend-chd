const fs = require("fs/promises");

class ProductManager {
  constructor(ruta) {
    this.path = ruta;
    this.products = [];
  }

  async addProduct(product) {
    try {
      this.products = await this.getProducts();
      console.log(
        "🚀 ~ file: productManager.js:12 ~ ProductManager ~ addProduct ~ products:",
        this.products
      );
      const id =
        this.products.length === 0
          ? 1
          : this.products[this.products.length - 1].id + 1;
      this.products.push({ id, ...product });
      return await fs.writeFile(this.path, JSON.stringify(this.products));
    } catch (error) {
      console.log(
        "🚀 ~ file: productManager.js:23 ~ ProductManager ~ addProduct ~ error:",
        error
      );
    }
  }

  async getProducts() {
    try {
      const info = await fs.readFile(this.path);
      return JSON.parse(info);
    } catch (error) {
      console.log(
        "🚀 ~ file: productManager.js:36 ~ ProductManager ~ getProducts ~ error:",
        error
      );
    }
  }

  async getProductById(id) {
    try {
      this.products = await this.getProducts();
      return this.products.find((product) => product.id === id);
    } catch (error) {
      console.log(
        "🚀 ~ file: productManager.js:48 ~ ProductManager ~ getProductById ~ error:",
        error
      );
    }
  }

  async updateProduct(id, data) {
    try {
      this.products = await this.getProducts();
      let productUpd = await this.getProductById(id);

      if (!productUpd) return productUpd;

      const productId = this.products.findIndex((product) => product.id === id);
      this.products[productId] = { ...productUpd, ...data };
      return await fs.writeFile(this.path, JSON.stringify(this.products));
    } catch (error) {
      console.log(
        "🚀 ~ file: productManager.js:64 ~ ProductManager ~ updateProduct ~ error:",
        error
      );
    }
  }

  async deleteProductById(id) {
    try {
      const products = await this.getProducts();
      const filteredProducts = products.filter(
        (products) => products.id !== id
      );
      fs.writeFile(this.path, JSON.stringify(filteredProducts), "utf-8");
    } catch (error) {
      console.log(
        "🚀 ~ file: productManager.js:77 ~ ProductManager ~ deleteProductById ~ error:",
        error
      );
    }
  }
}

module.exports = ProductManager;
