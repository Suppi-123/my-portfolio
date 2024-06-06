// src/App.js
import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <section id="home">
        <MainSection />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
