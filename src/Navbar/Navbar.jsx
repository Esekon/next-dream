import React from 'react';
import './Navbar.css'; // Make sure to create this CSS file
import { Link } from 'react-router-dom';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import { Navigate } from 'react-router-dom';
import Home from '../components/Home';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Next Dream</a>
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="navbar-links">
    
      <Link to= '/' className='btn btn-secondary mx-2 px-5' onClick={() =>Navigate ('/Home',{state:{Home}})}>Home </Link>
      <Link to= '/Signup' className='btn btn-secondary mx-2 px-5' onClick={() =>Navigate ('/Signup',{state:{Signup}})}>signup </Link>
      <Link to= '/Signin' className='btn btn-secondary mx-2 px-5' onClick={() =>Navigate ('/Signin',{state:{Signin}})}>signin </Link>
      </div>
    </nav>
  );
};

export default Navbar;
