"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <>
      <div className="h-[45rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        {/* Background video with blur */}
        <video
          src="/assets/slack/testimonialvid.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover filter blur-lg z-0"
        />

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"></div>

        {/* Content on top of the video */}
        <div className="relative z-10 text-2xl pt-10 pb-16 text-white md:text-5xl font-bold dark:text-white text-center">
          Client Testimonials
        </div>
        <div className="relative z-10">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "Working with Proton Data Labs has been a highly value add for Grant Engine. We tasked them with developing a custom software application to automate the creation of a specialized scientific document. This document demands significant research from public databases, peer-reviewed literature, and other sources. Proton Data Labs exceeded our expectations by delivering an application that consistently creates a first draft in our set format, significantly streamlining our workflow. Their expertise and dedication to understanding our needs have truly enhanced our efficiency and productivity. I can recommend the team and the service level as top-notch.",
    name: "Sam Tetlow",
    title: "Founder & CEO, Grant Engine",
  },
  // {
  //   quote: "All that we see or seem is but a dream within a dream.",
  //   name: "Edgar Allan Poe",
  //   title: "A Dream Within a Dream",
  // },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  // },
];
