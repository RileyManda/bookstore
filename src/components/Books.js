import React from 'react';

import BookForm from './BookForm';
import Book from './BookComponent';

const Books = () => (
  <div className="books">
    <Book />
    <div className="hl" />
    <BookForm />
  </div>
);

export default Books;
