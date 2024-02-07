import { faExpeditedssl } from "@fortawesome/free-brands-svg-icons";
import {
  contactBackground,
  instagramColorIcon,
  mailIcon,
  onlyLogoWhite,
  phoneIcon,
  armony1,
  armony2,
  armony3
} from "../../assets";
import { logo } from "../../assets";
import { logoWhite } from "../../assets";
import { instagramIcon } from "../../assets";
import { styles } from '../../style';

const About = () => (
  <div className="overflow-hidden relative">
    <div className="bg-black h-screen w-screen z-0 relative">
      <div className="absolute bg-cover bg-fixed h-screen w-[100%] opacity-60 invisible md:visible z-1" style={{ backgroundImage: `url(${contactBackground})` }}></div>
      <div className="absolute bg-cover bg-fiexed h-screen w-[100%] opacity-60 visible md:invisible z-1" style={{ backgroundImage: `url(${armony1})` }}></div>
      <div className="z-2 absolute left-1/2 -translate-x-1/2 pt-20">
        <div className="absolute bg-cover h-screen w-[100%] opacity-60 invisible md:visible z-1" style={{ backgroundImage: `url(${contactBackground})`, backgroundAttachment: 'fixed' }}></div>
        <div className="absolute bg-cover h-screen w-[100%] opacity-60 visible md:invisible z-1" style={{ backgroundImage: `url(${armony1})` }}></div>
        <div className="z-2 absolute left-1/2 -translate-x-1/2 pt-8">
          <img src={logoWhite} className="w-[300px]" />
        </div>
        <div className={`relative flex flex-row justify-center bottom-0 lg:justify-end lg:mr-10 pt-5`}>
          <img src={phoneIcon} className="w-[24px] h-[24px] invisible sm:visible" />
          <p className="text-white pr-8 poppins text-sm">0784603428</p>
          <img src={mailIcon} className="w-[24px] h-[24px]  invisible sm:visible" />
          <p className="text-white pr-8 poppins text-sm">armonyhair@gmail.com</p>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramColorIcon} className="w-[30px] h-[30px] min-w-6 min-h-6" />
          </a>
        </div>
        <div className="absolute  inset-x-0 bottom-0 flex-col mb-32">
          <p className="text-white text-8xl font-serif text-center">Noi suntem Armony</p>
          <p className="text-white text-1xl font-serif text-center tracking-[.55em]">Hai sa ne cunosti</p>
        </div>
      </div>
      <div className="w-full mt-10 flex flex-col lg:flex-row">
        <img src={armony2} className="object-none w-[65%] h-[800px]" />
        <div className="bg-slate-400 w-[65%] h-[500px] lg:-ml-96 lg:mt-96 shadow-lg flex flex-col items-end">
          <h1 className="pt-20 pr-10 text-5xl font-poppins text-white tracking-wider">Cine suntem noi?</h1>
          <p className="text-white pt-10 items-start p-16 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nobis itaque doloribus aperiam quidem vero nam! Iste illo repellendus veritatis deserunt fuga fugiat! Possimus, maxime ad. Nam neque fugiat voluptas?  <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod alias autem, itaque ipsa veniam quos! Sapiente, numquam eius perspiciatis harum necessitatibus blanditiis in quasi, laborum nesciunt minus ipsum autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae at molestias officiis, error eius laboriosam quo architecto dignissimos voluptatem doloribus officia ipsa in illo amet? Repellendus laborum nulla cumque!</p>
        </div>
      </div>
      <div className="w-screen h-screen relative">
        <img src={armony3} className="object-none w-[50%] h-[700px] absolute lg:top-0 lg:right-0 lg:mr-16 lg:-mt-11 shadow-xl" />
        <div className="bg-slate-400 w-[50%] h-[500px] absolute lg:mt-72 lg:left-0 shadow-2xl items-start">
          <h1 className="pt-20 pl-10 text-5xl font-poppins text-white tracking-wider">Despre Armony</h1>
          <p className="text-white pt-10 items-end p-16 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nobis itaque doloribus aperiam quidem vero nam! Iste illo repellendus veritatis deserunt fuga fugiat! Possimus, maxime ad. Nam neque fugiat voluptas?  <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod alias autem, itaque ipsa veniam quos! Sapiente, numquam eius perspiciatis harum necessitatibus blanditiis in quasi, laborum nesciunt minus ipsum autem.</p>
          <div className="flex flex-row justify-center items-center">
            <button className={`${styles.buttonPrimary}`}>services</button>
            <button className={`${styles.buttonPrimary}`}>contact</button>
          </div>
        </div>
      </div>
      <h1 className="flex flex-row justify-center text-[#8fa99e] text-7xl font-poppins tracking-wide -mt-10 items-center">testimonials</h1>
      <div className="relative">
        <div className="pt-11 grid grid-cols-2 gap-4">
          <div className={`${styles.testimonialCard} md:ml-96`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Raducu Mihai</h1>
          </div>
          <div className={`${styles.testimonialCard} md:mr-96`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Iulian Dragulescu</h1>
          </div>
          <div className={`${styles.testimonialCard} md:ml-96`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Raducu Mihai</h1>
          </div>
          <div className={`${styles.testimonialCard} md:mr-96`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Iulian Dragulescu</h1>
          </div>
        </div>
        <div className="bg-gradient-to-t from-white absolute top-0 bottom-0 w-full h-full flex flex-row" />
      </div>
      <div className="flex flex-col items-center">
        <button className={`${styles.buttonSecondary}`}>Mai mult</button>
        <div className="flex flex-col justify-center items-center mt-72 w-full">
          <h1 className="text-[#8fa99e] text-5xl tracking-widest">navigare</h1>
          <div className="flex flex-row">
            <h1 className="text-3xl ml-16 mt-8 hover:text-[#8fa99e] cursor-pointer">Home</h1>
            <h1 className="text-3xl ml-16 mt-8 hover:text-[#8fa99e] cursor-pointer">About</h1>
            <h1 className="text-3xl ml-16 mt-8 hover:text-[#8fa99e] cursor-pointer">Services</h1>
            <h1 className="text-3xl ml-16 mt-8 hover:text-[#8fa99e] cursor-pointer">Contact</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
