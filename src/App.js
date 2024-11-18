import React, { useState } from 'react';
import NavBar from './navbar';
import Pets from './pets';
import Services from './Services';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Donate from './donate'; // Import the Donate component
import './App.css'; 

function App() {
  // State to track the current section
  const [section, setSection] = useState("home");

  return (
    <div>
      <NavBar setSection={setSection} /> {/* Navigation bar */}

      {/* Conditional Rendering of Sections */}
      {section === "home" && <Home setSection={setSection} />}
      {section === "about" && <About />}
      {section === "pets" && <Pets />}
      {section === "services" && <Services />}
      {section === "contact" && <Contact />}
      {section === "donate" && <Donate />} 
    </div>
  );
}

export default App;
