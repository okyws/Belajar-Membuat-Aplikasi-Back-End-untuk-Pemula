const books = require('../books');

const getBookByIdHandler = (request, h) => {
  const { id } = request.params;
  const selectedBook = books.filter((book) => book.id === id)[0];

  if (selectedBook !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        book: selectedBook,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = getBookByIdHandler;
