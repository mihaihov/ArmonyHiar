/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/components/Homepage/Homepage";
import About from "../src/components/About/About";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import React from 'react'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App