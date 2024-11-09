import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <p>DictionaryApp</p>
      </div>
      <div className="links">
        <Link to="/" style={{ margin: 0, padding: 0 }}>
          <a href="/#">Home</a>
        </Link>
        <Link to="/about" style={{ margin: 0, padding: 0 }}>
          <a href="/#">About</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
