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
    title: "",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent contentArray={[
      "Strategic AI Guidance",
      "Advanced Tech Advisory",
      "AI Implementation Support",
      "Innovation Consulting",
    ]}/>,
  },
  {
    category: "Vision on Computers",
    title: "",
    src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    title: "",
    src: "https://images.unsplash.com/photo-1639754391620-197afd388802?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    title: "",
    src: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    title: "",
    src: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    title: "",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent 
    contentArray={[
      "Conversational AI Solutions",
      "Chatbot Development Services",
      "Natural Language Processing",
      "Virtual Assistant Creation",
    ]}/>,
  },
];
