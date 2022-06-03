import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <h1>Bookstore CMS</h1>
    <div className="bookscontainer">
      <ul>
        <li>
          <Link to="/">Books  </Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </div>
  </>
);

export default Navbar;
