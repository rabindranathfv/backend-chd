import PaymentsDao from "../dao/payment.dao.js";

const paymentsDao = new PaymentsDao();

export const paymentsIntents = async (req, res) => {
  try {
    const { id } = req.query;
    const newPayment = await paymentsDao.paymentsIntents(id);

    if (!newPayment) {
      return res.status(404).json({ message: `product not found` });
    }

    return res.json({
      message: `payment OK`,
      payload: newPayment,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: book.controller.js:15 ~ createBook ~ error:",
      error
    );
  }
};
