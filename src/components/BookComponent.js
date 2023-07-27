import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { fetchBooks } from '../api/middleware';
import RemoveBookButton from './RemoveBookButton';
import 'react-circular-progressbar/dist/styles.css';

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

  const percentages = [64, 8, 0];

  return (
    <div className="book-container flex-container flex-column">
      {bookIds.map((bookId, index) => {
        const bookArray = books[bookId];
        if (!Array.isArray(bookArray) || bookArray.length === 0) {
          return null;
        }
        const bookItem = bookArray[0];
        const percentage = percentages[index] || 0;
        return (
          <div key={bookItem.item_id || index} className="book-item flex-container flex-row white-background">
            <div className="card-left">
              <p className="category">{bookItem.category}</p>
              <h3 className="book-title center-align-items">{bookItem.title}</h3>
              <p className="author center-align-items font-face-montserrat">{bookItem.author}</p>
              <div className="card-actions-left flex-container flex-row center-align-items">
                <RemoveBookButton bookId={bookId} />
              </div>
            </div>
            <div className="card-actions-center center-align-items">
              <div className="circular-progress">
                <CircularProgressbar value={percentage} />
              </div>
              <div className="progress-detail flex-container flex-column center-align-items">
                <p className="percentage">
                  {percentage}
                  %
                </p>
                <p className="completed">Completed</p>
              </div>
            </div>
            <div className="vertical-center" />
            <div className="card-actions-right flex-container flex-column font-face-robotoslab">

              <p className="chapter font-face-robotoslab">CURRENT CHAPTER</p>
              <p className="chapter-detail font-face-robotoslab">Chapter 3: &quot;A Lesson Learned&quot;</p>
              <div className="progress-btn">
                <button type="button" className="zero-border font-face-robotoslab">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksComponent;
