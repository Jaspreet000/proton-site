// app/blog/page.tsx

import BlogPage from "@/components/page_comps/Blogsp";
import { Metadata } from "next";

// Define the metadata for the blog page
export const metadata: Metadata = {
  title: "Our Latest Insights | Proton Datalabs Blog",
  description: "Explore expert blog articles on AI, Data Science, Business Intelligence, and more.",
  keywords: [
    "AI",
    "Data Science",
    "Business Intelligence",
    "Digital Products",
    "Machine Learning",
  ],
  openGraph: {
    title: "Our Latest Insights | Proton Datalabs Blog",
    description: "Stay informed with our expert blog articles on AI, data science, and business intelligence.",
    url: "https://www.protondatalabs.org/blogs",
    images: [
      {
        url: "/assets/slack/brain.jpg",
        alt: "Proton Datalabs Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Latest Insights | Proton Datalabs Blog",
    description: "Explore expert articles on AI, Data Science, and Business Intelligence from Proton Datalabs.",
    images: ["/assets/slack/brain.jpg"],
  },
};

export default function BlogPageWrapper() {
  return <BlogPage />;
}
