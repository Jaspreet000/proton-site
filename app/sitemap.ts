import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://protondatalabs.com";

  try {
    // Fetch all blogs to generate their URLs
    const response = await fetch(`${baseUrl}/api/blogs`);
    const data = await response.json();

    if (!data.success) {
      console.error("Failed to fetch blogs for sitemap");
      return [];
    }

    // Generate the base pages in the sitemap
    const sitemap = [
      { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/blogs`, lastModified: new Date().toISOString() },
    ];

    // Append each blog post to the sitemap
    const blogUrls = data.data.map((blog: { id: string; createdAt?: string }) => ({
      url: `${baseUrl}/blogs/${blog.id}`,
      lastModified: blog.createdAt ? new Date(blog.createdAt).toISOString() : new Date().toISOString(), // Use `createdAt` if available
    }));

    // Return the sitemap entries
    return [...sitemap, ...blogUrls];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
