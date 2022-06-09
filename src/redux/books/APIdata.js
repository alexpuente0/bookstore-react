const apiID = 'cIsNPw9lXWILUra2rFyo';
const bookURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiID}/books`;

export const fetchBooks = async () => {
  try {
    const response = await fetch(bookURL);
    const data = await response.json();
    const books = [];
    Object.entries(data).forEach((book) => books.push({ ...book[1][0], item_id: book[0] }));
    return books;
  } catch (err) {
    return err;
  }
};

export const createBook = async (book) => {
  try {
    await fetch(bookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    return book;
  } catch (err) {
    return err;
  }
};

export const eraseBook = async (id) => {
  try {
    const response = await fetch(`${bookURL}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id }),
    });
    if (response.status === 201) {
      return true;
    }
  } catch (err) {
    return err;
  }
  return false;
};
