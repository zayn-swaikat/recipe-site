import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="image">
            <img src="/assets/logo1.png" alt="Logo" className="footer-logo" />
            <h2>YummiFy</h2>
        </div>
        
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p className="footer-copy">
          © {new Date().getFullYear()} YummiFy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;