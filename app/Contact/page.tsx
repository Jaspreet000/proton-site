
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import axios from "axios";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import Loading from "@/components/Loading";
import { set } from "mongoose";
import { Navbar } from "@/components/main_comps/Navbar";
import Head from "next/head";
import Script from "next/script";
import { usePageTimeTracking } from '@/hooks/usePageTimeTracking';
import GlobeDemo from "@/components/page_comps/Contactp";

export const metadata = {
  title: "Contact Us | Proton DataLabs",
  description:
    "Get in touch with Proton DataLabs for innovative AI and data science solutions. We’ll respond within 24-48 hours to help address your business challenges.",
  keywords:
    "Contact Proton DataLabs, AI solutions, data science, business inquiries, AI research, AI services",
  robots: "index, follow",
  openGraph: {
    title: "Contact Proton DataLabs",
    description:
      "Get in touch with Proton DataLabs for innovative AI and data science solutions. We’ll respond within 24-48 hours.",
    url: "https://www.protondatalabs.com/Contact",
    type: "website",
    images: [
      {
        url: "/assets/images/contact-us.jpg",
        width: 800,
        height: 600,
        alt: "Contact Proton DataLabs",
      },
    ],
  },
  canonical: "https://www.protondatalabs.com/Contact",
};

export default function GlobeDemoo() {


  return (
    <GlobeDemo />  
  );
      
}
