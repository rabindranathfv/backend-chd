import bussinessModel from "../model/bussiness.model.js";

export default class BussinessDao {
  getBussiness = async () => {
    try {
      const data = await bussinessModel.find();
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: bussiness.dao.js:9 ~ BussinessDao ~ getBussiness= ~ error:",
        error
      );
      return null;
    }
  };

  getBussinessById = async (id) => {
    try {
      const data = await bussinessModel.findOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: bussiness.dao.js:22 ~ BussinessDao ~ getBussinessById= ~ error:",
        error
      );
      return null;
    }
  };

  createBussiness = async (bussiness) => {
    try {
      const data = await bussinessModel.create(bussiness);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: bussiness.dao.js:35 ~ BussinessDao ~ createBussiness= ~ error:",
        error
      );
      return null;
    }
  };

  updateBussinessById = async (id, bussiness) => {
    try {
      // TODO: {$set: bussiness}
      const data = await bussinessModel.updateOne({ _id: id }, bussiness);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: bussiness.dao.js:49 ~ BussinessDao ~ updateBussinessById= ~ error:",
        error
      );
      return null;
    }
  };

  deleteBussinessById = async (id) => {
    try {
      const data = await bussinessModel.deleteOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: bussiness.dao.js:62 ~ BussinessDao ~ deleteBussinessById ~ error:",
        error
      );
      return null;
    }
  };
}
