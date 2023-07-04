import Stripe from "stripe";
import { PRIVATE_STRIPE_KEY } from "../config/config.js";

const products = [
  { id: 1, name: "papas", price: 1000 },
  { id: 2, name: "queso", price: 500 },
  { id: 3, name: "hamburguesa", price: 1500 },
  { id: 4, name: "soda", price: 1000 },
  { id: 5, name: "golosinas", price: 800 },
];

const USD = "usd";

export default class PaymentsDao {
  constructor() {
    this.stripe = new Stripe(PRIVATE_STRIPE_KEY);
  }

  paymentsIntents = async (id) => {
    try {
      const productRequested = products.find(
        (product) => product.id === parseInt(id)
      );
      if (!productRequested) {
        return null;
      }

      const paymentInfo = {
        amount: productRequested.price,
        currency: USD,
        metadata: {
          userId: `user-id-valid`,
          orderDetails: JSON.stringify({
            [productRequested.name]: 2
          }, null, '\t'),
          adrress: JSON.stringify( {
            street: `calle valida de prueba`,
            postalCode: 28001,
            externalNumber: 25
          }, null, '\t')
        }
      };

      const paymentIntent = await this.stripe.paymentIntents.create(paymentInfo);
      console.log(
        "🚀 ~ file: payment.dao.js:33 ~ PaymentsDao ~ paymentsIntents= ~ paymentIntent:",
        paymentIntent
      );

      return paymentIntent;
    } catch (error) {
      console.log(
        "🚀 ~ file: payment.dao.js:41 ~ PaymentsDao ~ paymentsIntents= ~ error:",
        error
      );
      return null;
    }
  };
}
