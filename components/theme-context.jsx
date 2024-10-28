/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import prop-types

// Create the context
const ThemeContext = createContext();

// Theme Provider component
export function ThemeProvider({ children }) {
  // Initialize the theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Effect to update the document class based on the theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Define prop types for ThemeProvider
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
