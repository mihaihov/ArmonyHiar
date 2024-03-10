/* eslint-disable no-unused-vars */


import React, { useEffect, useState, useRef } from 'react';
import "./Homepage.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { contactInformation } from '../../constants';
import { instagramReel1 } from '../../assets';
import { instagramColorIcon } from '../../assets';
import { doneIcon } from '../../assets';

gsap.registerPlugin(ScrollToPlugin);


const Homepage = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null)]);
  const [visibleSection, setVisibleSection] = useState(null);
  const [sent, setsend] = useState(false)


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isPhoneOrTablet = window.innerWidth <= 992;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.getAttribute('id'));
            if (!isPhoneOrTablet) {
              gsap.to(entry.target, { opacity: 1, duration: 0.5 });
            } else {
              entry.target.style.opacity = 1;
            }
          } else {
            if (!isPhoneOrTablet) {
              gsap.to(entry.target, { opacity: 0.5, duration: 0.5 });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const currentSectionIndex = () => {
    return sectionRefs.current.findIndex(ref => ref.current && ref.current.id === visibleSection);
  };

  const scrollToSection = (index) => {
    const targetSection = sectionRefs.current[index]?.current;
    if (targetSection) {
      const isPhoneOrTablet = window.innerWidth <= 992;
      if (isPhoneOrTablet) {
        window.scrollTo(0, targetSection.offsetTop);
      } else {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
        const currentIndex = currentSectionIndex();
        if (event.key === 'ArrowDown' && currentIndex < sectionRefs.current.length - 1) {
          scrollToSection(currentIndex + 1);
        } else if (event.key === 'ArrowUp' && currentIndex > 0) {
          scrollToSection(currentIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visibleSection]);



  return (

    <div className="container" ref={containerRef}>
      <div className="vertical-nav">
        {sectionRefs.current.map((_, index) => (
          <div
            key={index}
            className={`nav-line ${visibleSection === `section${index + 1}` ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </div>


      <div id="section1" ref={sectionRefs.current[0]} className="section1 w-screen h-screen">
        <div className={`contact-container pb-16 md:pb-0 ${visibleSection === 'section1' ? 'fadeIn2' : ''}`}>
          <div>{contactInformation.phoneNumber}</div>
          <div>{contactInformation.emailAddress}</div>
          <a href={`${contactInformation.instagramPage}`} target="_blank" rel="noopener noreferrer">
            <img src={instagramColorIcon} className="w-[30px] h-[30px] min-w-6 min-h-6  md:opacity-100  transition-all duration-500 ease-in-out" />
          </a>
        </div>

        {/* <div className="absolute flex-grow flex justify-center items-start pt-5"> */}
        <div className={`centered-text mt-0 absolute uppercase text-white tracking-widest text-7xl mix-blend-luminosity lg:mt-32 lg:text-9xl`}>
          Armony
        </div>
        {/* </div> */}
        <div className={`logo-container ${visibleSection === 'section1' ? 'fadeIn2' : ''}`} />
      </div>
      <div id="section2" ref={sectionRefs.current[1]} className="section2">

        <div className="sectionTwoContainer">

          <div className={`sectionTwoPhoto ${visibleSection === 'section2' ? 'fadeIn2' : ''}`}>
            <img src="/images/img2.jpg" alt="photo" />
          </div>
          <div className="sectionTwoContent">

            <div className={`mainTitle ${visibleSection === 'section2' ? 'fadeIn3' : ''}`}>Reinventeaza-ti <br />look-ul cu Armony</div>
            <div className={`subTitle ${visibleSection === 'section2' ? 'fadeIn4' : ''}`}>Fiecare detaliu conteaza</div>
            <div className={`sectionTwoText ${visibleSection === 'section2' ? 'fadeIn4' : ''}`}>Fiecare vizita este o experienta de precizie si stil. Frizerii nostri combina priceperea si maiestria pentru a oferi croieli personalizate care reflecta personalitatea ta unica.Indiferent dacă cauți o tendință nouă îndrăzneață sau o rafinare clasică, noi suntem convinsi ca iti putem oferi acest lucru. Te asteptam cu mare drag in locatia noastra.</div>
            <div className={`btnSection ${visibleSection === 'section2' ? 'fadeIn4' : ''}`}>
              <button><a href="/about">despre noi</a></button>
            </div>

          </div>
        </div>


      </div>
      <div id="section3" ref={sectionRefs.current[2]} className="section3">
        <div className="sectionThreeContainer">
          <div className="sectionThreeContent">

            <div className={`mainTitle ${visibleSection === 'section3' ? 'fadeIn5' : ''}`}>servicii</div>
            <div className={`subTitle ${visibleSection === 'section3' ? 'fadeIn4' : ''}`}>CE PUTEM FACE PENTRU TINE</div>
            <div className={` mt-12 ${visibleSection === 'section3' ? 'fadeIn4' : ''}`}>
              <div className='text-2xl text-center border-x-2 mb-8 border-r-2 shadow-xl px-24 py-4'>styling</div>
              <div className='text-2xl text-center border-x-2 mb-8 border-r-2 shadow-xl px-24 py-4'>tuns</div>
              <div className='text-2xl text-center border-x-2 mb-8 border-r-2 shadow-xl px-24 py-4'>servicii de ingrijire</div>
              {/* <div>styling</div>
              <div>servicii de ingrijire</div> */}

            </div>
            <div className={`btnSection ${visibleSection === 'section3' ? 'fadeIn4' : ''}`}>
              <button><a href="/services">mai mult</a></button>
            </div>

          </div>
          <div className={`sectionThreePhoto ${visibleSection === 'section3' ? 'fadeIn2' : ''}`}>
            <video autoPlay loop muted>
              <source src={instagramReel1} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div id="section4" ref={sectionRefs.current[3]} className="section4">
        <div className="sectionFourContainer">

          <div className={`sectionTwoPhoto ${visibleSection === 'section4' ? 'fadeIn2' : ''}`}>
            <img src="/images/img4.jpg" alt="photo" />
          </div>
          <div className="sectionFourContent">

            <div className={`mainTitle ${visibleSection === 'section4' ? 'fadeIn3' : ''}`}>contact</div>
            <div className={`subTitle ${visibleSection === 'section4' ? 'fadeIn4' : ''}`}>DESPRE NOUL TAU STIL</div>
            <div className={`inputs ${visibleSection === 'section4' ? 'fadeIn4' : ''}`}>
              <input placeholder="NUME"></input>
              <input placeholder="EMAIL"></input>
              <input placeholder="TELEFON"></input>
              <input placeholder="MESAJ"></input>
            </div>

            <div className={`btnSection ${visibleSection === 'section4' ? 'fadeIn4' : ''}`}>
              <button className={`${sent ? 'hidden' : 'visible'}`} onClick={() => {
                setsend(!sent)
              }}>trimite</button>
              <img src={doneIcon} className={`${sent ? 'visible' : 'hidden'} w-[100px] transition-opacity duration-500 ease-in opacity-100`} />
            </div>

            <div className={`info ${visibleSection === 'section4' ? 'fadeIn2' : ''}`}>Armony | {contactInformation.address} | Doar cu Rezervare</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage
