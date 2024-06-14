// "use client";
// import React from 'react';
// import Navbar2 from "@/components/Navbar2";
// import Footer from "@/components/Footer";

// const Signin = () => {
//   return (
//     <>
//       <Navbar2/>
//       <div className="relative w-full h-screen overflow-hidden">
//         <iframe
//           src="https://giphy.com/embed/vgNq54YDbJb1eSumUV"
//           width="100%"
//           height="100%"
//           style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', objectFit: 'cover' }}
//           frameBorder="0"
//           className="giphy-embed"
//           allowFullScreen
//         ></iframe>
//         <br />
//         <br />
//         <br />
//         <br />
//         <section className="relative max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">Sign In</h2>
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 gap-4">
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-black placeholder-gray-500"
//                 placeholder="Email"
//               />
//               <input
//                 type="tel"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-black placeholder-gray-500"
//                 placeholder="Phone Number"
//               />
//               <input
//                 type="password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-black placeholder-gray-500"
//                 placeholder="Password"
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 id="agree"
//                 className="form-checkbox h-5 w-5 text-blue-600"
//               />
//               <label htmlFor="agree" className="text-sm text-gray-400">
//                 I agree to the Terms and Conditions
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-200"
//             >
//               Sign In
//             </button>
//           </form>
//         </section>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default Signin;

// Trial 2 down

// "use client";
// import React, { useEffect, useState } from 'react';
// import Navbar2 from '@/components/Navbar2';
// import Footer from '@/components/Footer';

// const Signin = () => {
//   const [isClient, setIsClient] = useState(false);
//   const [audio, setAudio] = useState(null);

//   useEffect(() => {
//     setIsClient(true);
//     setAudio(new Audio('/assets/button-sound.mp3'));
//   }, []);

//   const handleClick = () => {
//     if (audio) {
//       audio.play();
//     }
//   };

//   return (
//     <>
//       <Navbar2 />
//       <div className="flex items-center justify-center h-screen bg-gray-800 text-white px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md text-center">
//           <h1 className="text-7xl font-bold mb-4">Sign In</h1>
//           <p className="text-3xl mb-6">This feature is coming soon...</p>
//           <button 
//             className="inline-block px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-md hover:bg-blue-700 transition duration-200"
//             onClick={handleClick}
//           >
//             <a href="/" className='text-black font-mono-bold hover:text-green'>Back to Home</a>
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Signin;


"use client";
import React, { useEffect, useState, useRef } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import Footer from '@/components/Footer';
import Navbar2 from '@/components/Navbar2';

const Signin = () => {
  const [isClient, setIsClient] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // This will run only on the client side after the component mounts
    setIsClient(true);
    // Set the audio file
    setAudio(new Audio('/assets/button-sound.mp3'));
  }, []);

  const handleClick = () => {
    if (audio) {
      audio.play();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <>
    <Navbar2/>
    <div id="hero" className="relative h-screen w-full">
      {isClient && (
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/desk_hero.mp4" 
          autoPlay 
          loop 
          muted={isMuted}
          playsInline
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-6xl md:text-6xl lg:text-8xl font-bold mb-4">
          Sign In
        </h1>
        <br></br>
        <p className="text-white md:text-6xl lg:text-8xl font-bold mb-4">
          This Feature is Coming Soon
        </p>
        <br />
        <button 
          className="text-4xl bg-gradient-to-r from-red-400 to-white-500 text-white py-3 px-6 rounded-full text-lg font-medium animate-bounce"
          onClick={handleClick}
        >
          <a href="/" className="text-white hover:text-green">Back to Home</a>
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Signin;
