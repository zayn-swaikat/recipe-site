import { useState } from "react";

function Footer() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [thankMsg, setThankMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Message:", message)

    setThankMsg(`Thank you ${name} for reaching out!`)

    setName("")
    setEmail("")
    setMessage("")

    setTimeout(() => setThankMsg(""), 5000);
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">

        <div className="footer-left">
          <div className="image">
            <img src="/assets/logo1.png" alt="Logo" className="footer-logo" />
            <h2>YummiFy</h2>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} YummiFy. All rights reserved.
          </p>
        </div>

        <div className="footer-right">
          <form className="footer-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Contact us</h2>

            <div className="form-row">
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={20}
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-row">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-row">
              <textarea
                id="message"
                name="message"
                rows={5}
                minLength={25}
                maxLength={400}
                placeholder=" "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit" className="form-btn">Send Message</button>
            {thankMsg && <p className="thank-message">{thankMsg}</p>}
          </form>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;