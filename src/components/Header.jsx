import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false); 
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-[#F15A28] font-semibold"
      : "text-gray-800 hover:text-[#F15A28] font-semibold";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`max-w-[1920px] sticky top-0 z-30 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      style={{
        backgroundImage: "url('/assets/svg/plain_dot.svg')",
      }}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/" aria-label="Go to Home">
            <img
              src="./assets/png/logo.png"
              alt="HanaToria Logo"
              className="h-18"
            />
          </Link>
        </div>

        {/* Navigation Menu (Desktop View) */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`font-lexend text-base font-light leading-7 ${getLinkClass(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-lexend text-base font-light leading-7 ${getLinkClass(
              "/about"
            )}`}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className={`font-lexend text-base font-light leading-7 ${getLinkClass(
              "/services"
            )}`}
          >
            Our Services
          </Link>
          <Link
            to="/works"
            className={`font-lexend text-base font-light leading-7 ${getLinkClass(
              "/works"
            )}`}
          >
            Our Works
          </Link>
          <Link
            to="/contact"
            className={`font-lexend text-base font-light leading-7 ${getLinkClass(
              "/contact"
            )}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu (Mobile View) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            <Link
              to="/"
              className={`font-lexend text-base leading-7 font-light ${getLinkClass(
                "/about"
              )}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-lexend text-base leading-7 font-light ${getLinkClass(
                "/about"
              )}`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`font-lexend text-base leading-7 font-light ${getLinkClass(
                "/services"
              )}`}
            >
              Our Services
            </Link>
            <Link
              to="/works"
              className={`font-lexend text-base leading-7 font-light ${getLinkClass(
                "/works"
              )}`}
            >
              Our Works
            </Link>
            <Link
              to="/contact"
              className={`font-lexend text-base leading-7 font-light ${getLinkClass(
                "/contact"
              )}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
