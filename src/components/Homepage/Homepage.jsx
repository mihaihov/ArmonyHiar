/* eslint-disable no-unused-vars */


import React ,{ useEffect ,useState,useRef} from 'react';
import "./Homepage.css";
import { faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Homepage = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null)]);
  const [visibleSection, setVisibleSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.getAttribute('id'));
            gsap.to(entry.target, { opacity: 1, duration: 2 });
          } else {
            gsap.to(entry.target, { opacity: 0.5, duration: 2 });
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
      targetSection.scrollIntoView({ behavior: 'smooth' });
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


    <div id="section1" ref={sectionRefs.current[0]} className="section1">

   <div className={`contact-container ${visibleSection === 'section1' ? 'fadeIn2' : ''}`}>
    <div>469.396.9848</div>
    <div>vernessa@swankystylez.com</div>
    <FontAwesomeIcon icon={faInstagram} size="2x" color="white" opacity={0.6} />
   </div>

    <div className="section-content">
      <div className={`centered-text ${visibleSection === 'section1' ? 'fadeIn' : ''}`}>
  Armony Hair
      </div>
      </div>
      <div className={`logo-container ${visibleSection === 'section1' ? 'fadeIn2' : ''}`}>
    <img src="../../../public/images/logo1.png" alt="logo" />
  </div>
    </div>
    <div id="section2" ref={sectionRefs.current[1]} className="section2">
     
           <div className="sectionTwoContainer">

                  <div className={`sectionTwoPhoto ${visibleSection === 'section2' ? 'fadeIn2' : ''}`}>
                    <img src="../../../public/images/img2.jpg" alt="photo" />
                  </div>
                  <div className="sectionTwoContent"> 
                  
                  <div className={`mainTitle ${visibleSection === 'section2' ? 'fadeIn3' : ''}`}>i'm <br/>vernessa</div>
                  <div className={`subTitle ${visibleSection === 'section2' ? 'fadeIn4' : ''}`}>GET TO KNOW ME A LIL BIT</div>
                  <div className={`sectionTwoText ${visibleSection === 'section2' ? 'fadeIn4' : ''}`}>At Swank Salon, you will enjoy listening to a variety of music and breathing in diffused essential oils which provide a soothing, relaxing, and tranquil experience. Come get crowned, your throne awaits you!</div>
                 <div className={`btnSection ${visibleSection === 'section2' ? 'fadeIn4' : ''}`}>
                  <button>about me</button>
                 </div>
                 
                  </div>
           </div>


    </div>
    <div id="section3" ref={sectionRefs.current[2]} className="section3">
   <div className="sectionThreeContainer">
   <div className="sectionThreeContent"> 
                  
                  <div className={`mainTitle ${visibleSection === 'section3' ? 'fadeIn5' : ''}`}>services</div>
                  <div className={`subTitle ${visibleSection === 'section3' ? 'fadeIn4' : ''}`}>COME SEE WHAT I DO</div>
                  <div className={`sectionThreeText ${visibleSection === 'section3' ? 'fadeIn4' : ''}`}>
                    <div>straighten me</div>
                    <div>define me</div>
                    <div>curl me</div>
                    <div>crown me</div>
                    <div>color me</div>
                    <div>cut me</div>
                    <div>treat me</div>
                    <div>polish me</div>

                  </div>
                 <div className={`btnSection ${visibleSection === 'section3' ? 'fadeIn4' : ''}`}>
                  <button>get details</button>
                 </div>
                 
                  </div>
   <div className={`sectionThreePhoto ${visibleSection === 'section3' ? 'fadeIn2' : ''}`}>
                    <img src="../../../public/images/img3.jpg" alt="photo" />
                  </div>
   </div>
    </div>
    <div id="section4" ref={sectionRefs.current[3]} className="section4">
    <div className="sectionFourContainer">

                  <div className={`sectionTwoPhoto ${visibleSection === 'section4' ? 'fadeIn2' : ''}`}>
                    <img src="../../../public/images/img4.jpg" alt="photo" />
                  </div>
                  <div className="sectionFourContent"> 
                  
                  <div className={`mainTitle ${visibleSection === 'section4' ? 'fadeIn3' : ''}`}>contact me</div>
                  <div className={`subTitle ${visibleSection === 'section4' ? 'fadeIn4' : ''}`}>LET’S TALK BEAUTY</div>
                       <div  className={`inputs ${visibleSection === 'section4' ? 'fadeIn4' : ''}`}>
                        <input placeholder="NAME"></input>
                        <input placeholder="EMAIL"></input>
                        <input placeholder="PHONE NUMBER"></input>
                        <input placeholder="TELL ME ABOUT IT"></input>
                       </div>
                 
                 <div className={`btnSection ${visibleSection === 'section4' ? 'fadeIn4' : ''}`}>
                  <button>send</button>
                 </div>

                 <div className={`contact-container4 ${visibleSection === 'section4' ? 'fadeIn2' : ''}`}>
    <div>469.396.9848</div>
    <div>vernessa@swankystylez.com</div>
    <FontAwesomeIcon icon={faInstagram} size="2x" color="#071a12" opacity={0.6} />
   </div>

   <div className={`info ${visibleSection === 'section4' ? 'fadeIn2' : ''}`}>Image Studios | 7951 Collin McKinney Pkwy Suite 1500, Studio 101 | McKinney, TX 75070
Appointments Only</div>
                 
                  </div>
           </div>
    </div>
  </div>
);
}

export default Homepage
