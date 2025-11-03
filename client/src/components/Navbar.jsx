import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icons
import logo from '../assets/images/logo.png';  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white  fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-lg font-bold text-gray-800">
          <Link to="/">
          <img src={logo} className="w-[30vw] md:w-[8vw]" alt="EduMentor Logo"/></Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-purple-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-600">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-purple-600">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-600">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-purple-200 text-purple-700 px-6 py-2 rounded-full font-medium hover:bg-purple-300 transition"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white  border-t">
          <ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blogs" onClick={() => setMenuOpen(false)}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="bg-purple-200 text-purple-700 px-6 py-2 rounded-full font-medium hover:bg-purple-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
