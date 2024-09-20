"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Navbar } from "./Navbar";
import { useRouter } from 'next/navigation';
// import { CardSect } from "./CardSect";

export function AuroraBackgroundDemo() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/Contact');
  };

  return (
    <>
    <nav className="flex justify-center"> <Navbar/> </nav>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 pt-[74px]"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        
        Unlock Your Business Potential <br/>and Achieve Growth
        </div>
        <div className="font-extralight text-base text-gray-500 md:text-2xl dark:text-neutral-200 py-4">
        Helping Businesses Thrive with Tailored AI, Data, and Cloud Solutions that Level the Playing Field.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2" onClick={handleButtonClick}>
        Book Your Consultation Today
        </button>
      </motion.div>
    </AuroraBackground>
    </>
  );
}
