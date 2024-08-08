"use client"
import React from 'react'
import Link from 'next/link'
import { FaBrain, FaEye, FaCubes, FaProjectDiagram, FaRobot, FaCommentDots } from 'react-icons/fa'
import { HoverEffect } from "../ui/card-hover-effect";

export function CardSect() {
  return (
    <>
    <div className="text-2xl md:text-5xl font-bold dark:text-white text-center">
    Our Services
        </div>
        <div className="font-extralight text-center md:text-[20px] dark:text-neutral-200 py-4">
        Competent with blockchain technology and AI-driven solutions. Utilize Our Specialized Knowledge to Grow Your Business.
        </div>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </>
  );
}

export const projects = [
  {
    icon: FaBrain,
    title: "Technology Consulting for AI",
    description: [
      "Strategic AI Guidance",
      "Advanced Tech Advisory",
      "AI Implementation Support",
      "Innovation Consulting"
    ],
    link: "#"
  },
  {
    icon: FaEye,
    title: "Vision on Computers",
    description: [
      "Computational Vision",
      "Computer Vision Solutions",
      "Visual Recognition Technology",
      "Machine Perception Systems"
    ],
    link: "#"
  },
  {
    icon: FaCubes,
    title: "Services for Blockchain",
    description: [
      "Blockchain Solutions",
      "Distributed Ledger Services",
      "Smart Contract Development",
      "Blockchain Consulting"
    ],
    link: "#"
  },
  {
    icon: FaProjectDiagram,
    title: "Foreseeable Modeling",
    description: [
      "Predictive Modeling Services",
      "Future Projection Analytics",
      "Predictive Simulation Solutions",
      "Forecasting and Trend Analysis"
    ],
    link: "#"
  },
  {
    icon: FaRobot,
    title: "Deep Learning and Machine Learning",
    description: [
      "Advanced Learning Algorithms",
      "Neural Network Solutions",
      "Deep Learning Applications",
      "Machine Learning Dev"
    ],
    link: "#"
  },
  {
    icon: FaCommentDots,
    title: "Conversational AI Chatbot Development",
    description: [
      "Conversational AI Solutions",
      "Chatbot Development Services",
      "Natural Language Processing",
      "Virtual Assistant Creation"
    ],
    link: "#"
  }
];
