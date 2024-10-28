/* eslint-disable no-unused-vars */
import React from "react";
import ThemeSwitch from "./components/theme-switch";
import './index.css'
import Header from "./components/header";
import Hero from "./components/hero";
import { ThemeProvider } from "./components/theme-context";
import Process from "./components/process";
import UploadImage from "./components/uploadImage";
import Tools from "./components/tools";
import Prices from "./components/prices";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
import Signup from "./components/signup";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom"; // Remove Router here

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          </Routes>
        <Hero />
        <Process />
        <UploadImage />
        <Tools />
        <Prices />
        <FAQ />
        <Footer />
        <ThemeSwitch />
      </ThemeProvider>
    </div>
  );
}

export default App;
