/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/components/Homepage/Homepage";
import About from "../src/components/About/About";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import Contact from "./components/Contact/Contact";
import React from 'react'
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App