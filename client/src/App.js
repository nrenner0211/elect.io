import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Contact from "./components/Contact";
import Nav from './components/Nav';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>

        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
