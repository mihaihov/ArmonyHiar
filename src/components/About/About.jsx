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
  <div>
    <div className="relative top-0 left-0 h-screen w-screen bg-cover bg-black z-0">
      <div className="absolute bg-cover h-screen w-screen opacity-60 z-1 invisible md:visible" style={{ backgroundImage: `url(${contactBackground})` }} />
      <div className="absolute bg-cover h-screen w-screen opacity-60 z-1 visible md:invisible" style={{ backgroundImage: `url(${armony1})` }} />
      <div className="z-2 absolute left-1/2 transform -translate-x-1/2 pt-8">
        <img src={logoWhite} className="w-[300px]" />
      </div>
      <div className={`z-2 absolute flex flex-col lg:flex-row invisible md:visible right-1 pt-8 pr-4`}>
        <img src={phoneIcon} className="w-[24px] h-[24px] flex-initial" />
        <p className="text-white pr-8 poppins">0784603428</p>
        <img src={mailIcon} className="w-[24px] h-[24px]" />
        <p className="text-white pr-8 poppins">armonyhair@gmail.com</p>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramColorIcon} className="w-[30px] h-[30px]" />
        </a>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex-col mb-32">
        <p className="text-white text-9xl font-serif text-center">i'm Vernessa</p>
        <p className="text-white text-1xl font-serif text-center tracking-[.55em]">GET TO KNOW ME A LIL BIT</p>
      </div>
    </div>


  </div>
);

export default About;
