import React, { useEffect, useState } from 'react';
import { useTheme } from "../ThemeContext";
import { Link } from 'react-router-dom';

function Header() {
  const { mode, changeDarkMode } = useTheme(); //this is the dark mode
  const [open, setOpen] = useState(false); //this is for the hamburger menu
  const [scrollDir, setScrollDir] = useState(null); //this is the header scroll

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDir('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDir('up');
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', updateScrollDir);
    return () => {
      window.removeEventListener('scroll', updateScrollDir);
    };
  }, []);

  return (
    <header className={scrollDir === 'down' ? 'header-hide' : 'header-show'}>
      <div className="logo-title">
        <img src="/assets/logo1.png" alt="Logo" />
        <h1>YummiFy</h1>
        <div onClick={changeDarkMode} className="darkmode-switch">
          <div className="icon">{mode === "light" ? "☀️" : "🌙"}</div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* hamburger menu */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation menu"
      >
        ☰
      </button>

      {/* Mobile nav */}
      {open && (
        <div className="mobile-nav-dropdown">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/recipes" onClick={() => setOpen(false)}>Recipes</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}

export default Header;