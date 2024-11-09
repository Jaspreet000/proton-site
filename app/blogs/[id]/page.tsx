// app/blogs/[id]/page.js

import BlogDetail from "@/components/page_comps/BlogDetail";

export async function generateMetadata({ params }: { params: any }) {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs?id=${id}`);
  
  if (!res.ok) {
    console.error("Failed to fetch blog data for metadata");
    return {
      title: "Blog Not Found",
      description: "The blog post you are looking for could not be found.",
    };
  }

  const { data: blog } = await res.json();

  // Fallback for missing content to avoid errors
  const description = blog.content ? blog.content.substring(0, 160) : "Content is not available.";

  return {
    title: `${blog.title} | Proton Datalabs Blog`,
    description: `${description} - Read insightful articles on AI, Data Science, and Business Intelligence by ${blog.by}.`,
    keywords: `Proton Datalabs, AI blog, Data Science blog, Business Intelligence blog, technology articles, ${blog.by}`,
    openGraph: {
      title: blog.title,
      description,
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
      url: `https://protondatalabs.com/blogs/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: [blog.image],
    },
  };
}


export default function BlogPage() {
  return <BlogDetail />;
}
