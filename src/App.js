import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './pages/Contact';
import Homepage from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Homepage" element={<Homepage/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contacts/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
