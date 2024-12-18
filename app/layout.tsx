import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { BlogProvider } from "@/context/BlogContext";
import { SessionProvider } from "next-auth/react";
import ClientProvider from "./ClientProvider";
import Script from "next/script";
import React from "react";
import CookieConsentBanner from "@/components/main_comps/CookieConsentBanner";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want to use
  style: ["normal", "italic"], // Specify styles (optional)
});

export const metadata: Metadata = {
  title:{
    default: "Proton Datalabs | AI, Data Science, Cloud Solutions & Digital Product Development",
    template: "%s | Proton Datalabs",
  },
  description:
    "Proton Datalabs helps small and mid-sized businesses unlock growth and innovation with tailored AI, Data Science, Cloud Solutions, and Digital Product Development services.",
  keywords:
    "AI solutions, Data Science, Cloud Solutions, Digital Product Development, Business Intelligence, Machine Learning, Proton Datalabs, Proton Data Labs, Proton Data Labs AI services, Data-driven insights, Tech consulting, AI for business growth, Data engineering, AI and cloud integration, Custom AI models, Business Intelligence strategies, Digital transformation, AI and Data consulting, Machine Learning experts, Cloud consulting, BI tools, Business analytics, AI experts, Custom software development, AI and data services, Business growth through AI, Proton, Datalabs, Data Labs",
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Add canonical URL for better SEO
  alternates: {
    canonical: "https://protondatalabs.com",
  },
};
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className={roboto.className}>
      <CookieConsentBanner />
        <BlogProvider>
          <ClientProvider>{children}</ClientProvider>
        </BlogProvider>
      </body>
    </html>
  );
}
