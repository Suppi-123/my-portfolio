import React, { useState } from 'react';
import Modal from 'react-modal';

import P1Image from '../assets/P1.png';
import P2Image from '../assets/P2.png';
import P3Image from '../assets/P3.png';
import mpImage from '../assets/mp.png';
import mp2Image from '../assets/mp2.png';
import mp3Image from '../assets/mp3.png';
import mp4Image from '../assets/mp4.png';

const projectDetails = [
  {
    id: 1,
    title: "Spike® Measurement System",
    description: "A tool for precise measurement and monitoring of force parameters in industrial applications, enhancing accuracy and efficiency.",
    info: [
      "Connection Automation: The system automatically scans and connects to spike® devices through USB ports, simplifying the initial setup process.",
      "Measurement Configuration: Users can select and configure multiple spikes®, input process parameters, and choose storage formats for measurement data.",
      "Real-time Monitoring: The system offers real-time monitoring of bending moments, torsion, and spike polar, with graphical representations of these parameters over time.",
      "Trigger Setup: The Spike® 1.2 program allows for the creation of triggers based on reference measurements to initiate actions when specific conditions are met.",
      "Data Logging and Alarms: The system logs measurement data, monitors parameter history, and generates alarms when set limits are exceeded, ensuring users are alerted to potential issues promptly."
    ],
    technologies: ["Frontend: React, Tailwind CSS", "Backend: Python, FastAPI"],
    features: [
      "Connect with spike®_connect:",
      "Automatic scanning and display of connected spike® devices.",
      "Connection wizard for easy setup.",
      "spike®_measurement:",
      "Selection and registration of spikes.",
      "Configuration of meta-settings and process parameters.",
      "Data storage with customizable formats and automatic naming.",
      "Force-Trigger Measuring:",
      "Import, record, or continue measurements.",
      "Set trigger limits and define metadata.",
      "Start and monitor spike®_trigger measurements.",
      "Monitoring and History:",
      "Display of bending moment, torsion, and spike polar graphs.",
      "Five-minute history display with reset option.",
      "Alarms and Settings:",
      "Alarm notifications for exceeded limit values.",
      "Integration with spike®_app for remote alerts.",
      "Device configuration and management."
    ],
    images: [P1Image, P2Image, P3Image] // Use the imported images
  },
  {
    id: 2,
    title: "Reliable and Effective Health Monitoring System using Advanced Sensors",
    description: "A remote healthcare system for patient monitoring and tracking using locally available sensors.",
    info: [
      "Sensors screen the patients' health conditions and the data are processed using a microcontroller and useful information is saved to the cloud.",
      "Primarily the system would be extracting the bio signal, ECG using an ECG sensor.",
      "Through continuous monitoring and graphical representation of the patient’s information, doctors/nurses/relatives can remotely check the patient’s condition.",
      "Furthermore, if the condition becomes critical, a notification is sent to the doctor/nurse/relative to inform them and they will have the opportunity to start a video call."
    ],
    technologies: ["Microcontroller: Arduino Uno Board", "Sensors: ECG/AD8232, Temperature sensor (LM35), ESP8266 WIFI, SPO2 Max 30100, Humidity sensor (DHT11), Toxic Gas sensor (MQ3)", "Platform: IoT Cloud", "IDE: Arduino 1.8.18", "Database: MySQL", "Technologies used: C, SQL, PHP"],
    features: [
      "Login: This use case denotes a set of actions required for Subject to login into the application.",
      "Call Service: This use case denotes a set of actions required by the doctor to call a guardian or patient in case of medical emergencies.",
      "View Location: This use case denotes a set of actions required by the Guardian or Doctor to locate the subject on the map after receiving his location details.",
      "Messaging Service: This use case denotes a set of actions required by the doctor to send a message to the subject’s guardian in case of emergencies."
    ],
    conclusion: "This system will provide constant health monitoring facilities for the patients who are in the ICU or bedridden at home remotely from any place. ECG sensor and digital thermometer are the two sensors that have been used to allow real-time monitoring of ECG signal and temperature of the patient. Moreover, the data is continuously updated to the cloud at regular time intervals. This helps the doctors, nurses, or the relatives of the patient to monitor the health condition of the patient and also helps to take any action at the appropriate time. The system also sends an automated notification via text to the doctors or the relatives if the ECG signals and the temperature reading go above or below the threshold value. It will help doctors in many ways and will enhance the efficiency of monitoring and treatment for patients.",
    images: [mpImage, mp2Image, mp3Image, mp4Image] // Use the imported images
  },
];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Default image

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedImage(project.images ? project.images[0] : null); // Default to the first image if available
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImage(null); // Reset to null image when closing modal
    setModalIsOpen(false);
  };

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  return (
    <section id="projects" className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">What have I created?</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Creating is always attractive and I tried to never deprive myself of this pleasure, here you can see the projects published by me.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectDetails.map((project) => (
            <div key={project.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {project.images ? (
                  <img src={project.images[0]} alt={project.title} className="w-12 h-12 mr-4" />
                ) : (
                  <img src={project.image} alt={project.title} className="w-12 h-12 mr-4" />
                )}
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                {project.description}
              </p>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => openModal(project)}>Read More</button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="fixed inset-0 bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto my-20 overflow-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      >
        {selectedProject && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-center">{selectedProject.title}</h2>
            {selectedImage && <img src={selectedImage} alt={selectedProject.title} className="w-full mb-4" />}
            {selectedProject.images && (
              <div className="flex justify-center mb-4">
                {selectedProject.images.map((image, index) => (
                  <img key={index} src={image} alt={`P${index + 1}`} className="w-16 h-16 cursor-pointer mx-1" onClick={() => handleImageChange(image)} />
                ))}
              </div>
            )}
            <p className="text-lg mb-4">{selectedProject.description}</p>
            <ul className="list-disc pl-5 mb-4">
              {selectedProject.info.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-bold mb-2">Technologies Used</h3>
            <ul className="list-disc pl-5 mb-4">
              {selectedProject.technologies.map((tech, index) => (
                <li key={index} className="mb-2">{tech}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-bold mb-2">Detailed Features</h3>
            <ul className="list-disc pl-5">
              {selectedProject.features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
            {selectedProject.conclusion && (
              <div>
                <h3 className="text-2xl font-bold mb-2">Conclusion</h3>
                <p className="mb-4">{selectedProject.conclusion}</p>
              </div>
            )}
            <button onClick={closeModal} className="bg-yellow-500 text-white px-4 py-2 rounded mt-4 mx-auto block">Close</button>
          </>
        )}
      </Modal>

    </section>
  );
};

export default Projects;

// Ensure to set the app element to avoid screen readers from reading background content
Modal.setAppElement('#root');
