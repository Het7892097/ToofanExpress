import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const currentUrl = location.pathname;

  return (
    <nav className="navbar">
      <ul className="navbar-nav2">
        <li className="nav-item">
          <Link to="/" className={currentUrl === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Entertainment" className={currentUrl === '/Entertainment' ? 'active' : ''}>Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link to="/Business" className={currentUrl === '/Business' ? 'active' : ''}>Business</Link>
        </li>
        <li className="nav-item">
          <Link to="/Technology" className={currentUrl === '/Technology' ? 'active' : ''}>Technology</Link>
        </li>
        <li className="nav-item">
          <Link to="/Science" className={currentUrl === '/Science' ? 'active' : ''}>Science</Link>
        </li>
        <li className="nav-item">
          <Link to="/Politics" className={currentUrl === '/Politics' ? 'active' : ''}>Politics</Link>
        </li>
        <li className="nav-item">
          <Link to="/Automobile" className={currentUrl === '/Automobile' ? 'active' : ''}>Automobile</Link>
        </li>
        <li className="nav-item">
          <Link to="/Sports" className={currentUrl === '/Sports' ? 'active' : ''}>Sports</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
