import React from 'react';

import BookForm from './BookForm';
import Book from './BookComponent';

const Books = () => (
  <div className="books flex-container flex-column">
    <Book />
    <div className="hl" />
    <p className="add-new-book-text font-face-montserrat">ADD NEW BOOK</p>
    <BookForm />
  </div>
);

export default Books;
