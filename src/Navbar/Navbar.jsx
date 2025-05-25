import './Navbar.css';
import { Link } from 'react-router-dom';
import  { useState } from 'react';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Next Dream</a>
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>

      <button className="toggle-button" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to='/Home' className='btn btn-secondary mx-2 px-5'>
          Home
        </Link>
        <Link to='/Signup' className='btn btn-secondary mx-2 px-5'>
          Signup
        </Link>
        <Link to='/Signin' className='btn btn-secondary mx-2 px-5 '>
          Signin
        </Link>
      
      </div>
    </nav>
  );
};

export default Navbar;
