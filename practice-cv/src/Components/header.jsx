import React from 'react';
import "../CSS/Header.css";
import { Link } from 'react-router-dom';
import logo from '../assets/images/hemsidelogo-transparent.png';

const Header = () => {
  return (
    <>
      <div className="logo-container">
        <img src={logo} alt="Home page logo" className="logo" />
      </div>
      <nav>
        <ul className='ul-container'>
          <Link to="/profile" className='nav-item'>Profile</Link>
          <Link to="/cv" className='nav-item'>CV</Link>
          <Link to="/playroom" className='nav-item'>Playroom</Link>
          <Link to="/contact" className='nav-item'>Contact</Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
