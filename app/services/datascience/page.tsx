import { Metadata } from "next";
import DIComponent from "@/components/page_comps/servic/datasci"; // Adjust path as needed
import React from "react";

// Metadata configuration for SEO optimization
export const metadata: Metadata = {
  title: "Data Science & Engineering",
  description:
    "Explore our Data Science & Engineering services. Specializing in predictive analytics, cloud services, and data pipelines that transform data into actionable insights.",
  keywords: [
    "Data Science",
    "Predictive Analytics",
    "Cloud Services",
    "Data Engineering",
    "Data Pipelines",
    "Machine Learning",
    "Big Data",
  ],
  openGraph: {
    title: "Data Science & Engineering",
    description:
      "Explore our Data Science & Engineering services. We specialize in predictive analytics, cloud services, and data pipeline solutions that transform raw data into actionable insights.",
    url: "https://protondatalabs.com/services/datascience",
    images: [
      {
        url: "/assets/slack/analysis.jpg",
        width: 1200,
        height: 630,
        alt: "Data Science & Engineering at Proton Datalabs",
      },
    ],
    siteName: "Proton Datalabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Science & Engineering",
    description:
      "Discover our Data Science & Engineering services, from predictive analytics to cloud solutions, designed to transform data into actionable insights.",
    images: ["/assets/slack/analysis.jpg"],
  },
  alternates: {
    canonical: "https://protondatalabs.com/services/datascience",
  },
  robots: "index, follow",
};

export default function AI() {
  return <DIComponent />;
}