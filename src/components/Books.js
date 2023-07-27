import React from 'react';

import BookForm from './BookForm';
import Book from './BookComponent';

const Books = () => (
  <div className="books flex-column">
    <Book />
    <div className="hl" />
    <BookForm />
  </div>
);

export default Books;
