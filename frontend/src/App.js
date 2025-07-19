import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Competence from './components/Competence';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Competence />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
