import React from 'react';
import { useSelector } from 'react-redux';
import RemoveBookButton from './RemoveBookButton';

export default function BooksComponent() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id} className="book-item">
          <h3 className="book-title">{book.title}</h3>
          <p>
            Author:
            {' '}
            {book.author}
          </p>
          <p>
            Category:
            {' '}
            {book.category}
          </p>
          <RemoveBookButton bookId={book.item_id} />
        </div>
      ))}
    </div>
  );
}
