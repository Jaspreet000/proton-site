"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import axios from "axios";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import Loading from "@/components/Loading";
import { set } from "mongoose";
import { Navbar } from "@/components/main_comps/Navbar";
import Head from "next/head";
import Script from "next/script";
import { usePageTimeTracking } from '@/hooks/usePageTimeTracking';

export default function GlobeDemo() {

  usePageTimeTracking("Contact Page");

  const World = dynamic(
    () => import("@/components/ui/globe").then((m) => m.World),
    {
      ssr: false,
    }
  );

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;


  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [hear, sethear] = useState("");
  const [role, setRole] = useState(""); // For "What is your Role in the Organization?"
  const [industry, setIndustry] = useState(""); // For "What is your Primary Industry of Your Organization?"
  const [objectives, setObjectives] = useState([]); // For "What are your Organizational Critical Objectives"
  const [otherRole, setOtherRole] = useState(""); // For custom role input
  const [othersRole, setOthersRole] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [objective, setObjective] = useState("");

  const [otherObjective, setOtherObjective] = useState("");

  const handleObjectiveChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setObjective(selectedValue);

    // Reset the otherObjective state when a different option is selected
    if (selectedValue !== "Others") {
      setOtherObjective("");
    }
  };

  const sendmail = async () => {
    setisLoading(true);
  
    // Check if all required fields are filled
    if (!email || !name || !message || !phone || !company) {
      toast.error("Please fill out all required fields.");
      setisLoading(false);
      return;
    }
  
    // Prepare data with conditional fields
    const data = {
      email,
      name,
      message,
      phone,
      company,
      hear,
      role: role === "Other" ? otherRole : role, // Custom role if "Other"
      industry: industry === "Others" ? othersRole : industry, // Custom industry if "Others"
      objectives: objective === "Others" ? otherObjective : objective, // Custom objective if "Others"
    };
  
    try {
      // Send data to the API route
      const response = await axios.post("/api/sendmail", data);
  
      // Handle the response from the API
      setisLoading(false);
      toast.success(`Hi ${name}, ${response.data.message}`);
  
      // Reset form fields after successful submission
      setemail("");
      setname("");
      setmessage("");
      setphone("");
      setcompany("");
      sethear("");
      setRole("");
      setIndustry("");
      setObjectives([]);
      setOtherRole("");
      setOthersRole("");
      setObjective("");
      setOtherObjective("");
    } catch (error) {
      // Error handling if the request fails
      setisLoading(false);
      console.error("Failed to send email:", error);
      toast.error("Failed to send email. Please try again.");
    }
  };

  return (
    <>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>

      <nav className="flex justify-center">
        {" "}
        <Navbar />{" "}
      </nav>
      {isLoading ? <Loading /> : <div></div>}
      <Toaster position="top-center" />
      <div className="flex flex-col md:flex-row w-full items-center justify-center py-10 h-full sm:h-screen md:h-auto dark:bg-black bg-white relative pt-[74px]">
        <div className="w-full h-full p-5">
          <div className="max-w-md w-full mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-[#334155]">
                Have a vision or a challenge?
              </h1>
              <p className="text-[#64748B] dark:text-[#94A3B8]">
                Drop us a note and we&apos;ll get back to you within 24-48
                hours.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => setname(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-[#4F46E5]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">
                  Email
                </label>
                <input
                  value={email}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-[#4F46E5]"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">
                  Phone
                </label>
                <input
                  type="text"
                  value={phone}
                  placeholder="Enter your phone no."
                  onChange={(e) => setphone(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-[#4F46E5]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">
                  Company Name
                </label>
                <input
                  value={company}
                  type="text"
                  placeholder="Enter your company's name"
                  className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-[#4F46E5]"
                  onChange={(e) => setcompany(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">
                Where did you hear about us?
              </label>
              <input
                value={hear}
                type="email"
                placeholder="Enter your source"
                className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-[#4F46E5]"
                onChange={(e) => sethear(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">
                Message
              </label>
              <textarea
                value={message}
                rows={4}
                placeholder="Enter your message"
                onChange={(e) => setmessage(e.target.value)}
                className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-[#4F46E5]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Role in the Organization */}
              <div className="space-y-2">
                <label className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">
                  What is your Role in the Organization?
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white"
                >
                  <option value="">Select Role</option>
                  <option value="Head of function or equivalent (CEO, Founder)">
                    Head of function or equivalent (CEO, Founder)
                  </option>
                  <option value="Regional/divisional head of function or equivalent (VP, Director)">
                    Regional/divisional head of function or equivalent (VP,
                    Director)
                  </option>
                  <option value="Direct report to head of function or equivalent">
                    Direct report to head of function or equivalent
                  </option>
                  <option value="Other">Other (please specify)</option>
                </select>
                {role === "Other" && (
                  <input
                    type="text"
                    value={otherRole}
                    onChange={(e) => setOtherRole(e.target.value)}
                    placeholder="Please specify your role"
                    className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white"
                  />
                )}
              </div>

              {/* Industry */}
              <div className="space-y-2">
                <label className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">
                  What is your Primary Industry of Your Organization?
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white"
                >
                  <option value="">Select Industry</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Banking and Financial Services">
                    Banking and Financial Services
                  </option>
                  <option value="Consulting Services">
                    Consulting Services
                  </option>
                  <option value="Consumer Goods">Consumer Goods</option>
                  <option value="Entertainment and Media">
                    Entertainment and Media
                  </option>
                  {/* Add other industry options */}
                  <option value="Others">Others (please specify)</option>
                </select>
                {industry === "Others" && (
                  <input
                    type="text"
                    value={otherRole}
                    onChange={(e) => setOthersRole(e.target.value)}
                    placeholder="Please specify primary industry of your organization"
                    className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white"
                  />
                )}
              </div>
            </div>

            {/* Organizational Objectives */}
            <div className="space-y-4">
              <label className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">
                What are your Organizational Critical Objectives Within Your
                Business Function for 2024/25?
              </label>
              <select
                className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-[#4F46E5]"
                value={objective}
                onChange={handleObjectiveChange}
              >
                <option value="" disabled>
                  Select your organizational objective
                </option>
                <option value="Data & Analytics">Data & Analytics</option>
                <option value="Data Governance & Operating Models">
                  Data Governance & Operating Models
                </option>
                <option value="Infrastructure & Cloud Strategies">
                  Infrastructure & Cloud Strategies
                </option>
                <option value="Advanced Technologies (Advanced AI, Machine Learning, etc.)">
                  Advanced Technologies (Advanced AI, Machine Learning, etc.)
                </option>
                <option value="Automation & Efficiencies">
                  Automation & Efficiencies
                </option>
                <option value="Talent Upskilling">Talent Upskilling</option>
                <option value="Cost/Resource Optimization">
                  Cost/Resource Optimization
                </option>
                <option value="Others">Others (please specify)</option>
              </select>

              {/* Show the input field only when "Others" is selected */}
              {objective === "Others" && (
                <div className="space-y-2">
                  <label className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">
                    Please specify your objective:
                  </label>
                  <input
                    type="text"
                    value={otherObjective}
                    onChange={(e) => setOtherObjective(e.target.value)}
                    placeholder="Specify your objective"
                    className="w-full px-4 py-3 rounded-md border-[2px] bg-white dark:bg-[#1E293B] text-[#334155] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5] dark:focus:ring-[#4F46E5]"
                  />
                </div>
              )}
            </div>

            <Button
              onClick={sendmail}
              className="w-full bg-blue-950 text-white hover:bg-blue-900 focus:ring-[#4F46E5] dark:bg-[#4F46E5] dark:hover:bg-[#4338CA] dark:focus:ring-[#4F46E5]"
            >
              Submit
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="div"
          ></motion.div>
          <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div className="absolute hidden md:block w-full -bottom-20 h-72 md:h-full z-10">
            <World data={sampleArcs} globeConfig={globeConfig} />;
          </div>
        </div>
      </div>
    </>
  );
}
