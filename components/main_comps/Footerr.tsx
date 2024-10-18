// components/Footer.js
"use client"

import React from 'react';
import { FaFlagUsa, FaMapMarkerAlt, FaLeaf, FaFlag, FaMapSigns } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
// import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {US} from '../../public/assets/flags/US';
import {Canada} from '../../public/assets/flags/Canada';
import {Netherland} from '../../public/assets/flags/Netherland';
import {India} from '../../public/assets/flags/India';
import Image from 'next/image';

export default function Footer() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push('/Contact');
  };
  return (
    <footer className="bg-white text-gray-700 py-10 mt-9">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Social Media */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 pr-2 lg:ml-[-50px]">
            {/* <h2 className="text-2xl font-bold mb-2">Proton Datalabs</h2> */}
            <div className='flex justify-center'>
              <Image
                src="/assets/images/logo.png"
                alt="Proton Datalabs"
                width={170}
                height={50}
              />
            </div>
            <p className="text-sm text-center text-gray-500 mb-4">
              Copyright © 2021 Proton Datalabs<br />
              All rights reserved
            </p>
          </div>

          {/* Company Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul>
              <li><Link href='#' legacyBehavior passHref><span className="text-gray-500 hover:text-gray-700 block mb-2">Home</span></Link></li>
              <li><Link href='/#services' legacyBehavior passHref><span className="text-gray-500 hover:text-gray-700 block mb-2">Services</span></Link></li>
              <li><Link href='/blogs' legacyBehavior passHref><span className="text-gray-500 hover:text-gray-700 block mb-2">Blogs</span></Link></li>
              <li><Link href='/career' legacyBehavior passHref><span className="text-gray-500 hover:text-gray-700 block mb-2">Career</span></Link></li>
              <li><Link href='/Contact' legacyBehavior passHref><span className="text-gray-500 hover:text-gray-700 block mb-2">Contact Us</span></Link></li>
            </ul>
          </div>

          {/* Get Updates */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:ml-[-40px]">
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
                <span className="ml-2">Bangalore, India</span>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 mt-[-40px]">
            <div className='flex flex-col h-[130px] pt-[30px]'>
              <p className='text-[14px] mt-5'>You can also reach us by clicking the button below</p>
              <button className="bg-blue-950 dark:bg-white rounded-[12px] w-fit h-[34px] text-[12px] text-white dark:text-black px-4 py-2 mt-[12px]" onClick={handleButtonClick}>Contact Us</button>
            </div>

            <div className="flex space-x-4 mt-10">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaInstagram className="h-6 w-6" />
              </a>
              <Link href="https://www.linkedin.com/in/protondatalabs/" className="text-gray-500 hover:text-gray-700">
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link href="https://x.com/Proton_Datalabs" className="text-gray-500 hover:text-gray-700">
              <FaXTwitter className="h-6 w-6"/>
              </Link>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        {/* Horizontal Line */}
        <hr className="border-t-2 border-gray-300 mt-10" />

        {/* Policy Links */}
        <div className="flex flex-wrap justify-around items-center mt-6 text-sm text-gray-500">
          <div className="flex justify-between w-[80%] sm:w-[90%] text-center">
            <span><Link href="/terms-and-conditions">Terms of Service</Link></span>  
            <span><Link href="/disclaimer">Acceptable Use Policy</Link></span>  
            <span><Link href="/privacy-policy">Privacy Statement</Link></span>  
            <span><Link href="/cookies">Cookie Preferences</Link></span>
          </div>
          {/* <div className="w-full sm:w-auto text-center mt-4 sm:mt-0">
            © Copyright 2024 Proton Datalabs, Inc. All rights reserved.
          </div> */}
        </div>
      </div>
    </footer>
  );
}
