import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/cv">CV</a>
        </li>
        <li>
          <a href="/playroom">Playroom</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
