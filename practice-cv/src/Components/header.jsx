import React, { useEffect, useRef, useState } from 'react';
import "../CSS/Header.css";
import { Link } from 'react-router-dom';
import logoLarge from '../assets/images/hemsidelogo-transparent-trimmad.png';
import logoSmall from '../assets/images/hemsidelogo-transparent-350x350-trim.png';

const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  console.log(mobileMenu);
  const mobileMenuRef = useRef(null);

  const [stickyHeader, setStickyHeader] = useState(false);
  let lastScrollTop = 0;

  const handleStickHeader = () => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > lastScrollTop) {
        setStickyHeader(false);
      }
      else if (scrollPosition < lastScrollTop) {
        setStickyHeader(true);
      }
      lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
    });
  };
  useEffect(() => {

    const handleScroll = () => {
      handleStickHeader();
      // setStickyHeader(window.scrollY >= 50);
    };
    addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => setMobileMenu(false);

  return (
    <>
      <header className={`header ${stickyHeader ? 'sticky' : ''}`}>
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
        <nav className={`menu-container ${mobileMenu ? 'activeMenu' : ''}`} ref={mobileMenuRef}>
          <a className='close-menu' type='button' aria-label='Close' onClick={closeMenu}>
            <span aria-hidden="true">&times;</span>
          </a>
          <Link to="/home" className='menu-item' onClick={closeMenu}>Chris' Corner</Link>
          {/* <a href="#profile" className='menu-item' onClick={closeMenu}>Professional Profile</a> */}
          {/* <Link to="/cv" className='menu-item' onClick={closeMenu}>Personal Profile</Link> */}
          {/* <Link to="/playroom" className='menu-item' onClick={closeMenu}>Playroom</Link> */}
          <Link to="/contact" className='menu-item' onClick={closeMenu}>Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
