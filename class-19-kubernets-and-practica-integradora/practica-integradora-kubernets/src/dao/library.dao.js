import libraryModel from "../model/library.model.js";

export default class LibraryDao {
  getAllLibraries = async () => {
    try {
      const data = await libraryModel.find();
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: library.dao.js:9 ~ LibraryDao ~ getLibraries= ~ error:",
        error
      );
      return null;
    }
  };

  getLibraryById = async (id) => {
    try {
      const data = await libraryModel.findOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: library.dao.js:22 ~ LibraryDao ~ getUsersById= ~ error:",
        error
      );
      return null;
    }
  };

  createLibrary = async (library) => {
    try {
      const data = await libraryModel.create(library);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: library.dao.js:35 ~ LibraryDao ~ createLibrary= ~ error:",
        error
      );
      return null;
    }
  };

  updateLibraryById = async (id, library) => {
    try {
      const data = await libraryModel.updateOne({ _id: id }, library);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: library.dao.js:48 ~ LibraryDao ~ updateLibraryById= ~ error:",
        error
      );
      return null;
    }
  };

  deletelibraryById = async (id) => {
    try {
      const data = await libraryModel.deleteOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: library.dao.js:61 ~ LibraryDao ~ deletelibraryById ~ error:",
        error
      );
      return null;
    }
  };
}
