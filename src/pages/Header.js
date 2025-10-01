import React, { useEffect, useState } from 'react';
import { useTheme } from "../ThemeContext";
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const { mode, changeDarkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState(null);
  const navigate = useNavigate();

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

  //close hamburger menu if someone clicks outside it
  useEffect(() => {
  if (!open) return;

  const handleClickOutside = (event) => {
    const dropdown = document.querySelector('.mobile-nav-dropdown');
    const hamburger = document.querySelector('.hamburger');
    if (
      dropdown &&
      !dropdown.contains(event.target) &&
      hamburger &&
      !hamburger.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [open]);

  // homepage
  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={scrollDir === 'down' ? 'header-hide' : 'header-show'}>
      <div className="logo-title">
        <img src="/assets/logo1.png" alt="Logo" />
        <h1>YummiFy</h1>
        <div onClick={changeDarkMode} className="darkmode-switch">
          <div className="icon">{mode === "light" ? "🔆" : "🌙"}</div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav>
        <Link to="/" onClick={handleHomeClick}>Home</Link>
        <Link to="/recipes">Recipes</Link>
        <a href="#footer">Contact</a>
      </nav>

      {/* hamburger menu */}
      <button
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile nav */}
      {open && (
        <div className="mobile-nav-dropdown">
          <Link to="/" onClick={handleHomeClick}>Home</Link>
          <Link to="/recipes" onClick={() => setOpen(false)}>Recipes</Link>
          <a href="#footer" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;