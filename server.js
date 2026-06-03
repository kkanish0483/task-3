const express = require('express');
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: 'Book One', author: 'Author One' }
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).json(req.body);
});

app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = books.findIndex(book => book.id === id);

  if (index !== -1) {
    books[index] = req.body;
    res.json(req.body);
  } else {
    res.status(404).send('Book not found');
  }
});

app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(book => book.id !== id);
  res.send('Book deleted');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});