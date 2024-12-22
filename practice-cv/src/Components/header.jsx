import React, { useState } from 'react';
import "../CSS/Header.css";
import { Link } from 'react-router-dom';
import logo from '../assets/images/hemsidelogo-transparent-trimmad.png';

const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  console.log(mobileMenu);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  
  const closeMenu = () => setMobileMenu(false);

  return (
    <>
    <header className='header'>
      <div className="logo-container">
        <img src={logo} alt="Home page logo" className="logo" />
      </div>
      <div className='burger-icon' onClick={toggleMobileMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      <nav className={`menu-container ${mobileMenu ? 'activeMenu' : ''}`}>
          <Link to="/profile" className='menu-item' onClick={closeMenu}>Profile</Link>
          <Link to="/cv" className='menu-item' onClick={closeMenu}>CV</Link>
          <Link to="/playroom" className='menu-item' onClick={closeMenu}>Playroom</Link>
          <Link to="/contact" className='menu-item' onClick={closeMenu}>Contact</Link>        
      </nav>
      </header>
    </>
  );
};

export default Header;
