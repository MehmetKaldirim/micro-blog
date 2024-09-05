import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // This file will handle our custom styling

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the sliding menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          {/* App name on the left */}
          <Link to="/" className="navbar-brand text-white">
            microblog
          </Link>

          {/* Hamburger button for mobile */}
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links and sign-in button */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            {/* Links in the middle */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link">
                  Posts
                </Link>
              </li>
            </ul>

            {/* Sign-in button on the right */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-light">Sign In</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sliding menu for mobile */}
      {isMenuOpen && (
        <div className="sliding-menu">
          <ul>
            <li>
              <Link to="/" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/posts" className="nav-link" onClick={toggleMenu}>
                Posts
              </Link>
            </li>
            <li>
              <button className="btn btn-light w-100" onClick={toggleMenu}>
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
