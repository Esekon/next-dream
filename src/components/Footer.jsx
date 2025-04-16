import { Link } from "react-router-dom";
const Footer = () => {
  return (
     <div>
          <section className="row text-white bg-dark p-4">
            <h2 className="text-center">Next Dream</h2>
            <div className="col-md-4">
              <h4 className="text-center text-dark">Location</h4>
              <p className="text-white"><b>We are located in Turkana ,Kainuk</b></p>
              <p className="text-white">address:11-30500</p>
            </div>

            <div className="col-md-4">
              <h4 className="text-center"><b>Contact us</b>b</h4>
              <form>
                <input type="email" placeholder="Enter your Email" className="form-control"/> <br/>
                <textarea name="" id="" className="form-control" placeholder="send us a message" rows="7"></textarea> <br/>
                <input type="submit" value="send message" className="btn btn-outline-danger"/>
              </form>
            </div>

            <div className="col-md-4">
              <h4 className="text-center">stay Connected</h4> <br/>
              <Link to="https:/facebook.com">
                <img src="images/fb.png" alt="" width="50px" height="50px" style={{marginRight: "20px" }} />
              </Link>
              <Link to="https://instagram.com/_.3guman_">
                <img src="images/in.png" alt="" width="50px" height="50px" style={{marginRight: "20px" }}/>
              </Link>
              <Link to="https://whatsApp.com/254742208491" aria-label="WhatsApp">
                <img src="/images/download (37).jpeg" alt="" width="50px" height="50px"/>
              </Link>

              <p className="text-white">you can keep up in our our social platforms
                you can order your drinks through our various platformsr products easily. Always remember to stay connected through our platforms in amazon, facebook and instagram
              </p>
            </div>
           </section>
           <footer className="bg-danger  text-white text-center p-2">
            <h5>Next Dream&copy;2025. all right reserved</h5>
           </footer>
     </div>
    );
}
export default Footer;