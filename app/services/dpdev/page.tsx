import { Metadata } from "next";
import DPIComponent from "@/components/page_comps/servic/dpdev"; // Adjust path as needed
import React from "react";

// Metadata configuration for SEO optimization
export const metadata: Metadata = {
  title: "Digital Product Development",
  description:
    "Explore our Digital Product Development services, from custom software to mobile app development and project management. Transforming ideas into market-ready solutions that drive growth.",
  keywords: [
    "Digital Product Development",
    "Custom Software Development",
    "Mobile App Development",
    "Project Management",
    "Tech Stack",
    "Software Solutions",
  ],
  openGraph: {
    title: "Digital Product Development",
    description:
      "Discover our Digital Product Development services, including software solutions, mobile apps, and end-to-end project management.",
    url: "https://protondatalabs.com/services/dpdev",
    images: [
      {
        url: "/assets/slack/bi.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Product Development at Proton Datalabs",
      },
    ],
    siteName: "Proton Datalabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Product Development",
    description:
      "Explore our Digital Product Development services, including custom software, mobile app development, and project management.",
    images: ["/assets/slack/bi.jpg"],
  },
  alternates: {
    canonical: "https://protondatalabs.com/services/dpdev",
  },
  robots: "index, follow",
};

export default function DigitalProductDevelopmentPage() {
  return <DPIComponent />;
}