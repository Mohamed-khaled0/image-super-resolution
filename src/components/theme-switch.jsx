/* eslint-disable no-unused-vars */
import React from "react";
import { useTheme } from "./theme-context"; // Adjust the path as necessary
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className="fixed bottom-5 right-5 bg-gray-200  dark:text-white w-[3rem] h-[3rem]  backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center  transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun aria-hidden="true" /> : <BsMoon aria-hidden="true" />}
    </button>
  );
}
