// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Supriya k</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experiences"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
