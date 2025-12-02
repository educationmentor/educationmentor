import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import USA from './pages/Destinations/study-in-usa';
import Footer from "./components/Footer";
import GetStarted from './components/GetStarted';
import ContactUs from './pages/Contact-us';
import Blogs from './pages/Blogs';
import StudyInGermany from './pages/Destinations/study-in-germany';


const App = () => {
  return (
    <>
      <BrowserRouter className=''>
        <Navbar />
        <div className='bg-white'/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/study-in-usa" element={<USA />} />
          <Route path="/study-in-germany" element={<StudyInGermany />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <GetStarted/>
        <Footer />


      </BrowserRouter>
    </>
  )
}

export default App