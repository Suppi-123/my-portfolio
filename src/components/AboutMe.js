// src/components/AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">I love being a developer!</h2>
        <p className="text-lg text-gray-600 mb-8">
        Hello, I am Supriya K; a frontend developer with 1 year of experience. I specialize in ReactJS, HTML, CSS, and JavaScript. When I'm not coding, I enjoy exploring new design trends, participating in coding challenges, and hiking in the great outdoors.
        </p>
        <div className="flex space-x-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600">5</div>
            <div className="text-lg text-gray-600">Completed projects</div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
