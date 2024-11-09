import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules:[
      {
        userAgent: "*", // Applies to all bots
        allow: ["/"], // Allow crawling the homepage
        disallow: ["/admin"], // Disallow crawling the admin page
      },
      {
        userAgent: "Googlebot",
        allow: ["/"], // Allow crawling the homepage
        disallow: ["/admin"], // Disallow crawling the admin page
      },
      {
        userAgent: "Bingbot",
        allow: ["/"], // Allow crawling the homepage
        disallow: ["/admin"], // Disallow crawling the admin page
      },
      {
        userAgent: "Yandex",
        allow: ["/"], // Allow crawling the homepage
        disallow: ["/admin"], // Disallow crawling the admin page
      },
      {
        userAgent: "Baiduspider",
        allow: ["/"], // Allow crawling the homepage
        disallow: ["/admin"], // Disallow crawling the admin page
      },
      {
        userAgent: "Twitterbot",
        allow: ["/"], // Allow crawling the homepage
        disallow: ["/admin"], // Disallow crawling the admin page
      },
      {
        userAgent: "Slurp",
        allow: ["/"], // Allow crawling the homepage
        disallow: ["/admin"], // Disallow crawling the admin page
      },
      {
        userAgent: "DuckDuckBot",
        allow: ["/"], // Allow crawling the homepage
        disallow: ["/admin"], // Disallow crawling the admin page
      },
      {
        userAgent: "BingPreview",
        allow: ["/"], // Allow crawling the homepage
        disallow: ["/admin"], // Disallow crawling the admin page
      },
      {
        userAgent: "Facebot",
        allow: ["/"], // Allow crawling the homepage
        disallow: ["/admin"], // Disallow crawling the admin page
      },
      {
        userAgent: "Slackbot",
        allow: ["/"], // Allow crawling the homepage
        disallow: ["/admin"], // Disallow crawling the admin page
      }
    ],
    sitemap: "https://protondatalabs.com/sitemap.xml",
  };
}