import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="image">
            <img src="/assets/logo1.png" alt="Logo" className="footer-logo" />
            <h2>YummiFy</h2>
        </div>

      <form className="footer-form">
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required maxLength={20} />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <div className="form-row">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              minLength={25}
              maxLength={400}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        
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