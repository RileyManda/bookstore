const fetchBooks = async () => {
  try {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wlOwmFqpL3X6kp4eN2ih/books');
    if (!response.ok) {
      throw new Error('Failed to fetch books.');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Failed to fetch books.');
  }
};

export default fetchBooks;
