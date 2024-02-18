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

const ServicesPage = () => {
  return (
    <div className="servicesContainer">
      <div className="servicesWrapper">

        <div className="servicesFirstSection object-none bg-cover brightness-75">

          <div className='firstSectionWrapper'>

            <div className="servicesLogo">
              <img src={logoWhite} alt="logo" />
            </div>

            <div className='contact-containerService'>
              <div>{contactInformation.phoneNumber}</div>
              <div>{contactInformation.emailAddress}</div>
              <a href={`${contactInformation.instagramPage}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="white" opacity={0.6} />
              </a>
            </div>
          </div>

          <div className="texts">
            <div className="text-white text-7xl md:text-6xl lg:text-9xl font-serif text-center tracking-wider"> services</div>
            <div className="text-white text-1xl font-serif text-center tracking-[.35em] pt-4">ce putem face pentru tine</div>
          </div>

        </div>


        <div className="flex flex-col px-4 lg:px-0 pt-8 md:flex-row justify-center gap-8 lg:gap-20">
          <div className="bg-red-100 w-full lg:w-[500px] h-[500px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all ease-in-out duration-500 delay-0">
            <img src={hairCutSilhouette} className='w-[80%] h-[80%] rounded-md z-0' />
            <h1 className='text-center mt-8 text-[#8fa99e] font-poppins font-bold text-2xl'>TUNS</h1>
          </div>
          <div className="bg-red-100 w-full lg:w-[500px] h-[500px] shadow-xl hover:shadow-2xl hover:scale-105 transition-transform ease-in-out duration-500 delay-0">
            <img src={hairStyleSilhouette} className='w-[80%] h-[80%] rounded-md' />
            <h1 className='text-center mt-8 text-[#8fa99e] font-poppins font-bold text-2xl'>STYLING</h1>
          </div>
          <div className="bg-red-100 w-full lg:w-[500px] shadow-xl hover:shadow-2xl hover:scale-105 transition-transform ease-in-out duration-500 delay-0">
            <img src={careSilhouette} className='w-[80%] h-[80%] rounded-md' />
            <h1 className='text-center mt-8 text-[#8fa99e] font-poppins font-bold text-2xl'>SERVICII DE INGRIJIRE</h1>
          </div>
        </div>

        <div className="servicesThirdSection">

          <div className="thirdSTitle">
            Tratam fiecare client cu seriozitate si responsabilitate deplina. Stim cat de important este timpul tau, cu toate acestea, ne cerem scuze daca programarile nu sunt respectate intotdeauna la minut. Ne luam angajamentul, ca si in situatiile neprevazute, sa nu existe o intarziere mai mare de maxim 10 minute din partea noastra.
          </div>

          {/* <div className="servicesSectionTexts">

            <div className="thirdContent">
              <div className="conTitle">define me ----------------------------------</div>
              <div className="conContent">Want your natural curls to stand out? This method includes shingling, coiling, flat twists, individual twists, or bantu knot out to enhance your beautiful texture.</div>
            </div>

            <div className="thirdContent">
              <div className="conTitle">define me --------------------------------</div>
              <div className="conContent">Want your natural curls to stand out? This method includes shingling, coiling, flat twists, individual twists, or bantu knot out to enhance your beautiful texture.</div>
            </div>

            <div className="thirdContent">
              <div className="conTitle">define me --------------------------------</div>
              <div className="conContent">Want your natural curls to stand out? This method includes shingling, coiling, flat twists, individual twists, or bantu knot out to enhance your beautiful texture.</div>
            </div>
          </div> */}
        </div>

        <div className={`flex flex-col justify-center items-center w-full`}>
          <h1 className="text-[#8fa99e] text-2xl tracking-wide lg:text-5xl lg:tracking-widest">navigare</h1>
          <div className="flex flex-row justify-center gap-4 md:gap-8 lg:gap-0">
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer"> <a href="/">Home</a></h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer"><a href="/about">About</a></h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer"><a href="/services">Services</a></h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer"><a href="/contact">Contact</a></h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ServicesPage
