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
import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }


  return (
    <div className="overflow-hidden relative">
      <div className="bg-black h-screen w-screen z-0 relative">
        <div className="absolute bg-cover bg-fixed h-screen w-[100%] opacity-60 invisible md:visible z-1" style={{ backgroundImage: `url(${contactBackground})` }}></div>
        <div className="absolute bg-cover bg-fiexed h-screen w-[100%] opacity-60 visible md:invisible z-1" style={{ backgroundImage: `url(${armony1})` }}></div>
        <div className="z-2 absolute left-1/2 -translate-x-1/2 pt-20">
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
        <img src={armony2} className="mx-3 object-cover h-[600px] lg:mx-0 lg:object-none lg:w-[65%] lg:h-[800px]" />
        <div className="bg-slate-400 ml-20 -mt-36 shadow-lg flex flex-col items-center lg:w-[65%] lg:h-[500px] lg:-ml-96 lg:mt-96 lg:items-end">
          <h1 className="text-3xl pt-12  font-poppins text-white lg:pt-20 lg:pr-10 lg:text-5xl lg:tracking-wider">Cine suntem noi?</h1>
          <p className="text-white pt-5 items-start text-base lg:pt-10 p-5 lg:p-16 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nobis itaque doloribus aperiam quidem vero nam! Iste illo repellendus veritatis deserunt fuga fugiat! Possimus, maxime ad. Nam neque fugiat voluptas?  <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod alias autem, itaque ipsa veniam quos! Sapiente, numquam eius perspiciatis harum necessitatibus blanditiis in quasi, laborum nesciunt minus ipsum autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae at molestias officiis, error eius laboriosam quo architecto dignissimos voluptatem doloribus officia ipsa in illo amet? Repellendus laborum nulla cumque!</p>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row-reverse">
        <img src={armony3} className="ml-3 object-cover h-[600px] mt-5 lg:-mt-10 lg:mr-10 lg:mx-0 lg:object-none lg:w-[50%] lg:h-[650px] z-0" />
        <div className="bg-slate-400 shadow-lg ml-8 -mt-48 flex flex-col items-center lg:w-[50%] lg:mt-72 lg:items-start lg:-mr-36 z-10">
          <h1 className="text-3xl pt-12  font-poppins text-white lg:pt-20 lg:pl-10 lg:text-5xl lg:tracking-wider">Despre Armony</h1>
          <p className="text-white pt-5 items-start text-base lg:pt-10 p-5 lg:p-16 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nobis itaque doloribus aperiam quidem vero nam! Iste illo repellendus veritatis deserunt fuga fugiat! Possimus, maxime ad. Nam neque fugiat voluptas?  <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod alias autem, itaque ipsa veniam quos! Sapiente, numquam eius perspiciatis harum necessitatibus blanditiis in quasi, laborum nesciunt minus ipsum autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae at molestias officiis, error eius laboriosam quo architecto dignissimos voluptatem doloribus officia ipsa in illo amet? Repellendus laborum nulla cumque!</p>
          <div className="w-full flex flex-row justify-center items-start my-3">
            <button className={`${styles.buttonPrimary} `}>services</button>
            <button className={`${styles.buttonPrimary}`}>contact</button>
          </div>
        </div>
      </div>
      <h1 className="flex flex-row justify-center text-[#8fa99e] text-3xl lg:text-7xl font-poppins tracking-wide mt-16 mb-8 items-center">testimonials</h1>
      <div className="relative flex flex-row justify-center">
        <div className="pt-11 grid grid-cols-1 gap-2 lg:grid-cols-2 justify-center items-center">
          <div className={`${styles.testimonialCard}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Raducu Mihai</h1>
          </div>
          <div className={`${styles.testimonialCard}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Iulian Dragulescu</h1>
          </div>
          <div className={`${styles.testimonialCard}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Raducu Mihai</h1>
          </div>
          <div className={`${styles.testimonialCard}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Iulian Dragulescu</h1>
          </div>
          {/* start of hidden testimonials */}
          <div className={`${styles.testimonialCard} ${showMore ? 'visible' : 'hidden'}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Raducu Mihai</h1>
          </div>
          <div className={`${styles.testimonialCard} ${showMore ? 'visible' : 'hidden'}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Iulian Dragulescu</h1>
          </div>
          <div className={`${styles.testimonialCard} ${showMore ? 'visible' : 'hidden'}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Raducu Mihai</h1>
          </div>
          <div className={`${styles.testimonialCard} ${showMore ? 'visible' : 'hidden'}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Iulian Dragulescu</h1>
          </div>
          <div className={`${styles.testimonialCard} ${showMore ? 'visible' : 'hidden'}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Raducu Mihai</h1>
          </div>
          <div className={`${styles.testimonialCard} ${showMore ? 'visible' : 'hidden'}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Iulian Dragulescu</h1>
          </div>
          <div className={`${styles.testimonialCard} ${showMore ? 'visible' : 'hidden'}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Raducu Mihai</h1>
          </div>
          <div className={`${styles.testimonialCard} ${showMore ? 'visible' : 'hidden'}`}>
            <p className="text-[#abb8c3] font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis officia laudantium dignissimos temporibus est dicta, aliquid qui et, voluptatem error voluptatibus vero incidunt quidem similique facilis! Nostrum, natus nihil.</p>
            <h1 className="items-start pt-16 font-poppins text-xl">Iulian Dragulescu</h1>
          </div>
          {/* end of hidden testimonials */}
        </div>
        <div className={`${showMore ? 'hidden' : 'visible'} bg-gradient-to-t from-white absolute top-0 bottom-0 w-full h-full flex flex-row`} />
      </div>
      <div className="flex flex-col items-center">
        <button className={`${styles.buttonSecondary} ${showMore ? 'translate-y-8 duration-700' : 'translate-y-0 duration-700'}`} onClick={handleShowMore}>{showMore ? 'Mai putin' : 'Mai mult'}</button>
        <div className={`${showMore ? 'mt-12' : 'mt-72'} flex flex-col justify-center items-center w-full`}>
          <h1 className="text-[#8fa99e] text-2xl tracking-wide lg:text-5xl lg:tracking-widest">navigare</h1>
          <div className="flex flex-row justify-center gap-8 lg:gap-0">
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer">Home</h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer">About</h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer">Services</h1>
            <h1 className="text-base mt-8 lg:text-3xl lg:ml-16 hover:text-[#8fa99e] cursor-pointer">Contact</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-0 gap-8">
        <h1 className="text-xs mt-8 lg:ml-16 hover:text-[#8fa99e] cursor-pointer lg:text-sm">privacy policy</h1>
        <h1 className="text-xs mt-8 lg:ml-16 hover:text-[#8fa99e] cursor-pointer lg:text-sm ">designed by Mihai</h1>
      </div>
    </div>
  )
};

export default About;
