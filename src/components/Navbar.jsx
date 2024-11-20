import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <p>
          <strong>KnowWords</strong>
        </p>
      </div>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
