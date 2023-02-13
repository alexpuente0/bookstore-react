import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const title = target.title.value;
    const author = target.author.value;
    dispatch(addBook({ title, author, category: '' }));
    target.title.value = '';
    target.author.value = '';
  };

  return (
    <div className="add-book-cont">
      <form onSubmit={handleSubmit}>
        <h2>Add a Book</h2>
        <div className="input-cont">
          <input type="text" id="title" placeholder="Book Title" required />
          <input type="text" id="author" placeholder="Author" required />
          <span className="category">Category ⏷</span>
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
