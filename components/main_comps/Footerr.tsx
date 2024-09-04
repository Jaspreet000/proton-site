// components/Footer.js
"use client"

import React from 'react';
import { FaFlagUsa, FaMapMarkerAlt, FaLeaf, FaFlag, FaMapSigns } from 'react-icons/fa';

import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {US} from '../../public/assets/flags/US';
import {Canada} from '../../public/assets/flags/Canada';
import {Netherland} from '../../public/assets/flags/Netherland';
import {India} from '../../public/assets/flags/India';

export default function Footer() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push('/Contact');
  };
  return (
    <footer className="bg-white text-gray-700 py-10 mt-9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Social Media */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 pr-2">
            <h2 className="text-2xl font-bold mb-2">Proton Datalabs</h2>
            <p className="text-sm text-gray-500 mb-4">
              Copyright © 2021 Proton Datalabs<br />
              All rights reserved
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block mb-2">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block mb-2">Services</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block mb-2">Career</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block mb-2">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block mb-2">Testimonials</a></li>
            </ul>
          </div>

          {/* Get Updates */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="font-bold text-lg mb-4">Location</h3>
            <ul>
              <li className="flex items-center">
                <US/>
                <span className="ml-2">Seattle, USA</span>
              </li>
              <li className="flex items-center mt-2">
                <Canada/>
                <span className="ml-2">Toronto, Canada</span>
              </li>
              <li className="flex items-center mt-2">
                <Netherland/>
                <span className="ml-2">Amsterdam, Netherlands</span>
              </li>
              <li className="flex items-center mt-2">
                <India/>
                <span className="ml-2">New Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <div className='flex flex-col h-[130px] pt-[30px]'>
              <p className='text-[14px] mt-5'>You can also reach us by clicking the button below</p>
              <button className="bg-black dark:bg-white rounded-[12px] w-fit h-[34px] text-[12px] text-white dark:text-black px-4 py-2 mt-[12px]" onClick={handleButtonClick}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
