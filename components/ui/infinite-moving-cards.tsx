"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width to toggle button visibility
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation handlers
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Left button (visible on desktop) */}
      {!isMobile && (
        <button
          onClick={goToPrevious}
          className="left-4 p-3 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Card container */}
      <div className="w-full md:max-w-3xl lg:max-w-4xl px-6 py-8">
        <div
          className={cn(
            "relative rounded-2xl border border-slate-700 py-8",
            "flex-shrink-0 bg-opacity-60 backdrop-filter backdrop-blur-lg",
            "shadow-xl",
            isMobile ? "w-[95%] mx-auto px-6" : "w-full px-10"
          )}
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          <blockquote>
            <span className={cn(
            "leading-relaxed text-gray-100 font-normal block",
            isMobile ? "text-xs text-justify" : "text-base"
          )}>
              {items[currentIndex].quote}
            </span>
            <div className="mt-6">
              <span className="block text-lg font-semibold text-gray-300">
                {items[currentIndex].name}
              </span>
              <span className="block text-sm text-gray-400">
                {items[currentIndex].title}
              </span>
            </div>
          </blockquote>
        </div>
      </div>

      {/* Right button (visible on desktop) */}
      {!isMobile && (
        <button
          onClick={goToNext}
          className="right-4 p-3 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};
