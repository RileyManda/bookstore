import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, fetchBooks } from '../api/middleware';

const RemoveBookButton = ({ bookId }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(bookId)).then(() => {
      dispatch(fetchBooks()); // Fetch the latest data after removing the book
    });
  };

  return (
    <div className="remove-btn">
      <button type="button" onClick={handleRemoveBook}>
        Remove Book
      </button>
    </div>
  );
};

RemoveBookButton.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default RemoveBookButton;
