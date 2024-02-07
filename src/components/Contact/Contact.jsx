import React from "react";
import { contactPageBackground_lg } from "../../assets";
import { logoWhite } from "../../assets";
import { phoneIcon } from "../../assets";
import { mailIcon } from "../../assets";
import { contactInformation } from "../../constants";
import { instagramColorIcon } from "../../assets";

const Contact = () => {
  return (
    <div className="bg-black">
      <img className="w-screen h-screen object-none object-top brightness-75" src={contactPageBackground_lg} />
      <img className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] pt-12" src={logoWhite} />
      <div className="absolute right-0 top-0 pt-12 pr-5 flex flex-row">
        <img src={phoneIcon} className="w-[24px] h-[24px] invisible sm:visible" />
        <p className="text-white pr-8 poppins text-sm">{contactInformation.phoneNumber}</p>
        <img src={mailIcon} className="w-[24px] h-[24px] invisible sm:visible" />
        <p className="text-white pr-8 poppins text-sm">{contactInformation.emailAddress}</p>
        <a href={`${contactInformation.instagramPage}`} target="_blank" rel="noopener noreferrer">
          <img src={instagramColorIcon} className="w-[30px] h-[30px] min-w-6 min-h-6" />
        </a>
      </div>
      <div className=" top-1/2 left-1/2 absolute flex flex-col justify-center items-center -translate-x-1/2">
        <h1 className="font-poppins tracking-wider text-9xl text-green-400">contact</h1>
        <h1 className="font-poppins text-3xl text-cyan-600">TE ASTEPTAM!</h1>
      </div>
      <div className="flex flex-col justify-center items-center pt-72">
        <img className="w-[300px]" src={logoWhite} />
        <div className="flex flex-row pt-20 w-full justify-center items-center">
          <h1 className="text-white">Armony Studio Bulevardul Unirii 51 Sector 3 Bucuresti</h1>
        </div>
        <h1 className="text-white pt-8">0784603428</h1>
        <h1 className="text-white pt-8">armonyhair1@gmail.com</h1>
        <a href={`${contactInformation.instagramPage}`} target="_blank" rel="noopener noreferrer" className="pt-8">
          <img src={instagramColorIcon} className="w-[30px] h-[30px] min-w-6 min-h-6" />
        </a>
        <div className={`flex flex-col justify-center items-center w-full pt-8`}>
          <h1 className="text-[#8fa99e] text-2xl tracking-wide lg:text-5xl lg:tracking-widest">navigare</h1>
          <div className="flex flex-row justify-center gap-8 lg:gap-0">
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer text-white">About</h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer text-white">Services</h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer text-white">Contact</h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer text-white">Home</h1>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
