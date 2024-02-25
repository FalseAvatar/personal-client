import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">Personally</Link>
      </div>
      <ul className="navbar-list">
        <li>
          <Link to="/About">Our story</Link>
        </li>
        <li>
          <Link to="/Read">Read</Link>
        </li>
        <li>
          <Link to="/Write">Write</Link>
        </li>
        <li>
          <Link to="/LogIn">Log in</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
