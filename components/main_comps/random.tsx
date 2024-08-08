"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Navbar } from "./Navbar";
// import { CardSect } from "./CardSect";

export function AuroraBackgroundDemo() {
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
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Empowering Your data Elevating Your Business
        </div>
        <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4">
        Get the Most Out of ProtonDataLabs AI and Data Science Capabilities
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
        Book Your Consultation Today
        </button>
      </motion.div>
    </AuroraBackground>
    </>
  );
}
