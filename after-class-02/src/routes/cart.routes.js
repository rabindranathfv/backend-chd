const { Router } = require("express");
const CartManager = require("../cartManager");
const path = require("path");

const cartDbPath = path.join(__dirname, "../db/cart.json");

class CartRoute {
  path = "/cart";
  router = Router();
  cartManager = new CartManager(cartDbPath);

  constructor() {
    this.initCarRoute();
  }

  initCarRoute() {
    this.router.post(`${this.path}/`, async (req, res) => {
      await this.cartManager.addCart();
      return res.json({ message: `create cart successfuly` });
    });

    this.router.get(`${this.path}/:cid`, async (req, res) => {
      const cartId = req.params.cid;
      const product = await this.cartManager.getProductsByCartId(
        Number(cartId)
      );
      if (!product) return res.status(404).json({ message: "cart not found" });
      return res.json({ message: `get cart by id successfully`, product });
    });

    this.router.post(`${this.path}/:cid/product/:pid`, async (req, res) => {
      const cartId = Number(req.params.cid)
      const productId = Number(req.params.pid)
      await this.cartManager.addProductToCart(cartId, productId)
      return res.json({ message: `add product ${productId} to this specific card ${cartId}` });
    });
  }
}

module.exports = CartRoute;
