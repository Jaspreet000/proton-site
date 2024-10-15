"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {Navbar} from "@/components/main_comps/Navbar";
import Lottie from "react-lottie"; 
import loadingAnimation from '@/public/loading.json';

const EditBlogs = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]); // Store all blogs
  const [selectedBlog, setSelectedBlog] = useState(null); // Store the selected blog to edit
  const [step, setStep] = useState(0); // Track the current step
  const [loading, setLoading] = useState(true);

  // Fetch all blogs from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data.data); // Assuming response returns { success: true, data: [...] }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Handle selecting a blog for editing
  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedBlog({ ...selectedBlog, [name]: value });
  };

  // Handle saving the edited blog
  const handleSave = async () => {
    try {
      const response = await fetch(`/api/blogs/${selectedBlog.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedBlog),
      });
  
      if (response.ok) {
        alert("Blog updated successfully!");
        setSelectedBlog(null); // Clear form after saving
        router.push("/blogs"); // Redirect to blogs list
      } else {
        alert("Error updating blog.");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };
  
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Lottie options={loadingOptions} height={200} width={200} />
      </div>
    );
  }

  if (selectedBlog) {
    // Render the multi-step form for editing the selected blog
    return (
      <>
      <nav className="flex justify-center"> <Navbar/> </nav>
      
      <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8 mt-11">
        <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-md">
          <div className="flex items-center mb-4">
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${((step + 1) / fields.length) * 100}%` }}
              />
            </div>
            <span className="ml-2 text-sm">
              Step {step + 1} of {fields.length}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            key={step}
          >
            <h2 className="text-2xl font-bold mb-4">{fields[step].label}</h2>
            {fields[step].type === "textarea" ? (
              <textarea
                name={fields[step].name}
                value={selectedBlog[fields[step].name]}
                onChange={handleChange}
                placeholder={fields[step].placeholder}
                className="w-full p-3 border rounded-md shadow-sm"
              />
            ) : (
              <input
                type={fields[step].type}
                name={fields[step].name}
                value={selectedBlog[fields[step].name]}
                onChange={handleChange}
                placeholder={fields[step].placeholder}
                className="w-full p-3 border rounded-md shadow-sm"
              />
            )}
          </motion.div>

          <div className="mt-6 flex justify-between">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
              >
                Previous
              </button>
            )}
            {step < fields.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      </div>
      </>
    );
  }

  // Render the blogs as cards with fixed dimensions
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
            className="cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            onClick={() => handleSelectBlog(blog)}
          >
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
              <p className="text-gray-700 text-justify dark:text-gray-400">
                {blog.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
};

const fields = [
  { label: "ID", name: "id", type: "text", placeholder: "Enter Blog ID" },
  { label: "Title", name: "title", type: "text", placeholder: "Enter Blog Title" },
  { label: "Description", name: "description", type: "textarea", placeholder: "Enter Description" },
  { label: "Image URL", name: "image", type: "text", placeholder: "Enter Image URL" },
  { label: "Link", name: "link", type: "text", placeholder: "Enter Link" },
  { label: "Content", name: "content", type: "textarea", placeholder: "Enter Content" },
  { label: "Author", name: "by", type: "text", placeholder: "Enter Author Name" },
  { label: "Author Description", name: "bydesc", type: "textarea", placeholder: "Enter Author Description" },
  { label: "Publication Date", name: "pubon", type: "date", placeholder: "Select Publication Date" },
];

export default EditBlogs;
