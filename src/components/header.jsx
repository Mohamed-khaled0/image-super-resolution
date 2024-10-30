import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const controls = useAnimation();
  const location = useLocation(); // Get the current location

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#mobile-menu") && !e.target.closest("#burger-menu")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.3 } });
    } else {
      controls.start({ opacity: 0, y: -20, transition: { duration: 0.3 } });
    }
  }, [isMobileMenuOpen, controls]);

  // Determine if the current page is login, signup, or payment
  const isAuthPage = ['/login', '/signup', '/payment'].includes(location.pathname);

  return (
    <header className="py-4 shadow-md  bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition duration-300 fixed z-10 w-full">
      <div className="container w-[80%]  mx-auto flex justify-between items-center px-6">
        <RouterLink to="/" className=" text-3xl font-bold cursor-pointer">
          Photo<span className="text-fuchsia-800 dark:text-fuchsia-500">Revive</span>
        </RouterLink>

        <button
          id="burger-menu"
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-900 border-gray-900 dark:text-gray-100 dark:border-gray-100 transition duration-300"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="h-5 w-5 transform rotate-180 transition-transform duration-300" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>

        {/* Conditionally render navigation links */}
        {!isAuthPage && (
          <nav id="nav-menu" className="hidden md:flex space-x-6 mr-3">
            <ScrollLink to="hero-section"  duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Home</ScrollLink>
            <ScrollLink to="upload-section"  duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Revive</ScrollLink>
            <ScrollLink to="tools"  duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Tools</ScrollLink>
            <ScrollLink to="plans"  duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">Plans</ScrollLink>
            <ScrollLink to="faq"  duration={500} offset={-70} className="text-xl cursor-pointer hover:text-fuchsia-500 transition duration-200">FAQ</ScrollLink>
          </nav>
        )}

        {/* Show Login and Signup buttons */}
        {!isAuthPage && (
          <div className="hidden md:flex  space-x-4">
            <RouterLink to="/login" className="text-fuchsia-700 border px-1 py-1 rounded-lg hover:bg-fuchsia-700 hover:text-white transition duration-300 cursor-pointer">Log In</RouterLink>
            <RouterLink to="/signup" className="bg-fuchsia-700 text-white px-1 py-1 rounded-lg hover:bg-fuchsia-800 transition duration-300 cursor-pointer">Sign Up</RouterLink>
          </div>
        )}

{isMobileMenuOpen && !isAuthPage && (
  <motion.div
    id="mobile-menu"
    initial={{ opacity: 0, y: -20 }}
    animate={controls}
    className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden flex flex-row flex-wrap  justify-center gap-4 items-center py-4 cursor-pointer"
  >
    <ScrollLink to="hero-section"  duration={500} onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-500 transition duration-200">Home</ScrollLink>
    <ScrollLink to="upload-section"  duration={500} onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-500 transition duration-200">Revive</ScrollLink>
    <ScrollLink to="tools"  duration={500} onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-500 transition duration-200">Tools</ScrollLink>
    <ScrollLink to="plans"  duration={500} onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-500 transition duration-200">Plans</ScrollLink>
    <ScrollLink to="faq"  duration={500} onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-500 transition duration-200">FAQ</ScrollLink>
    
    {/* Login and Signup Links in Mobile Menu */}
    <RouterLink to="/login" onClick={toggleMobileMenu} className="text-fuchsia-700 border px-1 py-1 rounded-lg">Log In</RouterLink>
    <RouterLink to="/signup" onClick={toggleMobileMenu} className="bg-fuchsia-700 text-white px-1 py-1 rounded-lg">Sign Up</RouterLink>
  </motion.div>
)}
      </div>
    </header>
  );
};

export default Header;
