"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Advisor
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src="/assets/images/advisor.png"
                alt="Dr. Pankush Kalgotra"
                width={300}
                height={300}
                className="h-full w-full object-cover md:w-48"
                quality={100}
              />
            </div>
            <div className="p-8">
              <a
                href="https://harbert.auburn.edu/directory/pankush-kalgotra.html"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dr. Pankush Kalgotra
                <ExternalLink className="inline-block ml-2 w-4 h-4" />
              </a>
              <p className="mt-2 text-gray-500">
                Assistant Professor at Auburn University
              </p>
              <p className="mt-4 text-gray-600">
                We are proud to have Dr. Pankush Kalgotra as an advisor at
                Proton DataLabs. Dr. Kalgotra is an Assistant Professor at
                Auburn University, specializing in healthcare analytics, network
                science, and the intersection of neuroimaging and information
                systems.
              </p>
              <div
                className={`mt-4 overflow-hidden transition-all duration-500 ${
                  isExpanded ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">
                  His extensive research, which has been widely published and
                  cited in leading academic journals, brings invaluable
                  expertise to our team. With a PhD in Management Science and
                  Information Systems, Dr. Kalgotra&apos;s guidance enhances our
                  ability to provide cutting-edge AI, data science, and business
                  intelligence solutions to small and mid-sized companies.
                </p>
                <p className="mt-4 text-gray-600">
                  His deep knowledge of healthcare analytics and innovative data
                  approaches aligns perfectly with our mission of delivering
                  tailored tech solutions that empower businesses to unlock
                  growth and thrive in today&apos;s fast-paced digital landscape. Dr.
                  Kalgotra has been a mentor and guide in the field of analytics
                  since the early days of our journey, and his strategic insight
                  continues to help us shape innovative and impactful solutions
                  for our clients.
                </p>
              </div>
              <button
                className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-950 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Read less" : "Read more"}
                {isExpanded ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
