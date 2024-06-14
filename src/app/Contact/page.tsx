"use client";
import { FiMail, FiInstagram, FiLinkedin, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";
import './contact.css';

const Contactpage = () => {
  return (
    <>
      <Navbar2 />
      <br />
      <br />
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <iframe 
            src="https://giphy.com/embed/11j5OF7BTglVkc" 
            width="100%" 
            height="100%" 
            style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', objectFit: 'cover' }} 
            frameBorder="0" 
            className="giphy-embed" 
            allowFullScreen
          ></iframe>
        </div>
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white text-center sm:text-left">Contact Us</h2>
          <br></br>
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <a href="mailto:syedadnanali0106@gmail.com" className="contact-link">
              <FiMail className="contact-icon" size={30} />
              Email
            </a>
            <a href="https://www.instagram.com/hobbymaster24" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FiInstagram className="contact-icon" size={30} />
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/hobby-master-real" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="contact-icon" size={30} />
              LinkedIn
            </a>
            <a href="https://whatsapp.com/channel/0029VacNUTs9sBI23zLCuO11" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="contact-icon" size={30} />
              WhatsApp
            </a>
            {/* <a href="tel:+1234567890" className="contact-link">
              <FiPhone className="contact-icon" size={30} />
              Call Us
            </a> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contactpage;
