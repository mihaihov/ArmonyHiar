import {
  contactBackground,
  instagramColorIcon,
  mailIcon,
  onlyLogoWhite,
  phoneIcon,
  armony1
} from "../../assets";
import { logo } from "../../assets";
import { logoWhite } from "../../assets";
import { instagramIcon } from "../../assets";

const About = () => (
  <div className="overflow-hidden relative">
    <div className="bg-black h-screen w-screen z-0 relative">
      <div className="absolute bg-cover h-screen w-[100%] opacity-60 invisible md:visible z-1" style={{ backgroundImage: `url(${contactBackground})`  ,  backgroundAttachment: 'fixed'  }}></div>
      <div className="absolute bg-cover h-screen w-[100%] opacity-60 visible md:invisible z-1" style={{ backgroundImage: `url(${armony1})` }}></div>
      <div className="z-2 absolute left-1/2 -translate-x-1/2 pt-8">
        <img src={logoWhite} className="w-[300px]" />
      </div>
      <div className={`absolute flex flex-col lg:flex-row invisible md:visible top-0 right-0 z-2 mt-8 mr-8`}>
        <img src={phoneIcon} className="w-[24px] h-[24px]" />
        <p className="text-white pr-8 poppins">0784603428</p>
        <img src={mailIcon} className="w-[24px] h-[24px]" />
        <p className="text-white pr-8 poppins">armonyhair@gmail.com</p>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramColorIcon} className="w-[30px] h-[30px]" />
        </a>
      </div>
      <div className="absolute  inset-x-0 bottom-0 flex-col mb-32">
        <p className="text-white text-8xl font-serif text-center">Noi suntem Armony</p>
        <p className="text-white text-1xl font-serif text-center tracking-[.55em]">Hai sa ne cunosti</p>
      </div>
    </div>
    <div className="w-full mt-10 flex">
      <div className="bg-red-500 w-[50%] h-[900px] shadow-md"></div>
      <div className="bg-green-500 w-[50%] h-[600px] lg:-ml-36 lg:mt-96 shadow-lg"></div>
    </div>
    <div className="w-screen h-screen relative">
      <div className="bg-blue-500 w-[50%] h-[900px] absolute lg:top-0 lg:right-0 lg:mr-16 lg:-mt-11 shadow-xl"></div>
      <div className="bg-orange-500 w-[50%] h-[500px] absolute lg:bottom-0 lg:left-0 lg:ml-16 shadow-2xl"></div>
    </div>
  </div>
);

export default About;
