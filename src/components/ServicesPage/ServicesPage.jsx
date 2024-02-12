/* eslint-disable no-unused-vars */
import React from 'react'
import { p1, p2, p3, p4, logoWhite } from "../../assets";
import ".//ServicesPage.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServicesPage = () => {
  return (
    <div className="servicesContainer">
      <div className="servicesWrapper">

        <div className="servicesFirstSection">

          <div className='firstSectionWrapper'>

            <div className="servicesLogo">
              <img src={logoWhite} alt="logo" />
            </div>

            <div className='contact-containerService'>
              <div>0784603428</div>
              <div>armonyhair@gmail.com</div>
              <FontAwesomeIcon icon={faInstagram} size="2x" color="white" opacity={0.6} />
            </div>
          </div>

          <div className="texts">
            <div className="mainText"> services</div>
            <div className="subText">come see what i do</div>
          </div>

        </div>


        <div className="servicesSecondSection">

          <div className="servicesPhotos">
            <div className="photos">
              <img src={p1} alt="" />
              <div className="photoText">define me<br />
                curl me</div>
            </div>
            <div className="photos">
              <img src={p2} alt="" />
              <div className="photoText">curl me <br />
                cut me</div>
            </div>

            <div className="photos">
              <img src={p3} alt="" />
              <div className="photoText">crown me <br />
                polish me</div>
            </div>

            <div className="photos">
              <img src={p4} alt="" />
              <div className="photoText">color me <br />
                straighten me</div>
            </div>
          </div>
        </div>

        <div className="servicesThirdSection">

          <div className="thirdSTitle">
            Each appointment is one-on-one, I take my time getting to know you and your hair goals. Prior to scheduling your appointment, we will consult over the right color, style, or cut for your crown via Zoom. After your appointment, I will suggest an at-home care package and book your next visit.

          </div>

          <div className="servicesSectionTexts">

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


            <div className="thirdContent">
              <div className="conTitle">define me --------------------------------</div>
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


            <div className="thirdContent">
              <div className="conTitle">define me --------------------------------</div>
              <div className="conContent">Want your natural curls to stand out? This method includes shingling, coiling, flat twists, individual twists, or bantu knot out to enhance your beautiful texture.</div>
            </div>

            <div className="thirdContent">
              <div className="conTitle">define me --------------------------------</div>
              <div className="conContent">Want your natural curls to stand out? This method includes shingling, coiling, flat twists, individual twists, or bantu knot out to enhance your beautiful texture.</div>
            </div>

          </div>
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
