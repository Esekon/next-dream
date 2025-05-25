import { Link } from "react-router-dom";
import instalogo from '../static/images/instalogo.jpg';
import fblogo from '../static/images/fblogo.png';
import whatsapplogo from '../static/images/whatsapplogo.png';

const Footer = () => {
  return (
    <div>
      <section className="row text-white bg-dark p-4">
        <h2 className="text-center">Next Dream</h2>

        <div className="col-md-4">
          <h4 className="text-center text-dark">Location</h4>
          <p className="text-white"><b>We are located in Turkana, Kainuk</b></p>
          <p className="text-white">Address: 11-30500</p>
        </div>

        <div className="col-md-4">
          <h4 className="text-center"><b>Contact us</b></h4>
          <form>
            <input type="email" placeholder="Enter your Email" className="form-control" />
            <br />
            <textarea
              className="form-control"
              placeholder="Send us a message"
              rows="7"
            />
            <br />
            <input type="submit" value="Send message" className="btn btn-outline-danger" />
          </form>
        </div>

        <div className="col-md-4">
          <h4 className="text-center">Stay Connected</h4>
          <br />
          {/* Use <a> instead of Link for external URLs */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img
              src={fblogo}
              alt="Facebook"
              width="50"
              height="50"
              style={{ marginRight: "20px" }}
            />
          </a>

          <a href="https://instagram.com/_.3guman_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img
              src={instalogo}
              alt="Instagram"
              width="50"
              height="50"
              style={{ marginRight: "20px" }}
            />
          </a>

          <a href="https://wa.me/254742208491" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <img
              src={whatsapplogo}
              alt="WhatsApp"
              width="50"
              height="50"
            />
          </a>

          <p className="text-white" style={{ marginTop: "15px" }}>
            You can keep up with us on our social platforms.
            Order your drinks and products easily through our platforms.
            Always remember to stay connected with us via Amazon, Facebook, and Instagram.
          </p>
        </div>
      </section>

      <footer className="bg-danger text-white text-center p-2">
        <h5>Next Dream &copy; 2025. All rights reserved.</h5>
      </footer>
    </div>
  );
};

export default Footer;
