import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import USA from './pages/Destinations/study-in-usa';
import Footer from "./components/Footer";
import GetStarted from './components/GetStarted';


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
        </Routes>
        <GetStarted/>
        <Footer />


      </BrowserRouter>
    </>
  )
}

export default App