import AddBook from './addBook';
import BookList from './bookList';

const BookContainer = () => (
  <div className="bookscontainer">
    <BookList />
    <AddBook />
  </div>
);

export default BookContainer;
