import React from "react";
import { contactPageBackground_lg } from "../../assets";
import { logoWhite } from "../../assets";
import { phoneIcon } from "../../assets";
import { mailIcon } from "../../assets";
import { contactInformation } from "../../constants";
import { instagramColorIcon } from "../../assets";
import { logoBlack } from "../../assets";
import './Contact.css';

const Contact = () => {
  return (
    <div className="bg-white">
      <img className="w-screen h-screen object-none object-top brightness-75" src={contactPageBackground_lg} />
      <img className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] pt-12" src={logoWhite} />
      <div className="absolute right-0 top-0 pt-12 pr-5 flex flex-col slow-appear lg:flex-row">
        <div className="flex flex-row pb-2  transition-all duration-500 ease-in-out lg:pb-0 opacity-0 md:opacity-100">
          <img src={phoneIcon} className="w-[24px] h-[24px]" />
          <p className="text-white pr-8 poppins text-sm">{contactInformation.phoneNumber}</p>
        </div>
        <div className="flex flex-row transition-all duration-500 ease-in-out pb-2 lg:pb-0 opacity-0 md:opacity-100">
          <img src={mailIcon} className="w-[24px] h-[24px]" />
          <p className="text-white pr-8 poppins text-sm">{contactInformation.emailAddress}</p>
        </div>
        <a href={`${contactInformation.instagramPage}`} target="_blank" rel="noopener noreferrer">
          <img src={instagramColorIcon} className="w-[30px] h-[30px] min-w-6 min-h-6  opacity-0 md:opacity-100  transition-all duration-500 ease-in-out" />
        </a>
      </div>
      <div className="top-1/2 left-1/2 absolute flex flex-col justify-center items-center -translate-x-1/2 mt-8 slow-appear">
        <h1 className="transition-all duration-500 ease-in-out font-thin tracking-wider text-[50px] md:text-[90px] lg:text-[120px] text-[#8fa99e]">contact</h1>
        <h1 className="transition-all duration-500 ease-in-out  font-poppins  text-xs md:text-sm lg:text-xl text-white tracking-widest">HAI SA DISCUTAM</h1>
      </div>
      <div className="flex flex-col justify-center items-center pt-72">
        <img className="w-[300px]" src={logoBlack} />
        <div className="flex flex-row pt-20 w-full justify-center items-center">
          <h1 className="text-[#8fa99e] font-poppins text-center">Armony Studio Bulevardul Unirii 51 Sector 3 Bucuresti</h1>
        </div>
        <h1 className="text-[#8fa99e] pt-4 font-poppins text-center">0784603428</h1>
        <h1 className="text-[#8fa99e] pt-4 font-poppins text-center">armonyhair1@gmail.com</h1>
        <a href={`${contactInformation.instagramPage}`} target="_blank" rel="noopener noreferrer" className="pt-8">
          <img src={instagramColorIcon} className="w-[30px] h-[30px] min-w-6 min-h-6" />
        </a>
        <div className={`flex flex-col justify-center items-center w-full pt-8`}>
          <h1 className="text-[#8fa99e] text-2xl tracking-wide transition-all duration-500 ease-in-out lg:text-5xl lg:tracking-widest">navigare</h1>
          <div className="flex flex-row justify-center gap-8 lg:gap-0">
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 transition-all duration-500 ease-in-out hover:text-[#8fa99e] cursor-pointer text-[#8fa99e]"><a href="/about">About</a></h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 transition-all duration-500 ease-in-out hover:text-[#8fa99e] cursor-pointer text-[#8fa99e]"><a href="/services">Services</a></h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 transition-all duration-500 ease-in-out hover:text-[#8fa99e] cursor-pointer text-[#8fa99e]"><a href="/contact">Contact</a></h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 transition-all duration-500 ease-in-out hover:text-[#8fa99e] cursor-pointer text-[#8fa99e]"><a href="/">Homepage</a></h1>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
