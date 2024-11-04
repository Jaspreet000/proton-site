"use client";
import React, { useRef, useState, useEffect } from "react";
import Layout from "@/components/main_comps/BlogLay";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useBlogContext } from "@/context/BlogContext";
import { useRouter } from "next/navigation";
import { usePageTimeTracking } from "@/hooks/usePageTimeTracking";

// Define a type for Blog data
type Blog = {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
};

const BlogPage: React.FC = () => {
  usePageTimeTracking("Blog Page");

  const stripHtmlTags = (html: string): string => html.replace(/<\/?[^>]+(>|$)/g, "");

  const { setSelectedBlog } = useBlogContext();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blogs");
        const data = await response.json();
        if (data.success) {
          const sortedBlogs = data.data.sort(
            (a: Blog, b: Blog) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setBlogs(sortedBlogs);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const blogSectionRef = useRef<HTMLDivElement | null>(null);

  const handleAddMore = () => router.push("/blog/manage");

  const handleBlogClick = (blog: Blog) => setSelectedBlog(blog);

  return (
    <Layout>
      <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 text-black py-24 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto text-center relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Latest Insights</h1>
          <p className="text-lg md:text-xl mb-10">
            Stay informed with our expert blog articles on AI, data science, and business intelligence.
          </p>
          <button
            onClick={handleAddMore}
            className="inline-block bg-blue-950 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-blue-900 transition duration-300 z-50 relative"
          >
            Manage Blogs
          </button>
        </motion.div>
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="/assets/slack/brain.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section ref={blogSectionRef} className="py-20 px-0 sm:px-6 md:px-6 lg:px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pr-0 pl-0">
          {(showAll ? blogs : currentBlogs).map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`} onClick={() => handleBlogClick(blog)}>
              <div className="cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full object-cover h-56"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                    {blog.title.length > 37 ? `${blog.title.substring(0, 37)}..` : blog.title}
                  </h3>
                  <p className="text-gray-700 text-justify dark:text-gray-400 mb-4">
                    {stripHtmlTags(blog.content).length > 120
                      ? `${stripHtmlTags(blog.content).substring(0, 120)}...`
                      : stripHtmlTags(blog.content)}
                  </p>
                  <span className="inline-block bg-blue-950 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-blue-900 transition duration-300">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full bg-gray-800 text-white font-semibold ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
              }`}
            >
              Previous
            </button>
            <span className="text-lg font-bold">Page {currentPage} of {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full bg-gray-800 text-white font-semibold ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default BlogPage;
