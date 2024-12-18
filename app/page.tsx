import AdvisorSection from "@/components/main_comps/Advisor";

import { BlogHom } from "@/components/main_comps/BlogHom";

import Footerr from "@/components/main_comps/Footerr";
import { TimelineDemo } from "@/components/main_comps/Journeycomp";
import { Navbar } from "@/components/main_comps/Navbar";

import { AuroraBackgroundDemo } from "@/components/main_comps/random";

import { Services } from "@/components/main_comps/Services";
import { InfiniteMovingCardsDemo } from "@/components/main_comps/Testimonial";
import Image from "next/image";
import React from "react";
import { dbConnect } from "../lib/dbConnect";
import { usePageTimeTracking } from "@/hooks/usePageTimeTracking";

// Metadata for SEO optimization
export const metadata = {
  title: "Proton Datalabs | AI, Data Science, Cloud & Business Solutions",
  description:
    "Explore Proton Datalabs' innovative AI, Data Science, Cloud, and Business Intelligence solutions. We help businesses thrive with tailored tech services that unlock growth.",
  keywords:
    "Proton Datalabs, ProtonDatalabs, Datalabs, Data labs, Data lab, Protondatalab, Proton Datalab, Proton Data Labs, AI solutions, Data Science, Cloud Solutions, Business Intelligence, Custom AI models, Tech consulting, Digital product development, Data engineering, Business growth, Business analytics, AI experts",
};

export default function Home() {
  return (
    <>
      <AuroraBackgroundDemo />

      {/* Timeline section */}
      <div className="relative space-y-12">
        <TimelineDemo />
      </div>

      {/* Services section */}
      <div id="services">
        {" "}
        {/* Add this ID */}
        <Services />
      </div>

      {/* Blog section */}
      <BlogHom />

      {/* Testimonials section */}
      <div className="mt-10">
        <InfiniteMovingCardsDemo />
      </div>

      <AdvisorSection />

      {/* Footer */}
      <Footerr />
    </>
  );
}
