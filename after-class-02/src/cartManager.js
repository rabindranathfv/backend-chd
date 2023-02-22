const fs = require("fs/promises");
const ProductManager = require("./productManager");
const path = require("path");

const productDbPath = path.join(__dirname, "./db/products.json");

class CartManager {
  productManager = new ProductManager(productDbPath);

  constructor(path) {
    this.path = path;
    this.carts = [];
  }

  async addCart() {
    try {
      this.carts = await this.getCarts();
      const id =
        this.carts.length === 0 ? 1 : this.carts[this.carts.length - 1].id + 1;
      this.carts.push({ id, products: [] });
      return await fs.writeFile(this.path, JSON.stringify(this.carts));
    } catch (error) {
      console.log(
        "🚀 ~ file: cartManager.js:22 ~ CartManager ~ addCart ~ error:",
        error
      );
    }
  }

  async getCarts() {
    try {
      return JSON.parse(await fs.readFile(this.path));
    } catch (error) {
      console.log(
        "🚀 ~ file: cartManager.js:31 ~ CartManager ~ getCarts ~ error:",
        error
      );
    }
  }

  async getProductsByCartId(id) {
    try {
      this.carts = await this.getCarts();
      return this.carts.find((cart) => cart.id === id).products;
    } catch (error) {
      console.log(
        "🚀 ~ file: cartManager.js:42 ~ CartManager ~ getProductsByCartId ~ error:",
        error
      );
    }
  }

  async addProductToCart(cid, pid) {
    const prod = await this.productManager.getProductById(pid);
    const cart = await this.getProductsByCartId(cid);

    if (cart.some((item) => item.product === prod.id)) {
      const index = cart.findIndex((item) => item.product === prod.id);
      cart[index].quantity++;
    } else {
      cart.push({ product: prod.id, quantity: 1 });
    }
    return await fs.writeFile(this.path, JSON.stringify(this.carts));
  }
}

module.exports = CartManager;
