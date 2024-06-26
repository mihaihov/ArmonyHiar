/* eslint-disable no-unused-vars */
import React from 'react'
import { p1, p2, p3, p4, logoWhite } from "../../assets";
import ".//ServicesPage.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactInformation } from '../../constants';
import { hairCutSilhouette } from '../../assets';
import { hairStyleSilhouette } from '../../assets';
import { careSilhouette } from '../../assets';
import { instagramColorIcon } from '../../assets';
import { instagramPhoto2 } from '../../assets';
import { phoneIcon } from '../../assets';
import { mailIcon } from '../../assets';
import FooterNavbar from "../FooterNavbar/FooterNavbar";

const ServicesPage = () => {
  return (
    <div className='bg-white'>
      <img className="w-screen h-screen brightness-50 object-cover object-left md:object-center" src={instagramPhoto2} />
      <div className="servicesLogo">
        <img src={logoWhite} alt="logo" />
      </div>

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

      <div className="top-1/2 left-1/2 absolute flex flex-col justify-center items-center -translate-x-1/2 mt-8 ">
        <div className="text-white text-7xl md:text-6xl lg:text-9xl font-serif text-center tracking-wider"> services</div>
        <div className="text-white text-1xl font-serif text-center tracking-[.35em] pt-4">ce putem face pentru tine</div>
      </div>


      <div className="flex flex-col px-4 lg:px-0 pt-0 mg:pt-8 md:flex-row justify-center gap-8 lg:gap-20">
        <div className=" bg-[#9e8f8f] w-full lg:w-[500px] h-[500px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in-out duration-500 delay-0">
          <img src={hairCutSilhouette} className='w-[80%] h-[80%] rounded-md z-0' />
          <div className='flex flex-col text-center justify-center'>
            <h1 className='text-center text-[#8fa99e] font-poppins font-bold text-2xl'>TUNS</h1>
            <h1 className='text-center text-[#313638] mt-8 font-poppins text-sm tracking-widest'>preturi incepand de la 90 RON</h1>
          </div>
        </div>
        <div className="bg-[#9e8f8f] w-full lg:w-[500px] h-[500px] shadow-xl hover:shadow-2xl hover:scale-105 transition-transform ease-in-out duration-500 delay-0">
          <img src={hairStyleSilhouette} className='w-[80%] h-[80%] rounded-md' />
          <div className='flex flex-col text-center justify-center'>
            <h1 className='text-center text-[#8fa99e] font-poppins font-bold text-2xl'>STYLING</h1>
            <h1 className='text-center text-[#313638] mt-8 font-poppins text-sm tracking-widest'>preturi incepand de la 50 RON</h1>
          </div>
        </div>
        <div className="bg-[#9e8f8f] w-full lg:w-[500px] shadow-xl hover:shadow-2xl hover:scale-105 transition-transform ease-in-out duration-500 delay-0">
          <img src={careSilhouette} className='w-[80%] h-[80%] rounded-md' />
          <div className='flex flex-col text-center justify-center'>
            <h1 className='text-center text-[#8fa99e] font-poppins font-bold text-2xl'>SERVICII DE INGRIJIRE</h1>
            <h1 className='text-center text-[#313638] mt-8 mb-2 font-poppins text-sm tracking-widest'>preturi incepand de la 50 RON</h1>
          </div>
        </div>
      </div>

      <div className="servicesThirdSection">

        <div className="thirdSTitle">
          Tratam fiecare client cu seriozitate si responsabilitate deplina. Stim cat de important este timpul tau, cu toate acestea, ne cerem scuze daca programarile nu sunt respectate intotdeauna la minut. Ne luam angajamentul, ca si in situatiile neprevazute, sa nu existe o intarziere mai mare de maxim 10 minute din partea noastra.
        </div>
      </div>

      <FooterNavbar />

    </div>
  )
}

export default ServicesPage
