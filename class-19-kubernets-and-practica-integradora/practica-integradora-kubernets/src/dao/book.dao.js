import bookModel from "../model/book.model.js";

export default class BookDao {
  getAllBooks = async () => {
    try {
      const data = await bookModel.find();
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:9 ~ BookDao ~ getAllBooks= ~ error:",
        error
      );
      return null;
    }
  };

  getBookById = async (id) => {
    try {
      const data = await bookModel.findOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:22 ~ BookDao ~ getBookById= ~ error:",
        error
      );
      return null;
    }
  };

  createBook = async (book) => {
    try {
      const data = await bookModel.create(book);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:35 ~ BookDao ~ createBook= ~ error:",
        error
      );
      return null;
    }
  };

  updateBookById = async (id, book) => {
    try {
      const data = await bookModel.updateOne({ _id: id }, book);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:48 ~ BookDao ~ updateBookById= ~ error:",
        error
      );
      return null;
    }
  };

  deleteBookById = async (id) => {
    try {
      const data = await bookModel.deleteOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: book.dao.js:61 ~ BookDao ~ deleteBookById ~ error:",
        error
      );
      return null;
    }
  };
}
