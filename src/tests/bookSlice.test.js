import { addBook, removeBook } from '../redux/books/booksSlice';

describe('addBook', () => {
  it('should create an action to add a book', () => {
    const bookToAdd = { id: 1, title: 'Test Book', author: 'Test Author' };

    const action = addBook(bookToAdd);

    expect(action).toEqual({
      type: 'books/addBook',
      payload: bookToAdd,
    });
  });
  it('should create an action to remove a book', () => {
    const bookToRemove = { id: 1, title: 'Test Book', author: 'Test Author' };

    const action = removeBook(bookToRemove);

    expect(action).toEqual({
      type: 'books/removeBook',
      payload: bookToRemove,
    });
  });
});
