"use client";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";

import React from 'react';

const Coursespage = () => {
  return (
    <>
    <Navbar2/>
    <br></br>
    <br></br>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-5xl font-mono-bold mb-8">Courses</h2>
      <div className="bg-black shadow-md rounded-lg p-6">
        <h3 className="text-3xl font-bold mb-4">Jarvis Desktop Assistant using Python</h3>
        <p className="text-lg mb-4">Learn how to build your own desktop assistant like Jarvis using Python in this comprehensive course.</p>
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe 
            src="https://www.youtube.com/embed/W7gI6r0IVIE?list=PLhBsO0aDPQ2GNpiLGUP2xjo-gEienL893" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="bg-black shadow-md rounded-lg p-6">
        <h3 className="text-3xl font-bold mb-4">Enhance Python Skills</h3>
        <p className="text-lg mb-4">Elevate your Python prowess with our curated projects - a coding odyssey from fundamentals to finesse!</p>
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe 
            // src="https://www.youtube.com/embed/W7gI6r0IVIE?list=PLhBsO0aDPQ2GNpiLGUP2xjo-gEienL893" 
            src="https://www.youtube.com/embed/videoseries?list=PLhBsO0aDPQ2GHp0kMvlanhJHDYqkJhIB0"
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  <Footer/>
            </>
  );
};

export default Coursespage;
