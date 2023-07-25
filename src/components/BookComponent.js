import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import RemoveBookButton from './RemoveBookButton';

const BooksComponent = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const [bookIds, setBookIds] = useState([]);

  useEffect(() => {
    dispatch(fetchBooks()).then((action) => {
      const ids = Object.keys(action.payload);
      setBookIds(ids);
    });
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!books || Object.keys(books).length === 0) {
    return <div>No books available</div>;
  }

  return (
    <ul className="Book">
      {bookIds.map((bookId) => {
        const bookArray = books[bookId];
        if (!Array.isArray(bookArray) || bookArray.length === 0) {
          return null;
        }
        const book = bookArray[0];
        return (
          <li key={book.item_id} className="book-item">
            <h3 className="book-title">{book.title}</h3>
            <p className="Author">{book.author}</p>
            <p className="category">{book.category}</p>
            <RemoveBookButton bookId={bookId} />
          </li>
        );
      })}
    </ul>
  );
};

export default BooksComponent;
