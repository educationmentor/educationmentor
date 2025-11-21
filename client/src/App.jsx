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


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className=''/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/study-in-usa" element={<USA />} />
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