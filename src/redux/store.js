import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categoriesSlice';
import booksReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    books: booksReducer,
  },
});
export default store;
