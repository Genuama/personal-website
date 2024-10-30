// src/App.js
import React from 'react';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SkillsSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
