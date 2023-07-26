// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchBooks = createAsyncThunk(
//   'books/fetchBooks',
//   async () => {
//     try {
//       const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0gxEOLbisjfdLrnX5jhT/books');
//       const data = JSON.parse(response.data);
//       return data.results;
//     } catch (error) {
//       throw new Error('Failed to fetch books.');
//     }
//   },
// );

// export const addBook = createAsyncThunk(
//   'books/addBook',
//   async (newBook) => {
//     try {
//       const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0gxEOLbisjfdLrnX5jhT/books', newBook);
//       return response.data;
//     } catch (error) {
//       throw new Error('Failed to add the book.');
//     }
//   },
// );
