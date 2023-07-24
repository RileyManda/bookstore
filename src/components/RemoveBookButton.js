import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const RemoveBookButton = ({ bookId }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
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
