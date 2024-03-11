/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./Navbar.css";
import { video, armony3 } from "../../assets";
import { NavbarItems } from '../../constants';
import { navBarMobile_bg } from '../../assets';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className='navbar-container'>
      <button className="hamburger" onClick={toggleNavbar}>{isOpen ? 'X' : '☰'}</button>
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="background-wrapper">
          <video autoPlay loop muted playsInline className="navbar-video">
            <source src={video} type="video/mp4" />
          </video>
          <video autoPlay loop muted playsInline className="navbar-image">
            <source src={navBarMobile_bg} type="video/mp4" />
          </video>
        </div>
        <nav className="navbar-content">
          {NavbarItems.map((item, index) => (
            <a key={item.id} href={item.link} onClick={toggleNavbar}>
              <h1 className=' text-5xl mb-3 md:text-6xl md:mb-4 lg:text-7xl lg:mb-10'>
                {item.label}
              </h1>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
