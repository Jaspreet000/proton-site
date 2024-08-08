"use client"
// components/Footerr.js
import React from 'react';

const Footerr = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1 md:border-r md:border-gray-700 pr-8">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline text-blue-500">Home</a>
            <a href="#" className="hover:underline">Main Case Studies</a>
            <a href="#" className="hover:underline">ToS</a>
          </nav>
        </div>
        <div className="flex-1 text-center md:text-left md:border-r md:border-gray-700 px-8">
          <h2 className="text-2xl font-bold">Everything ML</h2>
          <p className="mt-2">Stay up to date with the world of machine learning & AI</p>
          <form className="mt-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 mb-2 border border-gray-600 rounded bg-black text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-2 border border-gray-600 rounded bg-black text-white"
            />
            <button type="submit" className="bg-white text-black py-2 px-4 rounded w-full">
              SIGN UP
            </button>
          </form>
        </div>
        <div className="flex-1 justify-center items-center text-center md:text-right pl-8">
          <div className="mb-8 flex justify-center">
            {/* Placeholder for image or icon */}
            <div className="h-16 w-16 bg-gray-800 rounded-full mx-auto md:mx-0"></div>
          </div>
          <p className='text-justify'>AI & machine learning consulting company focused on building production level AI projects. We specialize in data science and deep learning development that give businesses a better understanding of their revenue streams and building tools to make them more profitable.</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>Copyright Width LLC</p>
        <p>Width AI is a registered trademark of Width LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footerr;
