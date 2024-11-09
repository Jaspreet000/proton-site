// app/terms-and-conditions/page.tsx

import { Metadata } from "next";
import TermsComponent from "@/components/page_comps/Terms"; // Adjust path if needed
import React from "react";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Terms and Conditions | Proton Datalabs",
  description:
    "Read the official Terms and Conditions of Proton Datalabs LLC. These terms govern the use of our website, services, and consultation bookings. Stay informed and compliant.",
  keywords: [
    "Proton Datalabs Terms and Conditions",
    "Terms of Service",
    "User Agreement",
    "Legal",
    "Privacy Policy",
    "Website Use",
    "Consultation Terms",
  ],
  openGraph: {
    title: "Terms and Conditions | Proton Datalabs",
    description:
      "Learn about the Terms and Conditions for using the Proton Datalabs website, services, and booking consultations.",
    url: "https://protondatalabs.com/terms-and-conditions",
    siteName: "Proton Datalabs",
    images: [
      {
        url: "/assets/branding/terms.jpg",
        width: 1200,
        height: 630,
        alt: "Proton Datalabs Terms and Conditions",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Proton Datalabs",
    description:
      "Understand the Terms and Conditions for using Proton Datalabs services, booking consultations, and accessing the website.",
    images: ["/assets/branding/terms.jpg"],
  },
  alternates: {
    canonical: "https://protondatalabs.com/terms-and-conditions",
  },
  robots: "index, follow",
};

export default function TermsAndConditionsPage() {
  return <TermsComponent />;
}
