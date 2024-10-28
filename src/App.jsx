/* eslint-disable no-unused-vars */
import React from "react";
import ThemeSwitch from "./components/theme-switch";
import './index.css'
import Header from "./components/header";
import Hero from "./components/hero";
function App() {
  return (
       <>
      <ThemeSwitch />
      <Header/>
      <Hero/>
      </>
  );
}

export default App;
