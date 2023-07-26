import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../api/middleware';
import RemoveBookButton from './RemoveBookButton';

const BooksComponent = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const [bookIds, setBookIds] = useState([]);

  useEffect(() => {
    dispatch(fetchBooks())
      .then((action) => {
        const ids = Object.keys(action.payload);
        setBookIds(ids);
      })
      .catch((error) => error);
  }, [dispatch]);

  useEffect(() => {
    const ids = Object.keys(books);
    setBookIds(ids);
  }, [books]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-container">

      {bookIds.map((bookId, index) => {
        const bookArray = books[bookId];
        if (!Array.isArray(bookArray) || bookArray.length === 0) {
          return null;
        }
        const bookItem = bookArray[0];
        return (
          <div key={bookItem.item_id || index} className="book-item">
            <div className="card-left">
              <p className="category">{bookItem.category}</p>
              <h3 className="book-title">{bookItem.title}</h3>
              <p className="author">{bookItem.author}</p>
              <div className="app-actions-left">
                {' '}
                <p>Comments</p>
                <RemoveBookButton bookId={bookId} />
                <p>Edit</p>

              </div>

            </div>
            <div className="app-actions-center">
              Progress dialog
            </div>
            <div className="app-actions-right">
              <p>Current Chapter</p>
              <p>Chapter 17</p>
              <div className="progress-btn">
                <button type="button">Update progress</button>
              </div>

            </div>

          </div>
        );
      })}
    </div>

  );
};

export default BooksComponent;
