import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="py-4 shadow-md fade-in dark:bg-gray-900 dark:text-white transition duration-300">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold">
          Photo
          <span className="text-fuchsia-800 dark:text-fuchsia-500">Revive</span>
        </h1>
        
        {/* Burger Menu for Mobile */}
        <button
          id="burger-menu"
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-900 border-gray-900 dark:text-gray-100 dark:border-gray-100"
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z" />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav id="nav-menu" className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">Home</a>
          <a href="#" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">Revive</a>
          <a href="#" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">More Tools</a>
          <a href="#" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">Plans</a>
          <a href="#" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">FAQ</a>
          <a href="#" className="text-gray-900 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out text-xl">Contact</a>
        </nav>

        {/* Action Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <a
            href="login.html"
            className="text-fuchsia-700 border border-fuchsia-700 px-4 py-2 rounded-lg hover:bg-fuchsia-700 hover:text-white dark:hover:bg-fuchsia-500 transition duration-300 ease-in-out"
          >
            Log in
          </a>
          <a
            href="signup.html"
            className="bg-fuchsia-700 text-white px-4 py-2 rounded-lg hover:scale-105 hover:bg-fuchsia-800 dark:hover:bg-fuchsia-500 transition duration-300 ease-in-out"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu (Toggled by Button) */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden flex flex-col items-center mt-4 space-y-4">
            <a href="#" className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out">Explore Tools</a>
            <a href="#" className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out">Pricing</a>
            <a href="#" className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out">FAQ</a>
            <a href="#" className="text-gray-700 dark:text-gray-100 hover:text-fuchsia-700 dark:hover:text-fuchsia-500 transition duration-300 ease-in-out">Contact</a>
            <button className="text-fuchsia-700 border border-fuchsia-700 px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-fuchsia-700 hover:text-white dark:hover:bg-fuchsia-500 transition duration-300 ease-in-out">Log in</button>
            <button className="bg-fuchsia-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg hover:scale-105 hover:bg-fuchsia-800 dark:hover:bg-fuchsia-500 transition duration-300 ease-in-out">Sign Up</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
