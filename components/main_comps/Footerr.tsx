// components/Footer.js
"use client";

import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { US } from "../../public/assets/flags/US";
import { Canada } from "../../public/assets/flags/Canada";
import { Netherland } from "../../public/assets/flags/Netherland";
import { India } from "../../public/assets/flags/India";
import Image from "next/image";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-white text-gray-700 py-10">
      {/* Outer Container with Padding */}
      <div className="px-6 md:px-28 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Container for all footer sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center sm:items-start md:items-start lg:items-start">
              <Image
                src="/assets/images/logo.png"
                alt="Proton Datalabs"
                width={150}
                height={50}
                className="mb-4"
              />
              <p className="text-sm text-gray-500 text-center">
                © 2021 Proton Datalabs
                <br />
                All rights reserved
              </p>
            </div>

            {/* Explore Links */}
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-lg mb-4">Explore</h3>
              <ul className="space-y-2">
                {["Home", "Services", "Blogs", "Career", "Contact Us"].map((item, index) => (
                  <li key={index}>
                    <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                      <span className="text-gray-500 hover:text-gray-700">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-lg mb-4">Location</h3>
              <ul className="space-y-2">
                {[{ component: <US />, label: "Seattle, USA" },
                  { component: <Canada />, label: "Toronto, Canada" },
                  { component: <Netherland />, label: "Amsterdam, Netherlands" },
                  { component: <India />, label: "Bangalore, India" }
                ].map((location, index) => (
                  <li key={index} className="flex items-center">
                    {location.component}
                    <span className="ml-2">{location.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect and Follow Us */}
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <button
                onClick={() => router.push("/Contact")}
                className="bg-blue-950 text-white rounded-md px-6 py-2 text-sm hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-6"
              >
                Contact Us
              </button>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { href: "#", icon: <FaInstagram className="h-6 w-6" />, label: "Instagram" },
                  { href: "https://www.linkedin.com/in/protondatalabs/", icon: <FaLinkedin className="h-6 w-6" />, label: "LinkedIn" },
                  { href: "https://x.com/Proton_Datalabs", icon: <FaXTwitter className="h-6 w-6" />, label: "Twitter" },
                  { href: "#", icon: <FaYoutube className="h-6 w-6" />, label: "YouTube" }
                ].map((social, index) => (
                  <a key={index} href={social.href} className="text-gray-500 hover:text-gray-700 transition-colors rounded-full p-2">
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="border-t-2 border-gray-300 mt-10" />

          {/* Policy Links
          <div className="flex flex-wrap justify-center items-center mt-6 text-sm text-gray-500 gap-4">
            {["Terms of Service", "Acceptable Use Policy", "Privacy Statement", "Cookie Preferences"].map((policy, index) => (
              <Link key={index} href={`/${policy.toLowerCase().replace(/ /g, "-")}`}>
                {policy}
              </Link>
            ))}
          </div> */}

          {/* Policy Links */}
        <div className="flex flex-wrap justify-center items-center mt-6 text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-8 w-full sm:w-[90%] text-center">
            <span>
              <Link href="/terms-and-conditions">Terms of Service</Link>
            </span>
            <span>
              <Link href="/disclaimer">Acceptable Use Policy</Link>
            </span>
            <span>
              <Link href="/privacy-policy">Privacy Statement</Link>
            </span>
            <span>
              <Link href="/cookies">Cookie Preferences</Link>
            </span>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
