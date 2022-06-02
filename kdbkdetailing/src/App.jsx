import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import List from './views/List/List';
import About from './views/About/About';
import Offer from './views/Offer/Offer';
import Contact from './views/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/cennik" element={<List />} />
        <Route path="oferta" element={<Offer />} />
        <Route path="kontakt" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
