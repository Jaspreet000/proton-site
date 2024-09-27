"use client"
import React, { useRef, useState } from 'react';
import Layout from '@/components/main_comps/BlogLay';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useBlogContext } from '@/context/BlogContext';
import { blogs } from '@/data/blogs'


const BlogPage = () => {
  const { setSelectedBlog } = useBlogContext();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showAll, setShowAll] = useState<boolean>(false);
  const blogsPerPage = 6;

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get current blogs based on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle next and previous page
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

  const handleExploreMore = (): void => {
    // Toggle the showAll state
    setShowAll((prev) => !prev);

    // Scroll down when showing all blogs
    if (!showAll && blogSectionRef.current) {
      window.scrollTo({
        top: blogSectionRef.current.offsetTop - 100, // Adjust the offset if needed
        behavior: "smooth",
      });
    }
  };

  // Set selected blog to context when clicking on it
  const handleBlogClick = (blog: any) => {
    setSelectedBlog(blog);
  };


  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 text-black py-24 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Our Latest Insights
          </h1>
          <p className="text-lg md:text-xl mb-10">
            Stay informed with our expert blog articles on AI, data science, and
            business intelligence.
          </p>
          <button
            onClick={handleExploreMore}
            className="inline-block bg-blue-950 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300"
          >
            {showAll ? "Explore Less" : "Explore More"}
          </button>
        </motion.div>
        <div className="absolute inset-0 opacity-10">
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

  );
};

export default BlogPage;
