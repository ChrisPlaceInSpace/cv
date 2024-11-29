import React from 'react';
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className='ul-container'>
        <a href="/">Profile</a>
        <a href="/cv">CV</a>
        <a href="/playroom">Playroom</a>
        <a href="/contact">Contact</a>
      </ul>
    </nav>
  );
};

export default Navbar;
