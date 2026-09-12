
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`w-full bg-white ${
        pathname === "/" ? "fixed" : ""
      } top-0 left-0 z-50 shadow-sm`}
    >
      {/* NAVBAR */}
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex justify-between items-center relative">

        {/* LOGO */}
        <div className="relative z-10">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => {
              setMenuOpen(false);
              scrollToTop();
            }}
          >
            <img
              src={logo}
              alt="Education Saathi Logo"
              className="h-[82px] md:h-[88px] lg:h-[92px] w-auto object-contain"
            />
          </Link>
        </div>


        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-700">

          <li>
            <Link
              to="/"
              className="hover:text-purple-600 transition-colors"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-purple-600 transition-colors"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/mbbs-in-india"
              className="hover:text-purple-600 transition-colors"
            >
              MBBS in India
            </Link>
          </li>

          <li>
            <Link
              to="/mbbs-in-nepal"
              className="hover:text-purple-600 transition-colors"
            >
              MBBS in Nepal
            </Link>
          </li>

          <li>
            <Link
              to="/mbbs-in-georgia"
              className="hover:text-purple-600 transition-colors"
            >
              MBBS in Georgia
            </Link>
          </li>

          <li>
            <Link
              to="/contact-us"
              className="hover:text-purple-600 transition-colors"
            >
              Contact Us
            </Link>
          </li>

        </ul>


        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-700 focus:outline-none relative z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>


      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">

          <ul className="flex flex-col space-y-1 px-6 py-5 text-gray-700 font-medium">

            <li>
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToTop();
                }}
                className="block py-3 hover:text-purple-600 transition-colors"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="block py-3 hover:text-purple-600 transition-colors"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/mbbs-in-india"
                onClick={() => setMenuOpen(false)}
                className="block py-3 hover:text-purple-600 transition-colors"
              >
                MBBS in India
              </Link>
            </li>

            <li>
              <Link
                to="/mbbs-in-nepal"
                onClick={() => setMenuOpen(false)}
                className="block py-3 hover:text-purple-600 transition-colors"
              >
                MBBS in Nepal
              </Link>
            </li>

            <li>
              <Link
                to="/mbbs-in-georgia"
                onClick={() => setMenuOpen(false)}
                className="block py-3 hover:text-purple-600 transition-colors"
              >
                MBBS in Georgia
              </Link>
            </li>

            <li>
              <Link
                to="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="block py-3 hover:text-purple-600 transition-colors"
              >
                Contact Us
              </Link>
            </li>

          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;

