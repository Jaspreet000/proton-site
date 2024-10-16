"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import readingAnimation from "@/public/success.json"; // Assuming you have an animation JSON file

const Disclaimer = () => {
  // Animation options
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: readingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-50 flex flex-col items-center justify-center">
      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full p-6 bg-white shadow-md z-10"
      >
        <h1 className="text-2xl font-extrabold text-blue-950">ProtonDatalabs</h1>
      </motion.div>

      {/* Animated Image or Lottie Animation */}
      <div className="w-full md:w-1/3 mb-6 mt-20">
        <Lottie options={animationOptions} height={300} width={300} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto p-6 md:p-12 bg-white shadow-xl rounded-lg relative z-20"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-500 opacity-10 rounded-lg"></div>

        <h1 className="text-5xl font-extrabold text-center text-blue-950 mb-8 relative z-10">
          Website Disclaimer Policy
        </h1>

        <p className="text-gray-700 mb-6 text-lg relative z-10 leading-relaxed">
          The information provided on the ProtonDatalabs website is for general
          informational purposes only. While we strive to keep the content up to
          date and accurate, we make no representations or warranties of any
          kind, express or implied, about the completeness, accuracy,
          reliability, suitability, or availability of the information, products,
          services, or related graphics contained on the website for any purpose.
        </p>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold text-blue-950">No Professional Advice</h2>
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              The content on this website does not constitute professional advice
              of any kind. Users should consult with appropriate professionals before
              making decisions based on the information provided on this website.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold text-blue-950">Use at Your Own Risk</h2>
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              Any reliance you place on the information provided on this website is
              strictly at your own risk. ProtonDatalabs disclaims all liability for
              any loss or damage arising from the use of the website’s content.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold text-blue-950">Third-Party Content</h2>
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              The website may contain links to third-party websites that are not
              controlled by ProtonDatalabs. We are not responsible for the accuracy
              or reliability of information provided on third-party sites.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold text-blue-950">No Warranty</h2>
            <p className="text-gray-700 text-lg leading-relaxed mt-2">
              The website and its content are provided "as is" without any warranty
              of any kind, whether express or implied, including warranties of
              merchantability or fitness for a particular purpose.
            </p>
          </motion.div>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-8 relative z-10"
        >
          <button
            className="bg-blue-950 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Disclaimer;
