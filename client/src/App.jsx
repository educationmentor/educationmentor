import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import USA from './pages/study-in-usa';
import RecentArticle from './pages/RecentArticle';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/study-in-usa" element={<USA />} />
          <Route path="/blogs" element={<RecentArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App