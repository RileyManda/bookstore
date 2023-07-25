import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/b4VNkJPHlwXVQXoFR2Sv/books');
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
      const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/b4VNkJPHlwXVQXoFR2Sv/books', newBook);
      console.log('Response from API:', response.data);
      return response.data;
    } catch (error) {
      console.log('Error adding book:', error.response.status);
      throw new Error('Failed to add book.');
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    try {
      console.log('Dispatching removeBook thunk with bookId:', bookId);
      await axios.delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/b4VNkJPHlwXVQXoFR2Sv/books/${bookId}`,
      );
      console.log('Book removed successfully:', bookId);
      return bookId;
    } catch (error) {
      console.error('Error removing book:', error);
      throw new Error('Failed to remove book.');
    }
  },
);

const initialState = {
  books: {
    41: [
      {
        author: 'Default Author',
        title: 'The Sun',
        category: 'Category 1',
      },
    ],
  },
  isLoading: false,
  error: undefined,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = Object.keys(state.books).reduce((acc, key) => {
        if (key !== action.payload) {
          acc[key] = state.books[key];
        }
        return acc;
      }, {});
    })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
