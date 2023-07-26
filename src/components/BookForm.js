import React, { useState } from 'react';
import AddBookButton from './AddBookButton';

const BookForm = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const handleChangeTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Default author value
  const defaultAuthor = 'John Doe';

  const categoryOptions = [
    'Fantasy',
    'Science-Fiction',
    'Information Technology',
    'Business',
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
        <select value={bookCategory} onChange={handleChangeCategory}>
          <option value="">Select Category</option>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <AddBookButton
          bookTitle={bookTitle}
          bookAuthor={defaultAuthor}
          bookCategory={bookCategory}
        />
      </form>
    </div>
  );
};

export default BookForm;
