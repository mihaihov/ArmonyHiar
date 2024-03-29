/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/components/Homepage/Homepage";
import About from "../src/components/About/About";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import Contact from "./components/Contact/Contact";
import React, { useEffect } from 'react'
import Navbar from "./components/Navbar/Navbar";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import TeamPage from "./components/TeamPage/TeamPage";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import OpeningSoonPage from "./components/OpeningSoonPage/OpeningSoonPage";
import AcademyPage from "./components/AcademyPage/AcademyPage";

const App = () => {
  return (
    <div>
      <FloatingButton />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App