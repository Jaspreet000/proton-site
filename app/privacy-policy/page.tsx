// app/privacy-policy/page.tsx

import { Metadata } from "next";
import PrivComponent from "@/components/page_comps/Privacyp"; // Adjust path if needed
import React from "react";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Proton Datalabs collects, uses, and protects your personal information. This Privacy Policy provides details about data collection, usage, and your rights.",
  keywords: [
    "Proton Datalabs Privacy Policy",
    "Data Protection",
    "Privacy and Security",
    "User Data",
    "Data Collection",
    "User Privacy",
    "Personal Information",
  ],
  openGraph: {
    title: "Privacy Policy",
    description:
      "Understand Proton Datalabs' Privacy Policy and learn how we handle and protect your personal data when using our services.",
    url: "https://protondatalabs.com/privacy-policy",
    siteName: "Proton Datalabs",
    images: [
      {
        url: "/assets/branding/privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Proton Datalabs Privacy Policy",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description:
      "Review Proton Datalabs' Privacy Policy to understand our data collection practices, usage, and your privacy rights.",
    images: ["/assets/branding/privacy.jpg"],
  },
  alternates: {
    canonical: "https://protondatalabs.com/privacy-policy",
  },
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return <PrivComponent />;
}
