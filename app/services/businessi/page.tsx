// app/ai-machine-learning/page.tsx

import { Metadata } from "next";
import BIComponent from "@/components/page_comps/servic/business"; // Adjust path as needed
import React from "react";

// Metadata configuration for SEO optimization
export const metadata: Metadata = {
  title: "Business Intelligence Solutions",
  description:
    "Discover our Business Intelligence solutions tailored to transform raw data into actionable insights. We provide custom BI strategies, real-time analytics, and reporting dashboards to empower data-driven decision-making.",
  keywords: [
    "Business Intelligence",
    "BI Solutions",
    "Custom BI Dashboards",
    "Real-Time Analytics",
    "Data Visualization",
    "Business Reporting",
  ],
  openGraph: {
    title: "Business Intelligence Solutions",
    description:
      "Our BI solutions transform data into actionable insights for better decision-making. Discover custom BI dashboards, real-time analytics, and more.",
    url: "https://protondatalabs.org/services/businessi",
    images: [
      {
        url: "/assets/slack/graphs.jpg",
        width: 1200,
        height: 630,
        alt: "Graphs and data charts representing Business Intelligence at Proton Datalabs",
      },
    ],
    siteName: "Proton Datalabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Intelligence Solutions",
    description:
      "Transform data into insights with our Business Intelligence solutions. Discover custom BI dashboards, real-time analytics, and actionable reporting.",
    images: ["/assets/slack/graphs.jpg"],
  },
  alternates: {
    canonical: "https://protondatalabs.org/services/businessi",
  },
  robots: "index, follow",
};

export default function AI() {
  return <BIComponent />;
}
