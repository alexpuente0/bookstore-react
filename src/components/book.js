import React from 'react';
import PropTypes from 'prop-types';
import './book.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <li className="main-book-container">
      <div className="everyBook">
        <span className="sptitle">{book.title}</span>
        <span className="spauthor">{book.author}</span>
        <ul className="btncont">
          <li>
            <button type="button" className="bookbtn">
              Comments
            </button>
          </li>
          <li>
            <button
              type="button"
              className="bookbtn"
              onClick={() => dispatch(deleteBook(book.id))}
            >
              Remove
            </button>
          </li>
          <li>
            <button type="button" className="bookbtn">
              Edit
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
