import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook, fetchBooks } from '../api/middleware';

const AddBookButton = ({ bookTitle, bookAuthor, bookCategory }) => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: uuidv4(),
      title: bookTitle,
      author: bookAuthor,
      category: bookCategory,
    };

    dispatch(addBook(newBook)).then(() => {
      dispatch(fetchBooks());
    });
  };

  return (
    <div className="add-btn center-align-items">
      <button type="button" className="zero-border font-face-robotoslab" onClick={handleAddBook}>
        ADD BOOK
      </button>
    </div>
  );
};

AddBookButton.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
};

export default AddBookButton;
