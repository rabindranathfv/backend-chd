import OrderService from "../dao/order.dao.js";
import UserService from "../dao/user.dao.js";
import BussinessService from "../dao/bussiness.dao.js";

const orderService = new OrderService();
const userService = new UserService();
const bussinessService = new BussinessService();

export const getOrders = async (req, res) => {
  const data = await orderService.getOrders();

  return res.json({
    message: `getOrders`,
    orders: data,
  });
};

export const getOrderById = async (req, res) => {
  const { oid } = req.params;
  const data = await orderService.getOrdersById(oid);
  return res.json({
    message: `getOrderById`,
    order: data,
  });
};

export const createOrder = async (req, res) => {
  // TODO: user y bussiness son id's de mongo
  const orderBody = new orderDto(req.body)
  const { user, bussiness, products } = req.body;

  const userData = await userService.getUsersById(user);
  const bussinessData = await bussinessService.getBussinessById(bussiness);

  const actualOrders = bussinessData.products.filter((product) => {
    return products.includes(product.id);
  });

  const sum = actualOrders.reduce((acc, prev) => {
    acc += prev.price;
    return acc;
  }, 0);

  const orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1);
  let order = {
    number: orderNumber,
    bussiness,
    user,
    status: "pending",
    products: actualOrders.map((p) => p.id),
    totalPrice: sum,
  };

  const newOrder = await orderService.createOrder(order);

  userData.orders.push(newOrder._id);
  await userService.updateUsersById(user, userData);

  return res.json({
    message: `createOrder`,
    order: newOrder,
  });
};

export const updateOrderById = async (req, res) => {
  const { oid } = req.params;
  const { resolve } = req.query;

  const data = await orderService.getOrdersById(oid);
  data.status = resolve;

  const dataUpd = await orderService.updateOrderById(data._id, data);

  return res.json({
    message: `updateOrderById`,
    order: dataUpd,
  });
};

export const deleteOrderById = async (req, res) => {
  const { oid } = req.params;
  const data = await orderService.deleteOrdersById(oid);

  return res.json({
    message: `DeleteOrderById`,
    order: data,
  });
};
