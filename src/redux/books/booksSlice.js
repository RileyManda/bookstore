import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks, addBook, removeBook } from '../../api/middleware';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      const newBooks = { ...state.books };
      delete newBooks[bookId];
      state.books = newBooks;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      console.log('Updated books state after fetchBooks:', state.books);
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.isLoading = false;
      const addedBook = action.payload;

      state.books[addedBook.item_id] = [addedBook];
    });

    builder.addCase(addBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(removeBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.isLoading = false;
      const bookIdToDelete = action.payload;
      const newBooks = { ...state.books };
      delete newBooks[bookIdToDelete];
      state.books = newBooks;
      console.log('Updated books state after removeBook:', state.books);
    });

    builder.addCase(removeBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default booksSlice.reducer;
