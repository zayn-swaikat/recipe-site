import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </header>
  );
}

export default Header;