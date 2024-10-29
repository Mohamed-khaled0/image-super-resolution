// App.js
import React from "react";
import ThemeSwitch from "./components/theme-switch";
import './index.css';
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
import PaymentPage from "./components/paymentpage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Process />
              <UploadImage />
              <Tools />
              <Prices /> 
              <FAQ />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        <Footer />
        <ThemeSwitch />
      </ThemeProvider>
    </div>
  );
}

export default App;
