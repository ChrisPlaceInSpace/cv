import React, { useEffect, useRef, useState } from 'react';
import "../../CSS/Header.css";
import { Link } from 'react-router-dom';
import logoLarge from '../../assets/images/hemsidelogo-transparent-trimmad.png';
import logoSmall from '../../assets/images/hemsidelogo-transparent-trimmad.png';

const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  
  const mobileMenuRef = useRef(null);

  const [stickyHeader, setStickyHeader] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleStickHeader = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > lastScrollTop) {
          setStickyHeader(false);
        } else {
          setStickyHeader(true);
        }
        lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
        if (scrollPosition === 0) setStickyHeader(false);
    };

    window.addEventListener("scroll", handleStickHeader);
    return () => window.removeEventListener("scroll", handleStickHeader);
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
      <header className={`header flex ${stickyHeader ? 'sticky' : 'hidden'}`}>
        <div className='header-container flex'>
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
        </div>
      </header>
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;
