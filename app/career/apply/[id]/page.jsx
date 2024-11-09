// career/apply/[id]/page.tsx
import ApplyPage from "@/components/page_comps/ApplyidPage";
import { Metadata } from "next";

export async function generateMetadata({ params }) {
  const { id: titleee } = params;
  const titlee = titleee.replace(/-/g, " ");

  return {
    title: `Apply for ${titlee}`,
    description: `Submit your application for the ${titlee} position at YourCompany. Upload your resume, fill in your details, and tell us why you're a great fit for the role!`,
    openGraph: {
      title: `Apply for ${titlee} | YourCompany`,
      description: `Apply for the ${titlee} position at YourCompany. Submit your resume and motivations now!`,
      url: `https://protondatalabs.com/apply/${titleee}`,
      images: [
        {
          url: "/path-to-default-job-apply-image.jpg",
          width: 800,
          height: 600,
          alt: `Apply for ${titlee} at YourCompany`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Apply for ${titlee}`,
      description: `Submit your application for the ${titlee} position at YourCompany.`,
      image: "/path-to-default-job-apply-image.jpg",
    },
    robots: "index, follow",
    canonical: `https://protondatalabs.com/apply/${titleee}`,
  };
}

export default function ApplyPageWrapper({ params }) {
  return <ApplyPage params={params} />;
}
