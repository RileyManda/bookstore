import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wlOwmFqpL3X6kp4eN2ih/books');
      return response.data.results;
    } catch (error) {
      throw new Error('Failed to fetch books.');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (newBook) => {
    try {
      console.log('Dispatching addBook thunk with newBook:', newBook);
      const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wlOwmFqpL3X6kp4eN2ih/books', newBook);
      console.log('Response from API:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding book:', error);
      console.log('Response data:', error.response.data);
      console.log('Response status:', error.response.status);
      throw new Error('Failed to add book.');
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    try {
      await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wlOwmFqpL3X6kp4eN2ih/books/${bookId}`);
      return bookId;
    } catch (error) {
      throw new Error('Failed to remove book.');
    }
  },
);

const initialState = {
  books: [],
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
    builder.addCase(removeBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default booksSlice.reducer;
