import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Profil</a>
        </li>
        <li>
          <a href={"/about"}>CV</a>
        </li>
        <li>
          <a href={"/contact"}>Kontaktuppgifter</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
