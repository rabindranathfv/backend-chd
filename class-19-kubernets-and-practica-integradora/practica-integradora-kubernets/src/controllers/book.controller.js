import BookDao from "../dao/book.dao.js";

const bookService = new BookDao();

export const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    return res.json({
      message: `getAllBooks OK`,
      books,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: book.controller.js:13 ~ getAllBooks ~ error:",
      error
    );
  }
};

export const getBookById = async (req, res) => {
  try {
    const { bid } = req.params;
    console.log("🚀 ~ file: book.controller.js:23 ~ getBookById ~ bid:", bid);
    const book = await bookService.getBookById(bid);
    return res.json({
      message: `getBookById OK`,
      bookInfo: book,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: book.controller.js:30 ~ getBookById ~ error:",
      error
    );
  }
};

export const createBook = async (req, res) => {
  try {
    const { lid } = req.params;
    const book = req.body;
    const newBook = await bookService.createBook(lid, book);
    return res.json({
      message: `createBook OK`,
      newBook,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: book.controller.js:34 ~ createBook ~ error:",
      error
    );
  }
};

export const updateBookById = async (req, res) => {
  try {
    const { bid } = req.params;
    const bookBody = req.body;
    const updatedBook = await bookService.updateBookById(bid, bookBody);
    return res.json({
      message: `updateBookById ${bid}`,
      updatedBook,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: book.controller.js:63 ~ updateBookById ~ error:",
      error
    );
  }
};

export const deleteBookById = async (req, res) => {
  try {
    const { bid } = req.params;
    const deletedBook = await bookService.deleteBookById(bid);
    return res.json({
      message: `deleteBookById OK`,
      deletedBook,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: book.controller.js:79 ~ deleteBookById ~ error:",
      error
    );
  }
};
