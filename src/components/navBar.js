import { Link } from 'react-router-dom';
import userdefault from '../assets/defaultuser.png';

const Navbar = () => (
  <div className="head-links">
    <div className="separator">
      <h1 className="toptitle">Bookstore CMS</h1>
      <div className="bookscontainer">
        <ul className="toplinks">
          <li>
            <Link to="/">BOOKS </Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>
    </div>
    <img src={userdefault} alt="user" className="user" />
  </div>
);

export default Navbar;
