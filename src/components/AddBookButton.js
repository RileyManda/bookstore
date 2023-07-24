import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/books/booksSlice';

const AddBookButton = ({ bookTitle, bookAuthor }) => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const id = Math.floor(Math.random() * 100);
    const newBook = {
      item_id: id,
      title: bookTitle,
      author: bookAuthor,
    };

    dispatch(addBook(newBook));
  };
  return (
    <div>
      <button type="button" onClick={handleAddBook}>
        Add Book
      </button>
    </div>
  );
};
AddBookButton.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
};

export default AddBookButton;
