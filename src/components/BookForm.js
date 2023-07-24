import React, { useState } from 'react';
import AddBookButton from './AddBookButton';

const BookForm = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const handleChangeTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const authorOptions = [
    'John Smith',
    'Leo Tolstoy',
    'Richard Dawkins',
    'Default Author',
  ];

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="app-form">
        <input
          type="text"
          placeholder="Book Title"
          value={bookTitle}
          onChange={handleChangeTitle}
        />
        <select value={bookAuthor} onChange={handleChangeAuthor}>
          <option value="">Action</option>
          {authorOptions.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
        <AddBookButton bookTitle={bookTitle} bookAuthor={bookAuthor} />
      </form>
    </div>
  );
};

export default BookForm;
