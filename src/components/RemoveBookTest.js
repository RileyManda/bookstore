import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { removeBook } from '../redux/books/booksSlice';

const RemoveBookButton = ({ bookId }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    const apiKey = 'XbsVCoKrfytCMi4uh4fE';

    axios
      .delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books/${bookId}`)
      .then((response) => {
        dispatch(removeBook(bookId));
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
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
