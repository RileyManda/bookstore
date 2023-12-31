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
    <div className="action-button-group flex-container flex-row">
      <button type="button" className="zero-border"><p className="comments font-face-robotoslab">Comments</p></button>
      <div className="vl" />
      <button type="button" className="zero-border font-face-robotoslab" onClick={handleRemoveBook}>
        <p>Remove</p>
      </button>
      <div className="vl" />
      <button type="button" className="zero-border font-face-robotoslab"><p>Edit</p></button>
    </div>
  );
};

RemoveBookButton.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default RemoveBookButton;
