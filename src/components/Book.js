import React from 'react';
import bookData from './BookData';

export default function Book() {
  return (
    <div>
      {bookData.map((book) => (
        <div key={book.id} className="book-item">
          <h3 className="book-title">{book.title}</h3>
          <button type="button" className="delete-button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
