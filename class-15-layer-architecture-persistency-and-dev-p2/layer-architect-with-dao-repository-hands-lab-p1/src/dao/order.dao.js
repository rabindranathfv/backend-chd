import orderModel from "../model/order.model.js";

export default class OrdersDao {
  getOrders = async () => {
    try {
      const data = await orderModel.find();
      return data;
    } catch (error) {
      console.log("🚀 ~ file: orders.dao.js:6 ~  ~ getOrders= ~ error:", error);
      return null;
    }
  };

  getOrdersById = async (id) => {
    try {
      const data = await orderModel.findOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: orders.dao.js:16 ~  ~ getOrdersById= ~ error:",
        error
      );
      return null;
    }
  };

  createOrder = async (order) => {
    try {
      const data = await orderModel.create(order);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: orders.dao.js:26 ~  ~ createOrders= ~ error:",
        error
      );
      return null;
    }
  };

  updateOrdersById = async (id, order) => {
    try {
      const data = await orderModel.updateOne({ _id: id }, { $set: order });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: orders.dao.js:36 ~  ~ updateOrdersById= ~ error:",
        error
      );
      return null;
    }
  };

  deleteOrdersById = async (id) => {
    try {
      const data = await orderModel.deleteOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: orders.dao.js:47 ~  ~ DeleteOrdersById ~ error:",
        error
      );
      return null;
    }
  };
}
