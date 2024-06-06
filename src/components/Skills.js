// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
            <p className="text-lg text-gray-600 mb-8">
              Here you can see my skills, one of the fascinations of the computer world is the momentary changes of technologies, but I try to update my knowledge every day and experience new technologies.
            </p>
            <div className="flex flex-wrap space-x-2 space-y-2">
              {['HTML', 'CSS', 'Javascript', 'React', 'Apache Kafka', 'Apache NiFi', 'SQL'].map(skill => (
                <span key={skill} className="bg-yellow-500 text-white px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Language skill</h2>
            <p className="text-lg text-gray-600 mb-8">
              One of my hobbies is studying and learning languages. I try to be able to learn and use my favorite languages.
            </p>
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600">99%</div>
                <div className="text-lg text-gray-600">Kannada</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600">70%</div>
                <div className="text-lg text-gray-600">English</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
