import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import HireMe from './components/HireMe';
import Skills from './components/Skills';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hire-me" element={<HireMe />} />
      </Routes>
    </Router>
  );
}

export default App;
