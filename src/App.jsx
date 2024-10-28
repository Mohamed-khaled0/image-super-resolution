/* eslint-disable no-unused-vars */
import React from "react";
import ThemeSwitch from "./components/theme-switch";
import './index.css'
import Header from "./components/header";
import Hero from "./components/hero";
import { ThemeProvider } from "./components/theme-context";
import Process from "./components/process";
function App() {
  return (
      <ThemeProvider>
      <Header/>
      <Hero/>
      <Process/>
      <ThemeSwitch />

      </ThemeProvider>
  );
}

export default App;
