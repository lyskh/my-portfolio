import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThankYou from './components/ThankYou';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Gallery />
            <About />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;

