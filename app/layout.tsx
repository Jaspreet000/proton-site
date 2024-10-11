import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { BlogProvider } from "@/context/BlogContext";
import { SessionProvider } from "next-auth/react";
import ClientProvider from "./ClientProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want to use
  style: ["normal", "italic"], // Specify styles (optional)
});

export const metadata: Metadata = {
  title:
    "Proton Datalabs | AI, Data Science, Cloud Solutions & Digital Product Development",
  description:
    "Proton Datalabs helps small and mid-sized businesses unlock growth and innovation with tailored AI, Data Science, Cloud Solutions, and Digital Product Development services.",
  keywords:
    "AI solutions, Data Science, Cloud Solutions, Digital Product Development, Business Intelligence, Machine Learning, Proton Datalabs, Proton Data Labs, Proton Data Labs AI services, Data-driven insights, Tech consulting, AI for business growth, Data engineering, AI and cloud integration, Custom AI models, Business Intelligence strategies, Digital transformation, AI and Data consulting, Machine Learning experts, Cloud consulting, BI tools, Business analytics, AI experts, Custom software development, AI and data services, Business growth through AI, Proton, Datalabs, Data Labs",

  openGraph: {
    title:
      "Proton Datalabs | AI, Data Science & Business Intelligence Solutions",
    description:
      "Innovative AI, Data Science, and Business Intelligence services provided by Proton Datalabs.",
    url: "https://protondatalabs.org",
    type: "website",
    images: [
      {
        url: "https://protondatalabs.org/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Proton Datalabs OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Proton Datalabs | AI, Data Science & Business Intelligence Solutions",
    description:
      "Proton Datalabs provides cutting-edge solutions for digital transformation.",
    images: [
      "https://protondatalabs.org/images/og-image.jpg", // Twitter image
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Add canonical URL for better SEO
  alternates: {
    canonical: "https://protondatalabs.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <BlogProvider>
          <ClientProvider>{children}</ClientProvider>
        </BlogProvider>
      </body>
    </html>
  );
}
