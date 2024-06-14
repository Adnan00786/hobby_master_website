"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.getElementById('hero')?.offsetHeight || 0;
      if (window.scrollY >= heroSectionHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setAudio(new Audio('/assets/button-sound.mp3'));
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    if (audio) {
      audio.play();
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className={`text-3xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>Hobby Master</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`text-xl ${scrolled ? 'text-black' : 'text-white'} hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium`} onClick={handleLinkClick}>
                Home
              </Link>
              <Link href="/About" className={`text-xl ${scrolled ? 'text-black' : 'text-white'} hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium`} onClick={handleLinkClick}>
                About
              </Link>
              <Link href="/Courses" className={`text-xl ${scrolled ? 'text-black' : 'text-white'} hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium`} onClick={handleLinkClick}>
                Courses
              </Link>
              <Link href="/Contact" className={`text-xl ${scrolled ? 'text-black' : 'text-white'} hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium`} onClick={handleLinkClick}>
                Contact
              </Link>
              <Link href="/Signin">
                <button className="relative inline-flex items-center justify-center px-3 py-2 border rounded-md text-sm font-bold text-white-800 hover:text-pink-600 hover:bg-white bg-black group" onClick={handleLinkClick}>
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue rounded-md blur opacity-75 transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="relative">Sign In</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${menuOpen ? 'block bg-blue' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className={`text-xl ${scrolled ? 'text-black' : 'text-white'} hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium`} onClick={() => { toggleMenu(); handleLinkClick(); }}>
            Home
          </Link>
          <Link href="/About" className={`text-xl ${scrolled ? 'text-black' : 'text-white'} hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium`} onClick={() => { toggleMenu(); handleLinkClick(); }}>
            About
          </Link>
          <Link href="/Courses" className={`text-xl ${scrolled ? 'text-black' : 'text-white'} hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium`} onClick={() => { toggleMenu(); handleLinkClick(); }}>
            Courses
          </Link>
          <Link href="/Contact" className={`text-xl ${scrolled ? 'text-black' : 'text-white'} hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium`} onClick={() => { toggleMenu(); handleLinkClick(); }}>
            Contact
          </Link>
          <Link href="/Signin" className={`text-xl ${scrolled ? 'text-black' : 'text-white'} hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium`} onClick={() => { toggleMenu(); handleLinkClick(); }}>
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
