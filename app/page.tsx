import { BefFoot } from "@/components/main_comps/BefFoot";
import { BlogHom } from "@/components/main_comps/BlogHom";
import { CardSect } from "@/components/main_comps/CardSect";
import Footerr from "@/components/main_comps/Footerr";
import { TimelineDemo } from "@/components/main_comps/Journeycomp";
import { Navbar } from "@/components/main_comps/Navbar";
import { MultiStepLoaderDemo } from "@/components/main_comps/NewCards";
import { AuroraBackgroundDemo } from "@/components/main_comps/random";
import { AppleCardsCarouselDemo } from "@/components/main_comps/Service";
import { Services } from "@/components/main_comps/Services";
import { InfiniteMovingCardsDemo } from "@/components/main_comps/Testimonial";
import Image from "next/image";
import React from "react";

// Metadata for SEO optimization
export const metadata = {
  title: "Proton Datalabs | AI, Data Science, Cloud & Business Solutions",
  description:
    "Explore Proton Datalabs' innovative AI, Data Science, Cloud, and Business Intelligence solutions. We help businesses thrive with tailored tech services that unlock growth.",
  keywords:
    "Proton Datalabs, Proton Data Labs, AI solutions, Data Science, Cloud Solutions, Business Intelligence, Custom AI models, Tech consulting, Digital product development, Data engineering, Business growth, Business analytics, AI experts",
};

export default function Home() {
  return (
    <>
      <AuroraBackgroundDemo />

      {/* Timeline section */}
      <div className="relative space-y-12">
        <h1>Our Journey and Growth</h1>
        <TimelineDemo />
      </div>

      {/* Services section */}
      <h2>Our Services</h2>
      <Services />

      {/* Blog section */}
      <h2>Latest from Our Blog</h2>
      <BlogHom />

      {/* Testimonials section */}
      <div className="mt-10">
        <h2>Client Testimonials</h2>
        <InfiniteMovingCardsDemo />
      </div>

      {/* Footer */}
      <Footerr />
    </>
  );
}
