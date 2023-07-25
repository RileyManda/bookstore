import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/books/booksSlice';

const AddBookButton = ({ bookTitle, bookAuthor, bookCategory }) => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const id = Math.floor(Math.random() * 100);
    const newBook = {
      item_id: Number(id),
      title: bookTitle,
      author: bookAuthor,
      category: bookCategory,
    };

    dispatch(addBook(newBook));
  };

  return (
    <div className="add-btn">
      <button type="button" onClick={handleAddBook}>
        Add Book
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
