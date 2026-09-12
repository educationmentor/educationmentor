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

  const handleNavigation = () => {
    setMenuOpen(false);
    scrollToTop();
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "MBBS in India", path: "/mbbs-in-india" },
    { name: "MBBS in Nepal", path: "/mbbs-in-nepal" },
    { name: "MBBS in Georgia", path: "/mbbs-in-georgia" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      {/* Spacer so page content doesn't hide behind fixed navbar */}
      <div className="h-[70px]" />

      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-[70px] flex justify-between items-center relative">

          {/* LOGO */}
          <div className="relative z-10">
            <Link
              to="/"
              className="flex items-center"
              onClick={handleNavigation}
            >
              <img
                src={logo}
                alt="Education Saathi Logo"
                className="h-[70px] sm:h-[76px] md:h-[82px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-medium">

            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={scrollToTop}
                  className={`relative transition-colors duration-300 hover:text-[#5964B5] ${
                    pathname === link.path
                      ? "text-[#5964B5]"
                      : "text-[#172033]"
                  }`}
                >
                  {link.name}

                  {/* Active underline */}
                  {pathname === link.path && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#F07C62] rounded-full" />
                  )}
                </Link>
              </li>
            ))}

          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-[#172033] focus:outline-none relative z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden absolute top-[70px] left-0 w-full bg-white border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ${
            menuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-6 py-5">

            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={handleNavigation}
                  className={`block py-3 border-b border-gray-100 transition-colors ${
                    pathname === link.path
                      ? "text-[#F07C62] font-semibold"
                      : "text-[#172033] hover:text-[#5964B5]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

          </ul>
        </div>

      </nav>
    </>
  );
};

export default Navbar;