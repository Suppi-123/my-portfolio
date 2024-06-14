import React from 'react';

import cmti from '../assets/cmti.png';
import zephyr from '../assets/zephyr.jpg';
import accenture from '../assets/accenture.jpg';

const Experiences = () => {
  return (
    <section id="experiences" className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">My Experiences</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          One of the most beautiful parts of every person's life, the part of their work life, I am very happy to have spent this part of my life with the people I loved and it has made my interest in my work more and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src={cmti} alt="CMTI" className="w-16 h-16 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Project Fellow-1 - CMTI</h3>
                <span className="text-yellow-500">Jun 2023 - Present</span>
              </div>
            </div>
            <ul className="text-gray-700">
              <li>- Applied React for the frontend to ensure an intuitive user experience and Python for the backend to handle data processing and analysis.</li>
              <li>- Spearheaded the integration of React and Python technologies to create a seamless and user-friendly interface for the Smart Tool Holder, resulting in increased efficiency, productivity, and user satisfaction.</li>
              <li>- Demonstrated strong problem-solving skills in resolving complex technical challenges associated with the project, showcasing adaptability and innovation.</li>
              <li>- Developed Frontend with React: Utilized React to create an intuitive and responsive user interface, ensuring a seamless user experience.</li>
              <li>- Backend Development with FastAPI: Implemented the backend using Python and FastAPI, facilitating efficient data processing and analysis.</li>
              <li>- Integration of Technologies: Spearheaded the integration of React and FastAPI to build a cohesive and user-friendly interface, significantly enhancing efficiency and user satisfaction.</li>
              <li>- Problem-Solving and Innovation: Demonstrated strong problem-solving skills by resolving complex technical challenges, showcasing adaptability and innovative thinking throughout the project lifecycle.</li>
              <li>- Project Types: Worked on both analyser and live project components, ensuring robust functionality and real-time performance.</li>
              <li>- Knowledge of Data Streaming Technologies: Acquired proficiency in Apache Kafka and Apache NiFi, enhancing capabilities in real-time data processing and integration.</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src={accenture} alt="accenture" className="w-16 h-16 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">AWS Cloud Practitioner - Accenture</h3>
                <span className="text-yellow-500">Dec 2022 - Apr 2023</span>
              </div>
            </div>
            <ul className="text-gray-700">
              <li>- Successfully completed the Cloud Practitioner Essentials course, covering fundamental AWS concepts and services.</li>
              <li>- Demonstrated proficiency in AWS Cloud Foundations.</li>
              <li>- Attained official certification as an AWS Cloud Practitioner.</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src={zephyr} alt="Zephyr Technologies" className="w-16 h-16 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Artificial Intelligence and Machine Learning - Zephyr Technologies</h3>
                <span className="text-yellow-500">Jul 2021 - Aug 2021</span>
              </div>
            </div>
            <ul className="text-gray-700">
              <li>- Built an outstanding and dynamic team of software engineers and developers which significantly boosted the overall success of the organization.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
