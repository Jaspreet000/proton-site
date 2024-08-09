"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import Image from "next/image";


type LoadingState = { text: string; };

const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  const [loadingStates, setLoadingStates] = useState<Array<LoadingState>>([]);

  const buttonTrigger = (states: Array<LoadingState>) => {
    setLoadingStates(states);
    setLoading(true);
  };

  const buttontriggernikhs1 = () => {
    const states: Array<LoadingState> = [
      { text: "Strategic AI Guidance" },
      { text: "Advanced Tech Advisory" },
      { text: "AI Implementation Support" },
      { text: "Innovation Consulting" },
    ];
    buttonTrigger(states);
  };

  const buttontriggernikhs2 = () => {
    const states: Array<LoadingState> = [
      { text: "Computational Vision" },
      { text: "Computer Vision Solutions" },
      { text: "Visual Recognition Technology" },
      { text: "Machine Perception Systems" },
    ];
    buttonTrigger(states);
  };

  const buttontriggernikhs3 = () => {
    const states: Array<LoadingState> = [
      { text: "Blockchain Solutions" },
      { text: "Distributed Ledger Services" },
      { text: "Smart Contract Development" },
      { text: "Blockchain Consulting" },
    ];
    buttonTrigger(states);
  };

  const buttontriggernikhs4 = () => {
    const states: Array<LoadingState> = [
      { text: "Predictive Modeling Services"},
      { text: "Future Projection Analytics" },
      { text: "Predictive Simulation Solutions" },
      { text: "Forecasting and Trend Analysis" },
    ];
    buttonTrigger(states);
  };

  const buttontriggernikhs5 = () => {
    const states: Array<LoadingState> = [
      { text: "Advanced Learning Algorithms" },
      { text: "Neural Network Solutions" },
      { text: "Deep Learning Applications" },
      { text: "Machine Learning Development"},
    ];
    buttonTrigger(states);
  };

  const buttontriggernikhs6 = () => {
    const states: Array<LoadingState> = [
      { text: "Conversational AI Solutions" },
      { text: "Chatbot Development Services" },
      { text: "Natural Language Processing" },
      { text: "Virtual Assistant Creation" },
    ];
    buttonTrigger(states);
  };
  
  return (
    <>
    <div className="text-2xl my-4 mt-7 md:text-5xl font-bold dark:text-white text-center">
        Our Services
      </div>
      <div className="w-4/6 m-auto font-extralight text-center md:text-[20px] dark:text-neutral-200 py-4 mb-10">
        Competent with blockchain technology and AI-driven solutions. Utilize
        Our Specialized Knowledge to Grow Your Business.
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white px-10 sm:px-[7rem]">
        <div onClick={buttontriggernikhs1} className="bg-gray-950 border rounded-lg overflow-hidden cursor-pointer">
          <Image className="w-full h-auto object-cover px-20 py-8 sm:px-24 sm:py-10" src="/predictive-chart.png" alt="AI-Powered Voicebot" height={300} width={500} />
          <div className="p-4 flex justify-between items-end">
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Technology Consulting for AI</h3>
              <p className="text-gray-400 mt-2">
                Gain actionable insights from your call data with Call Analytics.
              </p>
            </div>
            <svg
              className="h-4 w-[7rem] ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

        <div onClick={buttontriggernikhs2} className="bg-gray-950 border rounded-lg overflow-hidden cursor-pointer">
          <Image className="w-full h-auto object-cover px-20 py-8 sm:px-24 sm:py-10" src="/customer-service.png" alt="AI-Powered Voicebot" height={300} width={500} />
          <div className="p-4 flex justify-between items-end">
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Vision on Computers</h3>
              <p className="text-gray-400 mt-2">
                Empower your agents with our AI-driven Agent 
              </p>
            </div>
            <svg
              className="h-4 w-[7rem] ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

        <div onClick={buttontriggernikhs3} className="bg-gray-950 border rounded-lg overflow-hidden cursor-pointer">
          <Image className="w-full h-auto object-cover px-20 py-8 sm:px-24 sm:py-10" src="/live-chat.png" alt="AI-Powered Voicebot" height={300} width={300} />
          <div className="p-4 flex justify-between items-end">
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Services for Blockchain</h3>
              <p className="text-gray-400 mt-2">
                Our AI-powered Voicebot automates customer interactions with natural, human-like conversations, reducing wait times and enhancing user experiences.
              </p>
            </div>
            <svg
              className="h-4 w-[7rem] ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
        <div onClick={buttontriggernikhs4} className="bg-gray-950 border rounded-lg overflow-hidden cursor-pointer">
          <Image className="w-full h-auto object-cover px-20 py-8 sm:px-24 sm:py-10" src="/live-chat.png" alt="AI-Powered Voicebot" height={300} width={300} />
          <div className="p-4 flex justify-between items-end">
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Foreseeable Modeling</h3>
              <p className="text-gray-400 mt-2">
                Our AI-powered Voicebot automates customer interactions with natural, human-like conversations, reducing wait times and enhancing user experiences.
              </p>
            </div>
            <svg
              className="h-4 w-[7rem] ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

        <div onClick={buttontriggernikhs5} className="bg-gray-950 border rounded-lg overflow-hidden cursor-pointer">
          <Image className="w-full h-auto object-cover px-20 py-8 sm:px-24 sm:py-10" src="/live-chat.png" alt="AI-Powered Voicebot" height={300} width={300} />
          <div className="p-4 flex justify-between items-end">
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Deep Learning and Machine Learning</h3>
              <p className="text-gray-400 mt-2">
                Our AI-powered Voicebot automates customer interactions with natural, human-like conversations, reducing wait times and enhancing user experiences.
              </p>
            </div>
            <svg
              className="h-4 w-[7rem] ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

        <div onClick={buttontriggernikhs6} className="bg-gray-950 border rounded-lg overflow-hidden cursor-pointer">
          <Image className="w-full h-auto object-cover px-20 py-8 sm:px-24 sm:py-10" src="/live-chat.png" alt="AI-Powered Voicebot" height={300} width={300} />
          <div className="p-4 flex justify-between items-end">
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Conversational AI Chatbot Development</h3>
              <p className="text-gray-400 mt-2">
                Our AI-powered Voicebot automates customer interactions with natural, human-like conversations, reducing wait times and enhancing user experiences.
              </p>
            </div>
            <svg
              className="h-4 w-[7rem] ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>







      <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
  </>
  );
}
