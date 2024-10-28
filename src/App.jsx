/* eslint-disable no-unused-vars */
import React from "react";
import ThemeSwitch from "./components/theme-switch";
import './index.css'
import Header from "./components/header";
import Hero from "./components/hero";
import { ThemeProvider } from "./components/theme-context";
import Process from "./components/process";
import UploadImage from "./components/uploadImage";
import { div } from "framer-motion/client";
import Tools from "./components/tools";
function App() {
  return (
    <div className=" bg-white dark:bg-gray-900  dark:text-white">
      <ThemeProvider >
      <Header/>
      <Hero/>
      <Process/>
      <UploadImage/>
      <Tools/>
      <ThemeSwitch />
      </ThemeProvider>
      </div>
  );
}

export default App;
