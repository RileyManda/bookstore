import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import RemoveBookButton from './RemoveBookButton';

export default function BooksComponent() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const booksArray = Object.values(books);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(booksArray) || booksArray.length === 0) {
    return <div>No books available</div>;
  }

  return (
    <div className="Book">
      {booksArray.map((bookArray) => {
        if (!Array.isArray(bookArray) || bookArray.length === 0) {
          // if bookArray is undefined or empty
          return null;
        }
        const book = bookArray[0];
        return (
          <div key={book.item_id} className="book-item">
            <h3 className="book-title">{book.title}</h3>
            <p className="Author">
              {' '}
              {book.author}
            </p>
            <p className="category">
              {' '}
              {book.category}
            </p>
            <RemoveBookButton bookId={book.item_id} />
          </div>
        );
      })}
    </div>
  );
}
