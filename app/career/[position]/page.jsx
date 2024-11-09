// career/[position]/page.tsx
import JobDescription from "@/components/page_comps/JobDescription";
import { Metadata } from "next";

export async function generateMetadata({ params }) {
  const positionsData = {
    "full-stack-engineer": {
      title: "Full-Stack Engineer/Architect",
      about: "Proton DataLabs is a leader in AI and Data Science...",
      location: "Remote",
    },
    "data-scientist": {
      title: "Data Scientist",
      about: "At Proton DataLabs, we are at the cutting edge of AI and data science...",
      location: "Remote",
    },
    "ai-researcher": {
      title: "AI Researcher",
      about: "Proton DataLabs is at the forefront of integrating artificial intelligence...",
      location: "Remote",
    },
  };

  const positionData = positionsData[params.position] || {
    title: "Job Position",
    about: "Learn more about our career opportunities.",
    location: "Various",
  };

  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return {
    title: `${positionData.title} in ${positionData.location}`,
    description: `Apply for the ${positionData.title} position at Proton Datalabs in ${positionData.location}. ${positionData.about}`,
    openGraph: {
      title: positionData.title,
      description: positionData.about,
      url: `https://protondatalabs.com/career/${params.position}`,
      images: [
        {
          url: images[0],
          width: 800,
          height: 600,
          alt: `${positionData.title} at Proto DataLabs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: positionData.title,
      description: positionData.about,
      image: images[0],
    },
    robots: "index, follow",
    canonical: `https://protondatalabs.com/career/${params.position}`,
  };
}

export default function JobDescriptionPageWrapper({ params }) {
  return <JobDescription params={params} />;
}
