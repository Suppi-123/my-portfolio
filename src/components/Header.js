// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Supriya k</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-4`}>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            About Me
          </Link>
          <Link to="skills" smooth={true} duration={500} onClick={closeMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Skills
          </Link>
          <Link to="experiences" smooth={true} duration={500} onClick={closeMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Experiences
          </Link>
          <Link to="projects" smooth={true} duration={500} onClick={closeMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
