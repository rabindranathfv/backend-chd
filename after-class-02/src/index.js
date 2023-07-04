const App = require("./app");
const BaseRoute = require("./routes/base.routes");
const ProductRoute = require("./routes/products.routes");
const CartRoute = require("./routes/cart.routes");

const app = new App([new BaseRoute(), new ProductRoute(), new CartRoute()]);

app.listen();
