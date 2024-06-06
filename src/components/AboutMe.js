// src/components/AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">I love being a developer!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Hello, I am Reza; The 26-year-old is a backend developer. I started programming in 2010 and continued to specialize in 2015. These days, along with programming, I study about startups and businesses, and besides all this, I play the dulcimer and watch my favorite series.
        </p>
        <div className="flex space-x-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600">53</div>
            <div className="text-lg text-gray-600">Completed projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600">6</div>
            <div className="text-lg text-gray-600">Positive review's</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
