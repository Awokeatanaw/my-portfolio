
import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import Contactme from './component/contact';
import Aboutme from './component/aboutme';
import Project from './component/project';
import Skills from './component/skills';
import Footer from './component/footer';

function App() {
  return (
   <>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      
        <div className='flex-grow md:mt-16 mt-16'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contactme />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        </div>
        
        <Footer />
      </div>
      </>
  );
}
export default App;