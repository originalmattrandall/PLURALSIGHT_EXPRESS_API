import express from 'express';
import mongoose from 'mongoose';
import Book from './models/bookModel.js'

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI')
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route('/books')
  .get((req, res) => {

    // If something weird is typed into api call everything is returned.
    // Does this make sense? feels better if nothing is returned if the user
    // types in something weird...

    // This is also case sensitive, fix that
    const query = {};
    if(req.query.genre) {
      query.genre = req.query.genre;
    }

    Book.find(query, (err, books) => {
      if(err){
        return res.send(err);
      }
        
      return res.json(books);     
    });
  });

bookRouter.route('/books/:bookId')
  .get((req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
      if(err){
        return res.send(err);
      }
        
      return res.json(book);     
    });
  });
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my api');
});

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});