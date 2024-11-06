import { Metadata } from "next";
import AIComponent from "@/components/page_comps/servic/aipage";

export const metadata: Metadata = {
  title: "AI & Machine Learning ",
  description:
    "Explore AI & Machine Learning services including customized enterprise LLMs, AI-driven business process automation, and advanced RAG-based solutions tailored to enhance your organization's efficiency.",
  keywords: [
    "AI",
    "Machine Learning",
    "Enterprise LLMs",
    "AI Business Automation",
    "RAG Solutions",
    "GPT-4",
    "LLaMA 2",
    "Data Analytics",
  ],
  openGraph: {
    title: "AI & Machine Learning",
    description:
      "Explore AI & Machine Learning services including customized enterprise LLMs, AI-driven business process automation, and advanced RAG-based solutions tailored to enhance your organization's efficiency.",
    url: "https://protondatalabs.org/services/ai",
    images: [
      {
        url: "/assets/slack/advance.jpg",
        width: 800,
        height: 600,
        alt: "AI & Machine Learning at Proton Datalabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Machine Learning",
    description:
      "Explore AI & Machine Learning services including customized enterprise LLMs, AI-driven business process automation, and advanced RAG-based solutions.",
    images: ["/assets/slack/advance.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://protondatalabs.org/services/ai",
  },
};

export default function AI() {
  return <AIComponent />;
}
