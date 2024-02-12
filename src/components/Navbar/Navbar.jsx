/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./Navbar.css";
import { video, armony3 } from "../../assets";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className='navbar-container'>
      <button className="hamburger" onClick={toggleNavbar}>{isOpen ? 'X' : '☰'}</button>
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="background-wrapper">
          <video autoPlay loop muted className="navbar-video">
            <source src={video} type="video/mp4" />
          </video>
          <img src={armony3} alt="Background" className="navbar-image" />
        </div>
        <nav className="navbar-content">
          <a href="/" onClick={toggleNavbar}>Home</a>
          <a href="/services" onClick={toggleNavbar}>Services</a>
          <a href="/about" onClick={toggleNavbar}>About</a>
          <a href="/contact" onClick={toggleNavbar}>Contact</a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
