const router = require("express").Router();
const books = require("../data/books.json");
// const products = [];
const fs = require("fs");

// manampilkan semua products
// filtering/searching
router.get("/books", (req, res) => {
  res.send(books);
});

router.get("/books/:id", (req, res) => {
  const { id } = req.params; // route paramter
  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return res.status(404).send("Book Not Found");
  }

  res.send(book);

});

router.get("/ejs/books", (req, res) => {
  res.render('books', { books });
});

module.exports = router;
