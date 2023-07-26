import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const apiKey = 'XbsVCoKrfytCMi4uh4fE';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch books.');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (newBook) => {
    try {
      const bookToAdd = {
        ...newBook,
        item_id: uuidv4(),
      };

      const response = await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`, bookToAdd);
      const addedBook = response.data;

      return addedBook;
    } catch (error) {
      throw new Error('Failed to add book.');
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    try {
      await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books/${bookId}`);
      return { payload: bookId };
    } catch (error) {
      throw new Error('Failed to remove book.');
    }
  },
);
