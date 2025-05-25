
import { useNavigate } from 'react-router-dom';
import '../pages/Welcomepage.css';
import backgroundimage from '../static/images/next dream logo.avif';
const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="welcome-page"
      style={{ backgroundimage: `url(${backgroundimage})` }}
    >
      <h1 className="welcome-heading">NEXT DREAM</h1>

      <div className="button-group">
        <button onClick={() => navigate('/Signup')} className="classy-button">
          Sign Up
        </button>
        <button onClick={() => navigate('/Signin')} className="classy-button">
          Sign In
        </button>
        <button onClick={() => navigate('/Mainpage')} className="classy-button outline">
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
