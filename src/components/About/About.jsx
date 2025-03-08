import { faExpeditedssl } from "@fortawesome/free-brands-svg-icons";
import {
  contactBackground,
  instagramColorIcon,
  mailIcon,
  onlyLogoWhite,
  phoneIcon,
  armony1,
  armony2,
  armony3,
  AboutUsBackground
} from "../../assets";
import { logoWhite } from "../../assets";
import { styles } from '../../style';
import { useState } from "react";
import { testimonials } from "../../constants";
import { contactInformation } from "../../constants";
import FooterNavbar from "../FooterNavbar/FooterNavbar";
import { howAreWe } from "../../constants";
import { aboutArmony } from "../../constants";


const TestimonialCard = ({ author, content }) => {
  return (
    <div className={`${styles.testimonialCard}`}>
      <p className="text-[#abb8c3] font-poppins">{content}</p>
      <h1 className="items-start pt-16 font-poppins text-xl">{author}</h1>
    </div>
  )
}

function About() {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }


  return (
    <div className="overflow-hidden relative">
      <div className="bg-black h-screen w-screen z-0 relative">
        <div className="absolute bg-cover bg-fixed h-screen w-[100%] opacity-60 invisible md:visible z-1" style={{ backgroundImage: `url(${AboutUsBackground})` }}></div>
        <div className="absolute bg-cover bg-fiexed h-screen w-[100%] opacity-60 visible md:invisible z-1" style={{ backgroundImage: `url(${armony1})` }}></div>
        <div className="z-2 absolute left-1/2 -translate-x-1/2 pt-20">
          <img src={logoWhite} className="w-[300px]" />
        </div>
        <div className="absolute right-0 top-0 pt-12 pr-4 mr-4 flex flex-col slow-appear lg:flex-row">
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
        <div className="absolute  inset-x-0 bottom-0 flex-col mb-32 slow-appear">
          <p className="text-white text-5xl md:text-6xl lg:text-8xl font-serif text-center">Noi suntem Armony</p>
          <p className="text-white text-1xl font-serif text-center tracking-[.55em]">Hai sa ne cunosti</p>
        </div>
      </div>
      <div className="w-full mt-10 flex flex-col lg:flex-row">
        <img src={armony2} className="mx-3 object-cover h-[600px] lg:mx-0 lg:w-[65%] lg:h-[800px]" />
        <div className="bg-slate-400 ml-20 -mt-36 shadow-lg flex flex-col items-center lg:w-[65%] lg:h-[500px] lg:-ml-96 lg:mt-96 lg:items-end">
          <h1 className="text-3xl pt-12  font-poppins text-white lg:pt-20 lg:pr-10 lg:text-5xl lg:tracking-wider">{howAreWe.title}</h1>
          <p className="text-white pt-5 items-start text-base lg:pt-10 p-5 lg:p-16 lg:text-xl">{howAreWe.contentOne}<br /><br />{howAreWe.contentTwo}</p>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row-reverse">
        <img src={armony3} className="ml-3 object-cover h-[600px] mt-5 lg:-mt-10 lg:mr-10 lg:mx-0 lg:w-[50%] lg:h-[650px] z-0" />
        <div className="bg-slate-400 shadow-lg ml-8 -mt-48 flex flex-col items-center lg:w-[50%] lg:mt-72 lg:items-start lg:-mr-36 z-10">
          <h1 className="text-3xl pt-12  font-poppins text-white lg:pt-20 lg:pl-10 lg:text-5xl lg:tracking-wider">{aboutArmony.title}</h1>
          <p className="text-white pt-5 items-start text-base lg:pt-10 p-5 lg:p-16 lg:text-xl">{aboutArmony.contentOne}  <br /> <br /> {aboutArmony.contentTwo}</p>
          <div className="w-full flex flex-row justify-center items-start my-3">
            <button className={`${styles.buttonPrimary} `}><a href="/services">servicii</a></button>
            <button className={`${styles.buttonPrimary}`}><a href="/contact">contact</a></button>
          </div>
        </div>
      </div>
      <h1 className="flex flex-row justify-center text-[#8fa99e] text-3xl lg:text-7xl font-poppins tracking-wide mt-16 mb-8 items-center">testimoniale</h1>
      <div className="relative flex flex-col items-center">
        <div className="relative flex-row pt-11 grid grid-cols-1 gap-2 lg:grid-cols-2 justify-center items-center">
          {testimonials
            .filter(testimonial => testimonial.alwaysVisible === 'true')
            .map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} author={testimonial.author} content={testimonial.content} />
            ))}
        </div>
        <div className={`${showMore ? 'transform scale-y-100 transition duration-500 origin-top' : 'transform scale-y-0 transition duration-500 origin-top'} mt-2 grid grid-cols-1 gap-2 lg:grid-cols-2 justify-center items-center`}>
          {testimonials
            .filter(testimonial => testimonial.alwaysVisible === 'false' && showMore)
            .map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} author={testimonial.author} content={testimonial.content} />
            ))}
        </div>
        <div className={`${showMore ? 'hidden' : 'visible'} bg-gradient-to-t from-white absolute top-0 bottom-0 w-full h-full flex flex-row`} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className={`${styles.buttonSecondary} ${showMore ? 'transform translate-y-8 transition duraiton-700' : 'transform translate-y-0 transition duraiton-700'}`} onClick={handleShowMore}>{showMore ? 'Mai putin' : 'Mai mult'}</button>
        <div className={`${showMore ? 'mt-12' : 'mt-72'} flex flex-col justify-center items-center w-full`}>
          <FooterNavbar />
        </div>
      </div>
    </div>
  )
};

export default About;
