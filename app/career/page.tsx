// app/career/page.tsx
import CareerPage from "@/components/page_comps/CareerPage";

export const metadata = {
  title: "Careers at Proton DataLabs | Shape Your Future with Us",
  description:
    "Explore exciting career opportunities at Proton DataLabs. Join our team of AI, Data Science, and software engineering experts to shape the future of technology.",
  robots: "index, follow",
  openGraph: {
    title: "Careers at Proton DataLabs | Shape Your Future with Us",
    description:
      "Join Proton DataLabs and work at the forefront of AI, Data Science, and software engineering innovation. Explore open positions and apply now!",
    url: "https://protondatalabs.org/career",
    images: [
      {
        url: "/path-to-default-careers-image.jpg",
        width: 800,
        height: 600,
        alt: "Careers at Proton DataLabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Proton DataLabs | Shape Your Future with Us",
    description:
      "Explore exciting career opportunities at Proton DataLabs and be part of cutting-edge AI and Data Science innovation.",
    image: "/assets/slack/threepplmeet.jpg",
  },
  canonical: "https://protondatalabs.org/career",
};

export default function CareerPageWrapper() {
  return <CareerPage />;
}
