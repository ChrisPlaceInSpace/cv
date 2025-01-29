import React, { useState } from 'react';
import "../CSS/Header.css";
import { Link } from 'react-router-dom';
import logoLarge from '../assets/images/hemsidelogo-transparent-trimmad.png';
import logoSmall from '../assets/images/hemsidelogo-transparent-350x350-trim.png'

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
        <img src={logoLarge} alt="Home page logo" className="big-logo" />
        <img src={logoSmall} alt="Home page logo" className="small-logo" />
      </div>
      <div className='burger-container'>
      <div className='burger-icon' onClick={toggleMobileMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      </div>
      <nav className={`menu-container ${mobileMenu ? 'activeMenu' : ''}`}>
        <a className='close-menu' type='button' aria-label='Close' onClick={closeMenu}>
          <span aria-hidden="true">&times;</span>
        </a>
        <Link to="/home" className='menu-item' onClick={closeMenu}>Home</Link>
          <Link to="/profile" className='menu-item' onClick={closeMenu}>Profile</Link>
          <Link to="/cv" className='menu-item' onClick={closeMenu}>CV</Link>
          {/* <Link to="/playroom" className='menu-item' onClick={closeMenu}>Playroom</Link> */}
          <Link to="/contact" className='menu-item' onClick={closeMenu}>Contact</Link>        
      </nav>
      </header>
    </>
  );
};

export default Header;
