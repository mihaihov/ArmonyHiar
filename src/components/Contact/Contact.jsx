import React from "react";
import { contactPageBackground_lg } from "../../assets";
import { logoWhite } from "../../assets";
import { phoneIcon } from "../../assets";
import { mailIcon } from "../../assets";
import { contactInformation } from "../../constants";
import { instagramColorIcon } from "../../assets";
import { logoBlack } from "../../assets";
import './Contact.css';
import FooterNavbar from "../FooterNavbar/FooterNavbar";

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
        <h1 className="text-[#8fa99e] pt-4 font-poppins text-center">{contactInformation.phoneNumber}</h1>
        <h1 className="text-[#8fa99e] pt-4 font-poppins text-center">{contactInformation.emailAddress}</h1>
        <a href={`${contactInformation.instagramPage}`} target="_blank" rel="noopener noreferrer" className="pt-8">
          <img src={instagramColorIcon} className="w-[30px] h-[30px] min-w-6 min-h-6" />
        </a>
        <div className="mt-20">
          <FooterNavbar />
        </div>
      </div>
    </div>
  )
};

export default Contact;
