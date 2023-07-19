import React from 'react';

const bookData = [
  { id: 1, title: 'Book 1' },
  { id: 2, title: 'Book 2' },
  { id: 3, title: 'Book 3' },
];
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
