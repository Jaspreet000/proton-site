"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function Services() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div className="text-2xl md:text-5xl font-bold dark:text-white text-center">
      Sectors We Boost
        </div>
        <div className="font-extralight text-center md:text-[20px] dark:text-neutral-200 py-4">
        We provide unmatched AI solutions to a wide range of sectors as a top AI development business.
        </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Sector",
    title: "Healthcare & Medicine",
    src: "https://th.bing.com/th/id/OIP.soyoU70aPtTzlSeDvBZImgHaDf?rs=1&pid=ImgDetMain",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Accept Decentralization to Provide Unwavering Data Security, Unlock Blockchain&apos;s Potential to Provide Tamper-Resistant Medical Records, and Enable AI-Driven Insights to Transform Patient Care. A Journey of Transformation Is Awaiting You.
        </p>
      );
    },
  },
  {
    description: "Sector",
    title: "Fintech & Banking",
    src: "https://th.bing.com/th/id/OIP.KfluCi4jB8cCPP1hVzU3iwHaE8?rs=1&pid=ImgDetMain",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Fulfill your company requirements with premier services that have a significant influence on the worldwide banking and finance industries.
        </p>
      );
    },
  },

  {
    description: "Sector",
    title: "Supply Chain & Logistics",
    src: "https://th.bing.com/th/id/R.9d3825a8b28e9f157a9d9870f0a608f8?rik=Z%2fOOtkrezrkqcA&riu=http%3a%2f%2fglomacs.com%2fwp-content%2fuploads%2f2020%2f08%2fLogistics-Supply-Chain-Management-1920x900-1.jpg&ehk=bhWRnFio106WMy9p3r2a6LDXDWBq4ev4ctJq8pzxcFE%3d&risl=&pid=ImgRaw&r=0",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          To improve operational efficiency, streamline logistical procedures, and guarantee safe and transparent transactions, integrate decentralized technology, blockchain, and AI-driven solutions.
        </p>
      );
    },
  },
  {
    description: "Sector",
    title: "Customer Service & HR",
    src: "https://th.bing.com/th/id/OIP.CFPI5jbtsmdw6s3eRanNggAAAA?rs=1&pid=ImgDetMain",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Adopt the technology of the future today, and watch as your company soars on the creative wave, wowing clients and igniting a passion for excellence among your employees.
        </p>
      );
    },
  },
  {
    description: "Sector",
    title: "E-Commerce & Retail",
    src: "https://www.techfunnel.com/wp-content/uploads/2019/07/Top-Benefits-of-ECommerce-for-Retailers-_-ECommerce-in-retail-1-768x444.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Take your online presence to the next level by embracing decentralized technology for improved security, transparency, and seamless consumer experiences.
        </p>
      );
    },
  },
  {
    description: "Sector",
    title: "Arts & Entertainment",
    src: "https://www.usm.edu/undergraduate-programs/_images/feature-program-entertainment-indust.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Embrace a new era of digital art and entertainment with cutting-edge technologies like blockchain, AI, and VR. Unleash your creativity, captivate audiences, and transform how art and entertainment are produced and experienced.
        </p>
      );
    },
  },
];
