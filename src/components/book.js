import React from 'react';
import PropTypes from 'prop-types';
import './book.css';

const Book = ({ title, author }) => (
  <li className="main-book-container">
    <div className="everyBook">
      <span className="sptitle">{title}</span>
      <span className="spauthor">{author}</span>
      <ul className="btncont">
        <li>
          <button type="button" className="bookbtn">
            Comments
          </button>
        </li>
        <li>
          <button type="button" className="bookbtn">
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

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
