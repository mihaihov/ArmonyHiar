/* eslint-disable no-unused-vars */


import React, { useEffect, useState, useRef } from 'react';
import "./Homepage.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { contactInformation } from '../../constants';
import { ArmonyReel } from '../../assets';
import { instagramColorIcon } from '../../assets';
import { styles } from '../../style';
import { Puff } from 'react-loader-spinner';
import { SendEmail } from '../../services/SendEmailService';
import { RetrieveIpAddress } from '../../services/RetrieveIpAddress';

gsap.registerPlugin(ScrollToPlugin);


const Homepage = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null)]);
  const [visibleSection, setVisibleSection] = useState(null);
  const [formData, setFormData] = useState({
    email: {
      name: '',
      senderEmail: '',
      subject: '',
      body: '',
      clientip: ''
    }
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [sentMailMessage, setSentMailMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      email: {
        ...prevFormData.email,
        [name]: value
      }
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    formData.email.clientIp = await RetrieveIpAddress();
    const response = await SendEmail(formData);
    if (response) {
      if (response.data) {
        if (response.data.state) {
          setSentMailMessage("Email trimis!");
        }
        else {
          setSentMailMessage("Eroare! Reincarca pagina si incearca din nou!");
        }
      }
      else {
        setSentMailMessage("Eroare! Reincarca pagina si incearca din nou!");
      }
    }
    else {
      setSentMailMessage("Eroare! Reincarca pagina si incearca din nou!");
    }
    setLoading(false);

    // Reset the form after submission
    setFormData({
      email: {
        name: '',
        senderEmail: '',
        subject: '',
        body: ''
      }
    });
  };


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
        <div className={`contact-container  mb-16 md:pb-0 ${visibleSection === 'section1' ? 'fadeIn2' : ''}`}>
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
            <video autoPlay loop muted playsInline>
              <source src={ArmonyReel} type="video/mp4" />
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
            <form onSubmit={handleSubmit} className='w-full'>
              <div className={`flex flex-col gap-6 w-full ${visibleSection === 'section4' ? 'fadeIn4' : ''}`}>
                <input className='border-b-2 rounded-b-xl text-xl text-center' placeholder="NUME" type="text" id="name" name="name" value={formData.email.name} onChange={handleChange}></input>
                <input className='border-b-2 rounded-b-xl text-xl text-center' placeholder="EMAIL" type="email" id="senderEmail" name="senderEmail" value={formData.email.senderEmail} onChange={handleChange}></input>
                <input className='border-b-2 rounded-b-xl text-xl text-center' placeholder="TITLU" type="text" id="subject" name="subject" value={formData.email.subject} onChange={handleChange} ></input>
                <textarea className=' h-28 border-b-2 rounded-b-xl text-xl text-center' placeholder="MESAJ" type="text" id="body" name="body" value={formData.email.body} onChange={handleChange} ></textarea>

              </div>
              <div className={`${loading ? 'mt-2' : 'mt-0'} w-full flex flex-row justify-center items-center`}>
                {loading ? (
                  <Puff
                    height="80"
                    width="80"
                    color="green"
                    ariaLabel="Loading"
                  />
                ) : (
                  <div className='flex flex-col items-center'>
                    <button type='submit' className={`${styles.buttonTertiary} ${loading ? ' invisible' : 'visible'} justify-center items-center`}>trimite</button>
                    <h1 className={`${sentMailMessage === "Email trimis!" ? ' text-green-600' : ' text-red-700'} mt-8 text-xl text-center font-poppins`}>{sentMailMessage}</h1>
                  </div>
                )}
              </div>
            </form>

            <div className={` mt-36 info ${visibleSection === 'section4' ? 'fadeIn2' : ''}`}>Armony | {contactInformation.address} | Doar cu Rezervare</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage
