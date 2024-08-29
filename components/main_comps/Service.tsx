"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <>
    <div className="text-2xl my-4 mt-28 md:text-5xl font-bold dark:text-white text-center">
    Our Services
        </div>
        <div className="w-4/6 m-auto font-extralight text-center md:text-[20px] dark:text-neutral-200 py-4 mb-10">
        Competent with blockchain technology and AI-driven solutions. Utilize
        Our Specialized Knowledge to Grow Your Business.
        </div>
    <div className="w-full h-full py-20 pt-0">
      <Carousel items={cards} />
    </div>
    </>
  );
}

const DummyContent = ({contentArray}: {contentArray: any[]}) => {
  return (
    <>
      {contentArray.map((text, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {text}
              </span>{" "}
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Technology Consulting for AI",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent contentArray={[
      "Strategic AI Guidance",
      "Advanced Tech Advisory",
      "AI Implementation Support",
      "Innovation Consulting",
    ]}/>,
  },
  {
    category: "Vision on Computers",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent 
    contentArray={[
      "Computational Vision",
      "Computer Vision Solutions",
      "Visual Recognition Technology",
      "Machine Perception Systems",
    ]}/>,
  },
  {
    category: "Services for Blockchain",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent 
        contentArray={[
          "Blockchain Solutions",
          "Distributed Ledger Services",
          "Smart Contract Development",
          "Blockchain Consulting",
        ]}/>,
  },

  {
    category: "Foreseeable Modeling",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent 
    contentArray={[
      "Predictive Modeling Services",
      "Future Projection Analytics",
      "Predictive Simulation Solutions",
      "Forecasting and Trend Analysis",
    ]}/>,
  },
  {
    category: "Deep Learning and Machine Learning",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent 
    contentArray={[
      "Advanced Learning Algorithms",
      "Neural Network Solutions",
      "Deep Learning Applications",
      "Machine Learning Development",
    ]}/>,
  },
  {
    category: "Conversational AI Chatbot Development",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent 
    contentArray={[
      "Conversational AI Solutions",
      "Chatbot Development Services",
      "Natural Language Processing",
      "Virtual Assistant Creation",
    ]}/>,
  },
];
