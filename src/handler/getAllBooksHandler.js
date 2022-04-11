const books = require('../books');

const getAllBooksHandler = (request, h) => {
  let filteredBooks = books;
  const { name, reading, finished } = request.query;

  if (name !== undefined) {
    if (name !== '') {
      const regex = new RegExp(name, 'i');
      filteredBooks = filteredBooks.filter((book) => regex.test(book.name));
    }
  }

  if (reading !== undefined) {
    if (reading === '1') {
      filteredBooks = filteredBooks.filter((book) => book.reading === true);
    } else {
      filteredBooks = filteredBooks.filter((book) => book.reading === false);
    }
  }

  if (finished !== undefined) {
    if (finished === '1') {
      filteredBooks = filteredBooks.filter((book) => book.finished === true);
    } else {
      filteredBooks = filteredBooks.filter((book) => book.finished === false);
    }
  }

  const response = h.response({
    status: 'success',
    data: {
      books: filteredBooks.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooksHandler;
