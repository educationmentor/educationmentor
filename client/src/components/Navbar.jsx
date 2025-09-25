import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-8xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left side (Logo or placeholder) */}
        <div className="text-lg font-bold text-gray-800">
          <Link to="/"></Link>
        </div>

        {/* Center Nav Links */}
        <ul className="flex space-x-10 text-sm font-medium text-gray-700">
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
      </div>
    </nav>
  );
};

export default Navbar;
