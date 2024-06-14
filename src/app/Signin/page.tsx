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
"use client";
import React, { useEffect, useState } from 'react';
import Navbar2 from '@/components/Navbar2';
import Footer from '@/components/Footer';

const Signin = () => {
  const [isClient, setIsClient] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setIsClient(true);
    setAudio(new Audio('/assets/button-sound.mp3'));
  }, []);

  const handleClick = () => {
    if (audio) {
      audio.play();
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="flex items-center justify-center h-screen bg-gray-800 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold mb-4">Sign In</h1>
          <p className="text-3xl mb-6">This feature is coming soon...</p>
          <button 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-md hover:bg-blue-700 transition duration-200"
            onClick={handleClick}
          >
            <a href="/" className='text-black font-mono-bold hover:text-green'>Back to Home</a>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;


