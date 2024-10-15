"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {Navbar} from "@/components/main_comps/Navbar";

interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
}

const DeleteBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data.data); // Assuming the response returns { success: true, data: [...] }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Handle blog deletion
  const handleDelete = async (title: string) => {
    const confirmed = confirm(`Are you sure you want to delete "${title}"?`);
    if (!confirmed) return; // Exit if the user cancels the confirmation

    try {
      const response = await fetch(`/api/blogs/${title}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Blog deleted successfully!");
        setBlogs((prevBlogs) =>
          prevBlogs.filter((blog) => blog.title !== title)
        );
      } else {
        const errorData = await response.json();
        alert(`Error deleting blog: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  return (
    <>
    <nav className="flex justify-center"> <Navbar/> </nav>
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                {blog.title}
              </h3>
              <p className="text-gray-700 text-justify dark:text-gray-400 flex-grow">
                {blog.description}
              </p>
              <button
                onClick={() => handleDelete(blog.title)}
                className="mt-4 w-[60%] mx-auto bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-red-800 transition duration-300"
              >
                Delete Blog
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
};

export default DeleteBlogs;
