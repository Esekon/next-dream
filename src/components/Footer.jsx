import { Link } from "react-router-dom";
import instalogo from '../static/images/instalogo.jpg';
import fblogo from '../static/images/fblogo.png';
import whatsapplogo from '../static/images/whatsapplogo.png';

const Footer = () => {
  return (
    <div className="footer-container bg-dark text-white pt-4">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Logo & Location */}
          <div className="col-md-4 mb-4">
            <h3 className="text-danger fw-bold mb-3">Next Dream</h3>
            <h5 className="text-white">📍 Location</h5>
            <p><strong>Kainuk, Turkana</strong></p>
            <p>Address: 11-30500</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white mb-3">📬 Contact Us</h5>
            <form>
              <input type="email" placeholder="Enter your email" className="form-control mb-2" />
              <textarea className="form-control mb-2" rows="4" placeholder="Your message..." />
              <input type="submit" className="btn btn-outline-danger w-100" value="Send Message" />
            </form>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white mb-3">📲 Stay Connected</h5>
            <div className="d-flex justify-content-center justify-content-md-start mb-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <img src={fblogo} alt="Facebook" width="40" height="40" />
              </a>
              <a href="https://instagram.com/_.3guman_" target="_blank" rel="noopener noreferrer" className="me-3">
                <img src={instalogo} alt="Instagram" width="40" height="40" />
              </a>
              <a href="https://wa.me/254742208491" target="_blank" rel="noopener noreferrer">
                <img src={whatsapplogo} alt="WhatsApp" width="40" height="40" />
              </a>
            </div>
            <p>
              Order your drinks and products easily through our platforms.
              Stay connected via Facebook, Instagram & WhatsApp.
            </p>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <footer className="bg-danger text-center py-2 mt-4">
        <p className="mb-0 fw-bold">Next Dream &copy; 2025. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
