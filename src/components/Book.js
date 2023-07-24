import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function BooksComponent() {
  const dispatch = useDispatch();
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
          <button
            type="button"
            className="delete-button"
            onClick={() => dispatch(removeBook(book.item_id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
