"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa"; // React Icons
import {Navbar} from "@/components/main_comps/Navbar";

const ManageBlogs = () => {
  const router = useRouter();
  const { data: session, status } = useSession(); // Check session status
  const [loading, setLoading] = useState(true);

  // Check if user is authenticated, otherwise redirect to login
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); // Redirect to login page
    } else if (status === "authenticated") {
      setLoading(false); // Stop loader once authenticated
    }
  }, [status]);

  // Loading state
  if (loading || status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Checking authentication...</p>
      </div>
    );
  }

  // Handle click events for different actions
  const handleCreateBlog = () => router.push("/blog/add");
  const handleEditBlogs = () => router.push("/blog/edit");
  const handleDeleteBlogs = () => router.push("/blog/delete");

  // Main UI
  return (
    <>
    <nav className="flex justify-center"> <Navbar/> </nav>
    <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 text-black py-24 px-6 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
          Manage Your Blogs
        </h1>
        <p className="text-lg md:text-xl mb-16">
          Create, edit, or delete your blog posts easily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Create Blog */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transform transition duration-300 hover:shadow-2xl"
          >
            <FaPlus className="text-6xl text-blue-950 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Create Blog</h2>
            <p className="text-gray-600 mb-6">
              Start sharing your insights by creating a new blog post.
            </p>
            <button
              onClick={handleCreateBlog}
              className="bg-blue-950 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Create Blog
            </button>
          </motion.div>

          {/* Edit Blogs */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transform transition duration-300 hover:shadow-2xl"
          >
            <FaEdit className="text-6xl text-blue-950 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Edit Blogs</h2>
            <p className="text-gray-600 mb-6">
              Modify your existing blog posts with ease.
            </p>
            <button
              onClick={handleEditBlogs}
              className="bg-blue-950 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Edit Blogs
            </button>
          </motion.div>

          {/* Delete Blogs */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transform transition duration-300 hover:shadow-2xl"
          >
            <FaTrashAlt className="text-6xl text-blue-950 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Delete Blogs</h2>
            <p className="text-gray-600 mb-6">
              Remove outdated or unnecessary blog posts.
            </p>
            <button
              onClick={handleDeleteBlogs}
              className="bg-blue-950 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Delete Blogs
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
    </>
  );
};

export default ManageBlogs;
