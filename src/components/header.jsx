import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const controls = useAnimation();

  // Toggles the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Closes the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#mobile-menu") && !e.target.closest("#burger-menu")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animate the mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.3 } });
    } else {
      controls.start({ opacity: 0, y: -20, transition: { duration: 0.3 } });
    }
  }, [isMobileMenuOpen, controls]);

  return (
    <header className="py-4 shadow-md fade-inbg-white dark:bg-gray-900 text-gray-800 dark:shadow-xl bg-white dark:text-white transition duration-300 fixed z-10 w-full">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          Photo<span className="text-fuchsia-800 dark:text-fuchsia-500">Revive</span>
        </Link>

        {/* Burger Menu Icon */}
        <button
          id="burger-menu"
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-900 border-gray-900 dark:text-gray-100 dark:border-gray-100 transition duration-300 ease-in-out"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="h-5 w-5 transform rotate-180 transition-transform duration-300" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>

        {/* Navigation Menu for Desktop */}
        <nav id="nav-menu" className="hidden md:flex space-x-6 mr-3">
          {/* Navigation links */}
          <Link to="/" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">Home</Link>
          <Link  to="/upload-section" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">Revive</Link>
          <Link to="/tools" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">Tools</Link>
          <Link to="/plans" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">Plans</Link>
          <Link to="/faq" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">FAQ</Link>
          <Link to="/contact" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">Contact</Link>
        </nav>

        {/* Action Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="text-fuchsia-700 border border-fuchsia-700 px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-lg hover:bg-fuchsia-700 hover:text-white dark:hover:bg-fuchsia-500 transition duration-300 ease-in-out"
          >
            LogIn
          </Link>
          <Link
            to="/signup"
            className="bg-fuchsia-700 text-white px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-lg hover:bg-fuchsia-800 dark:hover:bg-fuchsia-500 transition duration-300 ease-in-out"
          >
            SignUp
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            className="absolute text-[1.1rem] top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden flex flex-wrap gap-4 items-center justify-center py-4 space-y-4"
          >
            <Link to="/" onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out">Home</Link>
            <Link to="/revive" onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out">Revive</Link>
            <Link to="/tools" onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out">Tools</Link>
            <Link to="/plans" onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out">Plans</Link>
            <Link to="/faq" onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out">FAQ</Link>
            <Link to="/contact" onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out">Contact</Link>
            <Link to="/login" onClick={toggleMobileMenu} className="text-fuchsia-700 border border-fuchsia-700 px-3 py-1 rounded-lg hover:bg-fuchsia-700 hover:text-white dark:hover:bg-fuchsia-500 transition duration-300 ease-in-out">Log In</Link>
            <Link to="/signup" onClick={toggleMobileMenu} className="bg-fuchsia-700 text-white px-3 py-1 rounded-lg hover:bg-fuchsia-800 dark:hover:bg-fuchsia-500 transition duration-300 ease-in-out">Sign Up</Link>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
