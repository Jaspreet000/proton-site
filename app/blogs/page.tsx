"use client";
import React, { useRef, useState, useEffect } from "react";
import Layout from "@/components/main_comps/BlogLay";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useBlogContext } from "@/context/BlogContext";
import { useRouter } from "next/navigation";
import Head from "next/head"; // Import Head for SEO

const BlogPage = () => {
  const { setSelectedBlog } = useBlogContext();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const blogsPerPage = 6;

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blogs");
        const data = await response.json();
        if (data.success) {
          setBlogs(data.data);
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
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const blogSectionRef = useRef<HTMLDivElement | null>(null);

  const handleaddMore = () => {
    router.push("/blog/add"); // Redirect to the add blog route
  };

  const handleBlogClick = (blog: any) => {
    setSelectedBlog(blog);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Our Latest Insights | Proton Datalabs Blog</title>
        <meta
          name="description"
          content="Explore expert blog articles on AI, Data Science, Business Intelligence, and more."
        />
        <meta
          name="keywords"
          content="AI, Data Science, Business Intelligence, Digital Products, Machine Learning"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.protondatalabs.org/blogs" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Our Latest Insights | Proton Datalabs Blog"
        />
        <meta
          property="og:description"
          content="Stay informed with our expert blog articles on AI, data science, and business intelligence."
        />
        <meta property="og:image" content="/assets/slack/brain.jpg" />
        <meta
          property="og:url"
          content="https://www.protondatalabs.org/blogs"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Latest Insights | Proton Datalabs Blog"
        />
        <meta
          name="twitter:description"
          content="Explore expert articles on AI, Data Science, and Business Intelligence from Proton Datalabs."
        />
        <meta name="twitter:image" content="/assets/slack/brain.jpg" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 text-black py-24 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto text-center relative z-10" // Set relative here for z-index to work
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Our Latest Insights
            </h1>
            <p className="text-lg md:text-xl mb-10">
              Stay informed with our expert blog articles on AI, data science,
              and business intelligence.
            </p>
            <button
              onClick={handleaddMore}
              className="inline-block bg-blue-950 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300 z-50 relative" // Ensure z-index applies
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

        {/* Blog Grid */}
        <section
          ref={blogSectionRef}
          className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {showAll
              ? blogs.map((blog: any) => (
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.id}`}
                    onClick={() => handleBlogClick(blog)}
                  >
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
                          {blog.title}
                        </h3>
                        <p className="text-gray-700 text-justify dark:text-gray-400 mb-4">
                          {blog.description}
                        </p>
                        <span className="inline-block bg-blue-950 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                          Read More
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              : currentBlogs.map((blog: any) => (
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.id}`}
                    onClick={() => handleBlogClick(blog)}
                  >
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
                          {blog.title}
                        </h3>
                        <p className="text-gray-700 text-justify dark:text-gray-400 mb-4">
                          {blog.description}
                        </p>
                        <span className="inline-block bg-blue-950 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                          Read More
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>

          {/* Pagination Controls */}
          {!showAll && (
            <div className="flex justify-between items-center mt-12">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full bg-gray-800 text-white font-semibold ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-600"
                }`}
              >
                Previous
              </button>
              <span className="text-lg font-bold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full bg-gray-800 text-white font-semibold ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-600"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
};

export default BlogPage;
