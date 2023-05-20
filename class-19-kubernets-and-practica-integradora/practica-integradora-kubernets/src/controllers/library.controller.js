import LibraryDao from "../dao/library.dao.js";

const libraryService = new LibraryDao();

export const getAllLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getAllLibraries();
    return res.json({
      message: `getAllLibraries OK`,
      libraries,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: library.controller.js:13 ~ getAllLibraries ~ error:",
      error
    );
  }
};

export const getLibraryById = async (req, res) => {
  try {
  } catch (error) {}
};

export const createLibrary = async (req, res) => {
  try {
    const library = req.body;
    const newLibrary = await libraryService.createLibrary(library);
    return res.json({
      message: `createLibrary OK`,
      newLibrary,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: library.controller.js:24 ~ createLibrary ~ error:",
      error
    );
  }
};

export const updateLibraryById = async (req, res) => {
  try {
  } catch (error) {}
};

export const deletelibraryById = async (req, res) => {
  try {
  } catch (error) {}
};
