import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import Homepage from './pages/Hompage';
import About from './pages/About';
import Room from './pages/Room';
import Gallary from './pages/Gallary';
import Contact from './pages/Contact';


const App = () => {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Room />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  
  );
};

export default App;
