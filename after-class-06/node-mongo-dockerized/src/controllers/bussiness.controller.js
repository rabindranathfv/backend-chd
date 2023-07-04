import BussinessDao from "../dao/bussiness.dao.js";

const bussinessService = new BussinessDao();

export const getBussiness = async (req, res) => {
  const data = await bussinessService.getBussiness();

  if (!data) {
    return res.status(500).json({
      message: `something was wrong in getBussiness`,
    });
  }
  return res.json({
    message: `getBussiness`,
    bussiness: data,
  });
};

export const getBussinessById = async (req, res) => {
  const { bid } = req.params;
  const data = await bussinessService.getBussinessById(bid);

  if (!data) {
    return res.status(500).json({
      message: `something was wrong in getBussinessById`,
    });
  }
  return res.json({
    message: `getBussinessById`,
    bussiness: data,
  });
};

export const createBussiness = async (req, res) => {
  const bussiness = req.body;
  const data = await bussinessService.createBussiness(bussiness);

  if (!data) {
    return res.status(500).json({
      message: `something was wrong in createBussiness`,
    });
  }
  return res.json({
    message: `createBussiness`,
    bussiness: data,
  });
};

export const updateBussinessById = async (req, res) => {
  const { bid } = req.params;
  const data = await bussinessService.updateBussinessById(bid);

  if (!data) {
    return res.status(500).json({
      message: `something was wrong in updateBussinessById`,
    });
  }
  return res.json({
    message: `updateBussinessById`,
    bussiness: data,
  });
};

export const deleteBussinessById = async (req, res) => {
  const { bid } = req.params;
  const data = await bussinessService.deleteBussinessById(bid);

  if (!data) {
    return res.status(500).json({
      message: `something was wrong in deleteBussinessById`,
    });
  }
  return res.json({
    message: `DeleteBussinessById`,
    bussiness: data,
  });
};
