import {
  contactBackground,
  instagramColorIcon,
  mailIcon,
  onlyLogoWhite,
  phoneIcon,
} from "../../assets";
import { logo } from "../../assets";
import { logoWhite } from "../../assets";
import { instagramIcon } from "../../assets";

const About = () => (
  <div className="relative top-0 left-0 h-screen w-screen bg-cover bg-black z-0">
    <div className="absolute bg-cover h-screen w-screen opacity-65 z-1" style={{ backgroundImage: `url(${contactBackground})` }} />
    <div className="z-2 absolute left-1/2 transform -translate-x-1/2 pt-8">
      <img src={onlyLogoWhite} className="w-[150px]" />
    </div>
    <div className={`z-2 absolute flex flex-col lg:flex-row invisible md:visible right-1 pt-8 pr-4`}>
      <img src={phoneIcon} className="w-[24px] h-[24px] realtive" />
      <p className="text-white pr-8 poppins">0784603428</p>
      <img src={mailIcon} className="w-[24px] h-[24px] realtive" />
      <p className="text-white pr-8 poppins">armonyhair@gmail.com</p>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagramColorIcon} className="w-[30px] h-[30px] realtive" />
      </a>
    </div>
  </div>
);

export default About;
