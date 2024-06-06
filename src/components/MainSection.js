// src/components/MainSection.js
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const MainSection = () => {
  return (
    <section className="bg-yellow-50 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="container mx-auto p-4">
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-600">Hi There, I'm</div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">Supriya K</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">SD</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://twitter.com/Supriya_keshav" className="text-yellow-600 hover:text-gray-800" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://github.com/Suppi-123" className="text-yellow-600 hover:text-gray-800" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/supriya-keshav-03a79b208" className="text-yellow-600 hover:text-gray-800" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
