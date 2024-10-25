"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [start, setStart] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize); // Add event listener for resizing

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  // Code for screens greater than 700px
  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };

  // For large screens, run the animation setup
  useEffect(() => {
    if (!isMobile) {
      addAnimation();
    }
  }, [isMobile]);

  // Code for screens less than 700px
  const getAnimationDuration = () => {
    if (speed === "fast") return "100s";
    if (speed === "normal") return "100s";
    return "80s";
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden",
        className,
        isMobile
          ? "" // No additional class for mobile
          : "scroller [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex gap-4 py-4",
          isMobile
            ? "overflow-x-auto snap-x snap-mandatory w-full" // For mobile (width < 700px)
            : "min-w-full shrink-0 w-max flex-nowrap", // For large screens (width > 700px)
          start && !isMobile && "animate-scroll", // Add animation for larger screens
          pauseOnHover && !isMobile && "hover:[animation-play-state:paused]" // Pause on hover for larger screens
        )}
        style={{
          animationDuration: !isMobile ? undefined : undefined,
          scrollSnapType: isMobile ? "x mandatory" : undefined,
          scrollPaddingLeft: "calc(50vw - 150px)", // Center cards in mobile view (assuming max width of 300px)
          scrollPaddingRight: "calc(50vw - 150px)", // Center cards when swiping
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              "relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 snap-center", // Snap to center
              isMobile ? "w-[300px] mx-auto" : "w-[350px] md:w-[450px]" // Updated mobile width
            )}
            style={{
              background: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
              backdropFilter: "blur(10px)", // Blur effect
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)", // Soft shadow to make the cards stand out
            }}
          >
            <blockquote>
              <span className="relative z-20 text-xs leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
