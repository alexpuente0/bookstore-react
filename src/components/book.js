import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <div className="main-book-container">
      <div className="everyBook">
        <span className="spcategory">Pop-Culture</span>
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
              className="bookbtn removebtn"
              onClick={() => dispatch(deleteBook(book.item_id))}
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

      <CircularProgressBar
        size={75}
        animationSmooth="1s ease-out"
        colorCircle="#f1f1f1"
        colorSlice="#0290ff"
        percent={70}
      />

      <div className="chapter">
        <span className="separator-chapter" />
        <div className="chapter-info">
          <p>CURRENT CHAPTER</p>
          <span className="chapter-no">
            Chapter 25
          </span>
          <button type="button" className="update">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
